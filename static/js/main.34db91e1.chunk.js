(this["webpackJsonptest-task1"]=this["webpackJsonptest-task1"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(26),c=n.n(s),a=n(30),o=(n(90),n(8)),i=n(69),u=n(13),j=n(70),l=n(150),b=n(2),p=function(e){var t=e.props,n=t.isLoggedIn,s=t.user,c=t.handleLogOut,o=Object(u.g)();return Object(r.useEffect)((function(){!n&&o("/")}),[n,o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:j.nav,children:n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(a.b,{to:"/posts",children:Object(b.jsx)("span",{children:"Posts"})}),Object(b.jsx)(a.b,{to:"/inputs",children:Object(b.jsx)("span",{children:"Inputs"})}),Object(b.jsxs)("span",{children:["User: ",Object(b.jsx)("b",{children:s})]}),Object(b.jsx)(a.b,{to:"/",children:Object(b.jsx)(l.a,{onClick:c,children:"Log out"})})]}):Object(b.jsx)(a.b,{to:"/",children:Object(b.jsx)("span",{children:"Home"})})})})},d=n(72),h=n(34),O=n(73),f=n.n(O),x=n(152),m=function(e){return Object(b.jsx)(f.a,{mask:"+38(099) 999 99 99",alwaysShowMask:!0,id:"phone",maskChar:null,value:e.value,onChange:e.onChange,placeholder:"Enter your phone number",children:function(e){return Object(b.jsx)(x.a,Object(d.a)({className:h.indent,required:!0},e))}})};function v(e){var t=e.handleSubmit,n=Object(r.useState)(""),s=Object(o.a)(n,2),c=s[0],a=s[1],i=Object(r.useState)(""),u=Object(o.a)(i,2),j=u[0],p=u[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:h.centered,children:"Please sign up or log in to continue"}),Object(b.jsxs)("form",{className:h.centered,onSubmit:function(e){e.preventDefault(),c.length<18||j.length<4?alert("Enter valid phone number or password"):(t({phone:c,password:j}),a(""),p(""))},children:[Object(b.jsx)("label",{className:h.indent,htmlFor:"phone",children:"Phone"}),Object(b.jsx)(m,{value:c,onChange:function(e){var t=e.target.value;return a(t)}}),Object(b.jsx)("label",{className:h.indent,htmlFor:"password",children:"Password"}),Object(b.jsx)(x.a,{className:h.indent,inputProps:{pattern:"[A-Za-z0-9]+",title:"English letters and numbers only, no punctuation or special characters. Minimum 4 characters"},type:"password",name:"password",placeholder:"Enter your password",id:"password",required:!0,onChange:function(e){var t=e.target.value;return p(t)}}),Object(b.jsx)(l.a,{variant:"contained",type:"submit",children:"Send"})]})]})}var g=n(31),_=n.n(g),w=n(42);function y(){return k.apply(this,arguments)}function k(){return(k=Object(w.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Error");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return N.apply(this,arguments)}function N(){return(N=Object(w.a)(_.a.mark((function e(t){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error");case 5:return e.next=7,n.json();case 7:if(0!==(r=e.sent).length){e.next=10;break}throw new Error("User with id:".concat(t," not found"));case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=n(58),C=n(149),P=n(75);function F(e){var t=e.props,n=t.id,r=t.title,s=t.body;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["#",n,". ",r]}),Object(b.jsx)("p",{className:P.paragraf,children:s})]})}function I(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(null),a=Object(o.a)(c,2),i=a[0],u=a[1];Object(r.useEffect)((function(){return y().then((function(e){return s(e)})).catch((function(e){return console.error(e.message)})),function(){y()}}),[]);var j=function(){var e=Object(w.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E(t.target.id.value).then((function(e){return u(e)})).catch((function(e){return alert(e.message)})),t.target.reset();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Posts"}),Object(b.jsxs)("form",{onSubmit:j,children:[Object(b.jsx)("h3",{className:S.title,children:"Find posts by user's id"}),Object(b.jsx)(C.a,{type:"number",id:"id",label:"Enter number from 1 to 10",variant:"outlined",size:"small",margin:"normal"})," ",Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{type:"submit",variant:"contained",size:"medium",children:"Find"})]}),Object(b.jsx)("div",{className:S.postsContainer,children:i?i.map((function(e){return Object(b.jsx)(F,{props:e},e.id)})):n&&n.map((function(e){return Object(b.jsx)(F,{props:e},e.id)}))})]})}var L=n(59),V=n(60),A=n.n(V);n(114);function z(){var e=[3,7,14,54,70],t=Object(r.useState)(1e3),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(3),i=Object(o.a)(a,2),u=i[0],j=i[1];Object(r.useEffect)((function(){s>=1e4&&u<54&&j(54),s<1e4&&u>14&&j(14)}),[s,u]);return Object(b.jsxs)("form",{className:L.form,children:[Object(b.jsx)(A.a,{step:1e3,value:s,minValue:1e3,maxValue:2e4,onChange:function(e){return c(e)}}),Object(b.jsx)("div",{className:L.container,children:Object(b.jsx)(A.a,{step:1,minValue:3,maxValue:70,value:u,onChange:function(t){return function(e,t,n){e<1e4?t>1&&14>t?j(n[0]):t>14&&28>t?j(n[1]):t>28&&42>t&&j(n[2]):e>1e4&&(t>42&&56>t?j(n[3]):t>56&&70>t&&j(n[4]))}(s,t,e)}})})]})}function J(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(o.a)(c,2),j=a[0],l=a[1],d=Object(u.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{props:{isLoggedIn:n,user:j,handleLogOut:function(){return s(!1),d("/")}}}),Object(b.jsxs)("div",{className:i.container,children:[Object(b.jsxs)(u.d,{children:[!n&&Object(b.jsx)(u.b,{exact:!0,path:"/",element:Object(b.jsx)(v,{handleSubmit:function(e){return s(!0),l(e.phone),d("/posts")}})}),n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{path:"/posts",element:Object(b.jsx)(I,{})}),Object(b.jsx)(u.b,{path:"/inputs",element:Object(b.jsx)(z,{})})]})]}),Object(b.jsx)(u.a,{})]})]})}c.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))},34:function(e,t,n){e.exports={indent:"AuthView_indent__1BPIL",centered:"AuthView_centered__TLIt6"}},58:function(e,t,n){e.exports={title:"PostView_title__2_VPz",postsContainer:"PostView_postsContainer__1_gO1"}},59:function(e,t,n){e.exports={form:"Inputs_form__1Jny2",container:"Inputs_container__1A_Kl"}},69:function(e,t,n){e.exports={container:"App_container__2LLR7"}},70:function(e,t,n){e.exports={nav:"Navigation_nav__1rKWk"}},75:function(e,t,n){e.exports={paragraf:"Post_paragraf__25n-X"}},90:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.34db91e1.chunk.js.map