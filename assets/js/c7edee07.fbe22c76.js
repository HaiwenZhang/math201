"use strict";(self.webpackChunkmath_101=self.webpackChunkmath_101||[]).push([[9770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),y=o,d=s["".concat(l,".").concat(y)]||s[y]||m[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"tensor",sidebar_position:4},i="4. \u5f20\u91cf(Tensor): \u591a\u7ef4\u6570\u7ec4",p={unversionedId:"python/numpy/tensor",id:"python/numpy/tensor",title:"4. \u5f20\u91cf(Tensor): \u591a\u7ef4\u6570\u7ec4",description:"\u672c\u6587\u53c2\u8003:",source:"@site/docs/python/numpy/tensor.md",sourceDirName:"python/numpy",slug:"/python/numpy/tensor",permalink:"/math201/docs/python/numpy/tensor",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"tensor",sidebar_position:4},sidebar:"pythonSidebar",previous:{title:"3. \u77e9\u9635(Matrix): \u4e8c\u7ef4\u6570\u7ec4",permalink:"/math201/docs/python/numpy/matrix"},next:{title:"5. \u5e7f\u64ad(Broadcast)",permalink:"/math201/docs/python/numpy/broadcast"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"4-\u5f20\u91cftensor-\u591a\u7ef4\u6570\u7ec4"},"4. \u5f20\u91cf(Tensor): \u591a\u7ef4\u6570\u7ec4"),(0,o.kt)("p",null,"\u672c\u6587\u53c2\u8003: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d"},"NumPy Illustrated: The Visual Guide to NumPy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://jalammar.github.io/visual-numpy/"},"A Visual Intro to NumPy and Data Representation")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/"},"\u300aPython Data Science Handbook\u300b"))))}s.isMDXComponent=!0}}]);