(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[22],{738:function(){},783:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var r,i,o=e(7689),s=e(1087),a=e(168),u=e(6444),c=u.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),l=u.ZP.li(i||(i=(0,a.Z)(["\n  margin-bottom: 10px;\n  a {\n    text-decoration: none;\n    color: #333;\n    font-size: 16px;\n    font-weight: bold;\n    transition: color 0.2s ease-in-out;\n\n    &:hover {\n      color: #4CAF50;\n    }\n  }\n"]))),f=e(184),m=function(n){var t=n.films,e=(0,o.TH)();return(0,f.jsx)(c,{children:t.map((function(n){return(0,f.jsx)(l,{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},7022:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return y}});var r,i,o,s,a=e(5861),u=e(9439),c=e(4687),l=e.n(c),f=e(1087),m=e(2791),p=e(738),h=e(168),d=e(6444),x=(d.ZP.div(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),d.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 3px;\n"])))),v=d.ZP.input(o||(o=(0,h.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),Z=d.ZP.button(s||(s=(0,h.Z)(["\n  border-radius: 4px;\n"]))),b=e(184),g=function(n){var t=n.onSubmitForm;return(0,b.jsxs)(x,{onSubmit:t,children:[(0,b.jsx)(v,{name:"searchFilm",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search films"}),(0,b.jsx)(Z,{type:"submit",children:"Search"})]})},F=function(n){var t=n.nameFilms;return(0,b.jsxs)("p",{children:["No find film with name ",t]})},j=e(783),w=e(7035),y=function(){var n,t=(0,p.useContextFetchFilm)().apiThemoviedb,e=(0,f.lr)(),r=(0,u.Z)(e,2),i=r[0],o=r[1],s=(0,m.useState)([]),c=(0,u.Z)(s,2),h=c[0],d=c[1],x=(0,m.useState)(!1),v=(0,u.Z)(x,2),Z=v[0],y=v[1],P=null!==(n=i.get("nameFilms"))&&void 0!==n?n:"";return(0,m.useEffect)((function(){if(""!==P){var n=new AbortController;return function(n){e.apply(this,arguments)}(P),function(){n.abort()}}function e(){return e=(0,a.Z)(l().mark((function e(r){var i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,t.searchFilm({controller:n,nameFilms:r});case 4:i=e.sent,d(i.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),d([]),console.log("Error fetch",e.t0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),e.apply(this,arguments)}}),[P,t]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{onSubmitForm:function(n){n.preventDefault();var t=n.target,e=t.elements.searchFilm.value;o(""!==e?{nameFilms:e}:{}),d([]),t.reset()}}),Z&&(0,b.jsx)(w.Z,{}),0===h.length&&""!==P&&!Z&&(0,b.jsx)(F,{nameFilms:P}),0!==h.length&&(0,b.jsx)(j.Z,{films:h})]})}},5861:function(n,t,e){"use strict";function r(n,t,e,r,i,o,s){try{var a=n[o](s),u=a.value}catch(c){return void e(c)}a.done?t(u):Promise.resolve(u).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var s=n.apply(t,e);function a(n){r(s,i,o,a,u,"next",n)}function u(n){r(s,i,o,a,u,"throw",n)}a(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=22.de9350d0.chunk.js.map