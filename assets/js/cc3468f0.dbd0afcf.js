"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[588],{328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>y,default:()=>A,endpoint:()=>I,frontMatter:()=>k,metadata:()=>f,toc:()=>w});var n=a(7462),o=a(7294),r=a(3905),l=a(6010),i=a(2389),s=a(7392),u=a(7094),c=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:r,block:i,defaultValue:m,values:h,groupId:v,className:b}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,u.U)(),[I,T]=(0,o.useState)(f),A=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=v){const e=N[v];null!=e&&e!==I&&k.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,a=A.indexOf(t),n=k[a].value;n!==I&&(x(t),T(n),null!=v&&w(v,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=A.indexOf(e.currentTarget)+1;a=null!=(n=A[t])?n:A[0];break}case"ArrowLeft":{var o;const t=A.indexOf(e.currentTarget)-1;a=null!=(o=A[t])?o:A[A.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>A.push(e),onKeyDown:E,onFocus:_,onClick:_},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),r?(0,o.cloneElement)(g.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function h(e){const t=(0,i.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}const v="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(v,n),hidden:a},t)}a(6852);var g=a(4996);const k={sidebar_position:1,sidebar_label:"Authentication"},y="Authentication",f={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"",source:"@site/docs/authentication.mdx",sourceDirName:".",slug:"/authentication",permalink:"/docs/authentication",draft:!1,editUrl:"https://github.com/usedropper/api-documentation/blob/main/docs/authentication.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Authentication"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Mutations",permalink:"/docs/category/mutations"}},N={},w=[{value:"How do i get my API key?",id:"how-do-i-get-my-api-key",level:2}],I="https://api.usedropper.com/v1/graphql",T={toc:w,endpoint:I};function A(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Authenticate your API calls by including your API key in the Authorization header of every request you make.\nYou can manage your API keys from the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.usedropper.com/"},"dashboard"),"."),(0,r.kt)("h2",{id:"how-do-i-get-my-api-key"},"How do i get my API key?"),(0,r.kt)("p",null,"To get and manage your API Key, You request for access to ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.usedropper.com/"},"dropper developer dashboard"),"\nand login credentials will be provided for you.\nOnce logged in, navigate to account and then copy your keys."),(0,r.kt)("img",{src:(0,g.Z)("/img/dev-dashboard.png")}),";",(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Secure your API key.\nDo not commit your API keys to git, or use them plainly in client-side code."))),(0,r.kt)("br",null),"Authorization headers should be in the following format:",(0,r.kt)(h,{groupId:"formats",defaultValue:"js",values:[{label:"cURL",value:"curl"},{label:"NodeJS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(b,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const { GraphQLClient } = require("graphql-request");\n\nconst client = new GraphQLClient("https://api.usedropper.com/v1/graphql", {\n  headers: {\n    content-type: "application/json",\n    // highlight-next-line\n    x-dropper-api-key: process.env.YOUR_API_KEY\n  },\n});\n'))),(0,r.kt)(b,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.usedropper.com/v1/graphql \\\n-H "content-type: application/json" \\\n# highlight-next-line\n-H "x-dropper-api-key: <YOUR_API_KEY>"\n')))))}A.isMDXComponent=!0}}]);