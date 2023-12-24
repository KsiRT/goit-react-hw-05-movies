"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[336],{336:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,i,o=e(439),u=e(791),c=e(689),s=e(409),p=e(168),d=e(867),f=d.default.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n  list-style: none;\n  justify-content: center;\n  padding: 0;\n"]))),l=d.default.div(a||(a=(0,p.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  height: 180px;\n  background-color: #e2e2e2;\n\n  img {\n    width: 150px;\n    height: 200px;\n    object-fit: cover;\n  }\n"]))),h=d.default.li(i||(i=(0,p.Z)(["\n  text-align: center;\n  border: 2px solid #888;\n  width: 150px;\n  border-radius: 8px;\n  padding: 2px;\n\n  h3 {\n    font-weight: 500;\n  }\n  p {\n    font-style: italic;\n    color: #bdbdbd;\n  }\n"]))),v=e(184),m=function(){var n=(0,c.UO)().movieId,t=(0,u.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];return(0,u.useEffect)((function(){(0,s.y)(n).then((function(n){return a(n)})).catch((function(n){return console.log(n.message)}))}),[n]),(0,v.jsx)(v.Fragment,{children:r.length>0?(0,v.jsx)(f,{children:r.map((function(n){var t=n.name,e=n.character,r=n.photo,a=n.id;return(0,v.jsxs)(h,{children:[(0,v.jsx)(l,{children:r?(0,v.jsx)("img",{src:r,alt:t}):(0,v.jsx)("img",{src:"https://community.adobe.com/legacyfs/online/avatars/a829412_stormtrooper_001.png",alt:"No avatar"})}),(0,v.jsx)("h3",{children:t}),(0,v.jsxs)("p",{children:["(",e,")"]})]},a)}))}):(0,v.jsx)("p",{children:"Sorry, we don't have information about cast"})})}},409:function(n,t,e){e.d(t,{Bt:function(){return d},LI:function(){return h},Mc:function(){return p},OH:function(){return s},y:function(){return l}});var r=e(861),a=e(757),i=e.n(a),o=e(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="fde4dd89a2c817f4c4efb19732e7d4a1",c="http://image.tmdb.org/t/p/w500",s=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day",{params:{api_key:u}});case 2:return t=n.sent,e=t.data.results,n.abrupt("return",v(e));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,s,p,d,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t),{params:{api_key:u}});case 2:return e=n.sent,r=e.data,a=r.title,s=r.overview,p=r.poster_path,d=r.vote_average,f=r.genres,n.abrupt("return",{title:a,overview:s,poster:p?c+p:null,score:Math.floor(10*d),genres:f});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return e=n.sent,r=e.data,n.abrupt("return",null===r||void 0===r?void 0:r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return e=n.sent,r=e.data,n.abrupt("return",null===r||void 0===r?void 0:r.cast.map((function(n){var t=n.profile_path,e=n.name,r=n.character;return{id:n.id,photo:t?c+t:null,name:e,character:r}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{api_key:u,query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",v(r.results));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function v(n){return n.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:r?c+r:null}}))}}}]);
//# sourceMappingURL=336.d4ddc0de.chunk.js.map