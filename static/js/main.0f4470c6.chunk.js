(this.webpackJsonpreact0=this.webpackJsonpreact0||[]).push([[0],{15:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(11),c=t.n(l),o=t(1),i=t(4),u=t.n(i);function m(e){return 9*function(e){return e-272.15}(e)/5+32}function s(e,n){var t=Math.pow(10,n);return Math.round(e*t)/t}var d=t(5),p=t.n(d);function h(e){var n=function(e){var n=Object(a.useState)(),t=Object(o.a)(n,2),r=t[0],l=t[1];return Object(a.useEffect)((function(){!function(){var n,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat("3641e4dc0ad8580be2a1f8a82fa268a2")));case 2:return n=a.sent,a.next=5,u.a.awrap(n.json());case 5:t=a.sent,l(t);case 7:case"end":return a.stop()}}))}()}),[e]),r}(e.location);return void 0===n?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("title",null,"Loading...")),r.a.createElement("h1",null,"Loading...")):void 0!==n.message?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("title",null,"Error - ",n.cod)),r.a.createElement("h1",null,"Error in fetching openweather API: ",n.cod),r.a.createElement("pre",null,n.message)):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("title",null,n.name,"'s Weather"),r.a.createElement("link",{rel:"icon",href:"http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png")})),r.a.createElement("div",null,r.a.createElement("div",null,"Weather: ",n.weather[0].main),r.a.createElement("div",null,"Description: ",n.weather[0].description),r.a.createElement("div",null,"Humidity: ",n.main.humidity,"%"),r.a.createElement("div",null,"Wind Speed: ",s(2.237*n.wind.speed,2)," miles/hour"),r.a.createElement("div",null,"Temp: ",s(m(n.main.temp),2),"\xb0F"),r.a.createElement("div",null,"Feels Like: ",s(m(n.main.feels_like),2),"\xb0F"),r.a.createElement("div",null,"Min Temp: ",s(m(n.main.temp_min),2),"\xb0F"),r.a.createElement("div",null,"Max Temp: ",s(m(n.main.temp_max),2),"\xb0F"),r.a.createElement("div",null,"Location: ",n.name),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png"),alt:n.weather[0].description})))}var E=t(2),f=t(3);function v(){var e=Object(E.a)(["\nbody, html, #root {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    height: 100%;\n    overflow: hidden;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n}\n"]);return v=function(){return e},e}var g=Object(f.a)(v());function w(){var e=Object(E.a)(["\n    height: 100%;\n    overflow: auto;\n"]);return w=function(){return e},e}var b=f.b.div(w());c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(b,null,r.a.createElement((function(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Location",value:t,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&m(t)}}),r.a.createElement("button",{onClick:function(){return m(t)}},"Search")),r.a.createElement(h,{location:u}))}),null))),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0f4470c6.chunk.js.map