(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[10],{388:function(e,a,t){"use strict";var r=t(2),n=t(5),i=t(1),o=t(7),l=t(407),s=t(410),c=t(412),d=t(389),m=t(405),p=t(393),u=t(411),f=t(10),b={standard:l.a,filled:s.a,outlined:c.a},x=i.forwardRef((function(e,a){var t=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,c=e.children,f=e.classes,x=e.className,h=e.color,g=void 0===h?"primary":h,v=e.defaultValue,y=e.disabled,E=void 0!==y&&y,k=e.error,j=void 0!==k&&k,w=e.FormHelperTextProps,O=e.fullWidth,S=void 0!==O&&O,C=e.helperText,F=e.hiddenLabel,N=e.id,z=e.InputLabelProps,P=e.inputProps,I=e.InputProps,D=e.inputRef,R=e.label,L=e.multiline,T=void 0!==L&&L,M=e.name,q=e.onBlur,B=e.onChange,$=e.onFocus,W=e.placeholder,A=e.required,V=void 0!==A&&A,H=e.rows,G=e.rowsMax,J=e.maxRows,_=e.minRows,K=e.select,Q=void 0!==K&&K,U=e.SelectProps,X=e.type,Y=e.value,Z=e.variant,ee=void 0===Z?"standard":Z,ae=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var te={};if("outlined"===ee&&(z&&"undefined"!==typeof z.shrink&&(te.notched=z.shrink),R)){var re,ne=null!==(re=null===z||void 0===z?void 0:z.required)&&void 0!==re?re:V;te.label=i.createElement(i.Fragment,null,R,ne&&"\xa0*")}Q&&(U&&U.native||(te.id=void 0),te["aria-describedby"]=void 0);var ie=C&&N?"".concat(N,"-helper-text"):void 0,oe=R&&N?"".concat(N,"-label"):void 0,le=b[ee],se=i.createElement(le,Object(r.a)({"aria-describedby":ie,autoComplete:t,autoFocus:s,defaultValue:v,fullWidth:S,multiline:T,name:M,rows:H,rowsMax:G,maxRows:J,minRows:_,type:X,value:Y,id:N,inputRef:D,onBlur:q,onChange:B,onFocus:$,placeholder:W,inputProps:P},te,I));return i.createElement(m.a,Object(r.a)({className:Object(o.a)(f.root,x),disabled:E,error:j,fullWidth:S,hiddenLabel:F,ref:a,required:V,color:g,variant:ee},ae),R&&i.createElement(d.a,Object(r.a)({htmlFor:N,id:oe},z),R),Q?i.createElement(u.a,Object(r.a)({"aria-describedby":ie,id:N,labelId:oe,value:Y,input:se},U),c):se,C&&i.createElement(p.a,Object(r.a)({id:ie},w),C))}));a.a=Object(f.a)({root:{}},{name:"MuiTextField"})(x)},389:function(e,a,t){"use strict";var r=t(2),n=t(5),i=t(1),o=t(7),l=t(504),s=t(505),c=t(10),d=t(390),m=i.forwardRef((function(e,a){var t=e.classes,c=e.className,m=e.disableAnimation,p=void 0!==m&&m,u=(e.margin,e.shrink),f=(e.variant,Object(n.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=Object(s.a)(),x=u;"undefined"===typeof x&&b&&(x=b.filled||b.focused||b.adornedStart);var h=Object(l.a)({props:e,muiFormControl:b,states:["margin","variant"]});return i.createElement(d.a,Object(r.a)({"data-shrink":x,className:Object(o.a)(t.root,c,b&&t.formControl,!p&&t.animated,x&&t.shrink,"dense"===h.margin&&t.marginDense,{filled:t.filled,outlined:t.outlined}[h.variant]),classes:{focused:t.focused,disabled:t.disabled,error:t.error,required:t.required,asterisk:t.asterisk},ref:a},f))}));a.a=Object(c.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(m)},390:function(e,a,t){"use strict";var r=t(5),n=t(2),i=t(1),o=t(7),l=t(504),s=t(505),c=t(12),d=t(10),m=i.forwardRef((function(e,a){var t=e.children,d=e.classes,m=e.className,p=(e.color,e.component),u=void 0===p?"label":p,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(r.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=Object(s.a)(),x=Object(l.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return i.createElement(u,Object(n.a)({className:Object(o.a)(d.root,d["color".concat(Object(c.a)(x.color||"primary"))],m,x.disabled&&d.disabled,x.error&&d.error,x.filled&&d.filled,x.focused&&d.focused,x.required&&d.required),ref:a},f),t,x.required&&i.createElement("span",{"aria-hidden":!0,className:Object(o.a)(d.asterisk,x.error&&d.error)},"\u2009","*"))}));a.a=Object(d.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(m)},392:function(e,a,t){"use strict";var r=t(2),n=t(5),i=t(1),o=t(7),l=t(10),s=t(12),c=i.forwardRef((function(e,a){var t=e.classes,l=e.className,c=e.color,d=void 0===c?"primary":c,m=e.disableShrink,p=void 0!==m&&m,u=e.size,f=void 0===u?40:u,b=e.style,x=e.thickness,h=void 0===x?3.6:x,g=e.value,v=void 0===g?0:g,y=e.variant,E=void 0===y?"indeterminate":y,k=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},w={},O={};if("determinate"===E||"static"===E){var S=2*Math.PI*((44-h)/2);j.strokeDasharray=S.toFixed(3),O["aria-valuenow"]=Math.round(v),j.strokeDashoffset="".concat(((100-v)/100*S).toFixed(3),"px"),w.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(o.a)(t.root,l,"inherit"!==d&&t["color".concat(Object(s.a)(d))],{determinate:t.determinate,indeterminate:t.indeterminate,static:t.static}[E]),style:Object(r.a)({width:f,height:f},w,b),ref:a,role:"progressbar"},O,k),i.createElement("svg",{className:t.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(o.a)(t.circle,p&&t.circleDisableShrink,{determinate:t.circleDeterminate,indeterminate:t.circleIndeterminate,static:t.circleStatic}[E]),style:j,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})))}));a.a=Object(l.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(c)},394:function(e,a,t){"use strict";var r=t(2),n=t(5),i=t(1),o=t(7),l=t(117),s=t(10),c=t(536),d=i.forwardRef((function(e,a){var t=e.children,s=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,u=e.disablePointerEvents,f=void 0!==u&&u,b=e.disableTypography,x=void 0!==b&&b,h=e.position,g=e.variant,v=Object(n.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(c.b)()||{},E=g;return g&&y.variant,y&&!E&&(E=y.variant),i.createElement(c.a.Provider,{value:null},i.createElement(p,Object(r.a)({className:Object(o.a)(s.root,d,"end"===h?s.positionEnd:s.positionStart,f&&s.disablePointerEvents,y.hiddenLabel&&s.hiddenLabel,"filled"===E&&s.filled,"dense"===y.margin&&s.marginDense),ref:a},v),"string"!==typeof t||x?t:i.createElement(l.a,{color:"textSecondary"},t)))}));a.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},518:function(e,a,t){"use strict";var r=t(1),n=t.n(r),i=t(307),o=t(392),l=t(10);a.a=Object(l.a)((function(e){return{circularProgress:{color:"green"}}}),{withTheme:!0})((function(e){var a=e.size,t=e.classes;return n.a.createElement(i.a,{color:"secondary.main",pl:1.5,display:"flex"},n.a.createElement(o.a,{size:a||24,thickness:a?a/5*24:5,className:t.circularProgress}))}))},554:function(e,a,t){"use strict";var r=t(42),n=t(43);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(1)),o=(0,r(t(44)).default)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");a.default=o},558:function(e,a,t){"use strict";var r=t(1),n=t(101);a.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},725:function(e,a,t){"use strict";var r=t(1),n=t(101);a.a=Object(n.a)(r.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},741:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t(9),i=t(1),o=t.n(i),l=(t(312),t(495)),s=t(325),c=t(307),d=t(117),m=t(388),p=t(394),u=t(393),f=t(405),b=t(339),x=t(332),h=t(341),g=t(24),v=t(18),y=t(534),E=t(528),k=t(554),j=t.n(k),w=(t(98),t(518)),O=t(558),S=t(725),C=t(66),F=(t(125),t(82),Object(l.a)((function(e){var a;return{buttonbox:(a={padding:"10px 18px"},Object(n.a)(a,e.breakpoints.only("sm"),{maxWidth:"112px",fontSize:"9px"}),Object(n.a)(a,e.breakpoints.only("xs"),{maxWidth:"112px",fontSize:"9px"}),a),logosec:{"@media(min-width:1280px)":{display:"none"}},newbox:{"&:hover":{textDecoration:"underline"}},boxbutton:{display:"flex",alignItems:"center",marginTop:"10px",justifyContent:"center","@media(max-width:960px)":{display:"flex",alignItems:"center",justifyContent:"center"},"@media(max-width:375px)":{alignItems:"center",justifyContent:"center"}},btnmain:{textAlign:"center"},mainbox:{backgroundColor:"#afdbaf",padding:"13px"},emailerr:{backgroundColor:"#fd3333",paddingTop:"3px",paddingBottom:"3px",paddingLeft:"3px",paddingRight:"3px"},pass:{backgroundColor:"#7c7676",paddingTop:"3px",paddingBottom:"3px",paddingLeft:"3px",paddingRight:"3px"},upper:{marginTop:"205px"},mainSocail:{justifyContent:"center",alignItems:"center",marginBottom:"25px",width:"100%","& input":{border:"none",outline:"none",padding:"8px",width:"100%"}},subsocial:{cursor:"pointer",display:"flex",alignItems:"center",border:"1px solid hsl(0deg 0% 94%)","& p":{margin:0,fontSize:"14px",color:"#6c6c6c",paddingLeft:"10px"}},iconPart:{color:"#23a563",background:"#d8ffeb",padding:"8px",fontSize:"18px"},inputvalue:{"& placeholder":{color:"#262626"}},loginBox:{WebkitBackdropFilter:"blur(42px)",backdropFilter:"blur(42px)",borderRadius:"5px",position:"relative",zIndex:"999",padding:"25px","& h2":{fontSize:"40px",color:"#01fbb4",webkitFilter:"drop-shadow(0 0 10px #1eb808)",filter:"drop-shadow(0 0 10px #1EB808)"},"& label":{color:"#ffffffde",fontSize:"14px",fontWeight:"400"}},headText:{"& h2":Object(n.a)({fontSize:"40px",color:"#F38500"},e.breakpoints.down("xs"),{fontSize:"30px"})},passsec:{paddingTop:"3px",paddingBottom:"3px",paddingLeft:"3px",paddingRight:"3px"},loginForm1:{"& input":{borderRadius:"5px"}}}})));a.default=function(e){Object(i.useContext)(C.a);var a=F(),t=Object(i.useState)(!1),n=Object(r.a)(t,2),l=n[0],k=(n[1],Object(i.useState)(!1)),N=Object(r.a)(k,2),z=N[0],P=N[1],I=Object(g.g)(),D=Object(i.useState)(!1),R=Object(r.a)(D,2),L=R[0],T=R[1];return o.a.createElement(s.a,{className:"d-flex height100"},o.a.createElement(c.a,{className:"loginForm"},o.a.createElement(c.a,{className:"signupbox"},o.a.createElement(s.a,{container:!0,direction:"column"},o.a.createElement(c.a,{textAlign:"center",className:a.headText,style:{width:"100%",marginBottom:"30px"}},o.a.createElement(d.a,{variant:"h2"},"Login")),o.a.createElement(y.b,{initialValues:{email:"",password:""},initialStatus:{success:!1,successMsg:""},validationSchema:E.a().shape({email:E.c().email("Entered Email is invalid").required("Email address is required"),password:E.c().required("Please enter your password")})},(function(e){var t=e.errors,r=e.handleBlur,n=e.handleChange,i=(e.handleSubmit,e.touched),s=e.values;e.setFieldValue;return o.a.createElement(y.a,null,o.a.createElement(c.a,{style:{width:"100%"},className:a.loginForm1},o.a.createElement("label",null,"Email Address"),o.a.createElement(m.a,{variant:"outlined",margin:"normal",fullWidth:!0,className:a.inputFeild,id:"email",value:s.email,placeholder:"Enter email address",InputProps:{endAdornment:o.a.createElement(p.a,{position:"end"},o.a.createElement(j.a,{style:{color:"#F38500"}}))},name:"email",error:Boolean(i.email&&t.email),onBlur:r,onChange:n}),o.a.createElement(u.a,{style:{marginTop:"-3px"},error:!0},i.email&&t.email)),o.a.createElement(c.a,{mt:1},o.a.createElement(f.a,{fullWidth:!0,style:{}},o.a.createElement(c.a,{style:{width:"100%"},className:a.loginForm1},o.a.createElement("label",null,"Password"),o.a.createElement(m.a,{variant:"outlined",margin:"normal",fullWidth:!0,value:s.password,className:a.inputFeild,name:"password",placeholder:"Enter your password",type:z?"text":"password",error:Boolean(i.password&&t.password),onBlur:r,onChange:n,InputProps:{endAdornment:o.a.createElement(p.a,{position:"end"},o.a.createElement(b.a,{onClick:function(){return P(!z)},edge:"end",style:{marginRight:"-14px"}},o.a.createElement(c.a,{className:a.passsec},z?o.a.createElement(O.a,{style:{color:"#F38500",fontSize:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}):o.a.createElement(S.a,{style:{color:"#F38500",fontSize:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}))))}}),o.a.createElement(u.a,{style:{marginTop:"-3px"},error:!0},i.password&&t.password)))),o.a.createElement(c.a,{display:"flex",justifyContent:"space-between",style:{marginTop:"5px"}},o.a.createElement(c.a,null,o.a.createElement("label",{className:"inline-flex items-center cursor-pointer"},o.a.createElement("input",{onChange:function(){T(!0)},id:"rememberCheckLogin",checked:L,type:"checkbox",className:"form-checkbox border-0 rounded text-blueGray-700 ml-5 w-7 h-7 ease-linear transition-all duration-150"}),o.a.createElement("span",{style:{fontSize:"15px",color:"#F38500"},className:"ml-5 text-sm font-semibold text-blueGray-600"},"Remember me"))),o.a.createElement(d.a,{color:"primary.main",variant:"body1"},o.a.createElement(x.a,{component:v.a,to:"/forget-password",style:{color:"#F38500",fontSize:"14px",fontWeight:"500",textDecoration:"underline"}},"Forgot Password?"))),o.a.createElement(c.a,{align:"center",mb:3,mt:4,style:{width:"100%"}},o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return I.push("/dashboard")},type:"submit"},"LOGIN \xa0 ",l&&o.a.createElement(w.a,null))))}))))))}}}]);
//# sourceMappingURL=10.f61cfa68.chunk.js.map