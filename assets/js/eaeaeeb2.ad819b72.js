"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=a,m=p["".concat(o,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},s="Get Delivery Status",l={unversionedId:"queries/get-delivery-status",id:"queries/get-delivery-status",title:"Get Delivery Status",description:"The Get Delivery query is used to fetch all details about a specific delivery.",source:"@site/docs/queries/get-delivery-status.md",sourceDirName:"queries",slug:"/queries/get-delivery-status",permalink:"/docs/queries/get-delivery-status",draft:!1,editUrl:"https://github.com/usedropper/api-documentation/blob/main/docs/queries/get-delivery-status.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Queries",permalink:"/docs/category/queries"}},o={},u=[{value:"Sample request to get delivery",id:"sample-request-to-get-delivery",level:3},{value:"Query",id:"query",level:4},{value:"Variables",id:"variables",level:4},{value:"Sample Successful Response",id:"sample-successful-response",level:3},{value:"This request will return the following JSON response, which we can get the new id and values from.",id:"this-request-will-return-the-following-json-response-which-we-can-get-the-new-id-and-values-from",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-delivery-status"},"Get Delivery Status"),(0,a.kt)("p",null,"The Get Delivery query is used to fetch all details about a specific delivery.\nTo do this, you make a request by calling getDelivery query and passing ",(0,a.kt)("inlineCode",{parentName:"p"},"tracking_id"),"\nas a parameter. "),(0,a.kt)("p",null,"Think about graphql queries like GET request in REST."),(0,a.kt)("h3",{id:"sample-request-to-get-delivery"},"Sample request to get delivery"),(0,a.kt)("p",null,"Let's create a query to fetch a delivery using a sample tracking ID in this example."),(0,a.kt)("h4",{id:"query"},"Query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query getDelivery($tracking_id: uuid) {\n  delivery(where: {tracking_id: {_eq: $tracking_id}}) {\n    fragile\n    sender_name\n    sender_address\n    recipient_name\n    recipient_address\n    weight\n  }\n}\n")),(0,a.kt)("h4",{id:"variables"},"Variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "tracking_id": "a15e5abb-7443-48eb-beaa-1a6a10946b7c"\n}\n')),(0,a.kt)("h3",{id:"sample-successful-response"},"Sample Successful Response"),(0,a.kt)("h4",{id:"this-request-will-return-the-following-json-response-which-we-can-get-the-new-id-and-values-from"},"This request will return the following JSON response, which we can get the new id and values from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "delivery": [\n      {\n        "fragile": true,\n        "sender_name": "",\n        "sender_address": {\n          "city": "",\n          "state": "",\n          "country": "",\n          "addr_line1": "",\n          "addr_line2": "",\n          "postal_code": ""\n        },\n        "recipient_name": "",\n        "recipient_address": {\n          "city": "",\n          "state": "",\n          "country": "",\n          "addr_line1": "",\n          "addr_line2": "",\n          "postal_code": ""\n        },\n        "weight": 3\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0}}]);