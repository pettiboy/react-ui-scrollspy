(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(3),c=n.n(o),l=(n(9),n(0)),s=function(e){var t=e.children,n=e.backgroundColor,r=void 0===n?"rgb(255,255,255)":n,i=e.id,o={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:r};return Object(l.jsx)("div",{id:i,style:o,children:t})},a=function(e){var t=function(e){e.preventDefault();var t=window.document.getElementById(e.currentTarget.href.split("#")[1]);t&&t.scrollIntoView({behavior:"smooth"})};return Object(l.jsx)("div",{style:{position:"fixed",backgroundColor:"beige",width:"100%"},children:Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("a",{onClick:function(e){return t(e)},href:"#orange",children:Object(l.jsx)("div",{"data-to-scrollspy-id":"orange",className:"ss-item",children:"orange"})}),Object(l.jsx)("a",{onClick:function(e){return t(e)},href:"#brown",children:Object(l.jsx)("div",{"data-to-scrollspy-id":"brown",className:"ss-item",children:"brown"})}),Object(l.jsx)("a",{onClick:function(e){return t(e)},href:"#blue",children:Object(l.jsx)("div",{"data-to-scrollspy-id":"blue",className:"ss-item",children:"blue"})}),Object(l.jsx)("a",{onClick:function(e){return t(e)},href:"#green",children:Object(l.jsx)("div",{"data-to-scrollspy-id":"green",className:"ss-item",children:"green"})})]})})},d=n(4),u=n.n(d);var f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(a,{}),Object(l.jsxs)(u.a,{scrollThrottle:100,children:[Object(l.jsx)(s,{id:"orange",backgroundColor:"orange",children:Object(l.jsx)("h1",{children:"Orange"})}),Object(l.jsx)(s,{id:"brown",backgroundColor:"brown",children:Object(l.jsx)("h1",{children:"Brown"})}),Object(l.jsx)(s,{id:"blue",backgroundColor:"blue",children:Object(l.jsx)("h1",{children:"Blue"})}),Object(l.jsx)(s,{id:"green",backgroundColor:"green",children:Object(l.jsx)("h1",{children:"Green"})})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),o(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()},4:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(11);function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var o=i(r),c=function(e,t,n,r){var i=e.getBoundingClientRect(),o=r?.5*r.offsetHeight:.5*window.innerHeight,c=r?r.offsetHeight:window.innerHeight;return i.top+o+t>=0&&i.bottom-o-n<=c},l=function(e,t){var n=!1;return function(){n||(e(),n=!0,setTimeout((function(){n=!1}),t))}};t.default=function(e){var t,n=e.children,i=e.navContainerRef,s=e.parentScrollContainerRef,a=e.scrollThrottle,d=void 0===a?300:a,u=e.onUpdateCallback,f=e.offsetTop,b=void 0===f?0:f,h=e.offsetBottom,j=void 0===h?0:h,v=e.useDataAttribute,g=void 0===v?"to-scrollspy-id":v,O=e.activeClass,p=void 0===O?"active-scroll-spy":O,x=r.useRef(null),m=r.useState(),y=m[0],w=m[1],C=r.useRef("");r.useEffect((function(){var e;w(i?null===(e=i.current)||void 0===e?void 0:e.querySelectorAll("[data-"+g+"]"):document.querySelectorAll("[data-"+g+"]"))}),[i]),r.useEffect((function(){k()}),[y]);var k=function(){var e=x.current;if(e&&y)for(var t=function(t){var n=e.children.item(t);if(s?c(n,b,j,null===s||void 0===s?void 0:s.current):c(n,b,j)){var r=n.id;return C.current===r?{value:void 0}:(y.forEach((function(e){var t=e.getAttribute("data-"+g);e.classList.contains(p)&&e.classList.remove(p),t!==r||e.classList.contains(p)||(e.classList.add(p),u&&u(r),C.current=r,window.history.pushState({},"","#"+r))})),"break")}},n=0;n<e.children.length;n++){var r=t(n);if("object"===typeof r)return r.value;if("break"===r)break}};return s?null===(t=s.current)||void 0===t||t.addEventListener("scroll",l(k,d)):window.addEventListener("scroll",l(k,d)),o.createElement("div",{ref:x},n)}},9:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.57e9863b.chunk.js.map