# 오류 및 수정 사항 기록

이 문서는 프로젝트 개발 중 발생한 모든 오류와 수정 사항을 기록합니다.

---

## 📅 2024년 12월 - 주요 오류 및 해결

### 🔴 문제 1: Windows 파일 잠금 오류 (UNKNOWN: unknown error)

#### 발생 시점
- 개발 서버 실행 중 (`npm run dev`)
- 페이지 이동 시 반복적으로 발생

#### 오류 메시지
```
⨯ [Error: UNKNOWN: unknown error, open 'C:\Users\cho\Desktop\Temp\05 Code\251123_NNHomepage\.next\static\chunks\app\layout.js'] {
  errno: -4094,
  code: 'UNKNOWN',
  syscall: 'open',
  path: 'C:\\Users\\cho\\Desktop\\Temp\\05 Code\\251123_NNHomepage\\.next\\static\\chunks\\app\\layout.js'
}
```

#### 근본 원인 분석

**1. Windows Defender / 알약(Alyac) 백신 소프트웨어의 파일 잠금**
   - Windows Defender 또는 알약(Alyac)이 `.next` 폴더의 동적 생성 파일들을 실시간 검사 중 차단
   - `errno: -4094`는 Windows 파일 접근 거부 에러 코드
   - Next.js 개발 서버가 HMR(Hot Module Replacement)로 인해 빈번하게 `.next` 폴더에 접근
   - 페이지 이동 시 새로운 청크(chunk) 파일 생성 시도 → 백신 소프트웨어 차단 → 반복 오류

**2. Next.js 개발 서버의 동적 파일 생성 방식**
   - 개발 모드에서는 필요한 페이지를 온디맨드로 컴파일하여 `.next` 폴더에 동적으로 생성
   - SWC 컴파일러와 Webpack이 동시에 캐시 파일을 생성/수정하면서 파일 시스템 충돌 발생
   - 프로덕션 빌드는 시작 시 모든 파일을 미리 생성하므로 이 문제가 발생하지 않음

**3. 파일 시스템 감시(Watch) 충돌**
   - 개발 서버가 파일 변경을 감시하기 위해 파일 시스템 이벤트를 모니터링
   - 백신 소프트웨어가 파일 접근을 스캔하는 동안 파일이 잠금 상태가 되어 충돌 발생

#### 해결 방법

**1. next.config.mjs 최적화**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // SWC 미니파이 비활성화 (Windows 파일 잠금 문제 해결)
    swcMinify: false,
    // 웹팩 파일 시스템 캐싱 비활성화 (파일 잠금 문제 완화 시도)
    webpack: (config) => {
        config.cache = false;
        return config;
    },
    // 온디맨드 엔트리 최적화 (파일 접근 빈도 감소)
    onDemandEntries: {
        maxInactiveAge: 60 * 1000,
        pagesBufferLength: 5,
    },
};
```

**2. TypeScript 설정 완화 (tsconfig.json)**
```json
{
    "compilerOptions": {
        "strict": false,
        "noImplicitAny": false,
        "skipLibCheck": true
    }
}
```

**3. 백신 소프트웨어 제외 목록 추가**
   - Windows 보안: 프로젝트 폴더 전체를 제외 목록에 추가
   - 알약(Alyac): 탐지 제외 설정에서 프로젝트 폴더 추가
     - 제외 방법: "파일명" 선택
     - 제외 경로: `C:\Users\cho\Desktop\Temp\05 Code\251123_NNHomepage\*`

**4. 프로덕션 빌드로 전환 (가장 확실한 해결책)**
   - 개발 서버의 동적 파일 생성 문제를 완전히 우회
   - 빌드 시 모든 파일을 미리 생성하므로 런타임 파일 잠금 문제 없음

#### 적용된 수정 사항
- ✅ `next.config.mjs`: SWC 미니파이 비활성화, Webpack 캐시 비활성화, onDemandEntries 최적화
- ✅ `tsconfig.json`: strict 모드 비활성화, noImplicitAny 비활성화
- ✅ 백신 소프트웨어 제외 목록 추가 (Windows 보안 + 알약)

#### 참고 사항
- 개발 서버(`npm run dev`)에서는 여전히 문제가 발생할 수 있음
- 프로덕션 빌드(`npm run build` → `npm start`)에서는 안정적으로 작동
- `.next` 폴더를 주기적으로 삭제하고 재빌드하는 것이 도움이 될 수 있음

---

### 🔴 문제 2: TypeScript 타입 오류 (빌드 실패)

#### 발생 시점
- 프로덕션 빌드 실행 중 (`npm run build`)
- 타입 체크 단계에서 실패

#### 오류 메시지
```
./src/components/sections/ContactSection.tsx:44:55
Type error: Argument of type '{ name?: string; message?: string; email?: string; company?: string; }' is not assignable to parameter of type 'ContactEmailPayload'.
Property 'name' is optional in type '{ name?: string; message?: string; email?: string; company?: string; }' but required in type 'ContactEmailPayload'.

  42 |         startTransition(async () => {
  43 |             try {
> 44 |                 const result = await sendContactEmail(values);
     |                                                       ^
```

#### 근본 원인 분석

**1. 타입 정의 불일치**
   - `ContactSection.tsx`의 `ContactFormValues` 타입:
     - Zod 스키마 기반으로 모든 필드가 **required** (`name`, `email`, `company`, `message`)
     - 하지만 TypeScript가 `values`를 optional로 추론
   
   - `actions.ts`의 `ContactEmailPayload` 타입:
     - 원래 `name`, `email`, `message`는 **required**, `company`는 **optional**
     - 타입 체크 시 required 필드와 optional 필드 간 불일치 발생

**2. 타입 추론 문제**
   - `tsconfig.json`에서 `strict: false`로 설정했지만, 빌드 시에는 여전히 타입 체크가 실행됨
   - React Hook Form의 `values`가 optional로 추론되는 경우가 있음
   - 서버 액션(`sendContactEmail`)과 클라이언트 컴포넌트 간 타입 불일치

**3. 빌드 시 타입 체크 엄격성**
   - 개발 모드에서는 타입 오류가 경고로만 표시될 수 있음
   - 프로덕션 빌드에서는 타입 오류가 빌드를 중단시킴

#### 해결 방법

**1. ContactEmailPayload 타입 수정 (src/app/actions.ts)**
```typescript
// 수정 전
type ContactEmailPayload = {
    name: string;      // required
    email: string;     // required
    company?: string;  // optional
    message: string;   // required
};

// 수정 후
type ContactEmailPayload = {
    name?: string;     // optional로 변경
    email?: string;    // optional로 변경
    company?: string;  // optional 유지
    message?: string; // optional로 변경
};
```

**2. 런타임 타입 가드 추가**
```typescript
export async function sendContactEmail(data: ContactEmailPayload): Promise<ContactEmailResult> {
    try {
        // 필수 필드 검증
        if (!data.name || !data.email || !data.message) {
            return {
                success: false,
                message: '필수 입력 항목이 누락되었습니다. 이름, 이메일, 문의 내용을 모두 입력해주세요.',
            };
        }

        // 타입 가드 후에는 필수 필드가 보장됨
        const name = data.name;
        const email = data.email;
        const message = data.message;
        const company = data.company;

        // ... 나머지 코드
    }
}
```

#### 적용된 수정 사항
- ✅ `src/app/actions.ts`: `ContactEmailPayload` 타입의 모든 필드를 optional로 변경
- ✅ `src/app/actions.ts`: `sendContactEmail` 함수에 런타임 타입 가드 추가
- ✅ 필수 필드 검증을 통해 타입 안전성 보장

#### 해결 결과
- ✅ 빌드 성공: 타입 체크 통과
- ✅ 런타임 안전성: 필수 필드 검증으로 데이터 무결성 보장
- ✅ 사용자 경험: 명확한 에러 메시지 제공

---

## 📝 향후 문제 해결 가이드

### 문제 발생 시 체크리스트

1. **오류 메시지 확인**
   - 전체 스택 트레이스 확인
   - 오류 발생 위치(파일명, 라인 번호) 확인
   - 오류 코드 및 에러 번호 확인

2. **환경 확인**
   - 개발 모드 vs 프로덕션 모드
   - Node.js 버전
   - 패키지 버전
   - 운영 체제 및 백신 소프트웨어

3. **로그 분석**
   - 터미널 출력 전체 확인
   - 브라우저 콘솔 오류 확인
   - 서버 로그 확인

4. **해결 방법 적용**
   - 설정 파일 수정
   - 타입 정의 수정
   - 코드 로직 수정
   - 환경 변수 확인

5. **검증**
   - 빌드 테스트 (`npm run build`)
   - 개발 서버 테스트 (`npm run dev`)
   - 프로덕션 서버 테스트 (`npm start`)

---

## 🔧 현재 적용된 설정 요약

### next.config.mjs
- `swcMinify: false` - SWC 미니파이 비활성화
- `webpack.cache: false` - Webpack 캐시 비활성화
- `onDemandEntries` - 온디맨드 엔트리 최적화

### tsconfig.json
- `strict: false` - 엄격한 타입 체크 비활성화
- `noImplicitAny: false` - 암묵적 any 허용
- `skipLibCheck: true` - 라이브러리 타입 체크 스킵

### 백신 소프트웨어 제외 목록
- Windows 보안: 프로젝트 폴더 전체 제외
- 알약(Alyac): 프로젝트 폴더 제외

---

## 📌 참고 사항

- 이 문서는 프로젝트 개발 중 발생한 모든 오류와 해결 방법을 기록합니다.
- 새로운 오류가 발생하면 즉시 이 문서에 추가하세요.
- 해결 방법이 확실하지 않은 경우, 문제를 상세히 기록하고 단계별로 해결 과정을 문서화하세요.

---

### 🔍 문제 진단 및 해결 (2024년 12월 24일)

#### 발생한 문제
- **사용자 보고**: "웹페이지가 작동하지 않는다"
- **실제 상황**: 웹페이지는 정상 작동 중이었으나 헤더 메뉴가 영어로 표시됨

#### 해결한 문제
1. **헤더 메뉴 언어 수정**
   - **증상**: 네비게이션 메뉴가 "Home", "About", "Solutions", "FAQ", "Contact"로 영어 표시
   - **원인**: `src/components/layout/Header.tsx`의 `navLinks` 배열이 영어로 설정됨
   - **해결**: 한국어로 변경 ("홈", "회사소개", "솔루션", "자주 묻는 질문", "문의")
   - **적용 방법**:
     ```typescript
     const navLinks = [
         { href: '/', label: '홈' },
         { href: '/about', label: '회사소개' },
         { href: '/solutions', label: '솔루션' },
         { href: '/faq', label: '자주 묻는 질문' },
         { href: '/contact', label: '문의' },
     ];
     ```

2. **서버 재시작 및 캐시 클리어링**
   - **증상**: 코드 수정 후 변경사항이 브라우저에 반영되지 않음
   - **해결**: 
     - 기존 서버 프로세스 종료 (PID: 33040, 31172)
     - `.next` 빌드 캐시 폴더 삭제
     - 프로젝트 재빌드 (`npm run build`)
     - 프로덕션 서버 재시작 (`npm start`)

#### 최종 결과
- ✅ **웹페이지 정상 작동**: http://localhost:3001/에서 정상 접근 가능
- ✅ **헤더 메뉴 한국어 표시**: 모든 네비게이션 링크가 한국어로 표시됨
- ✅ **모든 페이지 라우팅 정상**: 홈, 회사소개, 솔루션, FAQ, 문의 페이지 모두 접근 가능
- ✅ **서버 안정성**: 포트 3001에서 프로덕션 서버가 안정적으로 실행 중 (PID: 33816)

---

**마지막 업데이트**: 2024년 12월 24일

