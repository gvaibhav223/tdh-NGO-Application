/*! For license information please see 64.300c54a5.chunk.js.LICENSE.txt */
(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[64],{393:function(e,t,r){"use strict";var n=r(5),a=r(2),o=r(1),i=r(7),c=r(504),s=r(505),l=r(10),u=o.forwardRef((function(e,t){var r=e.children,l=e.classes,u=e.className,d=e.component,h=void 0===d?"p":d,f=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(n.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),p=Object(s.a)(),m=Object(c.a)({props:e,muiFormControl:p,states:["variant","margin","disabled","error","filled","focused","required"]});return o.createElement(h,Object(a.a)({className:Object(i.a)(l.root,("filled"===m.variant||"outlined"===m.variant)&&l.contained,u,m.disabled&&l.disabled,m.error&&l.error,m.filled&&l.filled,m.focused&&l.focused,m.required&&l.required,"dense"===m.margin&&l.marginDense),ref:t},f)," "===r?o.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):r)}));t.a=Object(l.a)((function(e){return{root:Object(a.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(u)},515:function(e,t,r){"use strict";r(517)},761:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return N}));var n=r(130),a=r(22),o=r(9),i=r(1),c=r.n(i),s=r(495),l=r(307),u=r(117),d=r(387),h=r(324),f=r(325),p=r(405),m=r(388),g=r(24),v=r(526),b=r.n(v),y=r(341),x=(r(515),r(82)),w=r.n(x),E=r(98),j=r(125),O=r.n(j);function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=s;var u={};function d(){}function h(){}function f(){}var p={};c(p,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==t&&r.call(g,a)&&(p=g);var v=f.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=f,c(v,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(y.prototype),c(y.prototype,o,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new y(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),c(v,i,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var k=Object(s.a)((function(e){return Object(o.a)({NftBreed:{padding:"23px 0 "},formControl:Object(o.a)({margin:e.spacing(1),minWidth:120,width:"100%"},"margin","0 10px"),main:{border:"1px solid #F38500",padding:"40px",borderRadius:"15px",backgroundColor:"#FEDDB6"},divider:{marginTop:"30px"},textField:{maxWidth:"100%"},image:{cursor:"pointer"},upload:{width:"150px",height:"150px",margin:"16px 0",cursor:"pointer",borderRadius:"20px",position:"relative","& img":{width:"100%",height:"100%",border:"1px solid #01FBB4",borderRadius:"50%",objectFit:"cover"},"& button":{position:"absolute",border:"3px solid black",bottom:0,right:0,backgroundColor:"#fff",color:"#000",fontSize:"15px","&:hover":{backgroundColor:"#fff",border:"3px solid black"},"& input":{width:"100%",height:"100%",position:"absolute",top:"0",left:"0",opacity:0}}},devicelistHeading:{display:"flex",justifyContent:"start",alignItems:"center","& h3":{padding:"1rem 0",color:e.palette.text.black},"& .icon1":Object(o.a)({height:"20px",paddingRight:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingRight:"7px"}),"& .icon2":Object(o.a)({height:"20px",paddingLeft:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingLeft:"7px"})},newbtn:{"@media(max-width:400px)":{marginTop:"10px"}}},"divider",{marginTop:"10px",background:"#F38500"})}));function N(e){var t=k(),r=Object(g.g)(),o=Object(g.h)(),s=Object(i.useState)(!1),v=Object(a.a)(s,2),x=(v[0],v[1]),j=Object(i.useState)(),N=Object(a.a)(j,2),S=(N[0],N[1]),_=o.state,T=Object(i.useState)(),F=Object(a.a)(T,2),B=F[0],q=(F[1],_.question),C=Object(i.useState)(""),I=Object(a.a)(C,2),G=I[0],P=I[1],R=Object(i.useState)("SUBMIT"),D=Object(a.a)(R,2),A=(D[0],D[1]),U=Object(i.useState)(q||""),H=Object(a.a)(U,2),M=H[0],Q=H[1],W=Object(i.useState)(!1),J=Object(a.a)(W,2),Y=(J[0],J[1]),$=Object(i.useRef)(null);console.log("faqID---",_.question);var z=Object(i.useState)(_),K=Object(a.a)(z,2),V=(K[0],K[1],function(){var e=Object(n.a)(L().mark((function e(t){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Y(!0),x(!0),e.prev=3,e.next=6,w()({method:"PUT",url:O.a.faq,headers:{token:window.sessionStorage.getItem("token")},data:{_id:null===_||void 0===_?void 0:_._id,question:M,answer:G}});case 6:200===e.sent.data.statusCode&&(Y(!1),A("SUBMIT"),E.b.success("Content Updated"),r.push("/view-announcements"),x(!1)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),Y(!1),E.b.error(e.t0.message),x(!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}());Object(i.useEffect)((function(){if(o.search.substring(1,o.search.length)){var e=o.search.substring(1,o.search.length);S(e)}o.search.substring(1,o.search.length)}),[o.search]),Object(i.useEffect)((function(){B&&P(B.description?B.description:"")}),[B]);return c.a.createElement(l.a,{className:t.NftBreed},c.a.createElement(l.a,{className:t.devicelistHeading},c.a.createElement(u.a,{variant:"h1",className:"headingText"},"Edit FAQ")),c.a.createElement(d.a,{className:t.divider}),c.a.createElement(h.a,{maxWidth:"md"},c.a.createElement(l.a,{mt:5,mb:2,className:t.main},c.a.createElement(f.a,{container:!0,spacing:2},c.a.createElement(f.a,{item:!0,md:12,sm:12,lg:12,xs:12,className:t.image},c.a.createElement(l.a,{mt:2},c.a.createElement("form",{className:"formBox p-0",onSubmit:function(e){return V(e)}},c.a.createElement(f.a,{container:!0,spacing:2,className:"BreedDetails"},c.a.createElement(p.a,{variant:"outlined",className:t.formControl},c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{mt:2},c.a.createElement(u.a,{variant:"h5",color:"primary",style:{paddingBottom:"8px"}},"Question :"),c.a.createElement(m.a,{variant:"outlined",placeholder:"Please enter Question",className:t.textField,name:"question",value:M,onChange:function(e){return Q(e.target.value)}})),c.a.createElement(l.a,null,c.a.createElement(l.a,{style:{marginTop:"10px"}},c.a.createElement(u.a,{variant:"h5",color:"primary",style:{paddingBottom:"8px"}},"Answer :"),c.a.createElement(b.a,{ref:$,name:"answer",value:_.answer,onBlur:function(e){return P(e)},tabIndex:1,onChange:function(e){}})))),c.a.createElement(l.a,{style:{marginTop:"16px"}},c.a.createElement(y.a,{variant:"contained",color:"primary",className:t.newbtn,onClick:function(){return r.push("/view-announcements")}},"Back"),"\xa0\xa0",c.a.createElement(y.a,{variant:"contained",color:"primary",className:t.newbtn},"Update")))))))))))}}}]);
//# sourceMappingURL=64.300c54a5.chunk.js.map