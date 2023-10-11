# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

### [Pull Request](https://github.com/webmakaka/The-Next.js-13-Bootcamp-The-Complete-Developer-Guide/pull/10)

<br/>

## 11. Building the Scheduling System

<br/>

### 106. The Reservation Endpoint

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-10-11&time=14:00:00.000Z&partySize=8

<br/>

**response:**

<br/>

```
{
  "slug": "vivaan-fine-indian-cuisine-ottawa",
  "day": "2023-10-11",
  "time": "14:00:00.000Z",
  "partySize": "8"
}
```

<br/>

### 107. Step 1 Validation

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-10-11&time=14:00:00.000Z&partySize=8

<br/>

**response:**

<br/>

```
{"errorMessage":"Restaurant is not open at that time"}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
