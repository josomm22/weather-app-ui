(this["webpackJsonpweather-app-ui"]=this["webpackJsonpweather-app-ui"]||[]).push([[0],{127:function(e,t,a){e.exports=a(217)},132:function(e,t,a){},188:function(e,t,a){var n={"./cloudy-day-1.svg":189,"./cloudy-day-2.svg":190,"./cloudy-day-3.svg":191,"./cloudy-night-1.svg":192,"./cloudy-night-2.svg":193,"./cloudy-night-3.svg":194,"./cloudy.svg":195,"./day.svg":196,"./night.svg":197,"./rainy-1.svg":198,"./rainy-2.svg":199,"./rainy-3.svg":200,"./rainy-4.svg":201,"./rainy-5.svg":202,"./rainy-6.svg":203,"./rainy-7.svg":204,"./snowy-1.svg":205,"./snowy-2.svg":206,"./snowy-3.svg":207,"./snowy-4.svg":208,"./snowy-5.svg":209,"./snowy-6.svg":210,"./thunder.svg":211,"./weather-sprite.svg":212,"./weather.svg":213,"./weather_sagittarius.svg":214,"./weather_sunset.svg":215};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=188},189:function(e,t,a){e.exports=a.p+"static/media/cloudy-day-1.1191a395.svg"},190:function(e,t,a){e.exports=a.p+"static/media/cloudy-day-2.eb5ccd91.svg"},191:function(e,t,a){e.exports=a.p+"static/media/cloudy-day-3.9039acf1.svg"},192:function(e,t,a){e.exports=a.p+"static/media/cloudy-night-1.650295f2.svg"},193:function(e,t,a){e.exports=a.p+"static/media/cloudy-night-2.bfb351b2.svg"},194:function(e,t,a){e.exports=a.p+"static/media/cloudy-night-3.3e64e0ed.svg"},195:function(e,t,a){e.exports=a.p+"static/media/cloudy.66927525.svg"},196:function(e,t,a){e.exports=a.p+"static/media/day.255a951b.svg"},197:function(e,t,a){e.exports=a.p+"static/media/night.644849c6.svg"},198:function(e,t,a){e.exports=a.p+"static/media/rainy-1.63ae52f4.svg"},199:function(e,t,a){e.exports=a.p+"static/media/rainy-2.4db3bb83.svg"},200:function(e,t,a){e.exports=a.p+"static/media/rainy-3.6b26f41e.svg"},201:function(e,t,a){e.exports=a.p+"static/media/rainy-4.a2ad31f8.svg"},202:function(e,t,a){e.exports=a.p+"static/media/rainy-5.447a97d2.svg"},203:function(e,t,a){e.exports=a.p+"static/media/rainy-6.f1fe2b22.svg"},204:function(e,t,a){e.exports=a.p+"static/media/rainy-7.07aa3f06.svg"},205:function(e,t,a){e.exports=a.p+"static/media/snowy-1.9c9caa01.svg"},206:function(e,t,a){e.exports=a.p+"static/media/snowy-2.6ad23580.svg"},207:function(e,t,a){e.exports=a.p+"static/media/snowy-3.7e41a803.svg"},208:function(e,t,a){e.exports=a.p+"static/media/snowy-4.a7c18901.svg"},209:function(e,t,a){e.exports=a.p+"static/media/snowy-5.06848045.svg"},210:function(e,t,a){e.exports=a.p+"static/media/snowy-6.34f01c18.svg"},211:function(e,t,a){e.exports=a.p+"static/media/thunder.c6779920.svg"},212:function(e,t,a){e.exports=a.p+"static/media/weather-sprite.663621ef.svg"},213:function(e,t,a){e.exports=a.p+"static/media/weather.53c3118d.svg"},214:function(e,t,a){e.exports=a.p+"static/media/weather_sagittarius.166882bc.svg"},215:function(e,t,a){e.exports=a.p+"static/media/weather_sunset.cf01f54e.svg"},216:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(132),a(59)),s=a(13),u=a(21),l=a(47),d=a(126),m=a(12),v={favourites:[]},p=function(e){return{type:"UPDATE_CURRENT",payload:{locationObj:e}}},f={currentLocation:{},theme:"light",tempUnit:"C"},h=Object(l.combineReducers)({Favourites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVOURITE":var a=t.payload.newFavourite;return Object(m.a)(Object(m.a)({},e),{},{favourites:[].concat(Object(d.a)(e.favourites),[a])});case"REMOVE_FAVOURITE":var n=t.payload.deletedFavouriteID;return Object(m.a)(Object(m.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.id!==n}))});default:return e}},Preferences:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT":var a=t.payload.locationObj;return Object(m.a)(Object(m.a)({},e),{},{currentLocation:a});case"TOGGLE_THEME":var n=e.theme,r="light"===n?"dark":"light";return Object(m.a)(Object(m.a)({},e),{},{theme:r});default:return e}}}),g=a(108),y=a(72),b=function(){try{var e=localStorage.getItem("state");return null===e?{}:JSON.parse(e)}catch(t){return}}(),w=Object(l.createStore)(h,b.state,Object(g.composeWithDevTools)());w.subscribe(Object(y.throttle)((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({state:w.getState()})}),1e3));var E=w,O=a(220),x=a(222);var j=Object(u.b)((function(e){return{theme:e.Preferences.theme}}),{toggleTheme:function(){return{type:"TOGGLE_THEME"}}})((function(e){var t=e.toggleTheme,a=e.theme;return r.a.createElement("div",{className:"header-container ".concat(a)},r.a.createElement("div",{className:"header-menu"},r.a.createElement("div",{className:"menu-container"},r.a.createElement(o.b,{to:"/home",activeClassName:"selected"},r.a.createElement(O.a,null,"Home")),r.a.createElement(o.b,{to:"/favourites",activeClassName:"selected"},r.a.createElement(O.a,null,"Favourites")))),r.a.createElement("div",{className:"header-title"},"Jonathan's Weather App"),r.a.createElement("div",{className:"header-modetoggle"},r.a.createElement(x.a,{checkedChildren:"Light",unCheckedChildren:"Dark",onChange:t,checked:"light"===a})))})),k=a(10),C=a.n(k),N=a(23),D=a(46),F=a(219),T=a(68),L=a.n(T),A=a(221),I="QJTrjNGKBK4UREO3d1JIEu4BFRI48Xz1";function U(e){return P.apply(this,arguments)}function P(){return(P=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/locations/v1/cities/autocomplete",e.prev=1,e.next=4,L.a.get("".concat("https://dataservice.accuweather.com/locations/v1/cities/autocomplete","?apikey=").concat(I,"&q=").concat(t));case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),A.b.error("Unable to autocomplete.");case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function R(e){return S.apply(this,arguments)}function S(){return(S=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/currentconditions/v1/",e.prev=1,e.next=4,L.a.get("".concat("https://dataservice.accuweather.com/currentconditions/v1/").concat(t,"?apikey=").concat(I));case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),A.b.error("Unable to get current weather conditions.");case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return M.apply(this,arguments)}function M(){return(M=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/forecasts/v1/daily/5day/",e.prev=1,e.next=4,L.a.get("".concat("https://dataservice.accuweather.com/forecasts/v1/daily/5day/").concat(t,"?apikey=").concat(I,"&metric=true"));case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),A.b.error("Unable to get current weather conditions.");case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function V(){return(V=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",e.prev=1,e.next=4,L.a.get("".concat("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search","?apikey=").concat(I,"&q=").concat(t.latitude+","+t.longitude));case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),A.b.error("Unable to get current location name.");case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var J=F.a.Option;var W=Object(u.b)((function(e){return{}}),{updateCurrentLocation:p})((function(e){var t=e.updateCurrentLocation,a=Object(n.useState)(""),c=Object(D.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)([]),u=Object(D.a)(s,2),l=u[0],d=u[1],m=function(){var e=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=8;break}return e.next=3,U(t);case 3:(a=e.sent)&&d(a),e.next=9;break;case 8:d([]);case 9:case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-container"},r.a.createElement(F.a,{dropdownClassName:"search-dropdown",defaultActiveFirstOption:!1,dropdownMatchSelectWidth:500,value:i,placeholder:"search",onSearch:m,onSelect:function(e){var a=l.find((function(t){return t.Key===e})).LocalizedName;o(a),t({id:e,name:a})},onChange:function(e){o(e)},className:"search-bar"},l.map((function(e){return r.a.createElement(J,{key:e.Key,value:e.Key},"".concat(e.LocalizedName,", ").concat(e.Country.LocalizedName))}))))})),q=a(223),K=a(224),G=["sun","mon","tue","wed","thu","fri","sat"];function z(e){var t=new Date(1e3*e);return G[t.getDay()]}var B={id:"215854",name:"Tel Aviv"},H=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){console.log("position enabled");var a=function(e){return V.apply(this,arguments)}(t.coords);e(a)}),(function(t){console.log("position disabled"),e(B)}),{enableHighAccuracy:!1,timeout:2e4,maximumAge:1e3})}))},Q=function(){var e=Object(N.a)(C.a.mark((function e(){var t,a,n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B,e.prev=1,e.next=4,H();case 4:return a=e.sent,n=a.ParentCity,r=n.Key,c=n.EnglishName,t={id:r,name:c},e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",B);case 13:case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),X=[{id:1,name:"day"},{id:2,name:"cloudy-day-1"},{id:3,name:"cloudy-day-2"},{id:4,name:"cloudy-day-3"},{id:5,name:"cloudy-day-3"},{id:6,name:"cloudy-day-3"},{id:7,name:"cloudy"},{id:8,name:"cloudy"},{id:11,name:"cloudy"},{id:12,name:"rainy-1"},{id:13,name:"rainy-1"},{id:14,name:"rainy-1"},{id:15,name:"rainy-1"},{id:16,name:"rainy-1"},{id:17,name:"rainy-1"},{id:18,name:"rainy-1"},{id:19,name:"rainy-1"},{id:20,name:"rainy-1"},{id:21,name:"rainy-1"},{id:22,name:"snowy-1"},{id:23,name:"snowy-1"},{id:24,name:"snowy-1"},{id:25,name:"snowy-1"},{id:26,name:"snowy-1"},{id:29,name:"snowy-1"},{id:30,name:"day"},{id:31,name:"rainy-7"},{id:32,name:"cloudy"},{id:33,name:"night"},{id:34,name:"night"},{id:35,name:"night"},{id:36,name:"night"},{id:37,name:"night"},{id:38,name:"night"},{id:39,name:"night"},{id:40,name:"night"},{id:41,name:"night"},{id:42,name:"night"},{id:43,name:"night"},{id:44,name:"night"}];function $(e){var t=X.find((function(t){return t.id===e})).name;return a(188)("./".concat(t,".svg"))}var Y=function(e){var t=e.weatherData;return r.a.createElement("div",{className:"marquee"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"marquee-icon",src:$(t.Icon),alt:""}),r.a.createElement("div",{className:"marquee-text"},t.IconPhrase)):r.a.createElement(q.a,{className:"marquee-loader"}))};var Z=Object(u.b)((function(e){return Object(m.a)(Object(m.a)({},e.Favourites),{},{theme:e.Preferences.theme})}),{})((function(e){var t=e.header,a=e.temperature,n=e.icon,c=(e.text,e.isLoading),i=e.id,o=e.isClickable,s=e.onCardClick,u=e.theme;return r.a.createElement("div",{className:"card-container ".concat(u).concat(o?" clickable":""),value:i&&i,onClick:s&&function(){return s({id:i,name:t})}},c?r.a.createElement(q.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t),r.a.createElement("div",null,a," C\xb0"),r.a.createElement("div",null,n?r.a.createElement("img",{src:$(n),alt:"icon"}):r.a.createElement(q.a,null))))}));var ee=function(e){var t=e.cardData,a=e.cardAmount,n=e.isClickable,c=e.onCardClick;return r.a.createElement("div",{className:"spreadout"},t?t.map((function(e,t){return r.a.createElement(Z,{key:e.id?e.id:"fav"+t,header:e.header,temperature:e.temperature,icon:e.icon,id:e.id,isClickable:n,onCardClick:c})})):Object(y.range)(a).map((function(e,t){return r.a.createElement(Z,{isLoading:!0,key:"fav"+t})})))};var te=Object(u.b)((function(e){return Object(m.a)(Object(m.a)({},e.Favourites),{},{currentLocation:e.Preferences.currentLocation})}),{addFavourite:function(e){return{type:"ADD_FAVOURITE",payload:{newFavourite:e}}},removeFavourite:function(e){return{type:"REMOVE_FAVOURITE",payload:{deletedFavouriteID:e}}},updateCurrentLocation:p})((function(e){var t,a=e.currentLocation,c=e.updateCurrentLocation,i=e.addFavourite,o=e.removeFavourite,s=e.favourites,u=Object(n.useState)([]),l=Object(D.a)(u,2),d=l[0],m=l[1],v=Object(n.useState)(!1),p=Object(D.a)(v,2),f=p[0],h=p[1],g=function(){var e=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return e.prev=1,e.next=4,_(t);case 4:a=e.sent,m(a.DailyForecasts),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),y=Object(n.useCallback)((function(e){f?(o(e),h(!1)):s.length<5?(i(a),h(!0)):A.b.error("maximum of 5 favourites allowed")}),[f,s,a]),b=Object(n.useCallback)((function(){y(a.id)}),[a,y]),w=function(){var e=Object(N.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a.hasOwnProperty("id")?g(a.id):w()}),[a]),Object(n.useEffect)((function(){if(s.length>0&&a.id){var e=s.findIndex((function(e){return e.id===a.id}));h(e>=0)}else h(!1)}),[s,a]),r.a.createElement("div",{className:"weather-container"},r.a.createElement("div",{className:"weather-top"},r.a.createElement("div",{className:"weather-top-left"},a.name,r.a.createElement("br",null),d.length>0?"".concat(d[0].Temperature.Maximum.Value," C\xb0"):r.a.createElement(q.a,null)),r.a.createElement("div",{className:"weather-top-right"},r.a.createElement(K.a,{className:"favourite-icon",onClick:b,twoToneColor:f?"#eb2f96":"#D3D3D3"}),r.a.createElement(O.a,{className:"favourite-btn",onClick:b},f?"Remove from Favourites":"Add to Favourites"))),r.a.createElement("div",{className:"weather-middle"},r.a.createElement(Y,{weatherData:d.length>0?d[0].Day:null})),r.a.createElement("div",{className:"weather-bottom"},r.a.createElement(ee,{cardData:d.length>0?(t=d,t.map((function(e){return{header:z(e.EpochDate),temperature:e.Temperature.Maximum.Value,icon:e.Day.Icon}}))):null,cardAmount:5})))}));var ae=Object(u.b)((function(e){return{theme:e.Preferences.theme}}),{})((function(e){var t=e.theme;return r.a.createElement("div",{className:"home-container ".concat(t)},r.a.createElement(W,null),r.a.createElement(te,null))}));var ne=Object(u.b)((function(e){return Object(m.a)(Object(m.a)({},e.Favourites),{},{theme:e.Preferences.theme})}),{updateCurrentLocation:p})((function(e){var t=e.favourites,a=e.updateCurrentLocation,c=e.theme,i=Object(n.useState)([]),o=Object(D.a)(i,2),u=o[0],l=o[1],d=Object(s.g)(),v=Object(n.useCallback)((function(e){console.log("test event",e),a(e),d.push("/home")}),[d,a]);return Object(n.useEffect)((function(){t.length>0&&function(e){try{Promise.all(e.map(function(){var e=Object(N.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t.id);case 2:return a=e.sent,n={id:t.id,header:t.name},a&&(n=Object(m.a)(Object(m.a)({},n),{},{temperature:a[0].Temperature.Metric.Value,icon:a[0].WeatherIcon,text:a[0].WeatherText})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){console.log("test result",e),l(e)}))}catch(t){A.b.error("problem receiving favorites, refresh page to try again")}}(t)}),[t]),r.a.createElement("div",{className:"favourites-body ".concat(c)},r.a.createElement("div",{className:"favourites-container"},r.a.createElement(ee,{cardData:u.length>0&&u,isLoading:0===u.length,isClickable:!0,onCardClick:v,cardAmount:t?t.length:1})))}));a(216);var re=function(){return r.a.createElement(u.a,{store:E},r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(j,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home"},r.a.createElement(ae,null)),r.a.createElement(s.b,{path:"/favourites"},r.a.createElement(ne,null)),r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{strict:!0,to:"/home"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.fd1af431.chunk.js.map