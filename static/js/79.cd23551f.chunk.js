(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[79],{2248:function(e,a,t){},2426:function(e,a,t){"use strict";t.r(a);var s=t(22),c=t(0),r=t(162),n=t.n(r),o=t(165),i=t(1134),l=t(537),d=t(1205),u=t(546),b=t(540),p=t(541),m=t(1235),j=t(542),f=t(543),g=t(567),h=t(1069),O=t(568),v=t(550),x=t(553),N=t(538),y=t(884),T=(t(2248),t(6)),M=function(e){var a=e.icon;return Object(T.jsxs)(c.Fragment,{children:[Object(T.jsx)("div",{className:"toastify-header",children:Object(T.jsxs)("div",{className:"title-wrapper",children:[Object(T.jsx)(u.a,{size:"sm",color:"success",icon:Object(T.jsx)(i.a,{size:12})}),Object(T.jsx)("h6",{className:"toast-title",children:"Icon Name Copied! \ud83d\udccb"})]})}),Object(T.jsx)("div",{className:"toastify-body",children:Object(T.jsx)("span",{role:"img","aria-label":"toast-text",children:a})})]})};a.default=function(){var e=[],a=Object(c.useState)([]),t=Object(s.a)(a,2),r=t[0],i=t[1],u=Object(c.useState)([]),C=Object(s.a)(u,2),w=C[0],P=C[1],z=Object(c.useState)(null),E=Object(s.a)(z,2),R=E[0],S=E[1];for(var k in l)e.push(k);return Object(T.jsxs)(c.Fragment,{children:[Object(T.jsx)(N.a,{breadCrumbTitle:"Feather Icons",breadCrumbParent:"UI",breadCrumbActive:"Feather Icons"}),Object(T.jsx)(j.a,{children:Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsx)("div",{className:"icon-search-wrapper my-3 mx-auto",children:Object(T.jsxs)(g.a,{className:"input-group-merge",tag:h.a,children:[Object(T.jsx)(O.a,{addonType:"prepend",children:Object(T.jsx)(v.a,{children:Object(T.jsx)(d.a,{size:14})})}),Object(T.jsx)(x.a,{placeholder:"Search icons...",onChange:function(a){!function(a){var t=[];a.length&&e.filter((function(e){e.toLowerCase().includes(a.toLowerCase())&&t.push(e)})),P([].concat(t))}(a.target.value),i(a.target.value)}})]})})})}),Object(T.jsx)("div",{className:"d-flex flex-wrap",id:"icons-container",children:function(){var a=r.length?w:e;return a.length?a.map((function(e){var a=l[e];return Object(T.jsxs)(c.Fragment,{children:[Object(T.jsx)(y.CopyToClipboard,{text:"<".concat(e," />"),children:Object(T.jsx)(b.a,{id:e,className:n()("icon-card cursor-pointer text-center mb-2 mx-50",{active:R===e}),onClick:function(){return function(e){S(e),o.f.success(Object(T.jsx)(M,{icon:e}),{hideProgressBar:!0})}(e)},children:Object(T.jsxs)(p.a,{children:[Object(T.jsx)("div",{className:"icon-wrapper",children:Object(T.jsx)(a,{})}),Object(T.jsx)("p",{className:"icon-name text-truncate mb-0 mt-1",children:e})]})})}),Object(T.jsx)(m.a,{placement:"top",target:e,children:e.replace(/([A-Z])/g," $1").trim()})]},e)})):Object(T.jsx)("div",{className:"d-flex align-items-center justify-content-center w-100",children:Object(T.jsx)("h4",{className:"mb-0",children:"No Icons Found!"})})}()})]})}},538:function(e,a,t){"use strict";var s=t(539),c=t(547),r=t(548),n=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,o=e.breadCrumbParent2,i=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"#",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(n.jsx)(s.b,{to:"#",children:t})}),o?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",i?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",Object(n.jsx)(r.a,{tag:"li",active:!0,children:l})]})})]})})})})}},540:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b={tag:u.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,i=e.inverse,l=e.outline,b=e.tag,p=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(u.mapToCssModules)(d()(a,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return n.a.createElement(b,Object(s.a)({},m,{className:j,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},541:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(o,Object(s.a)({},i,{className:l,ref:r}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},542:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b=i.a.oneOfType([i.a.number,i.a.string]),p={tag:u.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,i=e.form,l=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(a,t){var s=e[a];if(delete b[a],s){var c=!t;p.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(u.mapToCssModules)(d()(a,r?"no-gutters":null,i?"form-row":"row",p),t);return n.a.createElement(o,Object(s.a)({},b,{className:m}))};j.propTypes=p,j.defaultProps=m,a.a=j},543:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),m={tag:u.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(a,s){var c=e[a];if(delete i[a],c||""===c){var r=!s;if(Object(u.isObject)(c)){var n,o=r?"-":"-"+a+"-",b=f(r,a,c.size);l.push(Object(u.mapToCssModules)(d()(((n={})[b]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),t))}else{var p=f(r,a,c);l.push(p)}}})),l.length||l.push("col");var b=Object(u.mapToCssModules)(d()(a,l),t);return n.a.createElement(o,Object(s.a)({},i,{className:b}))};g.propTypes=m,g.defaultProps=j,a.a=g},547:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b={tag:u.tagPropType,listTag:u.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,o=e.children,i=e.tag,l=e.listTag,b=e["aria-label"],p=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(u.mapToCssModules)(d()(a),r),j=Object(u.mapToCssModules)(d()("breadcrumb",t),r);return n.a.createElement(i,Object(s.a)({},p,{className:m,"aria-label":b}),n.a.createElement(l,{className:j},o))};p.propTypes=b,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},548:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b={tag:u.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.active,o=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),l=Object(u.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(s.a)({},i,{className:l,"aria-current":r?"page":void 0}))};p.propTypes=b,p.defaultProps={tag:"li"},a.a=p},550:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"input-group-text"),t);return n.a.createElement(r,Object(s.a)({},o,{className:i}))};p.propTypes=b,p.defaultProps={tag:"span"},a.a=p},553:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(161),n=t(160),o=t(0),i=t.n(o),l=t(10),d=t.n(l),u=t(159),b=t.n(u),p=t(118),m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,n=e.bsSize,o=e.valid,l=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,j=e.innerRef,f=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),v="form-control";m?(v+="-plaintext",O=d||"input"):"file"===r?v+="-file":"range"===r?v+="-range":g&&(v=u?null:"form-check-input"),f.size&&h.test(f.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),n=f.size,delete f.size);var x=Object(p.mapToCssModules)(b()(a,l&&"is-invalid",o&&"is-valid",!!n&&"form-control-"+n,v),t);return("input"===O||d&&"function"===typeof d)&&(f.type=r),f.children&&!m&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),i.a.createElement(O,Object(s.a)({},f,{ref:j,className:x,"aria-invalid":l}))},a}(i.a.Component);j.propTypes=m,j.defaultProps={type:"text"},a.a=j},567:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b={tag:u.tagPropType,size:i.a.string,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.size,i=Object(c.a)(e,["className","cssModule","tag","size"]),l=Object(u.mapToCssModules)(d()(a,"input-group",o?"input-group-"+o:null),t);return n.a.createElement(r,Object(s.a)({},i,{className:l}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},568:function(e,a,t){"use strict";var s=t(14),c=t(28),r=t(0),n=t.n(r),o=t(10),i=t.n(o),l=t(159),d=t.n(l),u=t(118),b=t(550),p={tag:u.tagPropType,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.addonType,i=e.children,l=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(u.mapToCssModules)(d()(a,"input-group-"+o),t);return"string"===typeof i?n.a.createElement(r,Object(s.a)({},l,{className:p}),n.a.createElement(b.a,{children:i})):n.a.createElement(r,Object(s.a)({},l,{className:p,children:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m}}]);
//# sourceMappingURL=79.cd23551f.chunk.js.map