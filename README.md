# CoachMate

운동전문가를 위한 AI 코칭 파트너

**Be Smarter, Be Better.**

## 서비스 구조

```
CoachMate
├── Smarter (업무는 AI에게.)
│   ├── AI 운동일지 ← MVP
│   └── AI 식단관리 (준비 중)
└── Better (멈추지 않는 성장.)
    ├── 교육 (준비 중)
    ├── 자격증 (준비 중)
    └── 채용 (준비 중)
```

## MVP — AI 운동일지

트레이너가 자연어로 대충 적으면, AI가 프리미엄 운동 리포트로 자동 변환.

```
입력 (자유롭게) → AI 생성 (버튼 한 번) → 확인/수정 → 카톡 공유
```

- 자연어 자유 입력 (축약어, 비정형 데이터 허용)
- AI 구조화 리포트 (데이터 테이블 + 요약 지표 + 코치 피드백)
- 카톡 복사/공유 (앱 설치 불필요)

## 프로젝트 구조

```
B_CoachMate_Demo/
├── frontend/                   ← 프론트엔드 (배포 코드)
│   ├── css/style.css           ← 공통 스타일시트
│   ├── js/coaching-log.js      ← 운동일지 로직
│   ├── index.html              ← 홈페이지
│   ├── smarter.html            ← Smarter 페이지
│   ├── coaching-log.html       ← AI 운동일지 (입력 폼)
│   ├── better.html             ← Better 페이지
│   ├── about.html              ← About 페이지
│   └── font-test.html          ← 폰트 테스트 (개발용)
├── functions/                  ← 백엔드 - Cloudflare Functions (추후)
│   └── api/
├── docs/                       ← 내부 문서
│   ├── 1_business/             ← 사업 (서비스 개요, 시장조사, 페르소나)
│   ├── 2_product/              ← 제품 (PRD, AI 운동일지 명세서)
│   ├── 3_design/               ← 디자인 (UI/UX)
│   ├── 4_engineering/          ← 개발 (기술 설계)
│   ├── 5_ai/                   ← AI/데이터 (모델, 프롬프트)
│   ├── 6_marketing/            ← 마케팅 (GTM, 콘텐츠)
│   └── 7_legal/                ← 법률/윤리 (개인정보, 약관)
├── .gitignore
└── README.md
```

## 기술 스택

| 구성 | 기술 |
|------|------|
| 프론트엔드 | HTML/CSS/JS (프레임워크 없음) |
| 백엔드 | Cloudflare Pages Functions (추후) |
| AI | Claude API — Anthropic (추후) |
| 배포 | GitHub → Cloudflare Pages (자동) |

## 배포

```
로컬 개발 (VSCode + Claude Code) → GitHub → Cloudflare Pages
```

- **GitHub** — 소스코드 버전 관리
- **Cloudflare Pages** — GitHub 연동, push 시 자동 배포 (빌드 출력: `frontend/`)
- **HTTPS** — Cloudflare SSL 인증서 자동 제공
- **CDN** — Cloudflare 글로벌 엣지 서버에서 서빙

배포 URL: https://coachmate.pages.dev/
