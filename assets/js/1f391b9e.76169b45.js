"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[85],{2503:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),l=t(7294),r=t(6010),i=t(5999),c=t(6668);const s="anchorWithStickyNavbar_LWe7",o="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();return"h1"!==n&&t?l.createElement(n,(0,a.Z)({},m,{className:(0,r.Z)("anchor",d?o:s),id:t}),m.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.Z)({},m,{id:void 0}))}},76:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7294),l=t(3905),r=t(7462),i=t(5742);var c=t(6852);var s=t(9960);var o=t(6010),m=t(2389),d=t(6043);const u="details_lb9f",f="isBrowser_bmU9",v="collapsibleContent_i85q";function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function g(e){let{summary:n,children:t,...l}=e;const i=(0,m.Z)(),c=(0,a.useRef)(null),{collapsed:s,setCollapsed:g}=(0,d.u)({initialState:!l.open}),[E,N]=(0,a.useState)(l.open);return a.createElement("details",(0,r.Z)({},l,{ref:c,open:E,"data-collapsed":s,className:(0,o.Z)(u,i&&f,l.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;p(n)&&h(n,c.current)&&(e.preventDefault(),s?(g(!1),N(!0)):g(!0))}}),null!=n?n:a.createElement("summary",null,"Details"),a.createElement(d.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),N(!e)}},a.createElement("div",{className:v},t)))}const E="details_b_Ee";function N(e){let{...n}=e;return a.createElement(g,(0,r.Z)({},n,{className:(0,o.Z)("alert alert--info",E,n.className)}))}var L=t(2503);function Z(e){return a.createElement(L.Z,e)}const _="containsTaskList_mC6p";const b="img_ev3q";const C={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(i.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(c.Z,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){var n;return a.createElement(c.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>{var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(N,(0,r.Z)({},e,{summary:t}),l)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(n=e.className,(0,o.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&_))}));var n},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(n=e.className,(0,o.Z)(n,b))}));var n},h1:e=>a.createElement(Z,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(Z,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(Z,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(Z,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(Z,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(Z,(0,r.Z)({as:"h6"},e))};function k(e){let{children:n}=e;return a.createElement(l.Zo,{components:C},n)}},4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(7294),l=t(6010),r=t(1944),i=t(5281),c=t(1622),s=t(76),o=t(9407);const m="mdxPageWrapper_j9I6";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(r.FG,{className:(0,l.Z)(null!=f?f:i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(r.d,{title:t,description:d}),a.createElement(c.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement(s.Z,null,a.createElement(n,null))),!v&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7462),l=t(7294);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}var c=t(6668);function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function o(e,n){var t;let{anchorTopOffset:a}=n;const l=e.find((e=>s(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(t=e[e.length-1])?t:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=o(c,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=l.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const p=(0,c.L)(),h=null!=m?m:p.tableOfContents.minHeadingLevel,g=null!=u?u:p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:h,maxHeadingLevel:g});return d((0,l.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:g}}),[s,o,h,g])),l.createElement(f,(0,a.Z)({toc:E,className:t,linkClassName:s},v))}},9407:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7462),l=t(7294),r=t(6010),i=t(3743);const c="tableOfContents_bqdL";function s(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",n)},l.createElement(i.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);