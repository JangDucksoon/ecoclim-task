# 생태계 기후대응 통합정보 관리시스템

## Base Path 설정

### 현재 상태

포털관리 URL 분리를 위해 `/mng` 컨텍스트 패스를 설정하였습니다.

현재 resource, fetch, font 등 정적 리소스 로드 시 base path가 붙어있습니다.

### 주의사항

추후 업무 지원 서비스 확장 시, base path 제거 후 다음 항목에서 base path를 제거해야 합니다:

- 폰트(Font)
- CSS의 URL 속성
- URL
- API Route로 fetch 등

**Note:** Next.js Router 관련 로직은 base path 제거할 필요 없음 (이미 제거 후 동작 Link, router 등)
