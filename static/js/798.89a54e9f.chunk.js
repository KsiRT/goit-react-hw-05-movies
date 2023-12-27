"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[798],{798:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,c=t(439),s=t(791),o=t(689),u=t(87),p=t(409),d=t(530),f=t(168),l=t(867),v=l.default.div(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 30px 0;\n  align-self: flex-start;\n  color: #ececec;\n  width: 60vw;\n  img {\n    width: 350px;\n  }\n  h2 {\n    font-size: 30px;\n  }\n  p {\n    font-size: 20px;\n  }\n"]))),h=l.default.div(a||(a=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  min-height: 40px;\n  padding-left: 30px;\n  a {\n    color: #ececec;\n    font-size: 20px;\n    text-decoration: none;\n    font-weight: 600;\n  }\n"]))),x=l.default.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: #696969;\n  border-radius: 12px;\n  padding: 20px;\n  margin: 0;\n"]))),m=t(186),g=t(184),w=function(){var n,e=(0,o.UO)().movieId,t=(0,s.useState)(null),r=(0,c.Z)(t,2),a=r[0],i=r[1],f=(0,o.s0)();(0,s.useEffect)((function(){(0,p.Mc)(e).then((function(n){return i(n)})).catch((function(n){console.log(n),404===n.response.status&&f("/notFound")}))}),[e,f]);var l=(0,o.TH)(),w=(0,s.useRef)(null===(n=l.state)||void 0===n?void 0:n.from);return a?(0,g.jsxs)(m.W2,{children:[(0,g.jsx)(m.LJ,{onClick:function(){f(w.current||"/movies")},children:"Go back"}),(0,g.jsxs)(v,{children:[(0,g.jsx)("img",{src:a.poster?a.poster:d,alt:"".concat(a.title," poster"),width:250}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:a.title}),(0,g.jsxs)("p",{children:["Rating: ",a.score,"%"]}),(0,g.jsxs)("p",{children:["Overview: ",a.overview]})]})]}),(0,g.jsx)("hr",{}),(0,g.jsxs)(h,{children:[(0,g.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,g.jsx)(u.rU,{to:"reviews",children:"Reviews"})]}),(0,g.jsx)(x,{children:(0,g.jsx)(s.Suspense,{fallback:(0,g.jsx)(m.Dx,{children:" Loading..."}),children:(0,g.jsx)(o.j3,{})})})]}):(0,g.jsx)(m.Dx,{children:"Loading ..."})}},409:function(n,e,t){t.d(e,{Bt:function(){return d},LI:function(){return v},Mc:function(){return p},OH:function(){return u},y:function(){return l}});var r=t(861),a=t(757),i=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="fde4dd89a2c817f4c4efb19732e7d4a1",o="http://image.tmdb.org/t/p/w500",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",{params:{api_key:s}});case 2:return e=n.sent,t=e.data.results,n.abrupt("return",h(t));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,u,p,d,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e),{params:{api_key:s}});case 2:return t=n.sent,r=t.data,a=r.title,u=r.overview,p=r.poster_path,d=r.vote_average,f=r.genres,n.abrupt("return",{title:a,overview:u,poster:p?o+p:null,score:Math.floor(10*d),genres:f});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return t=n.sent,r=t.data,n.abrupt("return",null===r||void 0===r?void 0:r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return t=n.sent,r=t.data,n.abrupt("return",null===r||void 0===r?void 0:r.cast.map((function(n){var e=n.profile_path,t=n.name,r=n.character;return{id:n.id,photo:e?o+e:null,name:t,character:r}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:{api_key:s,query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",h(r.results));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function h(n){return n.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t,poster:r?o+r:null}}))}},530:function(n,e,t){n.exports=t.p+"static/media/video-camera.4dbb78caff66dbc5ffc4.png"}}]);
//# sourceMappingURL=798.89a54e9f.chunk.js.map