(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[49],{387:function(e,t,r){"use strict";var a=r(2),n=r(5),o=r(1),i=r(7),c=r(10),l=r(29),s=o.forwardRef((function(e,t){var r=e.absolute,c=void 0!==r&&r,l=e.classes,s=e.className,u=e.component,p=void 0===u?"hr":u,m=e.flexItem,d=void 0!==m&&m,f=e.light,y=void 0!==f&&f,b=e.orientation,g=void 0===b?"horizontal":b,h=e.role,v=void 0===h?"hr"!==p?"separator":void 0:h,x=e.variant,w=void 0===x?"fullWidth":x,E=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(p,Object(a.a)({className:Object(i.a)(l.root,s,"fullWidth"!==w&&l[w],c&&l.absolute,d&&l.flexItem,y&&l.light,"vertical"===g&&l.vertical),role:v,ref:t},E))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},524:function(e,t,r){"use strict";var a=r(530).CopyToClipboard;a.CopyToClipboard=a,e.exports=a},530:function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=c(r(1)),o=c(r(531)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=g(e);if(t){var n=g(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return y(this,r)}}function y(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(l,e);var t,r,a,c=f(l);function l(){var e;p(this,l);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return h(b(e=c.call.apply(c,[this].concat(r))),"onClick",(function(t){var r=e.props,a=r.text,i=r.onCopy,c=r.children,l=r.options,s=n.default.Children.only(c),u=(0,o.default)(a,l);i&&i(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=u(e,i),a=n.default.Children.only(t);return n.default.cloneElement(a,s(s({},r),{},{onClick:this.onClick}))}}])&&m(t.prototype,r),a&&m(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default.PureComponent);t.CopyToClipboard=v,h(v,"defaultProps",{onCopy:void 0,options:void 0})},531:function(e,t,r){"use strict";var a=r(532),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,i,c,l,s,u=!1;t||(t={}),r=t.debug||!1;try{if(i=a(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){r&&console.error("unable to copy using execCommand: ",p),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},532:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],a=0;a<e.rangeCount;a++)r.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},735:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r(1),o=r.n(n),i=r(495),c=r(307),l=r(117),s=r(324),u=r(325),p=r(341),m=r(24),d=(r(524),r(98),r(387)),f=Object(i.a)((function(e){var t;return t={wrapper:{paddingTop:"23px",paddingBottom:"30px","& h2 ":{}},container:{marginTop:"3rem",backgroundColor:"#FEDDB6",border:"1px solid #F38500",padding:"25px 40px",borderRadius:"15px"},upload:{width:"150px",height:"150px",margin:"16px 0",cursor:"pointer",borderRadius:"20px",position:"relative","& img":{width:"100%",height:"100%",border:"1px solid #F38500",objectFit:"cover"}},typo:{marginLeft:"3rem"},btn:{textAlign:"center",paddingTop:"20px"}},Object(a.a)(t,"typo",{marginBottom:"5px"}),Object(a.a)(t,"divider",{marginTop:"10px",backgroundColor:"#F38500"}),Object(a.a)(t,"walletcopy",{"& h6":{wordBreak:"break-word"}}),t}));t.default=function(){var e=f(),t=Object(m.g)();return Object(m.h)(),o.a.createElement(c.a,{className:e.wrapper},o.a.createElement(l.a,{variant:"h1"},"User Details"),o.a.createElement(d.a,{className:e.divider}),o.a.createElement(s.a,{maxWidth:"md"},o.a.createElement(c.a,{className:e.container},o.a.createElement(u.a,{container:!0,spacing:1},o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:4,lg:4,style:{display:"flex"}},o.a.createElement("figure",{className:e.upload},o.a.createElement("img",{src:"/images/t3.jpeg"}))),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:8,lg:8},o.a.createElement(u.a,{container:!0,spacing:1},o.a.createElement(u.a,{item:!0,lg:3,md:4,sm:5,xs:12},o.a.createElement(l.a,{variant:"h5"},"User Id \xa0:")),o.a.createElement(u.a,{item:!0,lg:9,md:6,sm:7,xs:12},o.a.createElement(l.a,{variant:"h6",style:{wordBreak:"Break-all"}},"User001")),o.a.createElement(u.a,{item:!0,lg:3,md:4,sm:5,xs:12},o.a.createElement(l.a,{variant:"h5"},"User Name\xa0:")),o.a.createElement(u.a,{item:!0,lg:9,md:6,sm:7,xs:12},o.a.createElement(l.a,{variant:"h6"},"Sonu Kumar")),o.a.createElement(u.a,{item:!0,lg:3,md:4,sm:5,xs:12},o.a.createElement(l.a,{variant:"h5"},"State\xa0:")),o.a.createElement(u.a,{item:!0,lg:9,md:6,sm:7,xs:12},o.a.createElement(l.a,{variant:"h6"},"Delhi")),o.a.createElement(u.a,{item:!0,lg:3,md:4,sm:5,xs:12},o.a.createElement(l.a,{variant:"h5"},"District\xa0:")),o.a.createElement(u.a,{item:!0,lg:9,md:6,sm:7,xs:12},o.a.createElement(l.a,{variant:"h6"},"New Delhi")),o.a.createElement(u.a,{item:!0,lg:3,md:4,sm:5,xs:12},o.a.createElement(l.a,{variant:"h5"},"Created Date & time\xa0:")),o.a.createElement(u.a,{item:!0,lg:9,md:6,sm:7,xs:12},o.a.createElement(l.a,{variant:"h6"},"June 20,2022 07:11:38 PM")),o.a.createElement(u.a,{item:!0,lg:3,md:4,sm:5,xs:12},o.a.createElement(l.a,{variant:"h5"},"Status :")),o.a.createElement(u.a,{item:!0,lg:9,md:6,sm:7,xs:12},o.a.createElement(l.a,{variant:"h6"},"Active")))),o.a.createElement(u.a,{item:!0,lg:12,md:12,sm:12,xs:12,style:{marginTop:"15px"}},o.a.createElement(l.a,{variant:"h5"},"Summary :")),o.a.createElement(u.a,{item:!0,lg:12,md:12,sm:12,xs:12},o.a.createElement(c.a,null,o.a.createElement(l.a,{variant:"h6"},"According to all the information provided by you, it seems to us that you are having trouble at sleeping in night, which makes it hard for you to get up early in the morning to continue your daily routine.It also shows that your menstrual cycle was 30 days which is within the normal medical range i:e 21- 35 days.")))),o.a.createElement(c.a,{mt:4,align:"center"},o.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:function(){t.push("/users")}},"Back")))))}}}]);
//# sourceMappingURL=49.74a5f291.chunk.js.map