(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[25],{387:function(e,t,a){"use strict";var n=a(2),r=a(5),l=a(1),o=a(7),i=a(10),c=a(29),p=l.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,c=e.classes,p=e.className,s=e.component,u=void 0===s?"hr":s,d=e.flexItem,m=void 0!==d&&d,f=e.light,b=void 0!==f&&f,g=e.orientation,h=void 0===g?"horizontal":g,x=e.role,y=void 0===x?"hr"!==u?"separator":void 0:x,v=e.variant,E=void 0===v?"fullWidth":v,O=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(u,Object(n.a)({className:Object(o.a)(c.root,p,"fullWidth"!==E&&c[E],i&&c.absolute,m&&c.flexItem,b&&c.light,"vertical"===h&&c.vertical),role:y,ref:t},O))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(p)},518:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(307),o=a(392),i=a(10);t.a=Object(i.a)((function(e){return{circularProgress:{color:"green"}}}),{withTheme:!0})((function(e){var t=e.size,a=e.classes;return r.a.createElement(l.a,{color:"secondary.main",pl:1.5,display:"flex"},r.a.createElement(o.a,{size:t||24,thickness:t?t/5*24:5,className:a.circularProgress}))}))},524:function(e,t,a){"use strict";var n=a(530).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},530:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=i(a(1)),l=i(a(531)),o=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){x(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=h(e);if(t){var r=h(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b(this,a)}}function b(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,a,n,i=f(c);function c(){var e;u(this,c);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return x(g(e=i.call.apply(i,[this].concat(a))),"onClick",(function(t){var a=e.props,n=a.text,o=a.onCopy,i=a.children,c=a.options,p=r.default.Children.only(i),s=(0,l.default)(n,c);o&&o(n,s),p&&p.props&&"function"===typeof p.props.onClick&&p.props.onClick(t)})),e}return t=c,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=s(e,o),n=r.default.Children.only(t);return r.default.cloneElement(n,p(p({},a),{},{onClick:this.onClick}))}}])&&d(t.prototype,a),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.default.PureComponent);t.CopyToClipboard=y,x(y,"defaultProps",{onCopy:void 0,options:void 0})},531:function(e,t,a){"use strict";var n=a(532),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,l,o,i,c,p,s=!1;t||(t={}),a=t.debug||!1;try{if(o=n(),i=document.createRange(),c=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=r[t.format]||r.default;window.clipboardData.setData(l,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(p),i.selectNodeContents(p),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(u){a&&console.error("unable to copy using execCommand: ",u),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),p&&document.body.removeChild(p),o()}return s}},532:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},539:function(e,t,a){"use strict";var n=a(42),r=a(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(1)),o=(0,n(a(44)).default)(l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},541:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(307),r=a(117),l=a(1),o=a.n(l);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#fff";return o.a.createElement(n.a,{style:{display:"flex",justifyContent:"center",paddingTop:"10px"}},o.a.createElement(r.a,{style:{color:e,fontSize:"16px"}},"No data found"))}},547:function(e,t,a){"use strict";var n=a(22),r=a(9),l=a(307),o=a(325),i=a(394),c=a(339),p=a(405),s=a(411),u=a(341),d=a(617),m=(a(98),a(524),a(1)),f=a.n(m),b=a(24),g=a(384),h=a(388),x=a(336),y=a(527),v=Object(g.a)((function(e){return{deviceSection:{display:"flex",alignItems:"center"},devicelistHeading:{display:"flex",justifyContent:"start",alignItems:"center","& h3":{padding:"1rem 0",color:e.palette.text.black},"& .icon1":Object(r.a)({height:"20px",paddingRight:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingRight:"7px"}),"& .icon2":Object(r.a)({height:"20px",paddingLeft:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingLeft:"7px"})},activeparent:{display:"flex",alignItems:"center"},activeDevice:{width:"10px",height:"10px",background:"green",borderRadius:"100px"},tableRow1:{"& td":{color:e.palette.text.black},"& th":{color:e.palette.text.black}},formControl:{minWidth:"15vh",width:"100%"},iconcolor:{color:"#fff"},mainbox:{paddingTop:"23px","& .tableHead":{backgroundColor:"#FEDDB6","& th":{color:"#000",padding:"11px"}}},filterBox:{color:"black",position:"relative","& h6":{position:"absolute",top:"-20px",background:e.palette.background.dark1,padding:"5px 10px",left:"0px",fontSize:"19px",color:"#5a86ff",fontWeight:600},"& input":{color:e.palette.text.black},"& label":{color:"#000",fontSize:"14px",fontWeight:"400"},"& .iconbtn":{color:e.palette.text.black}},filterLine:Object(r.a)({marginRight:"20px",width:"180px"},e.breakpoints.only("xs"),{width:"145px"}),inputFeild:{border:"1px solid #F38500",padding:"6px 0px",color:"#000",borderRadius:"5px","& svg":{color:"#F38500",fontSize:"16px"}},divider:{marginTop:"30px"}}}));t.a=function(e){var t=f.a.useState(new Date("2014-08-18T21:11:54")),a=Object(n.a)(t,2),r=(a[0],a[1],f.a.useState(!1)),g=Object(n.a)(r,2),E=(g[0],g[1],Object(m.useState)()),O=Object(n.a)(E,2),j=O[0],S=O[1],w=Object(m.useState)(),C=Object(n.a)(w,2),k=C[0],D=C[1],P=Object(m.useState)("Active"),R=Object(n.a)(P,2),T=(R[0],R[1],Object(b.g)(),Object(m.useState)()),F=Object(n.a)(T,2),N=(F[0],F[1]),H=Object(m.useState)("Select Category"),z=Object(n.a)(H,2),I=z[0],W=z[1],M=Object(m.useState)("Select"),A=Object(n.a)(M,2),Y=A[0],B=A[1],_=v();return f.a.createElement(l.a,null,f.a.createElement(l.a,{className:_.filterBox,mb:5},f.a.createElement(l.a,{style:{display:"flex",justifyContent:"flex-start",flexDirection:"row",flexWrap:"wrap"}},f.a.createElement(o.a,{container:!0,spacing:1},f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",null,"Search "),f.a.createElement(l.a,null,f.a.createElement(h.a,{id:"outlined-basic",type:"search",variant:"outlined",placeholder:"Search Here",fullWidth:!0,onChange:function(e){return N(e.target.value)},InputProps:{endAdornment:f.a.createElement(i.a,{position:"end"},f.a.createElement(c.a,{style:{fontSize:"20px",padding:"0px"},className:"iconbtn"},f.a.createElement(y.b,{style:{color:"#F38500",fontSize:"16px"}}))," ")}}))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",null,"Format"),f.a.createElement(p.a,{variant:"outlined",className:_.formControl},f.a.createElement(l.a,null,f.a.createElement(s.a,{name:"token",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",onChange:function(e){return B(e.target.value)},value:Y,style:{width:"100%"}},f.a.createElement(x.a,{value:"Select"},"Select Format"),f.a.createElement(x.a,{value:"Audio"},"Audio"),f.a.createElement(x.a,{value:"Photo"},"Photo"),f.a.createElement(x.a,{value:"Video"},"Video"),f.a.createElement(x.a,{value:"Document"},"Document"))))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",null,"Category"),f.a.createElement(p.a,{variant:"outlined",className:_.formControl},f.a.createElement(l.a,null,f.a.createElement(s.a,{name:"token",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",onChange:function(e){return W(e.target.value)},value:I,style:{width:"100%"}},f.a.createElement(x.a,{value:"Select Category"},"Select Category"),f.a.createElement(x.a,{value:"Mental Health"},"Mental Health"),f.a.createElement(x.a,{value:"Menstrual Health"}," ","Menstrual Health"),f.a.createElement(x.a,{value:"Personal Safety"},"Personal Safety"),f.a.createElement(x.a,{value:"Support Service"},"Support Service"))))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",null,"From"),f.a.createElement(l.a,null,f.a.createElement(d.a,{className:_.inputFeild,margin:"normal",disableFuture:!0,id:"date-picker-dialog",format:"YYYY-MM-DD HH:mm",value:k,onChange:function(e){return D(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",null,"To"),f.a.createElement(l.a,null,f.a.createElement(d.a,{className:_.inputFeild,margin:"normal",id:"date-picker-dialog",format:"YYYY-MM-DD HH:mm",disableFuture:!0,value:j,onChange:function(e){return S(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",{style:{color:"transparent"}},"Status"),f.a.createElement(l.a,null,f.a.createElement(u.a,{variant:"contained",color:"primary",fullWidth:!0},"Submit"))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:3},f.a.createElement("label",{style:{color:"transparent"}},"Status"),f.a.createElement(l.a,null,f.a.createElement(u.a,{variant:"contained",color:"primary",fullWidth:!0,style:{padding:"5px 5px"}},"Reset")))))))}},583:function(e,t,a){"use strict";var n=a(22),r=a(9),l=a(307),o=a(325),i=a(394),c=a(339),p=a(405),s=a(411),u=a(341),d=a(617),m=(a(98),a(524),a(1)),f=a.n(m),b=a(24),g=a(384),h=a(388),x=a(336),y=a(527),v=Object(g.a)((function(e){return{deviceSection:{display:"flex",alignItems:"center"},devicelistHeading:{display:"flex",justifyContent:"start",alignItems:"center","& h3":{padding:"1rem 0",color:e.palette.text.black},"& .icon1":Object(r.a)({height:"20px",paddingRight:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingRight:"7px"}),"& .icon2":Object(r.a)({height:"20px",paddingLeft:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingLeft:"7px"})},activeparent:{display:"flex",alignItems:"center"},activeDevice:{width:"10px",height:"10px",background:"green",borderRadius:"100px"},tableRow1:{"& td":{color:e.palette.text.black},"& th":{color:e.palette.text.black}},formControl:{minWidth:"15vh",width:"100%"},iconcolor:{color:"#fff"},mainbox:{paddingTop:"23px","& .tableHead":{backgroundColor:"#1EB808","& th":{color:"#fff",padding:"11px"}}},mainbox1:{"& .tableHead":{backgroundColor:"#1EB808","& th":{color:"#fff",padding:"11px"}}},filterBox:{color:"#fff",position:"relative","& h6":{position:"absolute",top:"-20px",background:e.palette.background.dark1,padding:"5px 10px",left:"0px",fontSize:"19px",color:"#5a86ff",fontWeight:600},"& input":{color:e.palette.text.black},"& label":{color:"#ffffffde",fontSize:"14px",fontWeight:"400"},"& .iconbtn":{color:e.palette.text.black}},inputFeild:{border:"1px solid #F38500 ",padding:"6px",color:"#fff",borderRadius:"5px",marginTop:"5px","& svg":{color:"#F38500 ",fontSize:"16px"}},divider:{marginTop:"30px"}}}));t.a=function(e){var t=f.a.useState(new Date("2014-08-18T21:11:54")),a=Object(n.a)(t,2),r=a[0],g=a[1],E=function(e){g(e)},O=f.a.useState(!1),j=Object(n.a)(O,2),S=(j[0],j[1],Object(m.useState)("Active")),w=Object(n.a)(S,2),C=w[0],k=w[1],D=(Object(b.g)(),v());return f.a.createElement(l.a,null,f.a.createElement(l.a,{className:D.filterBox,mb:5,mt:4},f.a.createElement(o.a,{container:!0,spacing:2},f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:2},f.a.createElement("label",null,"Search "),f.a.createElement(l.a,{style:{marginTop:"5px"}},f.a.createElement(h.a,{id:"outlined-basic",type:"search",variant:"outlined",placeholder:"search Here",fullWidth:!0,InputProps:{endAdornment:f.a.createElement(i.a,{position:"end"}," ",f.a.createElement(c.a,{style:{fontSize:"20px",padding:"0px"},className:"iconbtn"},f.a.createElement(y.b,{style:{color:"#F38500 ",fontSize:"16px"}}))," ")}}))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:2},f.a.createElement("label",null,"From"),f.a.createElement(l.a,null,f.a.createElement(d.a,{className:D.inputFeild,margin:"normal",id:"date-picker-dialog",format:"YYYY-MM-DD HH:mm",value:r,onChange:E,KeyboardButtonProps:{"aria-label":"change date"}}))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:2},f.a.createElement("label",null,"To"),f.a.createElement(l.a,null,f.a.createElement(d.a,{className:D.inputFeild,margin:"normal",id:"date-picker-dialog",format:"YYYY-MM-DD HH:mm",value:r,onChange:E,KeyboardButtonProps:{"aria-label":"change date"}}))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:2},f.a.createElement(p.a,{variant:"outlined",className:D.formControl},f.a.createElement("label",null,"Status"),f.a.createElement(l.a,{mt:1},f.a.createElement(s.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:C,style:{width:"100%"},onChange:function(e){k(e.target.value)}},f.a.createElement(x.a,{value:"Active"},"None"),f.a.createElement(x.a,{value:10,selected:!0},"Active"),f.a.createElement(x.a,{value:20},"Blocked"))))),f.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4,lg:2},f.a.createElement("label",{style:{color:"transparent"}},"Status"),f.a.createElement(l.a,{style:{marginTop:"5px"}},f.a.createElement(u.a,{variant:"contained",color:"primary",fullWidth:!0},"Reset"))))))}},762:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(9),l=a(10),o=a(395),i=a(307),c=a(117),p=a(387),s=a(396),u=a(397),d=a(398),m=a(399),f=a(400),b=a(344),g=a(341),h=(a(524),a(98),a(514)),x=a.n(h),y=(a(547),a(24)),v=a(384),E=(a(583),a(343)),O=a(347),j=a(345),S=a(346),w=a(539),C=a.n(w),k=(a(82),a(518),a(1)),D=a.n(k),P=(a(125),a(170),a(541),Object(v.a)((function(e){return{deviceSection:{display:"flex",alignItems:"center"},devicelistHeading:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center","& h3":{padding:"1rem 0",color:e.palette.text.black},"& .icon1":Object(r.a)({height:"20px",paddingRight:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingRight:"7px"}),"& .icon2":Object(r.a)({height:"20px",paddingLeft:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingLeft:"7px"})},activeparent:{display:"flex",alignItems:"center"},activeDevice:{width:"10px",height:"10px",background:"green",borderRadius:"100px"},tableRow1:{"& td":{color:e.palette.text.black},"& th":{color:e.palette.text.black}},formControl:{minWidth:"15vh"},iconcolor:{color:"#fff","& path":{}},mainbox:{padding:"21px 0 40px","& .tableHead":{backgroundColor:"#FEDDB6","& th":{color:"#000",fontSize:"15px"},"& h1":{color:"#FFFFFF",fontSize:"30px",fontWeight:"600",lineHeight:"80px"}}},divider:{marginTop:"10px",background:"#F38500"},filterBox:{color:"#fff",padding:"15px",position:"relative","& h6":{position:"absolute",top:"-20px",background:e.palette.background.dark1,padding:"5px 10px",left:"0px",fontSize:"19px",color:"#5a86ff",fontWeight:600},"& input":{color:e.palette.text.black},"& label":{fontSize:"14px",fontWeight:600,color:e.palette.text.black},"& .iconbtn":{color:e.palette.text.black}}}}))),R=[{id:1},{id:1},{id:1},{id:1}],T=Object(l.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#ffdead87"}}}}))(o.a);t.default=function(e){var t=D.a.useState(!1),a=Object(n.a)(t,2),r=a[0],l=a[1],h=Object(y.g)(),v=Object(k.useState)(1),w=Object(n.a)(v,2),F=(w[0],w[1],D.a.useState([])),N=Object(n.a)(F,2),H=(N[0],N[1],Object(k.useState)(1)),z=Object(n.a)(H,2),I=(z[0],z[1],D.a.useState(!1)),W=Object(n.a)(I,2),M=(W[0],W[1],Object(k.useState)(!1)),A=Object(n.a)(M,2),Y=(A[0],A[1],Object(k.useState)(!1)),B=Object(n.a)(Y,2),_=(B[0],B[1],function(){l(!1)}),L=P();return D.a.createElement(i.a,{className:L.mainbox},D.a.createElement(i.a,{className:L.devicelistHeading},D.a.createElement(c.a,{variant:"h1",className:"headingText"},"Tutorial Screen Management")),D.a.createElement(p.a,{className:L.divider}),D.a.createElement(i.a,{style:{marginTop:"70px"}}),D.a.createElement(s.a,null,D.a.createElement(u.a,null,D.a.createElement(d.a,null,D.a.createElement(o.a,{className:"".concat(L.tablerow1," tableHead")},D.a.createElement(m.a,null,"Sr.No."),D.a.createElement(m.a,null,"Tutorial Name"),D.a.createElement(m.a,null,"Action"))),D.a.createElement(f.a,null,R.map((function(e,t){return D.a.createElement(T,{className:L.tableRow1},D.a.createElement(m.a,null,t+1)," ",D.a.createElement(m.a,null,"Tutorial Screen 1"),D.a.createElement(m.a,null,D.a.createElement(x.a,{style:{fontSize:"20px",color:"#F38500",cursor:"pointer"},onClick:function(){h.push({pathname:"/view-team",search:"View"})}}),"\xa0\xa0",D.a.createElement(C.a,{style:{fontSize:"20px",cursor:"pointer",color:"#F38500"},onClick:function(){h.push({pathname:"/view-team",search:"Edit"})},className:L.iconcolor}),"\xa0\xa0"))}))))),D.a.createElement(D.a.Fragment,null,D.a.createElement(E.a,{open:r,fullWidth:!0,maxWidth:"sm",onClose:_,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},D.a.createElement(b.a,{align:"center",id:"alert-dialog-title"},D.a.createElement(c.a,{variant:"h2"},"Delete Splash Screeen")),D.a.createElement(j.a,null,D.a.createElement(S.a,{id:"alert-dialog-description",align:"center"},D.a.createElement(c.a,{variant:"h5"}," ","Are you sure you want to delete this splash screen?"))),D.a.createElement(O.a,null,D.a.createElement(g.a,{onClick:_,variant:"contained",color:"secondary"},"No"),D.a.createElement(g.a,{onClick:_,variant:"contained",color:"primary"},"Yes")))))}}}]);
//# sourceMappingURL=25.bb5cff52.chunk.js.map