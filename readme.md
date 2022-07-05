
# 



## What is GraphQL?



GraphQL is a strongly typed Api query language that provides an alternative to REST. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. This avoids both the problems of over and under-fetching data, while also allowing for a more powerful and flexible Api.

Before reading these docs and using the Api its highly recommended you familiarise yourself with GraphQL by reading the [official GraphQL documentation](http://graphql.org/learn/queries/)

# 





## UseDropper API Documentation
This documentation allows Users to interact with the UseDropper API in order to create or fetch deliveries.

### Endpoints 

### **Create Delivery**
This endpoint creates a new delivery object in the UseDropper database. It accepts mutations with the following fields:

 - sender_email
 - sender_name
 - sender_address
 - recipient_email
 - recipient_name
 - recipient_address
 - weight
 - fragile

### Let's write a simple query to create a new delivery.

#### Headers

You'll also need to include your API key, as shown here.

    {
      "content-type": "application/json",
      "x-dropper-api-key": "3A9D59EDAD564202BC7904B40D3CAE2A"
    }

#### Mutation
```graphql
mutation newDelivery(
  $sender_name: String,
  $sender_address: jsonb!,
  $sender_email: String,
  $recipient_name: String,
  $recipient_address: jsonb!,
  $recipient_email: String,
  $weight: numeric,
  $fragile: Boolean,
) {
  insert_delivery(objects: [{
    sender_email: $sender_email,
    sender_name: $sender_name,
    sender_address: $sender_address,
    recipient_email: $recipient_email,
    recipient_name: $recipient_name,
    recipient_address: $recipient_address,
    weight: $weight,
    fragile: $fragile,
  }]) {
    returning {
      status
      tracking_id
    }
  }
}
```

#### Variables
```graphql
{
  "sender_name": "",
  "sender_email": "",
  "sender_address": {
    "addr_line1": "",
    "addr_line2": "",
    "city": "",
    "state": "",
    "country": "",
    "postal_code": ""
  },
  "recipient_name": "",
  "recipient_email": "",
  "recipient_address": {
    "addr_line1": "",
    "addr_line2": "",
    "city": "",
    "state": "",
    "country": "",
    "postal_code": ""
  },
  "weight": 3,
  "fragile": true
}
```
#### We'll then receive the following response.
```graphql
{
  "data": {
    "insert_delivery": {
      "returning": [
        {
          "status": "PENDING",
          "tracking_id": "a15e5abb-7443-48eb-beaa-1a6a10946b7c"
        }
      ]
    }
  }
}
```



 ### **Fetch Delivery**
This endpoint fetches deliveries based on provided tracking_id | from the usedropper database.

### Let's create a mutation to fetch a delivery using a sample tracking ID in this example.
#### Headers
```graphql
    {
      "content-type": "application/json",
      "x-dropper-api-key": "3A9D59EDAD564202BC7904B40D3CAE2A"
    }
```
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




