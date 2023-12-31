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

```json
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

```json
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

```json
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

### 98. Step 5 Reformatting the Search Times

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-10-11&time=14:00:00.000Z&partySize=4

<br/>

**response:**

```json
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
  ],
  "searchTimesWithTables": [
    {
      "date": "2023-10-11T13:00:00.000Z",
      "time": "13:00:00.000Z",
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
    },
    {
      "date": "2023-10-11T13:30:00.000Z",
      "time": "13:30:00.000Z",
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
    },
    {
      "date": "2023-10-11T14:00:00.000Z",
      "time": "14:00:00.000Z",
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
    },
    {
      "date": "2023-10-11T14:30:00.000Z",
      "time": "14:30:00.000Z",
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
    },
    {
      "date": "2023-10-11T15:00:00.000Z",
      "time": "15:00:00.000Z",
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
  ]
}
```

<br/>

### 99. Step 6 Filtering Out the Booked Tables

<br/>

### 100. Step 7 Determining the Availability

<br/>

http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-10-11&time=14:00:00.000Z&partySize=8

<br/>

**response:**

```json
***
  "availabilities": [
    {
      "time": "13:00:00.000Z",
      "available": true
    },
    {
      "time": "13:30:00.000Z",
      "available": true
    },
    {
      "time": "14:00:00.000Z",
      "available": false
    },
    {
      "time": "14:30:00.000Z",
      "available": true
    },
    {
      "time": "15:00:00.000Z",
      "available": true
    }
  ]
```

<br/>

### 101. Step 8 Filtering by Restaurant Time Window

<br/>

### 102. Building a useAvailabilities Hook

<br/>

### 103. Storing the Reservation Criteria in State

<br/>

### 104. Rendering the Available Time Options

<br/>

![Application](/img/pic-ch10-img02.png?raw=true)

<br/>

### 105. Converting the Time to a Displayable Time

<br/>

![Application](/img/pic-ch10-img03.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
