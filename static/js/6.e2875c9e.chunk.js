(this["webpackJsonptest-task1"]=this["webpackJsonptest-task1"]||[]).push([[6],{105:function(t,e,r){t.exports={title:"PostView_title__2_VPz",postsContainer:"PostView_postsContainer__1_gO1"}},106:function(t,e,r){t.exports={paragraf:"Post_paragraf__25n-X"}},151:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return x}));var n=r(93),s=r.n(n),a=r(94),c=r(7),o=r(0);function i(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Error");case 5:return t.abrupt("return",e.json());case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(s.a.mark((function t(e){var r,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(e));case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Error");case 5:return t.next=7,r.json();case 7:if(0!==(n=t.sent).length){t.next=10;break}throw new Error("User with id:".concat(e," not found"));case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=r(105),h=r(150),j=r(81),b=r(106),d=r(3);function m(t){var e=t.props,r=e.id,n=e.title,s=e.body;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["#",r,". ",n]}),Object(d.jsx)("p",{className:b.paragraf,children:s})]})}function x(){var t=Object(o.useState)(null),e=Object(c.a)(t,2),r=e[0],n=e[1],u=Object(o.useState)(null),f=Object(c.a)(u,2),b=f[0],x=f[1];Object(o.useEffect)((function(){return i().then((function(t){return n(t)})).catch((function(t){return console.error(t.message)})),function(){i()}}),[]);var O=function(){var t=Object(a.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),p(e.target.id.value).then((function(t){return x(t)})).catch((function(t){return alert(t.message)})),e.target.reset();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Posts"}),Object(d.jsxs)("form",{onSubmit:O,children:[Object(d.jsx)("h3",{className:l.title,children:"Find posts by user's id"}),Object(d.jsx)(h.a,{type:"number",id:"id",label:"Enter number from 1 to 10",variant:"outlined",size:"small",margin:"normal"})," ",Object(d.jsx)("br",{}),Object(d.jsx)(j.a,{type:"submit",variant:"contained",size:"medium",children:"Find"})]}),Object(d.jsx)("div",{className:l.postsContainer,children:b?b.map((function(t){return Object(d.jsx)(m,{props:t},t.id)})):r&&r.map((function(t){return Object(d.jsx)(m,{props:t},t.id)}))})]})}}}]);
//# sourceMappingURL=6.e2875c9e.chunk.js.map