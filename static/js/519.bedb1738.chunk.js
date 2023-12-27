"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[519],{694:function(e,n,t){t.d(n,{Z:function(){return l}});t(791);var r,a,i=t(168),c=t(867),o=c.default.ul(r||(r=(0,i.Z)(["\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  padding: 40px;\n"]))),u=c.default.li(a||(a=(0,i.Z)(["\n  width: 250px;\n  min-height: 400px;\n  border: 2px solid #ececec;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n\n  a {\n    max-width: 100%;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #ececec;\n    text-decoration: none;\n    text-align: center;\n  }\n"]))),s=t(87),p=t(530),f=t(184),l=function(e){var n=e.movies,t=e.location;return(0,f.jsx)(o,{children:n.map((function(e){return(0,f.jsx)(u,{children:(0,f.jsxs)(s.rU,{state:{from:t},to:"/movies/".concat(e.id.toString()),children:[(0,f.jsx)("img",{src:e.poster?e.poster:p,alt:"".concat(e.title," poster"),width:200}),(0,f.jsx)("p",{children:e.title})]})},e.id)}))})}},519:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a,i=t(439),c=t(791),o=t(689),u=t(186),s=t(694),p=t(168),f=t(867),l=f.default.input(r||(r=(0,p.Z)(["\n  height: 25px;\n  font-size: 20px;\n  outline: none;\n  border-radius: 8px;\n  padding: 4px 8px;\n  background-color: #888;\n  color: #ececec;\n  &::placeholder {\n    color: #ececec;\n  }\n"]))),d=f.default.form(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n  gap: 15px;\n"]))),v=t(409),x=t(87),h=t(184),m=function(e){var n=e.setMovies,t=(0,x.lr)(),r=(0,i.Z)(t,2),a=r[0],o=r[1],s=a.get("query")||"";return(0,c.useEffect)((function(){s&&(0,v.LI)(s.trim()).then((function(e){return n(e)}))}),[s,n]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(d,{onSubmit:function(e){return function(e){e.preventDefault();var n=e.currentTarget.elements.query.value;o({query:n})}(e)},children:[(0,h.jsx)(u.Dx,{children:"Look for movie : "}),(0,h.jsx)(l,{name:"query",type:"text",placeholder:"Search..."}),(0,h.jsx)(u.LJ,{type:"submit",children:"Let`s find"})]})})},g=function(){var e=(0,c.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,o.TH)();return(0,h.jsxs)(u.W2,{children:[(0,h.jsx)(m,{setMovies:r}),(0,h.jsx)("hr",{}),(0,h.jsx)(s.Z,{movies:t,location:a})]})}},409:function(e,n,t){t.d(n,{Bt:function(){return f},LI:function(){return v},Mc:function(){return p},OH:function(){return s},y:function(){return d}});var r=t(861),a=t(757),i=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="fde4dd89a2c817f4c4efb19732e7d4a1",u="http://image.tmdb.org/t/p/w500",s=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day",{params:{api_key:o}});case 2:return n=e.sent,t=n.data.results,e.abrupt("return",x(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,s,p,f,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,a=r.title,s=r.overview,p=r.poster_path,f=r.vote_average,l=r.genres,e.abrupt("return",{title:a,overview:s,poster:p?u+p:null,score:Math.floor(10*f),genres:l});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,e.abrupt("return",null===r||void 0===r?void 0:r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,e.abrupt("return",null===r||void 0===r?void 0:r.cast.map((function(e){var n=e.profile_path,t=e.name,r=e.character;return{id:e.id,photo:n?u+n:null,name:t,character:r}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{params:{api_key:o,query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",x(r.results));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function x(e){return e.map((function(e){var n=e.id,t=e.title,r=e.poster_path;return{id:n,title:t,poster:r?u+r:null}}))}},530:function(e,n,t){e.exports=t.p+"static/media/video-camera.4dbb78caff66dbc5ffc4.png"}}]);
//# sourceMappingURL=519.bedb1738.chunk.js.map