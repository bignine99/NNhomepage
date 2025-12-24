#!/bin/bash

# 가비아 호스팅 배포 스크립트
# 사용법: ./deploy-to-gabia.sh

echo "🚀 가비아 호스팅 배포 시작..."

# 1. 프로젝트 빌드
echo "📦 프로젝트 빌드 중..."
npm run build

# 2. 환경 변수 파일 확인
if [ ! -f .env.production ]; then
    echo "⚠️  .env.production 파일이 없습니다. 생성해주세요."
    exit 1
fi

# 3. 배포 준비 완료
echo "✅ 빌드 완료!"
echo ""
echo "다음 단계:"
echo "1. FTP 또는 SSH로 서버에 접속"
echo "2. 프로젝트 파일 업로드"
echo "3. npm install --production 실행"
echo "4. npm start 또는 PM2로 실행"

