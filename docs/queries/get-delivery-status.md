---
sidebar_position: 4
---

# Get Delivery Status
You can fetch a delivery with a given `tracking_id`.

Let's create a mutation to fetch a delivery using a sample tracking ID in this example.

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
