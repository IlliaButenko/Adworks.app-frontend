(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[52,154],{2517:function(e,a,t){"use strict";t.r(a);var s=t(22),c=t(0),n=t(584),r=t(538),l=t(539),i=t(542),o=t(543),d=t(540),u=t(545),b=t(544),m=t(541),j=t(553),p=t(521),g=t(1165),h=t(162),f=t.n(h),O=t(6),x=function(e){var a=e.data,t=(e.dispatch,e.getProduct,e.productId,e.addToCart,Object(c.useState)("This is big project.\nBecause I am looking forward to you are senior developer.")),n=Object(s.a)(t,2),r=n[0],h=(n[1],Object(c.useState)([])),x=Object(s.a)(h,2),v=x[0],N=(x[1],a.isInCart?l.b:"button");return Object(O.jsx)(i.a,{className:"my-2",children:Object(O.jsx)(o.a,{md:"12",xs:"12",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("h4",{children:["Task Title: ",a.name]}),Object(O.jsxs)("div",{className:"ecommerce-details-price d-flex flex-column align-items-end mt-1",children:[Object(O.jsxs)("h5",{className:" mr-1",children:["Attend Number: ",parseInt(a.price)]}),Object(O.jsxs)("h5",{className:"item-price mr-1",children:["Price: $",a.price]})]}),Object(O.jsxs)(d.a,{className:"mb-0",children:[Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{tag:"h4",children:"Description :"})}),Object(O.jsxs)(m.a,{className:"pb-0",children:[Object(O.jsx)("div",{className:"form-label-group mb-0",children:Object(O.jsx)(j.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",value:r,style:{height:150},placeholder:"Describe Your Description",disabled:!0})}),Object(O.jsx)("span",{className:f()("textarea-counter-value float-right",{"bg-danger":r.length>300}),children:"".concat(r.length,"/300")})]})]}),Object(O.jsxs)(d.a,{className:"mb-0",children:[Object(O.jsx)(u.a,{className:"pt-0",children:Object(O.jsx)(b.a,{tag:"h4",children:"Image : "})}),Object(O.jsxs)(m.a,{className:"pb-0",children:[Object(O.jsxs)(l.b,{to:"#",children:[Object(O.jsx)(g.a,{size:15,className:"mr-1"}),"Project descripttion.jpg"]}),v.length?v.map((function(e,a){return Object(O.jsx)("img",{className:"rounded mt-2 mr-1",src:e,alt:"avatar"},a)})):null]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"d-flex flex-column flex-sm-row pt-1",children:Object(O.jsx)(p.a,{className:"btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0",color:"secondary",outline:!0,tag:N,to:"/apps/task/posted-job",children:Object(O.jsx)("span",{children:"Back"})})})]})})})},v=t(589),N=(t(649),t(546)),T=(t(176),t(1235)),y=t(1133),P=t(1174),C=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(O.jsx)(N.a,{className:"mr-50",img:e.avatar,width:"32",height:"32"}):Object(O.jsx)(N.a,{color:a,className:"mr-50",content:e.client?e.client.name:"John Doe",initials:!0})},M=[{name:"Users",minWidth:"250px",selector:"client",sortable:!0,cell:function(e){var a=e.client?e.client.name:"John Doe",t=e.client?e.client.companyEmail:"johnDoe@email.com";return Object(O.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[C(e),Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("h6",{className:"user-name text-truncate mb-0",children:a}),Object(O.jsx)("small",{className:"text-truncate text-muted mb-0",children:t})]})]})}},{name:"Attend Date",selector:"dueDate",sortable:!0,minWidth:"170px",cell:function(e){return e.dueDate}},{name:"Action",minWidth:"110px",selector:"",sortable:!0,cell:function(e){return Object(O.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(O.jsx)(y.a,{size:17,id:"send-tooltip-".concat(e.id),onClick:function(){return confirm("Do you really hire?")}}),Object(O.jsx)(T.a,{placement:"top",target:"send-tooltip-".concat(e.id),children:"Hire"}),Object(O.jsx)(l.b,{to:"/apps/users/detail/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(O.jsx)(P.a,{size:17,className:"mx-1"})}),Object(O.jsx)(T.a,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Detail"})]})}}],w=t(575),k=t.n(w),D=t(1135),E=t(615),A=t.n(E),I=t(558),S=t(602),L=t(86),z=(t(616),t(586),function(e){var a=e.handleFilter,t=e.value;e.handlePerPage,e.rowsPerPage;return Object(O.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:Object(O.jsx)("div",{className:"d-flex align-items-center mr-2",children:Object(O.jsx)(I.a,{for:"rows-per-page",children:"Attended Users"})})}),Object(O.jsx)(o.a,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0",children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)(I.a,{for:"search-invoice",children:"Search"}),Object(O.jsx)(j.a,{id:"search-invoice",className:"ml-50 mr-2 w-100",type:"text",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search Task"})]})})]})})});a.default=function(){Object(n.i)().id;var e=Object(L.b)(),a=Object(L.c)((function(e){return e.ecommerce})),t=Object(L.c)((function(e){return e.invoice})),l=Object(c.useState)(""),i=Object(s.a)(l,2),o=i[0],u=i[1],b=Object(c.useState)(1),j=Object(s.a)(b,2),p=j[0],g=j[1],h=Object(c.useState)(""),f=Object(s.a)(h,2),N=f[0],T=f[1],y=Object(c.useState)(7),P=Object(s.a)(y,2),C=P[0],w=P[1];Object(c.useEffect)((function(){e(Object(S.b)({page:p,perPage:C,status:N,q:o}))}),[e,t.data.length]);return Object(O.jsxs)(c.Fragment,{children:[Object(O.jsx)(r.a,{breadCrumbTitle:"Task Details",breadCrumbParent:"Task",breadCrumbActive:"Posted Task"}),Object(O.jsxs)("div",{className:"app-ecommerce-details d-flex justify-content-center",children:[Object.keys(a.productDetail).length?Object(O.jsx)(d.a,{className:"w-50",children:Object(O.jsx)(m.a,{children:Object(O.jsx)(x,{dispatch:e,addToCart:v.a,productId:21,data:a.productDetail})})}):null,Object(O.jsx)(d.a,{className:"w-50",children:Object(O.jsx)("div",{className:"invoice-list-dataTable",children:Object(O.jsx)(A.a,{noHeader:!0,pagination:!0,paginationServer:!0,subHeader:!0,columns:M,responsive:!0,sortIcon:Object(O.jsx)(D.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:p,paginationComponent:function(){var a=Number((t.total/C).toFixed(0));return Object(O.jsx)(k.a,{pageCount:a||1,nextLabel:"",breakLabel:"...",previousLabel:"",activeClassName:"active",breakClassName:"page-item",breakLinkClassName:"page-link",forcePage:0!==p?p-1:0,onPageChange:function(a){return function(a){e(Object(S.b)({page:a.selected+1,perPage:C,status:N,q:o})),g(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end p-1"})},data:function(){var e={status:N,q:o},a=Object.keys(e).some((function(a){return e[a].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,C)}(),subHeaderComponent:Object(O.jsx)(z,{value:o,statusValue:N,rowsPerPage:C,handleFilter:function(a){u(a),e(Object(S.b)({page:p,perPage:C,status:N,q:a}))},handlePerPage:function(a){e(Object(S.b)({page:p,perPage:parseInt(a.target.value),status:N,q:o})),w(parseInt(a.target.value))},handleStatusValue:function(a){T(a.target.value),e(Object(S.b)({page:p,perPage:C,status:a.target.value,q:o}))}})})})})]})]})}},538:function(e,a,t){"use strict";var s=t(539),c=t(547),n=t(548),r=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,l=e.breadCrumbParent2,i=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[a?Object(r.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(n.a,{tag:"li",children:Object(r.jsx)(s.b,{to:"#",children:"Home"})}),Object(r.jsx)(n.a,{tag:"li",className:"text-primary",children:Object(r.jsx)(s.b,{to:"#",children:t})}),l?Object(r.jsx)(n.a,{tag:"li",className:"text-primary",children:l}):"",i?Object(r.jsx)(n.a,{tag:"li",className:"text-primary",children:i}):"",Object(r.jsx)(n.a,{tag:"li",active:!0,children:o})]})})]})})})})}},540:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b={tag:u.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.body,i=e.inverse,o=e.outline,b=e.tag,m=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(d()(a,"card",!!i&&"text-white",!!l&&"card-body",!!n&&(o?"border":"bg")+"-"+n),t);return r.a.createElement(b,Object(s.a)({},j,{className:p,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},541:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(l,Object(s.a)({},i,{className:o,ref:n}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},542:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b=i.a.oneOfType([i.a.number,i.a.string]),m={tag:u.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,l=e.tag,i=e.form,o=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];o.forEach((function(a,t){var s=e[a];if(delete b[a],s){var c=!t;m.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var j=Object(u.mapToCssModules)(d()(a,n?"no-gutters":null,i?"form-row":"row",m),t);return r.a.createElement(l,Object(s.a)({},b,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},543:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),j={tag:u.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(a,s){var c=e[a];if(delete i[a],c||""===c){var n=!s;if(Object(u.isObject)(c)){var r,l=n?"-":"-"+a+"-",b=g(n,a,c.size);o.push(Object(u.mapToCssModules)(d()(((r={})[b]=c.size||""===c.size,r["order"+l+c.order]=c.order||0===c.order,r["offset"+l+c.offset]=c.offset||0===c.offset,r)),t))}else{var m=g(n,a,c);o.push(m)}}})),o.length||o.push("col");var b=Object(u.mapToCssModules)(d()(a,o),t);return r.a.createElement(l,Object(s.a)({},i,{className:b}))};h.propTypes=j,h.defaultProps=p,a.a=h},544:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-title"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},545:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},547:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b={tag:u.tagPropType,listTag:u.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},m=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,l=e.children,i=e.tag,o=e.listTag,b=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(u.mapToCssModules)(d()(a),n),p=Object(u.mapToCssModules)(d()("breadcrumb",t),n);return r.a.createElement(i,Object(s.a)({},m,{className:j,"aria-label":b}),r.a.createElement(o,{className:p},l))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},548:function(e,a,t){"use strict";var s=t(14),c=t(28),n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(159),d=t.n(o),u=t(118),b={tag:u.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.active,l=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(u.mapToCssModules)(d()(a,!!n&&"active","breadcrumb-item"),t);return r.a.createElement(l,Object(s.a)({},i,{className:o,"aria-current":n?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},586:function(e,a,t){},602:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return l})),t.d(a,"b",(function(){return i}));var s=t(27),c=t.n(s),n="http://localhost:3997/api/",r=function(e){return function(a){return c.a.post("".concat(n,"jobs/allPostedTask"),e).then((function(t){a({type:"GET_ALL_DATA",allData:t.data.allData,data:t.data.data,totalPages:t.data.total,params:e})}))}},l=function(e){return function(a){return c.a.post("".concat(n,"jobs/getTaskDetail"),{taskId:e}).then((function(e){a({type:"GET_DATA",detail:e.data.data})}))}},i=function(e){return function(a){c.a.get("/apps/invoice/invoices",e).then((function(t){a({type:"GET_DATA",allData:t.data.allData,data:t.data.invoices,totalPages:t.data.total,params:e})}))}}},616:function(e,a,t){},649:function(e,a,t){}}]);
//# sourceMappingURL=52.2181e389.chunk.js.map