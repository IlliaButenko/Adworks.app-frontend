(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[20],{2323:function(e,t,a){"use strict";a.r(t);var c=a(22),s=a(0),n=a(584),i=a(539),r=(a(546),a(602)),l=(a(176),a(1235)),o=a(1206),d=a(1133),j=a(1204),b=a(1119),u=a(1174),m=a(1197),p=a(1161),h=a(6),x=(o.a,d.a,j.a,b.a,u.a,m.a,[{name:"Title",selector:"total",sortable:!0,minWidth:"250px",cell:function(e){return Object(h.jsx)(i.b,{to:"/apps/post-task/detail/".concat(e._id),children:Object(h.jsx)("span",{style:{fontSize:14},children:Object(h.jsx)("b",{children:e.title})})})}},{name:"Description",selector:"total",sortable:!0,minWidth:"300px",cell:function(e){return Object(h.jsxs)("span",{children:[e.description.slice(0,35)," ... "]})}},{name:"Price",selector:"total",sortable:!0,minWidth:"10 0px",cell:function(e){return Object(h.jsx)("span",{children:"".concat(e.tokenType," ").concat(e.budget)})}},{name:"Issued Date",selector:"dueDate",sortable:!0,minWidth:"150px",cell:function(e){return e.dueDate.slice(0,10)}},{name:"Action",minWidth:"110px",selector:"",sortable:!0,cell:function(e){return Object(h.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(h.jsx)(o.a,{size:17,id:"send-tooltip-".concat(e.id)}),Object(h.jsx)(l.a,{placement:"top",target:"send-tooltip-".concat(e.id),children:"Attend"}),Object(h.jsx)(i.b,{to:"/apps/post-task/detail/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(h.jsx)(p.a,{size:17,className:"mx-1"})}),Object(h.jsx)(l.a,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Detail"})]})}}]),O=(a(874),a(575)),g=a.n(O),f=a(1135),v=a(615),N=a.n(v),k=a(542),C=a(543),y=a(558),P=a(1066),w=a(553),D=a(540),T=a(86),A=(a(616),a(586),function(e){var t=e.handleFilter,a=e.value,c=e.handlePerPage,s=e.rowsPerPage;Object(n.i)().category;return Object(h.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(h.jsxs)(k.a,{children:[Object(h.jsx)(C.a,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:Object(h.jsx)("h4",{className:"mr-1",children:Object(h.jsx)("b",{children:"Task List"})})}),Object(h.jsxs)(C.a,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(h.jsx)(y.a,{for:"rows-per-page",children:"Show"}),Object(h.jsxs)(P.a,{className:"form-control ml-50 pr-3",type:"select",id:"rows-per-page",value:s,onChange:c,children:[Object(h.jsx)("option",{value:"7",children:"7"}),Object(h.jsx)("option",{value:"20",children:"20"}),Object(h.jsx)("option",{value:"50",children:"50"})]})]}),Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(y.a,{for:"search-invoice",children:"Search"}),Object(h.jsx)(w.a,{id:"search-invoice",className:"ml-50 mr-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Task"})]})]})]})})});t.default=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.invoice})),a=Object(s.useState)(""),n=Object(c.a)(a,2),i=n[0],l=n[1],o=Object(s.useState)(1),d=Object(c.a)(o,2),j=d[0],b=d[1],u=Object(s.useState)(""),m=Object(c.a)(u,2),p=m[0],O=m[1],v=Object(s.useState)(7),k=Object(c.a)(v,2),C=k[0],y=k[1];Object(s.useEffect)((function(){e(Object(r.a)({page:j,perPage:C,status:p,q:i}))}),[e,t.data.length]);return Object(h.jsx)("div",{className:"invoice-list-wrapper",children:Object(h.jsx)(D.a,{children:Object(h.jsx)("div",{className:"invoice-list-dataTable",children:Object(h.jsx)(N.a,{noHeader:!0,pagination:!0,paginationServer:!0,subHeader:!0,columns:x,responsive:!0,sortIcon:Object(h.jsx)(f.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:j,paginationComponent:function(){var a=Number((t.total/C).toFixed(0));return Object(h.jsx)(g.a,{pageCount:a||1,nextLabel:"",breakLabel:"...",previousLabel:"",activeClassName:"active",breakClassName:"page-item",breakLinkClassName:"page-link",forcePage:0!==j?j-1:0,onPageChange:function(t){return function(t){e(Object(r.a)({page:t.selected+1,perPage:C,status:p,q:i})),b(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end p-1"})},data:function(){var e={status:p,q:i},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,C)}(),subHeaderComponent:Object(h.jsx)(A,{value:i,statusValue:p,rowsPerPage:C,handleFilter:function(t){l(t),e(Object(r.a)({page:j,perPage:C,status:p,q:t}))},handlePerPage:function(t){e(Object(r.a)({page:j,perPage:parseInt(t.target.value),status:p,q:i})),y(parseInt(t.target.value))},handleStatusValue:function(t){O(t.target.value),e(Object(r.a)({page:j,perPage:C,status:t.target.value,q:i}))}})})})})})}},538:function(e,t,a){"use strict";var c=a(539),s=a(547),n=a(548),i=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,r=e.breadCrumbParent2,l=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)(n.a,{tag:"li",children:Object(i.jsx)(c.b,{to:"#",children:"Home"})}),Object(i.jsx)(n.a,{tag:"li",className:"text-primary",children:Object(i.jsx)(c.b,{to:"#",children:a})}),r?Object(i.jsx)(n.a,{tag:"li",className:"text-primary",children:r}):"",l?Object(i.jsx)(n.a,{tag:"li",className:"text-primary",children:l}):"",Object(i.jsx)(n.a,{tag:"li",active:!0,children:o})]})})]})})})})}},586:function(e,t,a){},602:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l}));var c=a(27),s=a.n(c),n="http://localhost:3997/api/",i=function(e){return function(t){return s.a.post("".concat(n,"jobs/allPostedTask"),e).then((function(a){t({type:"GET_ALL_DATA",allData:a.data.allData,data:a.data.data,totalPages:a.data.total,params:e})}))}},r=function(e){return function(t){return s.a.post("".concat(n,"jobs/getTaskDetail"),{taskId:e}).then((function(e){t({type:"GET_DATA",detail:e.data.data})}))}},l=function(e){return function(t){s.a.get("/apps/invoice/invoices",e).then((function(a){t({type:"GET_DATA",allData:a.data.allData,data:a.data.invoices,totalPages:a.data.total,params:e})}))}}},616:function(e,t,a){},649:function(e,t,a){},874:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(584),n=a(538),i=a(22),r=a(539),l=a(27),o=a.n(l),d=(a(162),a(1165)),j=a(542),b=a(543),u=a(540),m=a(545),p=a(544),h=a(541),x=a(553),O=a(521),g=a(6),f=function(e){var t=e.data,a=(e.dispatch,e.getProduct,e.productId,e.addToCart,Object(c.useState)("primary")),s=Object(i.a)(a,2),n=(s[0],s[1],t.isInCart?r.b:"button");return Object(g.jsx)(j.a,{className:"my-2",children:Object(g.jsx)(b.a,{md:"12",xs:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:t.title}),Object(g.jsxs)("div",{className:"ecommerce-details-price d-flex flex-column align-items-end mt-1",children:[Object(g.jsxs)("h5",{className:"item-price mr-1 text-success",children:["Price : ","".concat(t.tokenType," ").concat(t.budget)]}),Object(g.jsxs)("h5",{className:" mr-1",children:["Attend Number : ",parseInt(t.userNumber)]}),Object(g.jsxs)("h5",{className:"item-price mr-1",children:["Issued Date : ",t.dueDate.slice(0,10)]})]}),Object(g.jsxs)(u.a,{className:"mb-0",children:[Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a,{tag:"h4",children:"Description :"})}),Object(g.jsx)(h.a,{children:Object(g.jsx)("div",{className:"form-label-group mb-0",children:Object(g.jsx)(x.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",value:t.description,style:{height:150},placeholder:"Describe Your Description",disabled:!0})})})]}),t.originalFilename&&Object(g.jsxs)(u.a,{className:"mb-0",children:[Object(g.jsx)(m.a,{className:"pt-0",children:Object(g.jsx)(p.a,{tag:"h4",children:"Image : "})}),Object(g.jsx)(h.a,{className:"pb-0 pl-3",children:Object(g.jsxs)(r.b,{to:"#",onClick:function(e){var t="http://localhost:3997/download/".concat(e);o.a.get(t).then((function(e){}))}(t.filename),children:[Object(g.jsx)(d.a,{size:15,className:"mr-1"}),t.originalFilename]})})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"d-flex flex-column flex-sm-row pt-1",children:[Object(g.jsx)(O.a,{tag:n,className:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",color:"primary",to:"#",children:"Attend"}),Object(g.jsx)(O.a,{className:"btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0",color:"secondary",outline:!0,tag:r.b,to:"/apps/post-task/list",children:Object(g.jsx)("span",{children:"Back List"})})]})]})})})},v=a(86),N=a(602);a(649),a(897),t.default=function(){var e=Object(s.i)().id,t=Object(v.b)(),a=Object(v.c)((function(e){return e.invoice}));return Object(c.useEffect)((function(){t(Object(N.c)(e))}),[]),Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(n.a,{breadCrumbTitle:"Jobs Details",breadCrumbParent:"Jobs",breadCrumbActive:"Details"}),Object(g.jsx)("div",{className:"app-ecommerce-details d-flex justify-content-center",children:Object.keys(a.detail).length?Object(g.jsx)(u.a,{className:"w-75",children:Object(g.jsx)(h.a,{children:Object(g.jsx)(f,{dispatch:t,data:a.detail[0]})})}):null})]})}}}]);
//# sourceMappingURL=20.5804fb62.chunk.js.map