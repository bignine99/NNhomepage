# ninetynine99.co.kr 도메인 배포 빠른 가이드

## 🚨 중요: 서버 정보가 필요합니다

도메인 `ninetynine99.co.kr`에 배포하려면 다음 정보가 필요합니다:

### 필수 정보
1. **호스팅 업체**: 가비아 / 후이즈 / 카페24 / 닷홈 / 기타?
2. **호스팅 타입**: 
   - 공유 호스팅 (cPanel 등)
   - VPS/서버
   - 클라우드 서버
3. **Node.js 지원 여부**: 예 / 아니오
4. **서버 접근 방법**: 
   - SSH 접근 가능?
   - FTP/SFTP 접근 가능?
   - 웹 관리 도구만 가능?

## 📋 현재 프로젝트 준비 상태

✅ **준비 완료:**
- Next.js 프로젝트 빌드 가능
- GitHub에 업로드 완료: https://github.com/bignine99/NNhomepage
- 포트 설정: 환경 변수로 설정 가능 (기본 3000)

## 🔧 일반적인 배포 방법

### 방법 1: Node.js 지원 호스팅 (권장)

대부분의 호스팅 업체는 Node.js 앱 배포 기능을 제공합니다.

#### Step 1: 호스팅 업체 관리 페이지에서
1. "Node.js 앱" 또는 "애플리케이션" 메뉴 찾기
2. 새 앱 생성
3. GitHub 리포지토리 연결: `bignine99/NNhomepage`
4. 빌드 명령어: `npm run build`
5. 시작 명령어: `npm start`
6. 포트: 자동 할당 또는 3000

#### Step 2: 환경 변수 설정
호스팅 업체 관리 페이지에서 환경 변수 추가:
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

#### Step 3: 도메인 연결
1. 호스팅 업체에서 도메인 연결 설정
2. DNS 레코드 확인:
   - **A 레코드**: `@` → 호스팅 업체가 제공한 IP 주소
   - 또는 **CNAME**: `@` → 호스팅 업체가 제공한 CNAME 값

### 방법 2: VPS/서버 직접 배포

서버에 SSH 접근이 가능한 경우:

```bash
# 1. 서버에 접속
ssh user@your-server-ip

# 2. Node.js 설치 (없는 경우)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. 프로젝트 클론
git clone https://github.com/bignine99/NNhomepage.git
cd NNhomepage

# 4. 의존성 설치 및 빌드
npm install
npm run build

# 5. 환경 변수 설정
nano .env.production
# (환경 변수 입력)

# 6. PM2 설치 및 실행
sudo npm install -g pm2
pm2 start npm --name "nn-homepage" -- start
pm2 startup
pm2 save

# 7. Nginx 설정 (포트 80/443 → 3000 프록시)
# (Nginx 설정 파일 필요)
```

### 방법 3: Docker 사용

서버에 Docker가 설치되어 있는 경우:

```bash
# Dockerfile과 docker-compose.yml 필요
# (제공 가능)
```

## 🎯 다음 단계

**지금 필요한 정보:**
1. 어떤 호스팅 업체를 사용하시나요?
2. 호스팅 관리 페이지에 "Node.js" 또는 "애플리케이션" 메뉴가 있나요?
3. 서버에 직접 접근(SSH)이 가능한가요?

이 정보를 주시면 정확한 배포 가이드를 제공하겠습니다!

## 📞 호스팅 업체별 가이드

### 가비아
- Node.js 호스팅 서비스 제공
- 관리 페이지 → 호스팅 → Node.js 앱

### 후이즈
- Node.js 지원 확인 필요
- 관리 페이지 → 애플리케이션

### 카페24
- Node.js 호스팅 별도 상품
- 관리 페이지 확인 필요

### 닷홈
- Node.js 지원 확인 필요
- 관리 페이지 확인 필요

---

**지금 알려주세요:**
1. 호스팅 업체 이름
2. 관리 페이지에 어떤 메뉴들이 있는지
3. Node.js 관련 메뉴가 있는지

이 정보만 있으면 바로 배포할 수 있습니다! 🚀

