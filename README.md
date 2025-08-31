# Odyssey Client-side GraphQL with React & Apollo

Welcome to the companion app of Odyssey Client-side GraphQL with React & Apollo! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/client-side-graphql-react), Apollo's learning platform.

You can [preview the completed demo app here](https://odyssey-catstronauts.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

To get started:

1. Open an IDE at the root of the project.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).

---

# GraphQL Basics

- **GraphQL 스키마**는 **타입**과 **필드**들의 모음이며, **스키마 정의 언어**(SDL)로 작성된다.
- 필드에 느낌표(!)를 붙이면 해당 필드는 non-null이다.
- 스키마의 **Query 타입**은 **API의 진입점**을 정의하며, 쿼리할 수 있는 데이터의 타입을 제한합니다.

# Apollo Client

- GraphQL 쿼리의 여정은 클라이언트 앱이 쿼리를 준비하고, 이를 HTTP POST 또는 GET 요청으로 **서버에 전송**하는 것에서 시작한다.
- GraphQL 서버는 받은 쿼리를 파싱(AST)하고, 유효성을 검사하며, 쿼리를 처리하는 역할이다.
- GraphQL 서버는 데이터 소스와 리졸버(resolver)를 사용하여 요청을 처리하고, 클라이언트에 데이터를 반환한다.
- Apollo Client는 GraphQL을 통해 요청을 보내고 데이터를 관리할 수 있도록 도와주는 상태 관리 라이브러리다.

### `Apollo Client`

- apollo client 인스턴스를 생성한다.

```javascript
const client = new ApolloClient({
  // options go here
});
```

- 옵션으로는 다음과 같은 값을 적는다:
  - `uri` : GraphQL Server의 주소
  - `cache` : 모든 apollo client 인스턴스는 in-memory cache를 사용한다. 캐시를 통해 쿼리의 결과를 저장하고 재사용한다.

### `Apollo Provider` 컴포넌트

- React Context API를 사용
- apollo client 객체를 리액트 구성요소 트리 전체에서 사용 가능하다.
- 프로젝트 최상단을 Apollo Provider 객체로 감싸고, client 객체를 props로 넘긴다

# Codegen

- 스키마에 정의된 모든 GraphQL 타입을 TypeScript 타입으로 변환해야함.
- config파일을 작성해야 한다.
  - `schema` : GraphQL Code Generator는 이 주소를 참고하여 서버의 스키마에 정의된 타입과 필드를 읽어온다.
  - `documents` : GraphQL Code Generator가 프론트엔드 타입을 생성할 때 참고할 문서(document) 경로.
  - `generates` : 생성된 결과물을 저장할 경로.
    - `@graphql-codegen/client-preset` 패키지 :
      - 이 패키지는 Code Generator가 React 앱, 특히 Apollo Client를 사용하는 프로젝트에서 잘 동작하도록 설정
      - Code Generator의 동작 방식을 조정할 수 있는 추가 플러그인들도 제공
    - Code Generator가 생성한 유틸리티 함수는 graphql이라는 이름으로 export하지만, **이름을 변경**할 수도 있다. preset 아래에 `presetConfig`라는 속성을 추가해서 이름을 바꿀 수 있다.
