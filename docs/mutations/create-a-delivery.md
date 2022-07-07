---
sidebar_position: 1
---

# Create Deliveries

Let's write a simple query to create a new delivery.


#### Mutation
```graphql
mutation newDelivery(
  $sender_name: String,
  $sender_address: jsonb!,
  $sender_phone: String,
  $recipient_name: String,
  $recipient_address: jsonb!,
  $recipient_phone: String,
  $weight: numeric,
  $fragile: Boolean,
  ) {
    insert_delivery(objects: [{
      sender_phone: $sender_phone,
      sender_name: $sender_name,
      sender_address: $sender_address,
      recipient_phone: $recipient_phone,
      recipient_name: $recipient_name,
      recipient_address: $recipient_address,
      weight: $weight,
      fragile: $fragile,
    }]) {
    returning {
      tracking_id
    }
  }
}
```

#### Variables
```graphql
{
  "sender_name": "Aisha Fatima",
  "sender_phone": "+2348012345678",
  "sender_address": {
    "addr_line1": "10 Lekki St",
    "addr_line2": "Ajao Estate",
    "city": "Victoria Island",
    "state": "Lagos",
    "country": "Nigeria",
    "postal_code": ""
  },
  "recipient_name": "Godwin Anyigbo",
  "recipient_phone": "+2348087654321",
  "recipient_address": {
    "addr_line1": "6A Divine Rd",
    "addr_line2": "",
    "city": "Owerri",
    "state": "Imo",
    "country": "Nigeria",
    "postal_code": ""
  },
  "weight": 3,
  "fragile": true
}
```


We'll then receive the following response.
```graphql
{
  "data": {
    "insert_delivery": {
      "returning": [
        {
          "tracking_id": "a15e5abb-7443-48eb-beaa-1a6a10978b7c"
        }
      ]
    }
  }
}
```