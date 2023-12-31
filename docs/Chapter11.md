# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

### [Pull Request](https://github.com/webmakaka/The-Next.js-13-Bootcamp-The-Complete-Developer-Guide/pull/12)

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

### 112. Step 5 Creating the Booking and Linking it to the Tables

```
$ npx prisma db push
```

<br/>

```
// POST
// OK!
$ curl \
    --data '{
      "bookerEmail":"marley@example.com",
      "bookerPhone":"7777777777",
      "bookerFirstName":"Marley",
      "bookerLastName":"Marley",
      "bookerOccasion":"",
      "bookerRequest":""}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url "http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-02-10&time=15:00:00.000Z&partySize=4" \
    | jq
```

<br/>

**response:**

```json
{
  "booking": {
    "id": 2,
    "number_of_people": 4,
    "booking_time": "2023-02-10T15:00:00.000Z",
    "booker_email": "marley@example.com",
    "booker_phone": "7777777777",
    "booker_first_name": "Marley",
    "booker_last_name": "Marley",
    "booker_occasion": "",
    "booker_requests": "",
    "restaurant_id": 1,
    "created_at": "2023-10-11T18:13:49.323Z",
    "updated_at": "2023-10-11T18:13:49.323Z"
  }
}
```

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-02-10&time=15:00:00.000Z&partySize=10

<br/>

```json
[
  {
    "time": "14:30:00.000Z",
    "available": true
  },
  {
    "time": "15:00:00.000Z",
    "available": false
  },
  {
    "time": "15:30:00.000Z",
    "available": true
  },
  {
    "time": "16:00:00.000Z",
    "available": true
  }
]
```

<br/>

### 113. Dynamically Rendering Data for the Reserve Header

<br/>

### 114. Extracting the Query Params

```
$ npm install date-fns
```

<br/>

![Application](/img/pic-ch11-img01.png?raw=true)

<br/>

### 115. Storing Our Inputs in State

<br/>

### 116. Creating a useReservation Hook

<br/>

### 117. Making a Reservation From the Client

<br/>

### 118. Showing a Success State

<br/>

![Application](/img/pic-ch11-img02.png?raw=true)

<br/>

![Application](/img/pic-ch11-img03.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
