"use strict";(self.webpackChunkreact_marvel=self.webpackChunkreact_marvel||[]).push([[732],{4720:function(n,e,t){var i=t(8683),r=t(9439),a=t(4925),o=t(2791),s=t(184),c=["src","alt"];e.Z=function(n){var e=n.src,t=n.alt,l=(0,a.Z)(n,c),d=(0,o.useState)(!1),h=(0,r.Z)(d,2),u=h[0],m=h[1];return(0,s.jsxs)(s.Fragment,{children:[!u&&(0,s.jsx)("div",{className:"pulse",style:{height:"100%",width:"100%",backgroundColor:"#C4C4C4"}}),(0,s.jsx)("img",(0,i.Z)((0,i.Z)({},l),{},{src:e,alt:null!==t&&void 0!==t?t:"",style:u?{}:{display:"none"},onLoad:function(){return m(!0)}}))]})}},2281:function(n,e,t){t.d(e,{ak:function(){return z},F_:function(){return _},Aq:function(){return B},vF:function(){return I}});var i,r,a,o,s,c,l,d=t(9439),h=t(2791),u=t(210),m=t(5667),x=t(168),p=t(6444),f=p.ZP.button(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: flex-start;\n\n  color: ",";\n  font-size: 1.5rem;\n\n  min-height: 320px;\n  width: 200px;\n\n  padding: 0;\n\n  background-color: ",";\n  box-shadow: 5px 5px 0.45em rgba(0, 0, 0, 0.25);\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  outline: none;\n  border: none;\n\n  &:focus {\n    transform: translateY(-10px);\n\n    box-shadow: 0 5px 20px 3px ",";\n  }\n\n  &:hover {\n    transform: translateY(-10px);\n\n    box-shadow: 0 5px 20px 2px ",";\n  }\n\n  a {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9375em 0;\n\n    height: 100%;\n    width: 100%;\n\n    padding: 0 0 1.25rem;\n  }\n\n  img {\n    height: 200px;\n    width: 100%;\n\n    pointer-events: none;\n  }\n\n  .name {\n    margin: 0 0.9375em 0 0.9375em;\n\n    text-transform: uppercase;\n    text-align: left;\n    line-height: 1.2;\n  }\n"])),(function(n){return n.theme.colors.mainTextWhite}),(function(n){return n.theme.colors.mainBgColor}),(function(n){return n.shadowColor}),(function(n){return n.shadowColor})),g=t(4720),j=t(184),v=function(n){var e=n.img,t=n.name,i=n.id,r=n.onCharSelected,a=(0,h.useState)(!1),o=(0,d.Z)(a,2),s=(o[0],o[1],(0,u.usePalette)(e).data.darkVibrant),c=document.documentElement.clientWidth<=768;return(0,j.jsx)(f,{shadowColor:s,onKeyPress:function(n){var e=n.code;"Space"!==e&&"Enter"!==e||r(i)},children:(0,j.jsxs)(m.rU,{to:"characterInfo",smooth:c,offset:-20,duration:500,onClick:function(){return r(i)},children:[(0,j.jsx)("div",{style:{height:"200px"},children:(0,j.jsx)(g.Z,{src:e,alt:t})}),(0,j.jsx)("div",{className:"name",children:(0,j.jsx)("span",{children:t})})]})})},Z=t(4482),b=t(2567),w=t(1229),y=t(2531),C=t(3584),k=p.ZP.div(r||(r=(0,x.Z)(["\n  margin-top: 0.9375rem;\n\n  p {\n    font-size: 14px;\n    line-height: 1.2;\n  }\n\n  span {\n    display: block;\n\n    margin-top: 0.625em;\n\n    font-weight: 700;\n    font-size: 1.125rem;\n  }\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0.625rem 0;\n\n    list-style-type: none;\n    padding: 0;\n\n    margin-top: 0.625rem;\n\n    li {\n      display: flex;\n      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n      padding: 5px 10px;\n    }\n  }\n"]))),S=t(2319),P=p.ZP.div(a||(a=(0,x.Z)(["\n  padding: 1.5625rem;\n\n  min-height: 770px;\n\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);\n  background: #fff;\n  \n  @media "," {\n    min-height: 710px;\n  }\n"])),S.Uh.tablet),M=p.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n\n  img {\n    max-width: 100%;\n    min-height: 100%;\n    object-fit: contain;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    width: 100%;\n\n    margin-left: 1.5625rem;\n\n    font-size: 1.5rem;\n\n    span {\n      font-size: 1.125rem;\n      font-weight: 700;\n      text-transform: uppercase;\n\n      padding: 0 0 0.625rem;\n    }\n\n    div {\n      margin: 0;\n\n      min-width: 100px;\n\n      gap: 0.625em 0;\n    }\n  }\n"]))),N=function(n){var e=n.char,t=e.id,i=e.name,r=e.description,a=e.thumbnail,o=e.homepage,s=(e.wiki,e.comics);r||(r="Description not found");for(var c=[],l=0;l<s.length&&l<10;l++)c.push({name:s[l].name});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(M,{children:[(0,j.jsx)("img",{src:a,alt:i,width:150,height:150}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:i}),(0,j.jsxs)("div",{children:[(0,j.jsx)(b.YQ,{to:"/characters/".concat(t),children:"homepage"}),(0,j.jsx)(b.rU,{href:o,target:"_blank",grey:!0,children:"wiki"})]})]})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)("p",{children:r}),(0,j.jsx)("span",{children:"Comics:"}),(0,j.jsxs)("ul",{children:[s.length>0?null:"There is no comics with this character!",c.map((function(n,e){var t=n.name;n.url;return(0,j.jsx)("li",{children:t},e)}))]})]})]})},z=function(n){var e=n.id,t=(0,h.useState)(null),i=(0,d.Z)(t,2),r=i[0],a=i[1],o=(0,Z.X)(),s=o.loading,c=o.error,l=o.getCharacter,u=o.clearError,x=function(n){a(n)};(0,h.useEffect)((function(){e&&function(n){u(),l(n).then(x)}(e)}),[e]);var p=s||c||r?null:(0,j.jsx)(C.Z,{}),f=s?(0,j.jsx)(w.Z,{}):null,g=c?(0,j.jsx)(y.Z,{}):null,v=s||c||!r?null:(0,j.jsx)(N,{char:r});return(0,j.jsx)(m.W_,{name:"characterInfo",children:(0,j.jsxs)(P,{children:[f,g,p,v]})})},E=t(3552),F=p.ZP.ul(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.875rem 20px;\n\n  max-width: 650px;\n\n  padding: 0;\n  margin: 0;\n\n  list-style-type: none;\n\n  li {\n    display: flex;\n  }\n\n  @media "," {\n    justify-content: center;\n    margin-top: clamp(20px, 10vh, 50px);\n  }\n"])),S.Uh.bootstrapLarge),L=p.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 45px;\n\n  margin: 0 auto;\n"]))),U=t(990),_=function(n){var e=n.onCharSelected,t=(0,h.useState)(!1),i=(0,d.Z)(t,2),r=i[0],a=i[1],o=(0,h.useState)(!0),s=(0,d.Z)(o,2),c=s[0],l=s[1],u=(0,Z.X)(),m=u.getAllCharacters,x=u.loading,p=u.error,f=u.cancelRequest,g=u.clearError,b=(0,h.useContext)(E.Mt),C=b.characters,k=b.offset,S=(0,h.useContext)(E.iO),P=S.addCharacters,M=S.changeOffset;(0,h.useEffect)((function(){var n=!0;return n&&z(0,!0),function(){n=!1,f()}}),[]);var N=function(n){var e=n.data.results,t=e.length<9;P(e),a(!1),M(9),l(t)},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;a(!e),C.length||m(n).then(N),C.length&&l(!1)},_=(0,h.useMemo)((function(){return C.map((function(n){var t=n.id,i=n.name,r=n.thumbnail;return(0,j.jsx)("li",{children:(0,j.jsx)(v,{id:t,name:i,img:"".concat(r.path,".").concat(r.extension),onCharSelected:e})},t)}))}),[C]),q=p?(0,j.jsx)(y.Z,{}):null,A=x&&!r?(0,j.jsx)(w.Z,{}):null;return(0,j.jsxs)(L,{children:[A,q,!p&&(0,j.jsx)(F,{className:"characters-list",children:_}),!c&&(0,j.jsx)(U.Z,{disabled:r,onClick:function(){return m(k).then(N),a(!0),void g()},text:"Load More",className:"More"})]})},q=p.ZP.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  width: 230px;\n\n  cursor: pointer;\n\n  &:hover {\n    .comics-name {\n      color: ",";\n    }\n  }\n\n  .comics-image {\n    height: 350px;\n    max-width: 100%;\n    object-fit: contain;\n\n    margin-bottom: auto;\n\n    user-select: none;\n    pointer-events: none;\n  }\n\n  .comics-name {\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 16px;\n  }\n\n  .comics-price {\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 16px;\n\n    color: ",";\n  }\n\n  @media "," {\n    .comics-image {\n    }\n  }\n"])),(function(n){return n.theme.colors.mainHoverRed}),(function(n){return n.theme.colors.mainBgGrey}),S.Uh.bootstrapLarge);var A,B=function(n){var e=n.thumbnail,t=n.title,i=n.price;return(0,j.jsxs)(q,{children:[(0,j.jsx)("div",{className:"comics-image",children:(0,j.jsx)(g.Z,{className:"comics-image",src:e,alt:t})}),(0,j.jsx)("h4",{className:"comics-name",children:t}),(0,j.jsx)("span",{className:"comics-price",children:i})]})},O=t(8683),R=t(1087),W=t(5134),X=p.ZP.div(A||(A=(0,x.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(225px, auto));\n  gap: 55px 65px;\n\n  margin-top: 2.8125rem;\n"]))),Y=t(277);var I=function(n){var e=(0,h.useState)(!1),t=(0,d.Z)(e,2),i=t[0],r=t[1],a=(0,h.useState)(!0),o=(0,d.Z)(a,2),s=o[0],c=o[1],l=(0,Z.X)(),u=l.loading,m=l.error,x=l.getAllComics,p=l.cancelRequest,f=(0,h.useContext)(W.ot),g=f.comics,v=f.offset,b=(0,h.useContext)(W.L7),w=b.addComics,y=b.changeOffset;(0,h.useEffect)((function(){var n=!0;return n&&k(v,!0),function(){p(),n=!1}}),[]);var C=function(n){var e=n.length<8;w(n),r(!1),y(8),c(e)},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;r(!e),g.length||x(n).then(C),g.length&&c(!1)},S=u&&!i&&(0,j.jsx)(Y.$j,{}),P=m&&(0,j.jsx)(Y.Bc,{}),M=!m,N=(0,h.useMemo)((function(){return g.map((function(n){return(0,j.jsx)(R.rU,{to:"/comics/".concat(n.id),children:(0,j.jsx)(B,(0,O.Z)({},n))},n.id)}))}),[g]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(X,{children:[P,S,M&&N]}),!s&&(0,j.jsx)(U.Z,{disabled:i,onClick:function(){return x(v).then(C),void r(!0)},text:"Load More",className:"More"})]})}},5732:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var i,r=t(4270),a=t(277),o=t(2281),s=t(168),c=t(6444).ZP.div(i||(i=(0,s.Z)(["\n  padding-bottom: 50px;\n\n  .More {\n    margin: 2.8125rem auto 0;\n  }\n"]))),l=t(184);var d=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.q,{children:[(0,l.jsx)("title",{children:"Marvel comics"}),(0,l.jsx)("meta",{name:"description",content:"Marvel comics"})]}),(0,l.jsxs)(c,{children:[(0,l.jsx)(a.Ko,{}),(0,l.jsx)(a.SV,{children:(0,l.jsx)(o.vF,{})})]})]})}}}]);
//# sourceMappingURL=732.a3eece61.chunk.js.map