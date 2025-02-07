# Next.js Base Template

Next.js 14를 기반으로 한 모던 웹 클라이언트 개발을 위한 템플릿입니다.

## 프로젝트 개요

이 템플릿은 Next.js의 최신 기능들을 활용하여 확장 가능하고 유지보수가 용이한 웹 애플리케이션을 개발하기 위한 기본 구조를 제공합니다.

### 주요 특징
- App Router 기반의 라우팅 시스템
- TypeScript를 통한 타입 안정성
- React Query를 활용한 효율적인 데이터 페칭
- Zustand 기반의 전역 상태 관리
- Material UI & Emotion을 활용한 디자인 시스템
- SCSS Modules를 통한 스타일링

## 기술 스택

### Core
- Next.js 15.0.3
- React 18.3.1
- TypeScript 5
- SASS/SCSS

### 상태 관리
- React Query v5.63.0
- Zustand 5.0.3

### UI/Style
- Material UI 6.3.1
- Emotion
- SCSS Modules

### 개발 도구
- ESLint
- Prettier
- TypeScript

## 프로젝트 구조

```
src/
├── app/          # 페이지 및 라우팅
├── components/   # 재사용 가능한 컴포넌트
├── hooks/        # 커스텀 훅
├── styles/       # 글로벌 스타일 및 테마
├── types/        # TypeScript 타입 정의
└── utils/        # 유틸리티 함수
```

## 시작하기

### 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

프로젝트가 성공적으로 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 코딩 컨벤션

### ESLint 설정
- JavaScript/TypeScript 표준 규칙 준수
- React 훅 규칙 검사
- 접근성 규칙 검사

### Prettier 설정

```json
{
  "singleQuote": true,
  "tabWidth": 2,
  "semi": true
}
```

## 참고 사항

- Next.js 공식 문서: [https://nextjs.org/docs](https://nextjs.org/docs)
- Material UI 문서: [https://mui.com/](https://mui.com/)
- React Query 문서: [https://tanstack.com/query/latest](https://tanstack.com/query/latest)
