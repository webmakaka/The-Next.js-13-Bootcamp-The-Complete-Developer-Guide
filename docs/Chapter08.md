# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

### [Pull Request](https://github.com/webmakaka/The-Next.js-13-Bootcamp-The-Complete-Developer-Guide/pull/7)

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

```
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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
