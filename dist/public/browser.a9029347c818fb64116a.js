webpackJsonp([1],{"/9cL":function(e,t,n){e.exports=n.p+"assets/img/1-pagecenter@3x.0a8827884630d6a3648fbda5d2153576.png"},"/Uud":function(e,t,n){"use strict";function r(e){return{type:"CHANGE_COLOUR",colour:e}}t.a=r},0:function(e,t,n){e.exports=n("TBTs")},"1M6Q":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);e.length>t;t++)n[t]=e[t];return n}return Array.from(e)}function a(){var e,t=0>=arguments.length||void 0===arguments[0]||arguments[0],n=Object.assign.apply(Object,[{}].concat(o((e=[]).concat.apply(e,o(d.map(function(e){return Object.keys(e).map(function(n){return r({},n,e[n][t?"reducer":"state"])})}))))));return t?n:Object.assign.apply(Object,[{}].concat(o(Object.keys(n).map(function(e){return r({},e,b&&p()(window.__STATE__[e])||n[e])}))))}function c(e){return n.i(i.createStore)(n.i(i.combineReducers)(m({apollo:e.reducer()},a())),m({apollo:b&&window.__STATE__.apollo||{}},a(!1)),n.i(i.compose)(n.i(i.applyMiddleware)(e.middleware(),l.a),void 0!==window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}))}t.a=c;var i=n("2KeS"),u=n("4ufr"),l=n.n(u),s=n("7dTF"),p=n.n(s),f=n("vuYp"),m=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=!!window.__STATE__,d=[f.a]},"5u3A":function(e,t,n){e.exports=n.p+"assets/img/face-book.bfe9e908ae4154a8626147694d7e3031.svg"},"6PzL":function(e,t,n){e.exports=n.p+"assets/img/login@3x.7724d1676675e033e6c7a01ac25ecdb1.png"},DdTZ:function(e,t){},ExuJ:function(e,t,n){e.exports=n.p+"assets/img/screen-shot-2017-02-11-at-7-08-42-pm@3x.dcca8ec9f995c5953b8d9c4c8364adda.png"},JV1A:function(e,t,n){e.exports=n.p+"assets/img/oktopus.bd839001bf12e3ebdbd3c74ea320b4ac.png"},NGIQ:function(e,t,n){e.exports=n.p+"assets/img/oktopus-logo.2bdf1bd4c2db9ac20f6729189c2060e2.svg"},QEtA:function(e,t,n){e.exports=n.p+"assets/img/login@2x.39b1de6f5ca0495fbe0756a1c618a399.png"},TBTs:function(e,t,n){"use strict";function r(){l.a.render(i.a.createElement(h,null),document.getElementById("main"))}Object.defineProperty(t,"__esModule",{value:!0});var o=n("SldL"),a=(n.n(o),n("j9g7")),c=(n.n(a),n("U7vG")),i=n.n(c),u=n("O27J"),l=n.n(u),s=n("F8kA"),p=n("BhyV"),f=(n.n(p),n("pk9O")),m=n("1M6Q"),b=n("eslX"),d=n.i(f.a)(),g=n.i(m.a)(d),h=function(){var e=function(){return i.a.createElement(p.ApolloProvider,{store:g,client:d},i.a.createElement(s.a,null,i.a.createElement(b.a,null)))};return e}();r()},UqlA:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return m});var c=n("U7vG"),i=n.n(c),u=n("KSGD"),l=n.n(u),s=n("F8kA"),p=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.code,n=e.children;return i.a.createElement(s.d,{render:function(e){var r=e.staticContext;return r&&(r.status=t),n}})}}]),t}(i.a.PureComponent);f.propTypes={code:l.a.number.isRequired,children:l.a.node},f.defaultProps={children:null};var m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){return i.a.createElement(f,{code:404},this.props.children)}}]),t}(i.a.PureComponent);m.propTypes={children:l.a.node},m.defaultProps={children:null};var b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.from,r=e.push;return i.a.createElement(f,{code:e.permanent?301:302},i.a.createElement(s.e,{to:t,from:n,push:r}))}}]),t}(i.a.PureComponent);b.propTypes={to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,from:l.a.string,push:l.a.bool,permanent:l.a.bool},b.defaultProps={from:null,push:!1,permanent:!1}},Uqy4:function(e,t){e.exports={rectangle:"rectangle-1SVS6NPqU0yRdzCNeJbvWI","topbar-bg":"topbar-bg-31sIoHSemwpfhBx1nn74Ko","oktopus-logo":"oktopus-logo-23zJkGHTG34LKO6cjlqdBP","pagecenter-1":"pagecenter-1-KPFDPGNNMG_a9VaIDFh3b","text-style-1":"text-style-1-1v8bI924aVg5sUm-VjW8SE","your-website-is-about":"your-website-is-about-2a7L-8UYIzWm8XiklfRAJL",oc_login_inputs:"oc_login_inputs-XOr69NEO-BOnj0HLehxu8",oc_login_socials:"oc_login_socials-3JEchWxSBu36WOOKONtZkv",face_book:"face_book-_RgoGMBv16wZrrUuSiRKH",linked_in:"linked_in-2uZ9fpmnoZRpy1a42uaSK9",oc_login_button:"oc_login_button-2KJ1pkj65vC1cPP7thEd8r",oc_login_button_text:"oc_login_button_text-11zS5wZGpDTwkPQLQ_P0Fb",oc_login_forgot:"oc_login_forgot-1P7IiMPHdmhgvTbTXapD4C","combined-shape":"combined-shape-3zm9vHew9_9v8Djid6LKyu","screen-shot-2017-02-11-at-7-08-42-pm":"screen-shot-2017-02-11-at-7-08-42-pm-2oRdDAFTfoWPfI4-f93GJ5",line:"line-1NEDOOpc80eC_2dp2INbb"}},UrHU:function(e,t){e.exports={container:"container-bu6XUrADKt6uFd1dkTVxB",logo:"logo-3rAg6AIwaAMIhQtHncqlRG"}},ZrUh:function(e,t,n){e.exports=n.p+"assets/img/login.3879d9e177704a5621f0a8b6c270dcd2.png"},cKS4:function(e,t,n){e.exports=n.p+"assets/img/linked-in.545802034c24beb61d36dafbf6c7033c.svg"},e9Qb:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={uri:"https://api.graph.cool/simple/v1/cinomw2r1018601o42x5z69uc"}},eslX:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c,i,u=n("U7vG"),l=n.n(u),s=n("KSGD"),p=n.n(s),f=n("PIAa"),m=n.n(f),b=n("RH2O"),d=n("F8kA"),g=n("q1rf"),h=n("7L6O"),y=n.n(h),_=n("zaBK"),v=n.n(_),E=n("nVwW"),O=n.n(E),w=n("vlCz"),k=(n.n(w),n("UqlA")),x=n("/Uud"),j=n("JV1A"),P=n.n(j),T=n("DdTZ"),N=(n.n(T),n("UrHU")),S=n.n(N),A=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),C=(c=n.i(b.a)(function(e){return{colour:e.colour}}))(i=function(e){function t(){var e,a,c,i;r(this,t);for(var u=arguments.length,l=Array(u),s=0;u>s;s++)l[s]=arguments[s];return a=c=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),c.changeColour=function(){c.props.dispatch(n.i(x.a)())},i=a,o(c,i)}return a(t,e),A(t,[{key:"render",value:function(){var e={backgroundColor:this.props.colour};return l.a.createElement("div",{className:S.a.logo},l.a.createElement("img",{src:P.a,alt:"Oktopus"}),l.a.createElement("h1",{style:e},"Coming soon"),l.a.createElement("button",{onClick:this.changeColour},"Change colour"))}}]),t}(l.a.PureComponent))||i;C.propTypes={colour:p.a.string},C.defaultProps={colour:"goldenrod"};var U=function(){return l.a.createElement(k.a,null,l.a.createElement("h1",null,"Unknown route - the 404 handler was triggered!"))};E.light.input.bottomLine="#FF825C",E.light.input.disabled="#ff4000",E.light.text.primary="#FF825C";var G=v()({palette:O()({primary:w.orange,accent:w.deepOrange,error:w.red,type:"light"})});t.a=function(){return l.a.createElement("div",{className:S.a.container},l.a.createElement(m.a,{title:"Oktopus",meta:[{name:"description",content:"Oktopus front-end"}]}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/page/login"},"Login"))),l.a.createElement(y.a,{theme:G},l.a.createElement(d.c,null,l.a.createElement(d.d,{exact:!0,path:"/",component:C}),l.a.createElement(d.d,{path:"/page/login",component:g.a}),l.a.createElement(d.d,{component:U}))))}},"gy2+":function(e,t,n){e.exports=n.p+"assets/img/screen-shot-2017-02-11-at-7-08-42-pm@2x.f1a558a66f39253ac2f1a1d21f54bcdb.png"},hx2G:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("U7vG"),i=n.n(c),u=n("KSGD"),l=(n.n(u),n("rtxM")),s=n.n(l),p=n("WdaU"),f=n.n(p),m=n("nz+8"),b=(n.n(m),n("Uqy4")),d=n.n(b),g=n("zmDq"),h=n.n(g),y=n("gy2+"),_=n.n(y),v=n("ExuJ"),E=n.n(v),O=n("5u3A"),w=n.n(O),k=n("cKS4"),x=n.n(k),j=n("ZrUh"),P=n.n(j),T=n("QEtA"),N=n.n(T),S=n("6PzL"),A=n.n(S),C=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=function(){return i.a.createElement("div",null,i.a.createElement("img",{src:P.a,srcSet:P.a+" 1x, "+N.a+" 2x, "+A.a+" 3x",className:d.a.oc_login_button_text,alt:"Login"}))},G=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),C(t,[{key:"render",value:function(){return i.a.createElement("div",{className:d.a["combined-shape"]},i.a.createElement("img",{src:h.a,srcSet:h.a+" 1x, "+_.a+" 2x, "+E.a+" 3x",className:d.a["screen-shot-2017-02-11-at-7-08-42-pm"],alt:"Oktopus"}),i.a.createElement("div",{className:d.a.oc_login_inputs},i.a.createElement(s.a,{placeholder:"Email Field"}),i.a.createElement(s.a,{placeholder:"Password Field",type:"password"})),i.a.createElement("div",{className:d.a.oc_login_socials},i.a.createElement("img",{src:w.a,className:d.a.face_book,alt:"Facebook"}),i.a.createElement("img",{src:x.a,className:d.a.linked_in,alt:"Linked In"})),i.a.createElement("div",{className:d.a.oc_login_inputs},i.a.createElement("div",null,i.a.createElement(f.a,{className:d.a.oc_login_button},i.a.createElement(U,null))),i.a.createElement("div",null,i.a.createElement(f.a,{className:d.a.oc_login_forgot},"Forgot?"))))}}]),t}(i.a.Component);G.propTypes={},t.a=G},pk9O:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new a.ApolloClient(Object.assign({reduxRootSelector:function(e){return e.apollo},networkInterface:i},e))}function o(){return r()}t.a=o;var a=n("BhyV"),c=(n.n(a),n("e9Qb")),i=n.i(a.createNetworkInterface)({uri:c.a.uri})},q1rf:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("U7vG"),i=n.n(c),u=n("KSGD"),l=n.n(u),s=n("hx2G"),p=n("NGIQ"),f=n.n(p),m=n("/9cL"),b=n.n(m),d=n("Uqy4"),g=n.n(d),h=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),h(t,[{key:"render",value:function(){return i.a.createElement("div",{className:g.a.rectangle},i.a.createElement("div",{className:g.a["topbar-bg"]},i.a.createElement("img",{src:f.a,alt:"Oktopus",className:g.a["oktopus-logo"]}),i.a.createElement("img",{src:b.a,alt:"Signup or login",className:g.a["pagecenter-1"]})),i.a.createElement("div",{className:g.a["your-website-is-about"]},"Your website is about to be reborn."),i.a.createElement(s.a,null))}}]),t}(i.a.Component);y.propTypes={match:l.a.shape({params:l.a.object}).isRequired},t.a=y},vuYp:function(e,t,n){"use strict";var r=n("7dTF"),o=n.n(r),a=["goldenrod","hotpink","green"],c=o()(a[0]);t.a={colour:{state:c,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return"CHANGE_COLOUR"===t.type?o()(t.colour||a[(a.indexOf(e)+1)%a.length]):e}}}},zmDq:function(e,t,n){e.exports=n.p+"assets/img/screen-shot-2017-02-11-at-7-08-42-pm.0d73e6bb12891a51608450c4c045fdbf.png"}},[0]);