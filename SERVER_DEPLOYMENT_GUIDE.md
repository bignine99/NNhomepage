# ninetynine99.co.kr 도메인 서버 배포 가이드

## 🎯 목표
`ninetynine99.co.kr` 도메인에 Next.js 웹사이트를 직접 배포하기

## 📋 필요한 정보 확인

### 1. 서버 환경 확인 필요
다음 중 어떤 환경인지 알려주세요:
- [ ] VPS (Virtual Private Server) - 예: AWS EC2, DigitalOcean, Linode 등
- [ ] 공유 호스팅 (Shared Hosting) - 예: cPanel 기반 호스팅
- [ ] 클라우드 서버 - 예: AWS, Azure, GCP
- [ ] 기타 (구체적으로 알려주세요)

### 2. 서버 접근 정보 필요
- **서버 IP 주소**: `xxx.xxx.xxx.xxx`
- **SSH 접근 가능 여부**: 예/아니오
- **포트 정보**: SSH 포트, 웹 서버 포트 등
- **운영체제**: Linux (Ubuntu/CentOS) / Windows Server

### 3. 현재 DNS 설정 확인
현재 DNS 레코드:
- `ninetynine99.co.kr` - TXT / CNAME / A 레코드 존재

**필요한 DNS 설정:**
- **A 레코드**: `@` (또는 루트 도메인) → 서버 IP 주소
- **CNAME 레코드**: `www` → `ninetynine99.co.kr` (선택사항)

## 🚀 배포 방법 (서버 환경별)

### 방법 1: VPS/Linux 서버 배포 (Node.js 직접 실행)

#### Step 1: 서버 준비
```bash
# Node.js 설치 (예: Ubuntu)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 설치 (프로세스 매니저)
sudo npm install -g pm2
```

#### Step 2: 프로젝트 업로드
```bash
# Git을 사용하여 서버에 클론
git clone https://github.com/bignine99/NNhomepage.git
cd NNhomepage

# 의존성 설치
npm install

# 프로덕션 빌드
npm run build
```

#### Step 3: 환경 변수 설정
```bash
# .env.production 파일 생성
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
```

#### Step 4: PM2로 실행
```bash
# PM2로 프로세스 시작
pm2 start npm --name "nn-homepage" -- start

# 자동 시작 설정
pm2 startup
pm2 save
```

#### Step 5: Nginx 리버스 프록시 설정
```bash
# Nginx 설치
sudo apt-get install nginx

# 설정 파일 생성
sudo nano /etc/nginx/sites-available/ninetynine99.co.kr
```

Nginx 설정:
```nginx
server {
    listen 80;
    server_name ninetynine99.co.kr www.ninetynine99.co.kr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# 심볼릭 링크 생성
sudo ln -s /etc/nginx/sites-available/ninetynine99.co.kr /etc/nginx/sites-enabled/

# Nginx 재시작
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 6: SSL 인증서 설정 (Let's Encrypt)
```bash
# Certbot 설치
sudo apt-get install certbot python3-certbot-nginx

# SSL 인증서 발급
sudo certbot --nginx -d ninetynine99.co.kr -d www.ninetynine99.co.kr

# 자동 갱신 설정
sudo certbot renew --dry-run
```

### 방법 2: Docker를 사용한 배포

#### Dockerfile 생성
```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### docker-compose.yml 생성
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    env_file:
      - .env.production
    restart: unless-stopped
```

### 방법 3: 공유 호스팅 (cPanel 등)

공유 호스팅의 경우 Node.js 지원 여부를 확인해야 합니다.

#### 확인 사항:
1. 호스팅 업체에서 Node.js 지원 여부
2. Node.js 버전 (최소 18.x 이상 필요)
3. 포트 번호 (보통 3000 또는 지정된 포트)

#### 배포 방법:
1. 호스팅 업체의 Node.js 앱 생성 기능 사용
2. Git 리포지토리 연결 또는 파일 업로드
3. 환경 변수 설정
4. 빌드 및 실행

## 🔧 DNS 설정

### A 레코드 설정
도메인 관리 페이지에서:
- **타입**: A
- **호스트**: `@` 또는 `ninetynine99.co.kr`
- **값**: 서버 IP 주소 (예: `123.456.789.012`)
- **TTL**: 3600 (또는 기본값)

### CNAME 레코드 설정 (선택사항)
- **타입**: CNAME
- **호스트**: `www`
- **값**: `ninetynine99.co.kr`
- **TTL**: 3600

## 📝 package.json 수정 필요

현재 `package.json`의 `start` 스크립트가 포트 3001로 설정되어 있습니다.
서버 배포를 위해 포트를 3000으로 변경하거나 환경 변수로 설정하는 것이 좋습니다.

```json
{
  "scripts": {
    "start": "next start -p ${PORT:-3000}"
  }
}
```

## ⚠️ 주의사항

1. **방화벽 설정**: 서버의 80, 443 포트가 열려있는지 확인
2. **환경 변수 보안**: `.env` 파일은 절대 Git에 커밋하지 않기
3. **프로세스 관리**: PM2나 systemd를 사용하여 자동 재시작 설정
4. **로그 관리**: PM2 로그 확인: `pm2 logs nn-homepage`
5. **모니터링**: 서버 리소스 사용량 모니터링

## 🔍 문제 해결

### 문제: "아무것도 안나온다"
1. 서버가 실행 중인지 확인: `pm2 list` 또는 `ps aux | grep node`
2. 포트가 열려있는지 확인: `netstat -tulpn | grep 3000`
3. Nginx 설정 확인: `sudo nginx -t`
4. DNS 전파 확인: `nslookup ninetynine99.co.kr`
5. 방화벽 확인: `sudo ufw status`

### 문제: "502 Bad Gateway"
- Next.js 서버가 실행되지 않았을 가능성
- `pm2 restart nn-homepage` 실행

### 문제: "Connection refused"
- 포트가 열려있지 않거나 방화벽 차단
- 방화벽 규칙 추가 필요

## 📞 다음 단계

다음 정보를 알려주시면 더 구체적인 배포 가이드를 제공하겠습니다:

1. **서버 타입**: VPS / 공유 호스팅 / 클라우드 서버
2. **서버 IP 주소**: (공개 가능한 경우)
3. **SSH 접근 가능 여부**: 예/아니오
4. **운영체제**: Linux (어떤 배포판?) / Windows Server
5. **현재 사용 중인 웹 서버**: Nginx / Apache / 없음

이 정보를 주시면 정확한 배포 스크립트를 작성해드리겠습니다!

