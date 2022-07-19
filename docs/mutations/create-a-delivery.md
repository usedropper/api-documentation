---
sidebar_position: 1
---

# Create Delivery

Create delivery mutation is used to request a new delivery package for your user. 
to do this, you make a request to the newDelivery mutation by passing required parameters in the request body like `senderName` `senderAddress` ```recipent_name``` ```recipent_address``` and passing your API key in the request header.

Think about mutations like a post request in REST. 

### A Sample request to create new delivery
Let's write a simple mutation query to create a new delivery.


#### Mutation
```graphql
mutation newDelivery(
  $senderName: String,
  $senderAddress: jsonb!,
  $senderPhone: String,
  $recipientName: String,
  $recipientAddress: jsonb!,
  $recipientPhone: String,
  $weight: numeric,
  $fragile: Boolean,
  ) {
    insertDelivery(objects: [{
      senderPhone: $senderPhone,
      senderName: $senderName,
      senderAddress: $senderAddress,
      recipientPhone: $recipientPhone,
      recipientName: $recipientName,
      recipientAddress: $recipientAddress,
      weight: $weight,
      fragile: $fragile,
    }]) {
    returning {
      trackingId
    }
  }
}
```

#### Variables
```graphql
{
  "senderName": "Aisha Fatima",
  "senderPhone": "+2348012345678",
  "senderAddress": {
    "addr_line1": "10 Lekki St",
    "addr_line2": "Ajao Estate",
    "city": "Victoria Island",
    "state": "Lagos",
    "country": "Nigeria",
    "postal_code": ""
  },
  "recipientName": "Godwin Anyigbo",
  "recipientPhone": "+2348087654321",
  "recipientAddress": {
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

### Sample Successful Response
We'll then receive the following response.
```graphql
{
  "data": {
    "insertDelivery": {
      "returning": [
        {
          "trackingId": "a15e5abb-7443-48eb-beaa-1a6a10978b7c"
        }
      ]
    }
  }
}
```