# 여행 상품 주문 웹앱 (react-context-app)

> 사이드 프로젝트 · React, Context API, Axios, Express

Context API로 주문 상태를 전역 관리하는 여행 상품 주문 웹앱입니다. 상품·옵션 선택 → 주문 요약 → 완료의 3단계 흐름을 구현했고, 상품·옵션·주문 API를 제공하는 **Express 서버를 직접 만들어** 클라이언트-서버 분리 구조를 경험했습니다.

## 구성

- **client (React)** — `OrderContext`로 수량·합계를 전역 관리하고, 페이지 전환은 step 상태로 제어. 컴포넌트 분리(Products/Options/Type/ErrorBanner)와 React Testing Library 테스트 셋업 포함
- **server (Express)** — 상품·옵션 조회 API, 주문 접수 API(주문번호 발급), CORS 화이트리스트, 이미지 정적 서빙

## 데모에 대해

무료 Node 호스팅(Render)은 슬립·만료로 서버가 자주 죽어 데모가 깨지는 문제가 있었습니다. 그래서 **데모 빌드는 서버 응답(상품·옵션 JSON, 이미지)을 정적으로 내장하고 주문 처리를 클라이언트에서 시뮬레이션**해 GitHub Pages에서 서버 없이 완전하게 동작합니다. 실제 API 구현은 저장소의 `server/`에서 확인할 수 있습니다.

## 더 보기

- [데모 (GitHub Pages)](https://jinseungyeol.github.io/react-context-app/)
- [저장소 (GitHub)](https://github.com/jinseungyeol/react-context-app)
