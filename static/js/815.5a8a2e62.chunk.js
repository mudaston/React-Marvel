"use strict";(self.webpackChunkreact_marvel=self.webpackChunkreact_marvel||[]).push([[815],{4720:function(n,e,t){var r=t(8683),i=t(9439),a=t(4925),o=t(2791),s=t(184),c=["src","alt"];e.Z=function(n){var e=n.src,t=n.alt,l=(0,a.Z)(n,c),d=(0,o.useState)(!1),h=(0,i.Z)(d,2),m=h[0],u=h[1];return(0,s.jsxs)(s.Fragment,{children:[!m&&(0,s.jsx)("div",{className:"pulse",style:{height:"100%",width:"100%",backgroundColor:"#C4C4C4"}}),(0,s.jsx)("img",(0,r.Z)((0,r.Z)({},l),{},{src:e,alt:null!==t&&void 0!==t?t:"",style:m?{}:{display:"none"},onLoad:function(){return u(!0)}}))]})}},2281:function(n,e,t){t.d(e,{ak:function(){return U},F_:function(){return F},Aq:function(){return W},vF:function(){return V}});var r,i,a,o,s,c,l,d=t(9439),h=t(2791),m=t(210),u=t(5667),x=t(168),p=t(6444),f=p.ZP.button(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: flex-start;\n\n  color: ",";\n  font-size: 1.5rem;\n\n  min-height: 320px;\n  width: 200px;\n\n  padding: 0;\n\n  background-color: ",";\n  box-shadow: 5px 5px 0.45em rgba(0, 0, 0, 0.25);\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  outline: none;\n  border: none;\n\n  &:focus {\n    transform: translateY(-10px);\n\n    box-shadow: 0 5px 20px 3px ",";\n  }\n\n  &:hover {\n    transform: translateY(-10px);\n\n    box-shadow: 0 5px 20px 2px ",";\n  }\n\n  a {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9375em 0;\n\n    height: 100%;\n    width: 100%;\n\n    padding: 0 0 1.25rem;\n  }\n\n  img {\n    height: 200px;\n    width: 100%;\n\n    pointer-events: none;\n  }\n\n  .name {\n    margin: 0 0.9375em 0 0.9375em;\n\n    text-transform: uppercase;\n    text-align: left;\n    line-height: 1.2;\n  }\n"])),(function(n){return n.theme.colors.mainTextWhite}),(function(n){return n.theme.colors.mainBgColor}),(function(n){return n.shadowColor}),(function(n){return n.shadowColor})),g=t(4720),j=t(184),v=function(n){var e=n.img,t=n.name,r=n.id,i=n.onCharSelected,a=(0,h.useState)(!1),o=(0,d.Z)(a,2),s=(o[0],o[1],(0,m.usePalette)(e).data.darkVibrant),c=document.documentElement.clientWidth<=768;return(0,j.jsx)(f,{shadowColor:s,onKeyPress:function(n){var e=n.code;"Space"!==e&&"Enter"!==e||i(r)},children:(0,j.jsxs)(u.rU,{to:"characterInfo",smooth:c,offset:-20,duration:500,onClick:function(){return i(r)},children:[(0,j.jsx)("div",{style:{height:"200px"},children:(0,j.jsx)(g.Z,{src:e,alt:t})}),(0,j.jsx)("div",{className:"name",children:(0,j.jsx)("span",{children:t})})]})})},Z=t(4482),b=t(2567),w=t(1229),y=t(2531),C=t(3584),k=p.ZP.div(i||(i=(0,x.Z)(["\n  margin-top: 0.9375rem;\n\n  p {\n    font-size: 14px;\n    line-height: 1.2;\n  }\n\n  span {\n    display: block;\n\n    margin-top: 0.625em;\n\n    font-weight: 700;\n    font-size: 1.125rem;\n  }\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0.625rem 0;\n\n    list-style-type: none;\n    padding: 0;\n\n    margin-top: 0.625rem;\n\n    li {\n      display: flex;\n      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n      padding: 5px 10px;\n    }\n  }\n"]))),S=t(2319),P=p.ZP.div(a||(a=(0,x.Z)(["\n  padding: 1.5625rem;\n\n  min-height: 770px;\n\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);\n  background: #fff;\n  \n  @media "," {\n    min-height: 710px;\n  }\n"])),S.Uh.tablet),M=p.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n\n  img {\n    max-width: 100%;\n    min-height: 100%;\n    object-fit: contain;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    width: 100%;\n\n    margin-left: 1.5625rem;\n\n    font-size: 1.5rem;\n\n    span {\n      font-size: 1.125rem;\n      font-weight: 700;\n      text-transform: uppercase;\n\n      padding: 0 0 0.625rem;\n    }\n\n    div {\n      margin: 0;\n\n      min-width: 100px;\n\n      gap: 0.625em 0;\n    }\n  }\n"]))),N=function(n){var e=n.char,t=e.id,r=e.name,i=e.description,a=e.thumbnail,o=e.homepage,s=(e.wiki,e.comics);i||(i="Description not found");for(var c=[],l=0;l<s.length&&l<10;l++)c.push({name:s[l].name});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(M,{children:[(0,j.jsx)("img",{src:a,alt:r,width:150,height:150}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:r}),(0,j.jsxs)("div",{children:[(0,j.jsx)(b.YQ,{to:"/characters/".concat(t),children:"homepage"}),(0,j.jsx)(b.rU,{href:o,target:"_blank",grey:!0,children:"wiki"})]})]})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)("p",{children:i}),(0,j.jsx)("span",{children:"Comics:"}),(0,j.jsxs)("ul",{children:[s.length>0?null:"There is no comics with this character!",c.map((function(n,e){var t=n.name;n.url;return(0,j.jsx)("li",{children:t},e)}))]})]})]})},U=function(n){var e=n.id,t=(0,h.useState)(null),r=(0,d.Z)(t,2),i=r[0],a=r[1],o=(0,Z.X)(),s=o.loading,c=o.error,l=o.getCharacter,m=o.clearError,x=function(n){a(n)};(0,h.useEffect)((function(){e&&function(n){m(),l(n).then(x)}(e)}),[e]);var p=s||c||i?null:(0,j.jsx)(C.Z,{}),f=s?(0,j.jsx)(w.Z,{}):null,g=c?(0,j.jsx)(y.Z,{}):null,v=s||c||!i?null:(0,j.jsx)(N,{char:i});return(0,j.jsx)(u.W_,{name:"characterInfo",children:(0,j.jsxs)(P,{children:[f,g,p,v]})})},z=t(3552),E=p.ZP.ul(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.875rem 20px;\n\n  max-width: 650px;\n\n  padding: 0;\n  margin: 0;\n\n  list-style-type: none;\n\n  li {\n    display: flex;\n  }\n\n  @media "," {\n    justify-content: center;\n    margin-top: clamp(20px, 10vh, 50px);\n  }\n"])),S.Uh.bootstrapLarge),L=p.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 45px;\n\n  margin: 0 auto;\n"]))),_=t(990),F=function(n){var e=n.onCharSelected,t=(0,h.useState)(!1),r=(0,d.Z)(t,2),i=r[0],a=r[1],o=(0,h.useState)(!0),s=(0,d.Z)(o,2),c=s[0],l=s[1],m=(0,Z.X)(),u=m.getAllCharacters,x=m.loading,p=m.error,f=m.cancelRequest,g=m.clearError,b=(0,h.useContext)(z.Mt),C=b.characters,k=b.offset,S=(0,h.useContext)(z.iO),P=S.addCharacters,M=S.changeOffset;(0,h.useEffect)((function(){var n=!0;return n&&U(0,!0),function(){n=!1,f()}}),[]);var N=function(n){var e=n.data.results,t=e.length<9;P(e),a(!1),M(9),l(t)},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;a(!e),C.length||u(n).then(N),C.length&&l(!1)},F=(0,h.useMemo)((function(){return C.map((function(n){var t=n.id,r=n.name,i=n.thumbnail;return(0,j.jsx)("li",{children:(0,j.jsx)(v,{id:t,name:r,img:"".concat(i.path,".").concat(i.extension),onCharSelected:e})},t)}))}),[C]),I=p?(0,j.jsx)(y.Z,{}):null,q=x&&!i?(0,j.jsx)(w.Z,{}):null;return(0,j.jsxs)(L,{children:[q,I,!p&&(0,j.jsx)(E,{className:"characters-list",children:F}),!c&&(0,j.jsx)(_.Z,{disabled:i,onClick:function(){return u(k).then(N),a(!0),void g()},text:"Load More",className:"More"})]})},I=p.ZP.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  width: 230px;\n\n  cursor: pointer;\n\n  &:hover {\n    .comics-name {\n      color: ",";\n    }\n  }\n\n  .comics-image {\n    height: 350px;\n    max-width: 100%;\n    object-fit: contain;\n\n    margin-bottom: auto;\n\n    user-select: none;\n    pointer-events: none;\n  }\n\n  .comics-name {\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 16px;\n  }\n\n  .comics-price {\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 16px;\n\n    color: ",";\n  }\n\n  @media "," {\n    .comics-image {\n    }\n  }\n"])),(function(n){return n.theme.colors.mainHoverRed}),(function(n){return n.theme.colors.mainBgGrey}),S.Uh.bootstrapLarge);var q,W=function(n){var e=n.thumbnail,t=n.title,r=n.price;return(0,j.jsxs)(I,{children:[(0,j.jsx)("div",{className:"comics-image",children:(0,j.jsx)(g.Z,{className:"comics-image",src:e,alt:t})}),(0,j.jsx)("h4",{className:"comics-name",children:t}),(0,j.jsx)("span",{className:"comics-price",children:r})]})},Y=t(8683),A=t(1087),B=t(5134),O=p.ZP.div(q||(q=(0,x.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(225px, auto));\n  gap: 55px 65px;\n\n  margin-top: 2.8125rem;\n"]))),R=t(277);var V=function(n){var e=(0,h.useState)(!1),t=(0,d.Z)(e,2),r=t[0],i=t[1],a=(0,h.useState)(!0),o=(0,d.Z)(a,2),s=o[0],c=o[1],l=(0,Z.X)(),m=l.loading,u=l.error,x=l.getAllComics,p=l.cancelRequest,f=(0,h.useContext)(B.ot),g=f.comics,v=f.offset,b=(0,h.useContext)(B.L7),w=b.addComics,y=b.changeOffset;(0,h.useEffect)((function(){var n=!0;return n&&k(v,!0),function(){p(),n=!1}}),[]);var C=function(n){var e=n.length<8;w(n),i(!1),y(8),c(e)},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;i(!e),g.length||x(n).then(C),g.length&&c(!1)},S=m&&!r&&(0,j.jsx)(R.$j,{}),P=u&&(0,j.jsx)(R.Bc,{}),M=!u,N=(0,h.useMemo)((function(){return g.map((function(n){return(0,j.jsx)(A.rU,{to:"/comics/".concat(n.id),children:(0,j.jsx)(W,(0,Y.Z)({},n))},n.id)}))}),[g]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(O,{children:[P,S,M&&N]}),!s&&(0,j.jsx)(_.Z,{disabled:r,onClick:function(){return x(v).then(C),void i(!0)},text:"Load More",className:"More"})]})}},6226:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,i,a,o=t(9439),s=t(2791),c=t(4270),l=t(2281),d=t(277),h=t(168),m=t(6444),u=t(2319),x=m.ZP.img(r||(r=(0,h.Z)(["\n  position: absolute;\n  z-index: -1;\n\n  right: 10%;\n  bottom: -150px;\n\n  @media "," {\n    display: none;\n  }\n"])),u.Uh.tablet),p=m.ZP.section(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 1.25rem;\n\n  margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);\n\n  #characterInfo {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1.875rem;\n\n    max-width: 440px;\n  }\n\n  @media "," {\n    .characters-list {\n      max-width: 420px;\n    }\n  }\n\n  @media "," {\n    flex-direction: column-reverse;\n    align-items: center;\n\n    #characterInfo {\n      width: 100%;\n      max-width: unset;\n    }\n  }\n"])),u.Uh.bootstrapExtraLarge,u.Uh.bootstrapLarge),f=m.ZP.div(a||(a=(0,h.Z)(["\n  padding: 0 0 45px 0;\n\n  .More {\n    margin: 0 auto;\n  }\n"]))),g=t.p+"static/media/bg_asset.8de497492999c5d20b03.png",j=t(184),v=function(){var n=(0,s.useState)(0),e=(0,o.Z)(n,2),t=e[0],r=e[1];return(0,j.jsxs)(f,{children:[(0,j.jsxs)(c.q,{children:[(0,j.jsx)("title",{children:"Marvel Characters"}),(0,j.jsx)("meta",{name:"description",content:"Marvel characters portal"})]}),(0,j.jsx)(d.YW,{}),(0,j.jsxs)(p,{children:[(0,j.jsx)(d.SV,{children:(0,j.jsx)(l.F_,{onCharSelected:function(n){r(n)}})}),(0,j.jsx)("div",{id:"characterInfo",children:(0,j.jsxs)(d.SV,{children:[(0,j.jsx)(l.ak,{id:t}),(0,j.jsx)(d.J4,{})]})})]}),(0,j.jsx)(x,{src:g})]})}}}]);
//# sourceMappingURL=815.5a8a2e62.chunk.js.map