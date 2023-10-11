# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

```
$ npm install
$ npx prisma db push
$ npm run dev
```

<br/>

```
// Seed
http://localhost:3000/api/seed
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

restaurant_id: 25 (Vivaan - fine Indian)
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

```
http://localhost:3000
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
