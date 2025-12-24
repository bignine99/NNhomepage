# 가비아(Gabia) 호스팅 배포 가이드

## 🔍 현재 확인된 정보

### DNS 설정 (가비아)
- **도메인**: `ninetynine99.co.kr`
- **네임서버**: `ns.gabia.co.kr`
- **현재 DNS 레코드**:
  - TXT: `hosting-site=ninetynine-hub`
  - CNAME (www): `ninetynine-hub.web.app.` (Firebase/Vercel)
  - A 레코드 (@): `199.36.158.100`, `199.36.158.101`

## 📋 필요한 추가 정보

가비아 호스팅 관리 페이지에서 다음을 확인해주세요:

### 1. 호스팅 서비스 확인
가비아 관리 페이지 → "호스팅" 또는 "서버" 메뉴에서:

**질문 1: 어떤 호스팅 상품을 사용하고 계신가요?**
- [ ] 가비아 공유 호스팅 (Linux)
- [ ] 가비아 VPS
- [ ] 가비아 클라우드 서버
- [ ] 호스팅 없음 (도메인만 보유)

**질문 2: 호스팅 관리 페이지에 다음 메뉴가 있나요?**
- [ ] "Node.js" 또는 "애플리케이션" 메뉴
- [ ] "FTP" 또는 "파일 관리자" 메뉴
- [ ] "SSH 접근" 또는 "터미널" 메뉴
- [ ] "웹 호스팅" 메뉴

### 2. 현재 호스팅 상태 확인

**질문 3: 현재 `ninetynine-hub.web.app.`는 무엇인가요?**
- Firebase 호스팅?
- Vercel 배포?
- 다른 서비스?

이 정보가 있으면 기존 호스팅을 교체할 수 있습니다.

## 🎯 배포 방법 (호스팅 타입별)

### 방법 1: 가비아 공유 호스팅 (Node.js 미지원)
**문제**: 대부분의 공유 호스팅은 Node.js를 지원하지 않습니다.

**해결책**:
1. **Vercel/Firebase 사용** (현재처럼)
   - Vercel에 배포
   - DNS CNAME을 Vercel로 변경
   
2. **가비아 VPS로 업그레이드**
   - Node.js 설치 가능
   - 직접 서버 관리

### 방법 2: 가비아 VPS/클라우드 서버
**가능**: Node.js 직접 설치 및 실행 가능

**배포 단계**:
1. SSH 접근 정보 확인
2. Node.js 설치
3. 프로젝트 배포
4. PM2로 프로세스 관리
5. Nginx 리버스 프록시 설정

### 방법 3: Vercel/Firebase 사용 (권장)
**장점**: 
- 무료
- 자동 배포
- SSL 자동 설정
- CDN 제공

**단계**:
1. Vercel에 프로젝트 배포
2. 도메인 연결
3. DNS CNAME 레코드 업데이트

## 🚀 빠른 배포 (Vercel 사용 - 권장)

현재 `ninetynine-hub.web.app.`가 Firebase인 것 같으니, Vercel로 배포하는 것이 가장 빠릅니다.

### Step 1: Vercel 배포
```bash
# 이미 Vercel CLI가 설치되어 있음
vercel --prod
```

### Step 2: 도메인 연결
Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Domains
3. `ninetynine99.co.kr` 추가
4. `www.ninetynine99.co.kr` 추가

### Step 3: DNS 레코드 업데이트
가비아 DNS 관리 페이지에서:

**기존 레코드 삭제:**
- A 레코드 2개 (`199.36.158.100`, `199.36.158.101`)
- CNAME 레코드 (`www` → `ninetynine-hub.web.app.`)

**새 레코드 추가:**
- **CNAME**: `@` → Vercel이 제공하는 CNAME 값 (예: `cname.vercel-dns.com`)
- 또는 **A 레코드**: `@` → Vercel IP (Vercel이 제공)

Vercel이 정확한 DNS 값을 제공합니다.

## 📞 다음 단계

**지금 확인해주세요:**

1. **가비아 관리 페이지 접속**
   - https://www.gabia.com 로그인
   - "호스팅" 또는 "서버" 메뉴 확인

2. **호스팅 상품 확인**
   - 어떤 호스팅을 사용 중인지
   - Node.js 지원 여부

3. **선택지**
   - **옵션 A**: Vercel 사용 (가장 빠름, 무료)
   - **옵션 B**: 가비아 VPS 사용 (서버 직접 관리)
   - **옵션 C**: 다른 호스팅 서비스 사용

**어떤 방법을 원하시나요?**
- Vercel 배포 (추천) → 바로 진행 가능
- 가비아 VPS 배포 → 서버 정보 필요
- 다른 방법 → 구체적으로 알려주세요

Vercel로 진행하시겠습니까? 아니면 가비아 호스팅 정보를 먼저 확인하시겠습니까?

