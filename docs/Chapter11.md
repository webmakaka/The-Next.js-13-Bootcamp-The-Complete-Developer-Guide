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

```json
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

### 108. Step 20 Extracting the Table Availability Logic Into its Own Function

<br/>

### 109. Step 25 Determining the Available Tables

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-10-11&time=18:00:00.000Z&partySize=8

<br/>

**response:**

<br/>

```json
{
  "searchTimeWithTables": {
    "date": "2023-10-11T18:00:00.000Z",
    "time": "18:00:00.000Z",
    "tables": [
      {
        "id": 1,
        "seats": 4,
        "restaurant_id": 25,
        "created_at": "2023-10-09T21:45:19.034Z",
        "upated_at": "2023-10-09T21:45:19.034Z"
      },
      {
        "id": 2,
        "seats": 4,
        "restaurant_id": 25,
        "created_at": "2023-10-09T21:45:19.034Z",
        "upated_at": "2023-10-09T21:45:19.034Z"
      },
      {
        "id": 3,
        "seats": 2,
        "restaurant_id": 25,
        "created_at": "2023-10-09T21:45:19.034Z",
        "upated_at": "2023-10-09T21:45:19.034Z"
      }
    ]
  }
}
```

<br/>

### 110. Step 3 Count the Tables Based on Seats

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-10-11&time=18:00:00.000Z&partySize=8

<br/>

**response:**

<br/>

```json
{
  "tablesCount": {
    "2": [3],
    "4": [1, 2]
  }
}
```

<br/>

### 111. Step 4 Determine the Tables to Book

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-10-11&time=18:00:00.000Z&partySize=8

<br/>

**response:**

<br/>

```json
{
  "tablesToBooks": [1, 2]
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
