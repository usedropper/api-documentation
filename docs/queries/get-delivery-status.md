---
sidebar_position: 4
---

# Get Delivery Status
  
The Get Delivery query is used to fetch all details about a specific delivery.
To do this, you make a request by calling getDelivery query and passing `trackingId` 
as a parameter. 

Think about graphql queries like GET request in REST.

### Sample request to get delivery

Let's create a query to fetch a delivery using a sample tracking ID in this example.

#### Query
```graphql
query getDelivery($trackingId: uuid) {
  delivery(where: {trackingId: {_eq: $trackingId}}) {
    fragile
    senderName
    senderAddress
    recipientName
    recipientAddress
    weight
  }
}
```
#### Variables
```graphql
{
  "trackingId": "a15e5abb-7443-48eb-beaa-1a6a10946b7c"
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
        "senderName": "",
        "senderAddress": {
          "city": "",
          "state": "",
          "country": "",
          "addr_line1": "",
          "addr_line2": "",
          "postal_code": ""
        },
        "recipientName": "",
        "recipientAddress": {
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
