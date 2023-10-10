# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

### [Pull Request](https://github.com/webmakaka/The-Next.js-13-Bootcamp-The-Complete-Developer-Guide/pull/10)

<br/>

## 10. Building an Availability System

<br/>

### 85. Intro to Scheduling and Availability

<br/>

### 86. The Rules We Will Follow

<br/>

### 88. Rendering a DatePicker Component

```
$ npm install react-datepicker @types/react-datepicker
```

<br/>

![Application](/img/pic-ch10-img01.png?raw=true)

<br/>

### 89. Dynamically Rendering the Time Options

```
$ npx prisma studio
```

<br/>

### 90. Understanding Many to Many Relationships

<br/>

### 91. Defining Our New Models

```
$ npx prisma db push
```

<br/>

### 92. The Availability Endpoint Overview

<br/>

### 93. Building the Availability Endpoint

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-01-01&time=20:00:00.000Z&partySize=4

<br/>

### 94. Step 1 Determining the Search Times

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-01-01&time=20:00:00.000Z&partySize=4

<br/>

### 95. Step 2 Fetching the Bookings

```
http://localhost:3000/api/seed
```

<br/>

```
$ npx prisma studio
```

Add

**Booking:**

```
number_of_people: 4
booking_time: 2023-10-11T14:00:00.000Z
booker_email: marley@example.com
booker_phone: 7777777777
booker_first_name: Marley
booker_last_name: Marley
booker_occasion: nothing
booker_requests: nothing

restaurant_id: 25
created_at: 2023-10-10T14:00:00.000Z
```

<br/>

**BookingsOnTables:**

```
booking_id: 1
table_id: 1
created_at: 2023-10-10T00:00:00.000Z
```

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-10-11&time=14:00:00.000Z&partySize=4

<br/>

**response:**

```
{
  "searchTimes": [
    "13:00:00.000Z",
    "13:30:00.000Z",
    "14:00:00.000Z",
    "14:30:00.000Z",
    "15:00:00.000Z"
  ],
  "bookings": [
    {
      "number_of_people": 4,
      "booking_time": "2023-10-11T14:00:00.000Z",
      "tables": [
        {
          "booking_id": 1,
          "table_id": 1,
          "created_at": "2023-10-10T00:00:00.000Z",
          "updated_at": "2023-10-09T22:27:23.264Z"
        }
      ]
    }
  ]
}
```

<br/>

### 96. Step 3 Compressing the Booking

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-10-11&time=14:00:00.000Z&partySize=4

<br/>

**response:**

```
{
  "searchTimes": [
    "13:00:00.000Z",
    "13:30:00.000Z",
    "14:00:00.000Z",
    "14:30:00.000Z",
    "15:00:00.000Z"
  ],
  "bookings": [
    {
      "number_of_people": 4,
      "booking_time": "2023-10-11T14:00:00.000Z",
      "tables": [
        {
          "booking_id": 1,
          "table_id": 1,
          "created_at": "2023-10-10T00:00:00.000Z",
          "upated_at": "2023-10-09T22:27:23.264Z"
        }
      ]
    }
  ],
  "bookingTablesObj": {
    "2023-10-11T14:00:00.000Z": {
      "1": true
    }
  }
}
```

<br/>

### 97. Step 4 Fetching the Restaurant Tables

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-10-11&time=14:00:00.000Z&partySize=4

<br/>

**response:**

```
{
  "searchTimes": [
    "13:00:00.000Z",
    "13:30:00.000Z",
    "14:00:00.000Z",
    "14:30:00.000Z",
    "15:00:00.000Z"
  ],
  "bookings": [
    {
      "number_of_people": 4,
      "booking_time": "2023-10-11T14:00:00.000Z",
      "tables": [
        {
          "booking_id": 1,
          "table_id": 1,
          "created_at": "2023-10-10T00:00:00.000Z",
          "upated_at": "2023-10-09T22:27:23.264Z"
        }
      ]
    }
  ],
  "bookingTablesObj": {
    "2023-10-11T14:00:00.000Z": {
      "1": true
    }
  },
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
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
