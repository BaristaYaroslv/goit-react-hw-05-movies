"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[22],{783:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i,o=t(87),s=t(689),a=t(168),l=t(444),u=l.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),c=l.ZP.li(i||(i=(0,a.Z)(["\n  margin-bottom: 10px;\n  a {\n    text-decoration: none;\n    color: #333;\n    font-size: 16px;\n    font-weight: bold;\n    transition: color 0.2s ease-in-out;\n\n    &:hover {\n      color: #4CAF50;\n    }\n  }\n"]))),m=t(184),p=function(n){var e=n.films,t=(0,s.TH)();return(0,m.jsx)(u,{children:e.map((function(n){return(0,m.jsx)(c,{children:(0,m.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},22:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,s,a=t(861),l=t(439),u=t(757),c=t.n(u),m=t(87),p=t(791),f=t(630),h=t(168),d=t(444),x=(d.ZP.div(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),d.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 3px;\n"])))),v=d.ZP.input(o||(o=(0,h.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),Z=d.ZP.button(s||(s=(0,h.Z)(["\n  border-radius: 4px;\n"]))),b=t(184),g=function(n){var e=n.onSubmitForm;return(0,b.jsxs)(x,{onSubmit:e,children:[(0,b.jsx)(v,{name:"searchFilm",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search films"}),(0,b.jsx)(Z,{type:"submit",children:"Search"})]})},F=function(n){var e=n.nameFilms;return(0,b.jsxs)("p",{children:["No find film with name ",e]})},j=t(783),w=t(35),_=function(){var n,e=(0,f.u)().apiThemoviedb,t=(0,m.lr)(),r=(0,l.Z)(t,2),i=r[0],o=r[1],s=(0,p.useState)([]),u=(0,l.Z)(s,2),h=u[0],d=u[1],x=(0,p.useState)(!1),v=(0,l.Z)(x,2),Z=v[0],_=v[1],y=null!==(n=i.get("nameFilms"))&&void 0!==n?n:"";return(0,p.useEffect)((function(){if(""!==y){var n=new AbortController;return function(n){t.apply(this,arguments)}(y),function(){n.abort()}}function t(){return t=(0,a.Z)(c().mark((function t(r){var i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,e.searchFilm({controller:n,nameFilms:r});case 4:i=t.sent,d(i.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),d([]),console.log("Error fetch",t.t0);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])}))),t.apply(this,arguments)}d([])}),[y,e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{onSubmitForm:function(n){n.preventDefault();var e=n.target,t=e.elements.searchFilm.value;o(""!==t?{nameFilms:t}:{}),d([]),e.reset()}}),Z&&(0,b.jsx)(w.Z,{}),0===h.length&&""!==y&&!Z&&(0,b.jsx)(F,{nameFilms:y}),0!==h.length&&(0,b.jsx)(j.Z,{films:h})]})}}}]);
//# sourceMappingURL=22.74af29a6.chunk.js.map