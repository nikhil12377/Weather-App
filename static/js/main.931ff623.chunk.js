(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{19:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);t(0);var n=t(4),a=t.n(n),s=t(2),i=(t(19),t(20),function(e){return function(c){fetch("https://api.weatherapi.com/v1/current.json?key=7293607f61b848339b9110324212608&q=".concat(e)).then((function(e){return e.json()})).then((function(e){c({type:"UPDATE_PLACE_DATA",payload:e})}))}}),r=t(1);function l(){var e=Object(s.c)((function(e){return e.place})),c=Object(s.c)((function(e){return e.theme})),t=Object(s.b)();return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12 form",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("input",{type:"text",placeholder:"enter city name",value:e,onKeyUp:function(c){"Enter"===c.key&&t(i(e))},onChange:function(e){t(function(e){return{type:"UPDATE_PLACE",payload:e}}(e.target.value))}}),Object(r.jsx)("button",{className:c?"btn btn-light":"btn btn-dark",onClick:function(){t(i(e))},children:"search"})]})})})})}function d(){var e=Object(s.c)((function(e){return e.placeData})),c=Object(s.c)((function(e){return e.theme}));return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"offset-md-4 col-12 col-md-4",children:e.location?Object(r.jsxs)("div",{className:c?"card Dark":"card",children:[Object(r.jsx)("img",{src:e.current.condition.icon,alt:""}),Object(r.jsxs)("div",{className:"temp",children:[e.current.temp_c,"\xb0"]}),Object(r.jsx)("div",{className:"desc",children:e.current.condition.text}),Object(r.jsx)("div",{className:"place",children:e.location.name}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row whp",children:[Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("div",{className:"title",children:"Wind Now"}),Object(r.jsxs)("div",{className:"data",children:[e.current.wind_kph,Object(r.jsx)("span",{className:"unit",children:"KM"})]})]}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("div",{className:"title",children:"Humidity"}),Object(r.jsxs)("div",{className:"data",children:[e.current.humidity,Object(r.jsx)("span",{className:"unit",children:"%"})]})]}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("div",{className:"title",children:"Cloud"}),Object(r.jsxs)("div",{className:"data",children:[e.current.cloud,Object(r.jsx)("span",{className:"unit",children:"%"})]})]})]})})]}):Object(r.jsx)("h2",{className:"heading",children:"Enter the name of place"})})})})})}function j(){var e=Object(s.c)((function(e){return e.theme})),c=Object(s.b)();return Object(r.jsx)("div",{className:"toggle-theme",children:Object(r.jsx)("button",{className:e?"btn btn-light":"btn btn-dark",onClick:function(){c({type:"TOGGLE_THEME"})},children:e?"Light":"Dark"})})}function o(){var e=Object(s.c)((function(e){return e.theme}));return Object(r.jsxs)("div",{className:e?"App Dark":"App Light",children:[Object(r.jsx)(j,{}),Object(r.jsx)(l,{}),Object(r.jsx)(d,{})]})}var b=t(3),h=t(8),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return"UPDATE_PLACE_DATA"===c.type?c.payload:e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0;return"UPDATE_PLACE"===c.type?c.payload:e},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],c=arguments.length>1?arguments[1]:void 0;return"TOGGLE_THEME"===c.type?!e:e},v=Object(b.b)({place:m,placeData:u,theme:O}),p=Object(b.c)(v,Object(b.a)(h.a));a.a.render(Object(r.jsx)(s.a,{store:p,children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.931ff623.chunk.js.map