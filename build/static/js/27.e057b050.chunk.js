(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[27],{395:function(e,t,a){"use strict";var n=a(2),o=a(5),c=a(1),i=a(7),r=a(10),l=a(506),d=a(29),s=c.forwardRef((function(e,t){var a=e.classes,r=e.className,d=e.component,s=void 0===d?"tr":d,p=e.hover,u=void 0!==p&&p,m=e.selected,b=void 0!==m&&m,f=Object(o.a)(e,["classes","className","component","hover","selected"]),g=c.useContext(l.a);return c.createElement(s,Object(n.a)({ref:t,className:Object(i.a)(a.root,r,g&&{head:a.head,footer:a.footer}[g.variant],u&&a.hover,b&&a.selected),role:"tr"===s?null:"row"},f))}));t.a=Object(r.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(d.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(s)},396:function(e,t,a){"use strict";var n=a(2),o=a(5),c=a(1),i=a(7),r=a(10),l=c.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.component,d=void 0===l?"div":l,s=Object(o.a)(e,["classes","className","component"]);return c.createElement(d,Object(n.a)({ref:t,className:Object(i.a)(a.root,r)},s))}));t.a=Object(r.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)},397:function(e,t,a){"use strict";var n=a(5),o=a(2),c=a(1),i=a(7),r=a(10),l=a(512),d=c.forwardRef((function(e,t){var a=e.classes,r=e.className,d=e.component,s=void 0===d?"table":d,p=e.padding,u=void 0===p?"normal":p,m=e.size,b=void 0===m?"medium":m,f=e.stickyHeader,g=void 0!==f&&f,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=c.useMemo((function(){return{padding:u,size:b,stickyHeader:g}}),[u,b,g]);return c.createElement(l.a.Provider,{value:v},c.createElement(s,Object(o.a)({role:"table"===s?null:"table",ref:t,className:Object(i.a)(a.root,r,g&&a.stickyHeader)},h)))}));t.a=Object(r.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},398:function(e,t,a){"use strict";var n=a(2),o=a(5),c=a(1),i=a(7),r=a(10),l=a(506),d={variant:"head"},s=c.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,p=void 0===s?"thead":s,u=Object(o.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:d},c.createElement(p,Object(n.a)({className:Object(i.a)(a.root,r),ref:t,role:"thead"===p?null:"rowgroup"},u)))}));t.a=Object(r.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(s)},399:function(e,t,a){"use strict";var n=a(5),o=a(2),c=a(1),i=a(7),r=a(10),l=a(12),d=a(29),s=a(512),p=a(506),u=c.forwardRef((function(e,t){var a,r,d=e.align,u=void 0===d?"inherit":d,m=e.classes,b=e.className,f=e.component,g=e.padding,h=e.scope,v=e.size,y=e.sortDirection,x=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=c.useContext(s.a),k=c.useContext(p.a),w=k&&"head"===k.variant;f?(r=f,a=w?"columnheader":"cell"):r=w?"th":"td";var E=h;!E&&w&&(E="col");var C=g||(O&&O.padding?O.padding:"normal"),N=v||(O&&O.size?O.size:"medium"),z=x||k&&k.variant,H=null;return y&&(H="asc"===y?"ascending":"descending"),c.createElement(r,Object(o.a)({ref:t,className:Object(i.a)(m.root,m[z],b,"inherit"!==u&&m["align".concat(Object(l.a)(u))],"normal"!==C&&m["padding".concat(Object(l.a)(C))],"medium"!==N&&m["size".concat(Object(l.a)(N))],"head"===z&&O&&O.stickyHeader&&m.stickyHeader),"aria-sort":H,role:a,scope:E},j))}));t.a=Object(r.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(d.e)(Object(d.a)(e.palette.divider,1),.88):Object(d.b)(Object(d.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},400:function(e,t,a){"use strict";var n=a(2),o=a(5),c=a(1),i=a(7),r=a(10),l=a(506),d={variant:"body"},s=c.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,p=void 0===s?"tbody":s,u=Object(o.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:d},c.createElement(p,Object(n.a)({className:Object(i.a)(a.root,r),ref:t,role:"tbody"===p?null:"rowgroup"},u)))}));t.a=Object(r.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(s)},506:function(e,t,a){"use strict";var n=a(1),o=n.createContext();t.a=o},512:function(e,t,a){"use strict";var n=a(1),o=n.createContext();t.a=o},514:function(e,t,a){"use strict";var n=a(42),o=a(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(1)),i=(0,n(a(44)).default)(c.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},592:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(9),c=a(10),i=a(395),r=a(307),l=a(396),d=a(397),s=a(398),p=a(399),u=a(400),m=a(514),b=a.n(m),f=a(384),g=a(1),h=a.n(g),v=a(24),y=Object(f.a)((function(e){var t;return t={tablecell:{width:"200px"},tokenouter:{display:"flex",justifyContent:"space-between",alignItems:"center"},headingSection:{"& h3":{padding:"1rem 0",fontSize:"50px"}},currencyBox:{height:"20px",width:"100%",background:"#00dcff40",display:"flex",justifyContent:"center",alignItems:"center"},tokenheading:{width:"100px","& h5":{fontSize:"15px",fontWeight:"300",width:"150px"},"& h6":{fontSize:"12px",fontWeight:"200"}},actionIcons:{display:"flex"},devicelistHeading:{"& h3":{padding:"0px 0 10px 0"}},tablerow:{"& th":{color:e.palette.text.black},"& td":{color:e.palette.text.black}},iconcolor:{"& svg":{color:e.palette.text.black,fontSize:"25px"}}},Object(o.a)(t,"iconcolor",{fontSize:"20px",color:"#fff","& path":{fontSize:"20px",color:"#fff"}}),Object(o.a)(t,"mainbox",{"& .tableHead":{backgroundColor:"#1EB808","& th":{color:"#fff"}}}),t})),x=Object(c.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#ffdead87"}}}}))(i.a),j=[{type:"Privacy Policy",link:"/policy",editlink:"/edit-content"},{type:"About Us",link:"/view-content",editlink:"/edit-content"},{type:"Contact Us",link:"/view-contact",editlink:"/edit-content"},{type:"Terms & Conditions",link:"/view-terms",editlink:"/edit-content"},{type:"FAQ",link:"/view-announcements",editlink:"/view-announcements"}];t.default=function(e){var t=h.a.useState(!1),a=Object(n.a)(t,2),o=(a[0],a[1],Object(v.g)()),c=y();return h.a.createElement(r.a,{className:c.mainbox},h.a.createElement(l.a,null,h.a.createElement(d.a,null,h.a.createElement(s.a,null,h.a.createElement(i.a,{className:"".concat(c.tablerow1," tableHead")},h.a.createElement(p.a,{style:{width:"50px",padding:"11px"}},"Sr.No"),h.a.createElement(p.a,null,"TYPE"),h.a.createElement(p.a,{style:{width:"50px"}},"ACTION"))),h.a.createElement(u.a,null,j.map((function(e,t){return h.a.createElement(x,{className:c.tablerow},h.a.createElement(p.a,null,t+1," ")," ",h.a.createElement(p.a,null,e.type," ")," ",h.a.createElement(p.a,null,h.a.createElement(b.a,{onClick:function(){o.push({pathname:"".concat(e.link),search:"".concat(e.type)})},style:{fontSize:"20px",color:"rgb(243, 133, 0)",cursor:"pointer"}}),"\xa0\xa0"))}))))))}}}]);
//# sourceMappingURL=27.e057b050.chunk.js.map