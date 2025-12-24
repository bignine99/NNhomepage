## 메일 전송을 위한 환경 변수

`.env.local` 파일을 생성하고 아래 값을 채워주세요. Gmail을 사용할 경우 [앱 비밀번호](https://support.google.com/accounts/answer/185833?hl=ko)가 필요합니다.

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=example@gmail.com
SMTP_PASS=앱비밀번호
SMTP_FROM="NINETYNINE Homepage" <example@gmail.com>
CONTACT_TO=bignine99@gmail.com
```

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`: 사용하는 메일 서버에 맞게 수정
- `SMTP_USER`, `SMTP_PASS`: 인증 계정 정보
- `SMTP_FROM`: 수신자에게 보일 발신 정보 (기본값은 `SMTP_USER`)
- `CONTACT_TO`: 실제 수신자 이메일 (기본값 `bignine99@gmail.com`)








