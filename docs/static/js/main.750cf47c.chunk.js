(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{118:function(t,e){},120:function(t,e){},130:function(t,e){},132:function(t,e){},159:function(t,e){},161:function(t,e){},162:function(t,e){},167:function(t,e){},169:function(t,e){},188:function(t,e){},200:function(t,e){},203:function(t,e){},207:function(t,e,n){},209:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(7),r=n(105),i=n.n(r),u=n(18),o=(n(114),n(107)),s=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(o.a)(t))})),s(""))},children:Object(c.jsx)("input",{className:"animate__heartBeat",type:"text",value:i,onChange:function(t){s(t.target.value)}})})},j=n(108),f=n(55),d=n.n(f),l=n(106),p=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,c,a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&api_key=3phRtKSzs8Rvo1ekKLa7zpR4eOcMxcmi&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.id,n=t.title,a=t.url;return console.log(e,n,a),Object(c.jsxs)("div",{className:"card animate__animated animate__bounceIn",children:[Object(c.jsx)("img",{src:a,alt:n}),Object(c.jsx)("p",{children:n})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){return r({data:t,loading:!1})}))}),[t]),c}(e),r=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h3",{children:[" ",e]}),i&&Object(c.jsx)("p",{children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(c.jsx)(b,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(a.useState)(["Dragon Ball F"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{className:"animate__animated animate__bounce",children:"GifExpertApp"}),Object(c.jsx)(s,{setCategories:r}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(m,{category:t},t)}))})]})};n(207),n(208);i.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.750cf47c.chunk.js.map