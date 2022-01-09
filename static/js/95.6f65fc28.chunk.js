(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[95,154],{2507:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(542),l=o(543),s=o(549),r=o(283),c=o.n(r),i=o(538),p=o(551),d=o(22),u=o(521),m=o(889),j=o(6),b=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),o=t[0],n=t[1];return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(u.a.Ripple,{color:"primary",id:"ControlledExample",children:"Controlled"}),Object(j.jsx)(m.a,{placement:"top",isOpen:o,target:"ControlledExample",toggle:function(){return n(!o)},children:"Hello World !"})]})},g=o(1235),O=function(){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(u.a,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),Object(j.jsx)(g.a,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]})},h=function(){return Object(j.jsxs)("div",{className:"demo-inline-spacing",children:[Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),Object(j.jsx)(g.a,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),Object(j.jsx)(g.a,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),Object(j.jsx)(g.a,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),Object(j.jsx)(g.a,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]})},f=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Tooltip } from 'reactstrap'\n\nconst TooltipControlled = () => {\n  const [tooltipOpen, setTooltipOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button.Ripple color='primary' id='ControlledExample'>\n        Controlled\n      </Button.Ripple>\n      <Tooltip\n        placement='top'\n        isOpen={tooltipOpen}\n        target='ControlledExample'\n        toggle={() => setTooltipOpen(!tooltipOpen)}\n      >\n        Hello World !\n      </Tooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipControlled\n"})}),x=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' id='UnControlledExample'>\n        Uncontrolled\n      </Button>\n      <UncontrolledTooltip placement='top' target='UnControlledExample'>\n        Hello World !\n      </UncontrolledTooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipUncontrolled\n"})}),T=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipPosition = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button.Ripple color='primary' outline id='positionTop'>\n        Top\n      </Button.Ripple>\n      <UncontrolledTooltip placement='top' target='positionTop'>\n        Tooltip on Top\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionRight'>\n        Right\n      </Button.Ripple>\n      <UncontrolledTooltip placement='right' target='positionRight'>\n        Tooltip on Right\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionBottom'>\n        Bottom\n      </Button.Ripple>\n      <UncontrolledTooltip placement='bottom' target='positionBottom'>\n        Tooltip on Bottom\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionLeft'>\n        Left\n      </Button.Ripple>\n      <UncontrolledTooltip placement='left' target='positionLeft'>\n        Tooltip on Left\n      </UncontrolledTooltip>\n    </div>\n  )\n}\nexport default TooltipPosition\n"})});t.default=function(){return Object(a.useEffect)((function(){c.a.highlightAll()}),[]),Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(i.a,{breadCrumbTitle:"Tooltips",breadCrumbParent:"Components",breadCrumbActive:"Tooltips"}),Object(j.jsxs)(n.a,{children:[Object(j.jsx)(l.a,{xl:"6",lg:"12",children:Object(j.jsxs)(p.a,{title:"Controlled Tooltip",code:f,children:[Object(j.jsxs)(s.a,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",Object(j.jsx)("code",{children:"isOpen"})," and ",Object(j.jsx)("code",{children:"toggle"})," props to work."]}),Object(j.jsx)(b,{})]})}),Object(j.jsx)(l.a,{xl:"6",lg:"12",children:Object(j.jsxs)(p.a,{title:"Uncontrolled Tooltip",code:x,children:[Object(j.jsxs)(s.a,{children:["UncontrolledTooltip does not require",Object(j.jsx)("code",{children:"isOpen"})," nor ",Object(j.jsx)("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),Object(j.jsx)(O,{})]})})]}),Object(j.jsx)(n.a,{children:Object(j.jsx)(l.a,{sm:"12",children:Object(j.jsxs)(p.a,{title:"Tooltip Positions",code:T,children:[Object(j.jsxs)(s.a,{className:"mb-0",children:["Use prop ",Object(j.jsx)("code",{children:"placement"})," to change position of tooltip."]}),Object(j.jsx)(h,{})]})})})]})}},538:function(e,t,o){"use strict";var a=o(539),n=o(547),l=o(548),s=o(6);t.a=function(e){var t=e.breadCrumbTitle,o=e.breadCrumbParent,r=e.breadCrumbParent2,c=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[t?Object(s.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(n.a,{children:[Object(s.jsx)(l.a,{tag:"li",children:Object(s.jsx)(a.b,{to:"#",children:"Home"})}),Object(s.jsx)(l.a,{tag:"li",className:"text-primary",children:Object(s.jsx)(a.b,{to:"#",children:o})}),r?Object(s.jsx)(l.a,{tag:"li",className:"text-primary",children:r}):"",c?Object(s.jsx)(l.a,{tag:"li",className:"text-primary",children:c}):"",Object(s.jsx)(l.a,{tag:"li",active:!0,children:i})]})})]})})})})}},540:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,o=e.cssModule,l=e.color,r=e.body,c=e.inverse,i=e.outline,u=e.tag,m=e.innerRef,j=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(p()(t,"card",!!c&&"text-white",!!r&&"card-body",!!l&&(i?"border":"bg")+"-"+l),o);return s.a.createElement(u,Object(a.a)({},j,{className:b,ref:m}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},541:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,o=e.cssModule,l=e.innerRef,r=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(p()(t,"card-body"),o);return s.a.createElement(r,Object(a.a)({},c,{className:i,ref:l}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},542:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,o=e.cssModule,l=e.noGutters,r=e.tag,c=e.form,i=e.widths,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(t,o){var a=e[t];if(delete u[t],a){var n=!o;m.push(n?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var j=Object(d.mapToCssModules)(p()(t,l?"no-gutters":null,c?"form-row":"row",m),o);return s.a.createElement(r,Object(a.a)({},u,{className:j}))};b.propTypes=m,b.defaultProps=j,t.a=b},543:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),j={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,o){return!0===o||""===o?e?"col":"col-"+t:"auto"===o?e?"col-auto":"col-"+t+"-auto":e?"col-"+o:"col-"+t+"-"+o},O=function(e){var t=e.className,o=e.cssModule,l=e.widths,r=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(t,a){var n=e[t];if(delete c[t],n||""===n){var l=!a;if(Object(d.isObject)(n)){var s,r=l?"-":"-"+t+"-",u=g(l,t,n.size);i.push(Object(d.mapToCssModules)(p()(((s={})[u]=n.size||""===n.size,s["order"+r+n.order]=n.order||0===n.order,s["offset"+r+n.offset]=n.offset||0===n.offset,s)),o))}else{var m=g(l,t,n);i.push(m)}}})),i.length||i.push("col");var u=Object(d.mapToCssModules)(p()(t,i),o);return s.a.createElement(r,Object(a.a)({},c,{className:u}))};O.propTypes=j,O.defaultProps=b,t.a=O},544:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(p()(t,"card-title"),o);return s.a.createElement(l,Object(a.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},545:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(p()(t,"card-header"),o);return s.a.createElement(l,Object(a.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},547:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},m=function(e){var t=e.className,o=e.listClassName,l=e.cssModule,r=e.children,c=e.tag,i=e.listTag,u=e["aria-label"],m=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(d.mapToCssModules)(p()(t),l),b=Object(d.mapToCssModules)(p()("breadcrumb",o),l);return s.a.createElement(c,Object(a.a)({},m,{className:j,"aria-label":u}),s.a.createElement(i,{className:b},r))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},548:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.active,r=e.tag,c=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(p()(t,!!l&&"active","breadcrumb-item"),o);return s.a.createElement(r,Object(a.a)({},c,{className:i,"aria-current":l?"page":void 0}))};m.propTypes=u,m.defaultProps={tag:"li"},t.a=m},549:function(e,t,o){"use strict";var a=o(14),n=o(28),l=o(0),s=o.n(l),r=o(10),c=o.n(r),i=o(159),p=o.n(i),d=o(118),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(p()(t,"card-text"),o);return s.a.createElement(l,Object(a.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"p"},t.a=m},551:function(e,t,o){"use strict";var a=o(22),n=o(0),l=o(1148),s=o(541),r=o(540),c=o(545),i=o(544),p=o(813),d=o(6);t.a=function(e){var t=e.title,o=e.children,u=e.noBody,m=e.code,j=e.iconCode,b=Object(n.useState)(!1),g=Object(a.a)(b,2),O=g[0],h=g[1],f=j||Object(d.jsx)(l.a,{size:15}),x=u?n.Fragment:s.a;return Object(d.jsxs)(r.a,{className:"card-snippet",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsx)(i.a,{tag:"h4",children:t}),Object(d.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!O)},children:f})]}),Object(d.jsx)(x,{children:o}),Object(d.jsx)(p.a,{isOpen:O,children:Object(d.jsx)(s.a,{children:m})})]})}}}]);
//# sourceMappingURL=95.6f65fc28.chunk.js.map