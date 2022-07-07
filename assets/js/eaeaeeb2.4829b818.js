"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Get Delivery Status",l={unversionedId:"queries/get-delivery-status",id:"queries/get-delivery-status",title:"Get Delivery Status",description:"You can fetch a delivery with a given tracking_id.",source:"@site/docs/queries/get-delivery-status.md",sourceDirName:"queries",slug:"/queries/get-delivery-status",permalink:"/api-documentation/docs/queries/get-delivery-status",draft:!1,editUrl:"https://github.com/usedropper/api-documentation/blob/main/docs/queries/get-delivery-status.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Queries",permalink:"/api-documentation/docs/category/queries"}},s={},c=[{value:"Query",id:"query",level:4},{value:"Variables",id:"variables",level:4},{value:"This request will return the following JSON response, which we can get the new id and values from.",id:"this-request-will-return-the-following-json-response-which-we-can-get-the-new-id-and-values-from",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-delivery-status"},"Get Delivery Status"),(0,a.kt)("p",null,"You can fetch a delivery with a given ",(0,a.kt)("inlineCode",{parentName:"p"},"tracking_id"),"."),(0,a.kt)("p",null,"Let's create a mutation to fetch a delivery using a sample tracking ID in this example."),(0,a.kt)("h4",{id:"query"},"Query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query getDelivery($tracking_id: uuid) {\n  delivery(where: {tracking_id: {_eq: $tracking_id}}) {\n    fragile\n    sender_name\n    sender_address\n    recipient_name\n    recipient_address\n    weight\n  }\n}\n")),(0,a.kt)("h4",{id:"variables"},"Variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "tracking_id": "a15e5abb-7443-48eb-beaa-1a6a10946b7c"\n}\n')),(0,a.kt)("h4",{id:"this-request-will-return-the-following-json-response-which-we-can-get-the-new-id-and-values-from"},"This request will return the following JSON response, which we can get the new id and values from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "delivery": [\n      {\n        "fragile": true,\n        "sender_name": "",\n        "sender_address": {\n          "city": "",\n          "state": "",\n          "country": "",\n          "addr_line1": "",\n          "addr_line2": "",\n          "postal_code": ""\n        },\n        "recipient_name": "",\n        "recipient_address": {\n          "city": "",\n          "state": "",\n          "country": "",\n          "addr_line1": "",\n          "addr_line2": "",\n          "postal_code": ""\n        },\n        "weight": 3\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0}}]);