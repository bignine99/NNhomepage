# 가비아 호스팅 배포 단계별 가이드

## 🎯 목표
가비아 리눅스 웹호스팅 서버에 Next.js 프로젝트 배포

## 📋 배포 전 확인사항

### 1. 서버 접근 정보 필요
다음 정보를 알려주세요:

**FTP 정보:**
- FTP 호스트: `xxx.gabia.io` 또는 IP 주소
- FTP 사용자명: 
- FTP 비밀번호:
- FTP 포트: (보통 21)

**SSH 정보 (가능한 경우):**
- SSH 호스트:
- SSH 사용자명:
- SSH 포트: (보통 22)

### 2. 이전 프로젝트 정보 (참고)
- 이전 프로젝트 경로: `/home/사용자명/프로젝트명` 또는 다른 경로?
- 사용 포트: 3000? 다른 포트?
- 실행 방법: PM2? 직접 실행? systemd?

## 🚀 배포 방법 선택

### 방법 A: SSH 접근 가능한 경우 (가장 쉬움)

#### Step 1: 로컬에서 빌드
```bash
npm run build
```

#### Step 2: Git을 통한 배포
```bash
# 서버에 SSH 접속
ssh 사용자명@호스트주소

# 프로젝트 디렉토리로 이동
cd /홈디렉토리/또는/원하는경로

# Git 클론 (또는 기존 프로젝트 업데이트)
git clone https://github.com/bignine99/NNhomepage.git
# 또는
cd 기존프로젝트경로
git pull origin main

# 의존성 설치
npm install

# 빌드
npm run build

# 환경 변수 설정
nano .env.production
# (환경 변수 입력)

# PM2로 실행 (또는 직접 실행)
pm2 start npm --name "nn-homepage" -- start
pm2 save
```

### 방법 B: FTP만 가능한 경우

#### Step 1: 로컬에서 빌드 및 패키징
```bash
# 빌드
npm run build

# 프로덕션 의존성만 설치 (선택사항)
npm install --production
```

#### Step 2: FTP로 파일 업로드
필요한 파일/폴더:
- `.next/` 폴더 전체
- `public/` 폴더 (있다면)
- `package.json`
- `package-lock.json`
- `node_modules/` (또는 서버에서 설치)
- `.env.production` (환경 변수)

#### Step 3: 서버에서 실행
가비아 관리 도구를 통해:
- Node.js 앱 실행
- 또는 SSH 접근 후 `npm start`

## 📝 환경 변수 설정

서버에 `.env.production` 파일 생성:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=본인@gmail.com
SMTP_PASS=앱비밀번호
SMTP_FROM="NINETYNINE Homepage" <본인@gmail.com>
CONTACT_TO=bignine99@gmail.com
PORT=3000
```

## 🔧 포트 설정

가비아 호스팅에서 사용 가능한 포트를 확인하고, `package.json`의 `start` 스크립트가 올바른 포트를 사용하는지 확인하세요.

현재 설정: `PORT` 환경 변수 사용 (기본값 3000)

## 📞 지금 필요한 정보

**다음 정보를 알려주시면 정확한 배포 스크립트를 작성해드리겠습니다:**

1. **FTP 접근 정보**
   - FTP 호스트 주소
   - FTP 사용자명
   - FTP 비밀번호

2. **SSH 접근 가능 여부**
   - 가능하다면 SSH 접근 정보
   - 불가능하다면 FTP만 사용

3. **이전 프로젝트 정보**
   - 프로젝트 경로
   - 사용 포트
   - 실행 방법

4. **가비아 관리 페이지**
   - "Node.js" 또는 "애플리케이션" 메뉴가 있는지
   - 포트 할당 방법

이 정보를 주시면 바로 배포할 수 있습니다! 🚀

