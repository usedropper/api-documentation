---
sidebar_position: 4
---

# Get Delivery Status
  
Get Delivery query is used to get all detials of a particular delivery.
To do this, you make a query request by calling getDelivery endpoint and passing `tracking_id` 
as a parameter. 

Think about graphql queries like GET request in REST.

### Sample request to get delivery

Let's create a query to fetch a delivery using a sample tracking ID in this example.

#### Query
```graphql
query getDelivery($tracking_id: uuid) {
  delivery(where: {tracking_id: {_eq: $tracking_id}}) {
    fragile
    sender_name
    sender_address
    recipient_name
    recipient_address
    weight
  }
}
```
#### Variables
```graphql
{
  "tracking_id": "a15e5abb-7443-48eb-beaa-1a6a10946b7c"
}
```

### Sample Successful Response

#### This request will return the following JSON response, which we can get the new id and values from.
```graphql
{
  "data": {
    "delivery": [
      {
        "fragile": true,
        "sender_name": "",
        "sender_address": {
          "city": "",
          "state": "",
          "country": "",
          "addr_line1": "",
          "addr_line2": "",
          "postal_code": ""
        },
        "recipient_name": "",
        "recipient_address": {
          "city": "",
          "state": "",
          "country": "",
          "addr_line1": "",
          "addr_line2": "",
          "postal_code": ""
        },
        "weight": 3
      }
    ]
  }
}
```
