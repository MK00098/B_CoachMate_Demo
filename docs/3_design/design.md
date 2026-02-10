# Welldy 디자인 시스템

## 컨셉

**직관적, 스마트, 간결**

슬로건: `Be Smarter, Be Better.`

## 색상

### 기본 색상
| 이름 | HEX | 용도 |
|------|-----|------|
| White | `#ffffff` | 배경, 버튼 (블랙 배경) |
| Black | `#000000` | 다크 섹션 배경, 버튼 (그레이 배경) |
| Light Gray | `#f5f5f7` | 카드, Footer |
| Space Black | `#1d1d1f` | 메인 텍스트, 버튼 호버 |
| Space Gray | `#86868b` | 보조 텍스트 |
| Border | `#d2d2d7` | 테두리 (서브 페이지) |

### 투명도 색상 (index.html 기준)
| 색상 | RGBA | 용도 |
|------|------|------|
| 반투명 네비게이션 배경 | `rgba(255, 255, 255, 0.8)` | 네비게이션 배경 |
| 반투명 네비게이션 테두리 | `rgba(0, 0, 0, 0.1)` | 네비게이션 하단 테두리 (메인) |
| 반투명 버튼 호버 | `rgba(255, 255, 255, 0.9)` | 블랙 배경 버튼 호버 |

## 타이포그래피

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif;
```

### 데스크톱 (기본)
| 요소 | 크기 | 굵기 | Letter Spacing |
|------|------|------|----------------|
| Hero 제목 (h1) | 3.5rem (56px) | 600 | -0.03em |
| 섹션 제목 (h2) | 3rem (48px) | 600 | -0.02em |
| 서브타이틀 (h3) | 1.2rem (19px) | 400 | 0 |
| 본문 | 1rem (16px) | 400 | 0 |
| 보조 텍스트 | 0.95rem (15px) | 400 | 0.02em |

### 모바일 (@media max-width: 768px)
| 요소 | 크기 | 변화 |
|------|------|------|
| Hero 제목 (h1) | 2.5rem (40px) | -1rem |
| Hero 서브타이틀 (h2) | 1.1rem (17.6px) | -0.1rem |
| 섹션 제목 (h2) | 2.2rem (35.2px) | -0.8rem |
| 섹션 서브타이틀 (h3) | 1rem (16px) | -0.2rem |

### 네비게이션

| 요소 | 크기 | 굵기 |
|------|------|------|
| 로고 | 1rem (16px) | 600 |
| 링크 | 0.75rem (12px) | 400 |

## 레이아웃 (Apple 기준)

### 컨테이너
- **최대 너비**: 980px
- **좌우 패딩**: 22px

### 네비게이션 (index.html 기준)
- **포지셔닝**: fixed (메인), sticky (서브 페이지)
- **높이**: 5vh (반응형)
- **배경**: rgba(255, 255, 255, 0.8)
- **Backdrop filter**: saturate(180%) blur(20px)
- **Border**:
  - 메인 (index.html): 1px solid rgba(0, 0, 0, 0.1)
  - 서브 페이지: 1px solid #d2d2d7
- **z-index**: 100

### 섹션 여백
- **수직 패딩**: 80px (데스크톱), 60px (모바일 @768px)
- **수평 패딩**: 22px
- **섹션 높이**:
  - Hero: 100vh (min-height: 400px)
  - Coaching/Career: 각 47.5vh
  - scroll-margin-top: 5vh (네비게이션 오프셋)

### 반응형 Breakpoint
- **모바일**: `@media (max-width: 768px)`
  - 폰트 크기 축소
  - 섹션 패딩: 80px → 60px

## 인터랙션

### Transition 속도
- **네비게이션 링크**: 0.2s (빠른 반응)
- **버튼**: 0.3s
- **섹션**: 0.3s

### Hover 효과
- **네비게이션 링크**: opacity 0.8 → 1.0
- **버튼**: scale(1.02)
- **섹션**: transform scale

## 버튼 스타일

### Hero 버튼
```css
padding: 16px 32px;
border-radius: 980px;
font-size: 1.2rem;
font-weight: 500;
width: 320px;
```

### 섹션 버튼
```css
padding: 14px 28px;
border-radius: 980px;
font-size: 0.9rem;
font-weight: 500;
width: 140px;
```

### 배경별 버튼 색상
- **블랙 배경**: 화이트 버튼
- **그레이 배경**: 블랙 버튼

## 간격 시스템 (Apple 원칙)

### 정보 그룹핑 (Information Grouping)
관련된 정보는 가깝게, 행동 요소는 멀리 배치하여 시각적 계층을 형성합니다.

### 기본 간격
```
제목 (h1/h2)
  ↓ 8px (타이트 - 정보 그룹)
설명 (h2/h3)
  ↓ 24px (넓게 - 행동 분리)
CTA 버튼
  ↓ 16px (Hero만 해당)
추가 요소 (슬로건 등)
```

### 적용 예시

**Hero Section**
- h1 → h2: `margin-bottom: 8px`
- h2 → button: `margin-bottom: 24px`
- button → slogan: `margin-bottom: 16px`

**Coaching/Career Sections**
- h2 → h3: `margin-bottom: 8px`
- h3 → button: `margin-bottom: 24px`

### 간격 원칙
1. **관련 정보는 가깝게**: 제목과 설명은 하나의 정보 그룹
2. **행동 요소는 분리**: CTA 전 충분한 공간으로 사용자 결정 유도
3. **일관성 유지**: 모든 섹션에 동일한 간격 규칙 적용

## 구조

```
Welldy
├── Smarter (smarter.html)
│   ├── 운동일지 AI (coaching-log.html)
│   └── 식단관리 AI (준비 중)
└── Better (better.html)
    ├── 교육 (준비 중)
    ├── 자격증 (준비 중)
    └── 채용 (준비 중)
```

## 디자인 원칙

1. **제목은 간결하게** - 불필요한 설명 제거
2. **CTA는 배경 대비** - 블랙 배경↔화이트, 그레이 배경↔블랙
3. **간격으로 계층 표현** - 관련 정보는 가깝게(8px), 행동은 멀리(24px)
4. **일관성 우선** - 모든 페이지 동일한 기준 적용
5. **빠른 반응** - Transition 0.2s~0.3s
6. **반응형 레이아웃** - vh 단위로 화면 비율 유지
