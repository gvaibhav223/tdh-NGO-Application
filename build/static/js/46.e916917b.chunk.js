(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[46],{388:function(e,a,r){"use strict";var t=r(2),n=r(5),o=r(1),l=r(7),i=r(407),s=r(410),d=r(412),c=r(389),m=r(405),u=r(393),p=r(411),f=r(10),b={standard:i.a,filled:s.a,outlined:d.a},g=o.forwardRef((function(e,a){var r=e.autoComplete,i=e.autoFocus,s=void 0!==i&&i,d=e.children,f=e.classes,g=e.className,x=e.color,h=void 0===x?"primary":x,v=e.defaultValue,y=e.disabled,j=void 0!==y&&y,E=e.error,O=void 0!==E&&E,k=e.FormHelperTextProps,C=e.fullWidth,w=void 0!==C&&C,R=e.helperText,q=e.hiddenLabel,N=e.id,I=e.InputLabelProps,F=e.inputProps,P=e.InputProps,T=e.inputRef,$=e.label,A=e.multiline,L=void 0!==A&&A,D=e.name,H=e.onBlur,M=e.onChange,W=e.onFocus,B=e.placeholder,S=e.required,z=void 0!==S&&S,V=e.rows,J=e.rowsMax,K=e.maxRows,_=e.minRows,U=e.select,Y=void 0!==U&&U,G=e.SelectProps,Q=e.type,X=e.value,Z=e.variant,ee=void 0===Z?"standard":Z,ae=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var re={};if("outlined"===ee&&(I&&"undefined"!==typeof I.shrink&&(re.notched=I.shrink),$)){var te,ne=null!==(te=null===I||void 0===I?void 0:I.required)&&void 0!==te?te:z;re.label=o.createElement(o.Fragment,null,$,ne&&"\xa0*")}Y&&(G&&G.native||(re.id=void 0),re["aria-describedby"]=void 0);var oe=R&&N?"".concat(N,"-helper-text"):void 0,le=$&&N?"".concat(N,"-label"):void 0,ie=b[ee],se=o.createElement(ie,Object(t.a)({"aria-describedby":oe,autoComplete:r,autoFocus:s,defaultValue:v,fullWidth:w,multiline:L,name:D,rows:V,rowsMax:J,maxRows:K,minRows:_,type:Q,value:X,id:N,inputRef:T,onBlur:H,onChange:M,onFocus:W,placeholder:B,inputProps:F},re,P));return o.createElement(m.a,Object(t.a)({className:Object(l.a)(f.root,g),disabled:j,error:O,fullWidth:w,hiddenLabel:q,ref:a,required:z,color:h,variant:ee},ae),$&&o.createElement(c.a,Object(t.a)({htmlFor:N,id:le},I),$),Y?o.createElement(p.a,Object(t.a)({"aria-describedby":oe,id:N,labelId:le,value:X,input:se},G),d):se,R&&o.createElement(u.a,Object(t.a)({id:oe},k),R))}));a.a=Object(f.a)({root:{}},{name:"MuiTextField"})(g)},389:function(e,a,r){"use strict";var t=r(2),n=r(5),o=r(1),l=r(7),i=r(504),s=r(505),d=r(10),c=r(390),m=o.forwardRef((function(e,a){var r=e.classes,d=e.className,m=e.disableAnimation,u=void 0!==m&&m,p=(e.margin,e.shrink),f=(e.variant,Object(n.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=Object(s.a)(),g=p;"undefined"===typeof g&&b&&(g=b.filled||b.focused||b.adornedStart);var x=Object(i.a)({props:e,muiFormControl:b,states:["margin","variant"]});return o.createElement(c.a,Object(t.a)({"data-shrink":g,className:Object(l.a)(r.root,d,b&&r.formControl,!u&&r.animated,g&&r.shrink,"dense"===x.margin&&r.marginDense,{filled:r.filled,outlined:r.outlined}[x.variant]),classes:{focused:r.focused,disabled:r.disabled,error:r.error,required:r.required,asterisk:r.asterisk},ref:a},f))}));a.a=Object(d.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(m)},390:function(e,a,r){"use strict";var t=r(5),n=r(2),o=r(1),l=r(7),i=r(504),s=r(505),d=r(12),c=r(10),m=o.forwardRef((function(e,a){var r=e.children,c=e.classes,m=e.className,u=(e.color,e.component),p=void 0===u?"label":u,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(t.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=Object(s.a)(),g=Object(i.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return o.createElement(p,Object(n.a)({className:Object(l.a)(c.root,c["color".concat(Object(d.a)(g.color||"primary"))],m,g.disabled&&c.disabled,g.error&&c.error,g.filled&&c.filled,g.focused&&c.focused,g.required&&c.required),ref:a},f),r,g.required&&o.createElement("span",{"aria-hidden":!0,className:Object(l.a)(c.asterisk,g.error&&c.error)},"\u2009","*"))}));a.a=Object(c.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(m)},393:function(e,a,r){"use strict";var t=r(5),n=r(2),o=r(1),l=r(7),i=r(504),s=r(505),d=r(10),c=o.forwardRef((function(e,a){var r=e.children,d=e.classes,c=e.className,m=e.component,u=void 0===m?"p":m,p=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(t.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),f=Object(s.a)(),b=Object(i.a)({props:e,muiFormControl:f,states:["variant","margin","disabled","error","filled","focused","required"]});return o.createElement(u,Object(n.a)({className:Object(l.a)(d.root,("filled"===b.variant||"outlined"===b.variant)&&d.contained,c,b.disabled&&d.disabled,b.error&&d.error,b.filled&&d.filled,b.focused&&d.focused,b.required&&d.required,"dense"===b.margin&&d.marginDense),ref:a},p)," "===r?o.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):r)}));a.a=Object(d.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(c)},511:function(e,a,r){"use strict";r.d(a,"a",(function(){return l}));var t=r(1),n=r.n(t),o=r(537);function l(e){var a=e.title,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("title",null,a)),n.a.createElement("div",null,r))}},771:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return b}));var t=r(1),n=r.n(t),o=r(307),l=r(117),i=r(325),s=r(388),d=r(341),c=r(511),m=r(495),u=r(24),p=r(18),f=Object(m.a)((function(e){return{root:{paddingRight:0},inputAdornment:{backgroundColor:"#f5d5da",height:40,maxHeight:40,paddingRight:10,paddingLeft:10,borderTopRightRadius:20,borderBottomRightRadius:20},mainbox:{padding:"50px 0 30px"},iconcolor:{backgroundColor:"#f5f5f5",padding:"16px",color:"#8a3ab9",display:"flex",justifyContent:"center",alignItems:"center"},iconcolor2:{cursor:"pointer",backgroundColor:"#00acee",padding:"16px",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"},iconcolor3:{cursor:"pointer",backgroundColor:"#ff0000",padding:"16px",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"},iconcolor4:{cursor:"pointer",backgroundColor:"#3b5998",padding:"16px",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"},iconcolor5:{cursor:"pointer",backgroundColor:"#f5f5f5",padding:"16px",color:"#54b6e7",display:"flex",justifyContent:"center",alignItems:"center"},iconcolor6:{cursor:"pointer",backgroundColor:"#7d9bff",padding:"16px",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"},mainSocail:{"& input":{border:"none",outline:"none",padding:"8px",minWidth:"352px",width:"100%",color:"#9a9a9a"}},subsocial:{cursor:"pointer"},iconPart:{color:"hsl(198deg 86% 53%)",background:"hsl(0deg 0% 96%)",padding:"8px"},iconPart1:{color:"hsl(1deg 93% 56%)",background:"hsl(0deg 0% 96%)",padding:"8px"},iconPart2:{color:"hsl(221deg 44% 41%)",background:"hsl(0deg 0% 96%)",padding:"8px"},iconPart3:{color:"hsl(279deg 45% 68%)",background:"hsl(0deg 0% 96%)",padding:"8px"},btnmargin:{marginTop:"30px","@media(max-width:767px)":{marginTop:"20px"}},boxbutton:{display:"flex",alignItems:"center",marginTop:"10px",justifyContent:"center",paddingRight:"50px","@media(max-width:960px)":{display:"flex",alignItems:"center",justifyContent:"center"},"@media(max-width:375px)":{alignItems:"center",justifyContent:"center"}},btnmain:{textAlign:"center"},devicelistHeading:{"& h3":{padding:"1rem 0",color:e.palette.text.black}},placeholdercolor:{"& input":{color:e.palette.text.black,"&::placeholder":{color:e.palette.text.black}},"& textarea":{color:e.palette.text.black,"&::placeholder":{color:e.palette.text.black}}}}}));function b(){var e=f();Object(u.g)();return n.a.createElement(c.a,{title:"KYC"},n.a.createElement(o.a,{className:e.mainbox},n.a.createElement(o.a,{className:e.devicelistHeading},n.a.createElement(l.a,{variant:"h3"},"Edit Content")),n.a.createElement("hr",null),n.a.createElement(i.a,{container:!0,spacing:4,align:"center"},n.a.createElement(i.a,{item:!0,xs:12,sm:2,md:2,lg:2}),n.a.createElement(i.a,{item:!0,xs:12,sm:8,md:8},n.a.createElement(o.a,{mt:6,className:e.placeholdercolor},n.a.createElement(i.a,{item:!0},n.a.createElement(s.a,{id:"outlined-helperText",placeholder:"Add Heading",variant:"outlined",fullWidth:!0,size:"small",style:{marginBottom:"10px"}}))),n.a.createElement(o.a,{mt:2,className:e.placeholdercolor},n.a.createElement(s.a,{id:"outlined-multiline-static",placeholder:"Description",multiline:!0,rows:9,variant:"outlined",fullWidth:!0,size:"small"})),n.a.createElement(o.a,{mb:0,className:e.btnmargin},n.a.createElement(o.a,{className:e.boxbutton},n.a.createElement(o.a,{textAlign:"center",style:{margin:"0px 10px"}},n.a.createElement(d.a,{variant:"outlined",color:"primary",component:p.a,to:"/resouceMgmt"},"BACK")),n.a.createElement(o.a,{textAlign:"center",className:e.btnmain},n.a.createElement(d.a,{variant:"contained",color:"primary"},"UPDATE"))))),n.a.createElement(i.a,{item:!0,xs:12,sm:2,md:2,lg:2}))))}}}]);
//# sourceMappingURL=46.e916917b.chunk.js.map