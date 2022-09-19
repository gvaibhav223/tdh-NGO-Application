/*! For license information please see 58.b8075f55.chunk.js.LICENSE.txt */
(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[58],{387:function(e,t,r){"use strict";var a=r(2),n=r(5),o=r(1),i=r(7),c=r(10),l=r(29),s=o.forwardRef((function(e,t){var r=e.absolute,c=void 0!==r&&r,l=e.classes,s=e.className,u=e.component,d=void 0===u?"hr":u,p=e.flexItem,m=void 0!==p&&p,h=e.light,f=void 0!==h&&h,g=e.orientation,v=void 0===g?"horizontal":g,y=e.role,b=void 0===y?"hr"!==d?"separator":void 0:y,x=e.variant,w=void 0===x?"fullWidth":x,E=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(d,Object(a.a)({className:Object(i.a)(l.root,s,"fullWidth"!==w&&l[w],c&&l.absolute,m&&l.flexItem,f&&l.light,"vertical"===v&&l.vertical),role:b,ref:t},E))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},393:function(e,t,r){"use strict";var a=r(5),n=r(2),o=r(1),i=r(7),c=r(504),l=r(505),s=r(10),u=o.forwardRef((function(e,t){var r=e.children,s=e.classes,u=e.className,d=e.component,p=void 0===d?"p":d,m=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(a.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),h=Object(l.a)(),f=Object(c.a)({props:e,muiFormControl:h,states:["variant","margin","disabled","error","filled","focused","required"]});return o.createElement(p,Object(n.a)({className:Object(i.a)(s.root,("filled"===f.variant||"outlined"===f.variant)&&s.contained,u,f.disabled&&s.disabled,f.error&&s.error,f.filled&&s.filled,f.focused&&s.focused,f.required&&s.required,"dense"===f.margin&&s.marginDense),ref:t},m)," "===r?o.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):r)}));t.a=Object(s.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(u)},515:function(e,t,r){"use strict";r(517)},755:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var a=r(130),n=r(22),o=r(9),i=r(1),c=r.n(i),l=r(495),s=r(307),u=r(117),d=r(387),p=r(324),m=r(325),h=r(405),f=r(388),g=r(341),v=(r(515),r(24)),y=r(82),b=r.n(y),x=r(125),w=r.n(x);function E(){E=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),i=new O(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return N()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=s(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function d(){}function p(){}function m(){}var h={};c(h,n,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(L([])));g&&g!==t&&r.call(g,n)&&(h=g);var v=m.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(n,o){function i(){return new t((function(a,i){!function a(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=m,c(v,"constructor",m),c(m,"constructor",p),p.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new b(l(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),c(v,i,"Generator"),c(v,n,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var j=Object(l.a)((function(e){return{NftBreed:{padding:"23px 0 "},formControl:Object(o.a)({margin:e.spacing(1),minWidth:120,width:"100%"},"margin","0 10px"),main:{border:"1px solid #01FBB4",padding:"40px",background:"linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",boxShadow:"0px 0px 53px rgb(0 0 0 / 25%)",borderRadius:"5px","&:hover":{boxShadow:"0 0 1rem #1eb80873, 0 0 0rem #1eb80873, 0 0 1rem #1eb80880, 0 0 4rem #1eb80866"}},divider:{marginTop:"30px"},textField:{maxWidth:"100%"},image:{cursor:"pointer"},upload:{width:"150px",height:"150px",margin:"16px 0",cursor:"pointer",borderRadius:"20px",position:"relative","& img":{width:"100%",height:"100%",border:"1px solid #01FBB4",borderRadius:"50%",objectFit:"cover"},"& button":{position:"absolute",border:"3px solid black",bottom:0,right:0,backgroundColor:"#fff",color:"#000",fontSize:"15px","&:hover":{backgroundColor:"#fff",border:"3px solid black"},"& input":{width:"100%",height:"100%",position:"absolute",top:"0",left:"0",opacity:0}}},devicelistHeading:{display:"flex",justifyContent:"start",alignItems:"center","& h3":{padding:"1rem 0",color:e.palette.text.black},"& .icon1":Object(o.a)({height:"20px",paddingRight:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingRight:"7px"}),"& .icon2":Object(o.a)({height:"20px",paddingLeft:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingLeft:"7px"})},newbtn:{"@media(max-width:400px)":{marginTop:"10px"}}}}));function O(e){var t,r=j(),l=Object(v.g)(),y=Object(i.useState)(""),x=Object(n.a)(y,2),O=(x[0],x[1],Object(i.useState)("")),L=Object(n.a)(O,2),N=(L[0],L[1],Object(i.useState)("")),k=Object(n.a)(N,2),S=(k[0],k[1],Object(i.useState)()),_=Object(n.a)(S,2),T=(_[0],_[1],Object(v.h)().state);console.log("fjksdukfhbgjg",T);var F=Object(i.useState)([]),I=Object(n.a)(F,2),P=I[0],C=I[1];var B=Object(i.useState)((t={coverPic:"",profilePic:""},Object(o.a)(t,"profilePic",""),Object(o.a)(t,"coverPic",""),t)),R=Object(n.a)(B,2),G=(R[0],R[1],function(){var e=Object(a.a)(E().mark((function e(){var t;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"GET",url:w.a.mediaList+"/".concat(T),headers:{token:window.sessionStorage.getItem("token")}});case 3:200===(t=e.sent).data.statusCode&&(console.log("afkjhsakdjlfbg",t),C(t.data.result)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}());return Object(i.useEffect)((function(){T&&G()}),[T]),c.a.createElement(s.a,{className:r.NftBreed},c.a.createElement(s.a,{className:r.devicelistHeading},c.a.createElement("img",{src:"images/Vector 83.png",className:"icon1"}),"/view-media"===window.location.pathname&&c.a.createElement(u.a,{variant:"h1",className:"headingText"},"View Press & Media"),c.a.createElement("img",{src:"images/Vector 80.png",className:"icon2"})),c.a.createElement(d.a,{className:r.divider}),c.a.createElement(p.a,{maxWidth:"md"},c.a.createElement(s.a,{mt:10,mb:2,className:r.main},c.a.createElement(m.a,{container:!0,spacing:2},c.a.createElement(m.a,{item:!0,md:4,sm:4,lg:4,xs:12},c.a.createElement(s.a,{style:{display:"flex",justifyContent:"center",width:"100%"}},c.a.createElement(s.a,null,c.a.createElement("figure",{className:r.upload},c.a.createElement("img",{src:P.picture})),c.a.createElement(s.a,{style:{display:"flex",justifyContent:"center",width:"100%"}},c.a.createElement(u.a,{variant:"h6",color:"primary"},P.title))))),c.a.createElement(m.a,{item:!0,md:8,sm:8,lg:8,xs:12,className:r.image},c.a.createElement(s.a,{mt:2},c.a.createElement("form",{className:"formBox p-0",autoComplete:"off"},c.a.createElement(m.a,{container:!0,spacing:2,className:"BreedDetails"},c.a.createElement(h.a,{variant:"outlined",className:r.formControl},c.a.createElement(s.a,null,c.a.createElement(u.a,{variant:"h4",color:"primary"},"Upload media photo :")),c.a.createElement(s.a,{mt:2},c.a.createElement(u.a,{variant:"h5",color:"primary",style:{paddingBottom:"8px"}},"Title :"),c.a.createElement(f.a,{readOnly:!0,variant:"outlined",value:P.title,className:r.textField,inputProps:{readOnly:"true"}})),c.a.createElement(s.a,{mt:2},c.a.createElement(u.a,{variant:"h5",color:"primary",style:{paddingBottom:"8px"}},"Source URL(Optional) :"),c.a.createElement(f.a,{variant:"outlined",inputProps:{readOnly:"true"},"aria-readonly":!0,value:P.url,placeholder:"https://www.lipsum.com/",className:r.textField})),c.a.createElement(s.a,{mt:2},c.a.createElement(u.a,{variant:"h5",color:"primary",style:{paddingBottom:"8px"}},"Description :"),c.a.createElement(f.a,{variant:"outlined",inputProps:{readOnly:"true"},fullWidth:!0,"aria-readonly":!0,value:P.description,placeholder:"Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of\r Lorem Ipsum is simply dummy text of\r Lorem Ipsum is simply dummy text of",className:r.textField,multiline:!0,rows:4})),c.a.createElement(s.a,{style:{marginTop:"16px"}},c.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return l.push("/pressMedia")},className:r.newbtn},"Back")))))))))))}}}]);
//# sourceMappingURL=58.b8075f55.chunk.js.map