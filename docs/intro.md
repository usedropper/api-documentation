---
sidebar_position: 0
sidebar_label: "Introduction"
---

# Getting Started

:::tip
Before reading these docs and using the API, it is highly recommended you familiarise yourself with GraphQL by reading the [official GraphQL documentation](http://graphql.org/learn/queries/).
:::

<br/>

### API Basics
The Dropper API gives you access to extensive features to make and track new deliveries via a **single graphQL endpoint**. It is organized around the main resources you would be interacting with - with a few notable exceptions.

<br/>

### Sample Requests
We provide sample API calls using cURL and NodeJS. For the sample requests, all you need to do is insert your specific parameters, and with cURL you can test the calls from the command line. See this tutorial on [using cURL with graphql APIs](https://www.maxivanov.io/make-graphql-requests-with-curl/). You can also use [Postman](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/#using-postmans-built-in-support-for-graphql) if you aren't familiar with cURL. Postman is an easy-to-use API development environment for making HTTP requests.

<br/>

### Requests and Response
Both request body data and response data are formatted as JSON. Content type for responses will always be `application/json`. Generally, all responses will be in the following format:

```json title="Response Format"
{
  "status": [boolean],  // Only true if the details provided could be processed and no error occured while processing
  "data": [object]    // contains actionable result of processing if present
}
```
The data key is where you want to look at for the result of your request. It can either be an object, or an array depending on the request made. For instance, a request to retrieve a single delivery will return a delivery object in the data key, while the key would be an array of delivieries if a list is requested instead.

