"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{694:function(t,n,e){e.d(n,{Z:function(){return d}});e(791);var r,a,i=e(168),c=e(867),u=c.default.ul(r||(r=(0,i.Z)(["\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  padding: 40px;\n"]))),o=c.default.li(a||(a=(0,i.Z)(["\n  width: 250px;\n  min-height: 400px;\n  border: 2px solid #ececec;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n\n  a {\n    max-width: 100%;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #ececec;\n    text-decoration: none;\n    text-align: center;\n  }\n"]))),s=e(87),p=e(530),f=e(184),d=function(t){var n=t.movies,e=t.location;return(0,f.jsx)(u,{children:n.map((function(t){return(0,f.jsx)(o,{children:(0,f.jsxs)(s.rU,{state:{from:e},to:"/movies/".concat(t.id.toString()),children:[(0,f.jsx)("img",{src:t.poster?t.poster:p,alt:"".concat(t.title," poster"),width:200}),(0,f.jsx)("p",{children:t.title})]})},t.id)}))})}},415:function(t,n,e){e.r(n);var r=e(439),a=e(791),i=e(689),c=e(409),u=e(186),o=e(694),s=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],p=n[1];(0,a.useEffect)((function(){(0,c.OH)().then((function(t){return p(t)}))}),[]);var f=(0,i.TH)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Dx,{children:"Popular today"}),(0,s.jsx)(o.Z,{movies:e,location:f})]})}},409:function(t,n,e){e.d(n,{Bt:function(){return f},LI:function(){return v},Mc:function(){return p},OH:function(){return s},y:function(){return l}});var r=e(861),a=e(757),i=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="fde4dd89a2c817f4c4efb19732e7d4a1",o="http://image.tmdb.org/t/p/w500",s=function(){var t=(0,r.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",{params:{api_key:u}});case 2:return n=t.sent,e=n.data.results,t.abrupt("return",h(e));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a,s,p,f,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:u}});case 2:return e=t.sent,r=e.data,a=r.title,s=r.overview,p=r.poster_path,f=r.vote_average,d=r.genres,t.abrupt("return",{title:a,overview:s,poster:p?o+p:null,score:Math.floor(10*f),genres:d});case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:u}});case 2:return e=t.sent,r=e.data,t.abrupt("return",null===r||void 0===r?void 0:r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:u}});case 2:return e=t.sent,r=e.data,t.abrupt("return",null===r||void 0===r?void 0:r.cast.map((function(t){var n=t.profile_path,e=t.name,r=t.character;return{id:t.id,photo:n?o+n:null,name:e,character:r}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie",{params:{api_key:u,query:n}});case 2:return e=t.sent,r=e.data,t.abrupt("return",h(r.results));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function h(t){return t.map((function(t){var n=t.id,e=t.title,r=t.poster_path;return{id:n,title:e,poster:r?o+r:null}}))}},530:function(t,n,e){t.exports=e.p+"static/media/video-camera.4dbb78caff66dbc5ffc4.png"}}]);
//# sourceMappingURL=415.9cadb6e6.chunk.js.map