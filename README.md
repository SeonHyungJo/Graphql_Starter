**Graphql_Starter**
===

Graphql 익히기 위한 연습 Repository

# Graphql 장점

- Under-fetching
내가 원하는 하나의 요청을 성공적으로 하기 위한 다른 요청을 하는 것. 예를 들어 하나의 화면을 완성하기 위해서 여러 번의 요청을 하는 것...

> 하나의 예로 위메프에서 잠깐 있었을때 ajax로 메인화면을 호출할 때 3번을 요청하는 것을 말하는 것

- Over-fetching
내가 요청한 정보보다 더 많은 정보를 서버로 부터 받게 되는 것

---

1. Query
2. Resolver

---

## 2018-07-11

1. Install [Graphql-yoga](https://github.com/prismagraphql/graphql-yoga)

```
yarn add graphql-yoga
```
2. nodemon 설치
3. babel 설정
4. graphql 설치 및 적용

---

## 2018-07-12

1. schema 추가
2. resolver 추가
3. index.js에 적용

- type을 새로 만들어서 적용
- resolver에서 데이틀 Mutation해서 가져옴

---

## 2018-07-13

### Graphql과 ORM(sequelize), Postgre 연동하기

1. pg, pg-hstore, sequelize 설치
2. sequelize-cli 설치 및

```
sequelize init:config ./config/sequelize.json
sequelize init:models
```

3. postgre 설치 및 디비연동
4. schema, resolver 수정(중요)
5. index.js에 sequelize 적용하기

> 추가적으로 sequelize에는 es6가 적용이 되지 않아서 적용한 버전으로 바꿀예정
