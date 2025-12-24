# Vercel 배포 및 도메인 연결 가이드

## 🎯 목표
`ninetynine99.co.kr` 도메인에 웹사이트를 연결하기

## 📋 사전 준비사항
1. Vercel 계정 (https://vercel.com)
2. GitHub 리포지토리: https://github.com/bignine99/NNhomepage
3. 도메인: ninetynine99.co.kr

## 🚀 배포 방법 (2가지)

### 방법 1: Vercel 웹 대시보드 사용 (권장)

#### Step 1: Vercel에 프로젝트 가져오기
1. https://vercel.com 에 로그인
2. "Add New..." → "Project" 클릭
3. "Import Git Repository" 선택
4. GitHub 리포지토리 `bignine99/NNhomepage` 선택
5. "Import" 클릭

#### Step 2: 프로젝트 설정
- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `.next` (기본값)
- **Install Command**: `npm install` (기본값)

#### Step 3: 환경 변수 설정
`.env.local` 파일의 내용을 Vercel 환경 변수로 추가:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=본인@gmail.com
SMTP_PASS=앱비밀번호
SMTP_FROM="NINETYNINE Homepage" <본인@gmail.com>
CONTACT_TO=bignine99@gmail.com
```

**설정 방법:**
- 프로젝트 설정 → "Environment Variables" 탭
- 각 변수를 개별적으로 추가
- Environment: Production, Preview, Development 모두 선택

#### Step 4: 배포 실행
- "Deploy" 버튼 클릭
- 배포 완료까지 대기 (약 2-3분)

#### Step 5: 도메인 연결
1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Domains" 탭
3. "Add Domain" 클릭
4. `ninetynine99.co.kr` 입력
5. "Add" 클릭

#### Step 6: DNS 레코드 설정
Vercel이 제공하는 DNS 레코드를 도메인 관리 페이지에 추가:

**A 레코드 또는 CNAME 레코드:**
- Vercel이 제공하는 레코드 타입에 따라:
  - **A 레코드**: `@` → `76.76.21.21` (Vercel IP)
  - **CNAME 레코드**: `@` → `cname.vercel-dns.com` 또는 Vercel이 제공하는 값

**www 서브도메인 (선택사항):**
- **CNAME 레코드**: `www` → `cname.vercel-dns.com`

**설정 위치:**
- 현재 보신 DNS 설정 페이지에서
- "DNS 설정" → "레코드 추가" 또는 "수정"
- Vercel이 제공하는 정확한 값을 입력

#### Step 7: DNS 전파 대기
- DNS 변경사항이 전 세계에 전파되는데 24-48시간 소요
- 보통 몇 분에서 몇 시간 내에 반영됨
- https://dnschecker.org 에서 전파 상태 확인 가능

### 방법 2: Vercel CLI 사용

#### Step 1: Vercel CLI 설치
```bash
npm install -g vercel
```

#### Step 2: Vercel 로그인
```bash
vercel login
```

#### Step 3: 프로젝트 배포
```bash
vercel
```

#### Step 4: 프로덕션 배포
```bash
vercel --prod
```

#### Step 5: 도메인 연결
```bash
vercel domains add ninetynine99.co.kr
```

## 🔍 문제 해결

### 문제 1: "아무것도 안나온다"
**원인:**
- DNS 레코드가 아직 설정되지 않음
- DNS 전파가 완료되지 않음
- Vercel 배포가 완료되지 않음

**해결:**
1. Vercel 배포 상태 확인: Vercel 대시보드에서 "Deployments" 탭 확인
2. DNS 레코드 확인: 도메인 관리 페이지에서 Vercel이 제공한 레코드가 정확히 입력되었는지 확인
3. DNS 전파 확인: https://dnschecker.org 에서 `ninetynine99.co.kr` 조회

### 문제 2: "DNS 레코드가 맞지 않는다"
**해결:**
- Vercel 대시보드의 "Domains" 섹션에서 정확한 DNS 레코드를 확인
- 도메인 제공업체에 따라 A 레코드 또는 CNAME 레코드를 사용
- Vercel은 보통 CNAME을 권장

### 문제 3: "환경 변수가 작동하지 않는다"
**해결:**
- Vercel 환경 변수가 Production, Preview, Development 모두에 설정되었는지 확인
- 환경 변수 이름이 정확한지 확인 (대소문자 구분)
- 배포 후 재배포 필요할 수 있음

## 📝 확인 체크리스트

- [ ] Vercel 계정 생성 완료
- [ ] GitHub 리포지토리 연결 완료
- [ ] Vercel 배포 성공 (초록색 체크 표시)
- [ ] 환경 변수 설정 완료
- [ ] 도메인 추가 완료 (Vercel 대시보드)
- [ ] DNS 레코드 설정 완료 (도메인 관리 페이지)
- [ ] DNS 전파 완료 (24-48시간 소요)

## 🎉 완료 후 확인
배포 완료 후 다음 URL에서 확인:
- Vercel 제공 URL: `https://[프로젝트명].vercel.app`
- 커스텀 도메인: `https://ninetynine99.co.kr`

## 📞 추가 도움이 필요한 경우
- Vercel 문서: https://vercel.com/docs
- DNS 설정 가이드: https://vercel.com/docs/concepts/projects/domains

