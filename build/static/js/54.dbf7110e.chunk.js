(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[54],{387:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(1),o=a(7),c=a(10),s=a(29),l=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,s=e.classes,l=e.className,d=e.component,m=void 0===d?"hr":d,p=e.flexItem,u=void 0!==p&&p,h=e.light,f=void 0!==h&&h,x=e.orientation,g=void 0===x?"horizontal":x,b=e.role,v=void 0===b?"hr"!==m?"separator":void 0:b,y=e.variant,k=void 0===y?"fullWidth":y,j=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(r.a)({className:Object(o.a)(s.root,l,"fullWidth"!==k&&s[k],c&&s.absolute,u&&s.flexItem,f&&s.light,"vertical"===g&&s.vertical),role:v,ref:t},j))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},392:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(1),o=a(7),c=a(10),s=a(12),l=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,d=void 0===l?"primary":l,m=e.disableShrink,p=void 0!==m&&m,u=e.size,h=void 0===u?40:u,f=e.style,x=e.thickness,g=void 0===x?3.6:x,b=e.value,v=void 0===b?0:b,y=e.variant,k=void 0===y?"indeterminate":y,j=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),E={},O={},C={};if("determinate"===k||"static"===k){var w=2*Math.PI*((44-g)/2);E.strokeDasharray=w.toFixed(3),C["aria-valuenow"]=Math.round(v),E.strokeDashoffset="".concat(((100-v)/100*w).toFixed(3),"px"),O.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(o.a)(a.root,c,"inherit"!==d&&a["color".concat(Object(s.a)(d))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[k]),style:Object(r.a)({width:h,height:h},O,f),ref:t,role:"progressbar"},C,j),i.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(o.a)(a.circle,p&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[k]),style:E,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},518:function(e,t,a){"use strict";var r=a(1),n=a.n(r),i=a(307),o=a(392),c=a(10);t.a=Object(c.a)((function(e){return{circularProgress:{color:"green"}}}),{withTheme:!0})((function(e){var t=e.size,a=e.classes;return n.a.createElement(i.a,{color:"secondary.main",pl:1.5,display:"flex"},n.a.createElement(o.a,{size:t||24,thickness:t?t/5*24:5,className:a.circularProgress}))}))},541:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(307),n=a(117),i=a(1),o=a.n(i);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#fff";return o.a.createElement(r.a,{style:{display:"flex",justifyContent:"center",paddingTop:"10px"}},o.a.createElement(n.a,{style:{color:e,fontSize:"16px"}},"No data found"))}},777:function(e,t,a){"use strict";a.r(t);var r=a(22),n=a(9),i=a(1),o=a.n(i),c=a(495),s=a(307),l=a(117),d=a(387),m=a(341),p=(a(82),a(24)),u=(a(125),a(518),a(541),Object(c.a)((function(e){var t;return{headcontent:{display:"flex",padding:"40px 0px",flexDirection:"column",paddingBottom:"10px",alignItems:"center",justifyContent:"center","& h6":{display:"flex",justifyContent:"center",paddingBottom:"40px"}},topsection:(t={padding:"15px 0px",backgroundColor:" #FEDDB6",border:" 1px solid #F38500",borderRadius:"15px"},Object(n.a)(t,"padding","1rem"),Object(n.a)(t,"& h4",{padding:"10px 0px",color:e.palette.text.black}),Object(n.a)(t,"& h5",{padding:"10px 0px",color:e.palette.text.black}),Object(n.a)(t,"& h6",{padding:"10px 0px",color:e.palette.text.black}),Object(n.a)(t,"& p",{color:e.palette.text.black}),t),headingpara:{display:"flex",alignItems:"center",paddingBottom:"50px",paddingTop:"20px","& p":{color:"#262626"}},headbox:{padding:"23px 0 30px"},btnmargin:{marginTop:"30px","@media(max-width:767px)":{marginTop:"20px"}},boxbutton:{display:"flex",alignItems:"center",marginTop:"10px",justifyContent:"center",paddingRight:"50px","@media(max-width:960px)":{display:"flex",alignItems:"center",justifyContent:"center"},"@media(max-width:375px)":{alignItems:"center",justifyContent:"center"}},btnmain:{textAlign:"center"},divider:{marginTop:"10px",backgroundColor:"#F38500"},devicelistHeading:{display:"flex",justifyContent:"start",alignItems:"center","& h3":{padding:"1rem 0",color:e.palette.text.black},"& .icon1":Object(n.a)({height:"20px",paddingRight:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingRight:"7px"}),"& .icon2":Object(n.a)({height:"20px",paddingLeft:"20px"},e.breakpoints.only("xs"),{width:"50px",height:"8px",paddingLeft:"7px"})}}})));t.default=function(){var e=u(),t=Object(p.g)(),a=Object(i.useState)(),n=Object(r.a)(a,2),c=(n[0],n[1],Object(i.useState)(!1)),h=Object(r.a)(c,2);return h[0],h[1],o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:e.headbox},o.a.createElement(s.a,{className:e.devicelistHeading},o.a.createElement(l.a,{variant:"h1",className:"headingText"},"Terms and Condition's")),o.a.createElement(d.a,{className:e.divider}),o.a.createElement(s.a,null,o.a.createElement(s.a,{mb:5},o.a.createElement(s.a,{className:e.topsection,mt:2},o.a.createElement(s.a,null,o.a.createElement(s.a,{align:"left"},o.a.createElement(l.a,{variant:"h5",style:{color:"#000"}},"Jun 16, 2022, 3:53:50 PM,")),o.a.createElement(s.a,null,o.a.createElement(l.a,{variant:"h6",style:{color:"#000"}},"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source")),o.a.createElement(s.a,{mb:0,className:e.btnmargin,align:"left"},o.a.createElement(s.a,{className:e.boxbutton},o.a.createElement(s.a,{textAlign:"center",style:{margin:"0px 10px"}},o.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/contentMgmt")}},"BACK")),o.a.createElement(s.a,{textAlign:"center",className:e.btnmain},o.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return t.push({pathname:"/edit-content",search:"Terms&Condition"})}},"EDIT"))))))))))}}}]);
//# sourceMappingURL=54.dbf7110e.chunk.js.map