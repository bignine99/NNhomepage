# 가비아 호스팅 Node.js 배포 가이드

## 🎯 목표
가비아 리눅스 웹호스팅 서버에 Next.js 프로젝트 배포

## 📋 필요한 정보

가비아 호스팅 관리 페이지에서 다음 정보를 확인해주세요:

### 1. 서버 접근 정보
- **FTP 접근 정보**:
  - FTP 호스트: `xxx.gabia.io` 또는 IP 주소
  - FTP 사용자명: 
  - FTP 비밀번호:
  - FTP 포트: (보통 21)

- **SSH 접근 정보** (가능한 경우):
  - SSH 호스트: 
  - SSH 사용자명:
  - SSH 포트: (보통 22)

### 2. Node.js 환경 확인
가비아 관리 페이지에서:
- **Node.js 버전**: (예: v18.x, v20.x)
- **Node.js 설치 경로**: (예: `/usr/bin/node` 또는 `~/.nvm/versions/node/...`)
- **npm 경로**: (예: `/usr/bin/npm`)

### 3. 이전 프로젝트 정보 (참고용)
- 이전 프로젝트가 어떤 디렉토리에 있었는지
- 어떤 포트에서 실행되었는지
- 어떤 방식으로 실행했는지 (PM2, systemd, 직접 실행 등)

## 🚀 배포 방법

### 방법 1: FTP를 통한 배포

#### Step 1: 프로젝트 빌드
```bash
# 로컬에서 빌드
npm run build
```

#### Step 2: FTP로 파일 업로드
필요한 파일들:
- `.next/` 폴더 전체
- `public/` 폴더 (있다면)
- `package.json`
- `package-lock.json`
- `node_modules/` (또는 서버에서 `npm install --production`)
- `.env.production` (환경 변수 파일)

#### Step 3: 서버에서 실행
SSH 접근이 가능하면:
```bash
cd /경로/프로젝트
npm install --production
npm start
```

### 방법 2: Git을 통한 배포 (SSH 접근 가능한 경우)

#### Step 1: 서버에 Git 설치 확인
```bash
git --version
```

#### Step 2: 프로젝트 클론
```bash
cd /홈디렉토리/또는/원하는경로
git clone https://github.com/bignine99/NNhomepage.git
cd NNhomepage
```

#### Step 3: 의존성 설치 및 빌드
```bash
npm install
npm run build
```

#### Step 4: 환경 변수 설정
```bash
nano .env.production
```

내용:
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

#### Step 5: 프로세스 매니저로 실행

**PM2 사용 (권장):**
```bash
# PM2 설치 (없는 경우)
npm install -g pm2

# 프로세스 시작
pm2 start npm --name "nn-homepage" -- start

# 자동 시작 설정
pm2 startup
pm2 save

# 상태 확인
pm2 list
pm2 logs nn-homepage
```

**또는 직접 실행:**
```bash
nohup npm start > output.log 2>&1 &
```

### 방법 3: 가비아 관리 도구 사용

가비아 호스팅 관리 페이지에 "Node.js 앱" 또는 "애플리케이션" 메뉴가 있다면:
1. 새 Node.js 앱 생성
2. GitHub 리포지토리 연결: `bignine99/NNhomepage`
3. 빌드 명령어: `npm run build`
4. 시작 명령어: `npm start`
5. 포트: 3000 (또는 할당된 포트)
6. 환경 변수 설정

## 🔧 포트 및 프록시 설정

### 포트 확인
가비아 호스팅에서 Node.js 앱이 사용할 수 있는 포트를 확인해야 합니다.
- 일반적으로: 3000, 3001, 8080 등
- 가비아 관리 페이지에서 확인 가능

### Nginx/Apache 프록시 설정 (필요한 경우)

가비아 호스팅이 Nginx나 Apache를 사용한다면, 도메인 루트(`/`)를 Node.js 앱으로 프록시해야 합니다.

**가비아 관리 페이지에서:**
- "도메인 연결" 또는 "웹 설정" 메뉴 확인
- 프록시 설정 옵션 확인

또는 `.htaccess` 파일 (Apache 사용 시):
```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

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

## 🔍 문제 해결

### Node.js 버전 확인
```bash
node --version
npm --version
```

### 포트 사용 확인
```bash
netstat -tulpn | grep :3000
# 또는
lsof -i :3000
```

### 프로세스 확인
```bash
ps aux | grep node
```

## 📞 다음 단계

**지금 필요한 정보:**

1. **FTP 접근 정보**
   - FTP 호스트 주소
   - FTP 사용자명
   - FTP 비밀번호

2. **SSH 접근 가능 여부**
   - 가능하다면 SSH 접근 정보
   - 불가능하다면 FTP만 사용

3. **이전 프로젝트 정보**
   - 어떤 디렉토리에 있었는지
   - 어떤 포트에서 실행되었는지

4. **가비아 관리 페이지 확인**
   - "Node.js" 관련 메뉴가 있는지
   - "애플리케이션" 메뉴가 있는지
   - 포트 할당 방법

이 정보를 주시면 정확한 배포 스크립트를 작성해드리겠습니다!

