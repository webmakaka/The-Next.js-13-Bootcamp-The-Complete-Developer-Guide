# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

### [Pull Request](https://github.com/webmakaka/The-Next.js-13-Bootcamp-The-Complete-Developer-Guide/pull/8)

<br/>

## 08. Implementing Authentication

<br/>

### 58. What is Authentication

<br/>

### 59. Adding Material UI

```
$ npm install @mui/material
$ npm install @emotion/react @emotion/styled
```

https://mui.com/material-ui/react-modal/

<br/>

![Application](/img/pic-ch08-img01.png?raw=true)

<br/>

### 60. Adding the Modal Content

<br/>

![Application](/img/pic-ch08-img02.png?raw=true)

<br/>

### 61. Completing the Modal Functionality

<br/>

![Application](/img/pic-ch08-img03.png?raw=true)

<br/>

### 62. Steps to Implement Authentication

<br/>

### 62. Steps to Implement Authentication

<br/>

### 63. Creating an Endpoint

<br/>

### 64. Validating the Users Input

```
$ npm install validator types@validator
```

<br/>

```
// SIGN UP
// POST
// OK!
$ curl \
    --data '{
      "firstName":"Marley",
      "lastName":"Marley",
      "email":"marley@example.com",
      "phone":"7777777777",
      "city":"Moscow",
      "password":"pa55W0rd!"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/auth/signup \
    | jq
```

<br/>

### 65. Validating That the Users Doesn't Already Have an Account

<br/>

```
$ npx prisma db push
```

<br/>

```
// SIGN UP
// POST
// FAIL!
$ curl \
    --data '{
      "firstName":"Marley",
      "lastName":"Marley",
      "email":"josh@hotmail.com",
      "phone":"7777777777",
      "city":"Moscow",
      "password":"pa55W0rd!"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/auth/signup \
    | jq
```

<br/>

**response:**

```json
{
  "errorMessage": "Email is associated with another account"
}
```

<br/>

### 66. Exploring Password Storage Solutions

<br/>

### 67. Hashing Our Password

```
$ npm install bcrypt @types/bcrypt
```

<br/>

### 68. Creating a User

<br/>

```
// SIGN UP
// POST
// OK!
$ curl \
    --data '{
      "firstName":"Marley",
      "lastName":"Marley",
      "email":"marley@example.com",
      "phone":"7777777777",
      "city":"Moscow",
      "password":"pa55W0rd!"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/auth/signup \
    | jq
```

<br/>

### 69. Creating and Sending a JSON Web Token

```
$ npm install jose
```

<br/>

### 70. Implementing the Sign in Endpoint

<br/>

```
// SIGN IN
// POST
// OK!
$ curl \
    --data '{
      "email":"marley@example.com",
      "password":"pa55W0rd!"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/auth/signin \
    | jq
```

**response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hcmxleUBleGFtcGxlLmNvbSIsImV4cCI6MTY5Njc5MzU4Mn0.I5s5UnNi3quXvvd6Kob28sNm6jX9NNxg-TGFV2FTdKs"
}
```

<br/>

### 71. Identifying Users With Json Web Token

```
$ npm install jsonwebtoken @types/jsonwebtoken
```

<br/>

```
$ export AUTH_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hcmxleUBleGFtcGxlLmNvbSIsImV4cCI6MTY5Njc5MzU4Mn0.I5s5UnNi3quXvvd6Kob28sNm6jX9NNxg-TGFV2FTdKs

// Me
// GET
// OK!
$ curl \
 --header "Content-Type: application/json" \
 --header "Authorization: Bearer ${AUTH_TOKEN}" \
 --request GET \
 --url http://localhost:3000/api/auth/me \
 | jq
```

**response:**

```json
{
  "user": {
    "id": 5,
    "first_name": "Marley",
    "last_name": "marley",
    "city": "Moscow",
    "phone": "7777777777"
  }
}
```

<br/>

### 72. Adding Middleware

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
