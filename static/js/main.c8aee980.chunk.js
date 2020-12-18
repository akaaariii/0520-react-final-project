(this["webpackJsonp0520-react-final-project"]=this["webpackJsonp0520-react-final-project"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n(10),c=n.n(r),s=(n(92),n(133)),l=n(36),d=n(24),u=n(25),o=n(129),j=n(73),b=n.n(j);function h(){var e=Object(d.a)(["\n  color: white;\n"]);return h=function(){return e},e}function p(){var e=Object(d.a)(["\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n"]);return p=function(){return e},e}function O(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n"]);return O=function(){return e},e}function f(){var e=Object(d.a)(["\n  color: white;\n  font-size: 20px;\n"]);return f=function(){return e},e}function x(){var e=Object(d.a)(["\n  background-color: #3f51b5;\n  padding: 8px 16px;\n  display: flex;\n  justify-content: space-between;\n"]);return x=function(){return e},e}var m=function(){return Object(a.jsxs)(g,{children:[Object(a.jsx)(y,{children:"Angular 9 MatTable CRUD Example"}),Object(a.jsxs)(v,{children:[Object(a.jsx)(A,{children:"Reload data:"}),Object(a.jsx)(o.a,{color:"inherit",children:Object(a.jsx)(C,{})})]})]})},g=u.a.header(x()),y=u.a.h1(f()),v=u.a.div(O()),A=u.a.span(p()),C=Object(u.a)(b.a)(h()),S=n(27),T=n(142),k=n(136),I=n(137),E=n(134),w=n(135),D=n(145),L=n(138),U=n(144),Z=n(146),W=n(139),q=n(140),R=n(141),_=n(76),F=n.n(_),z=n(51),B=n(17),J=function(e){var t=e.issue,n=e.handleChange,i=function(e){var a=e.target,i=a.name,r=a.value;n(Object(B.a)(Object(B.a)({},t),{},Object(z.a)({},i,r)))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T.a,{autoFocus:!0,required:!0,error:""===t.id,color:"secondary",margin:"normal",name:"id",id:"id",label:"Id",type:"text",fullWidth:!0,helperText:""===t.id?"Required field":"",onChange:i,value:t.id}),Object(a.jsx)(T.a,{required:!0,error:""===t.title,color:"secondary",margin:"normal",name:"title",id:"title",label:"Title",type:"text",fullWidth:!0,helperText:""===t.title?"Required field":"",onChange:i,value:t.title}),Object(a.jsx)(T.a,{required:!0,error:""===t.state,color:"secondary",margin:"normal",name:"state",id:"state",label:"State",type:"text",fullWidth:!0,helperText:""===t.state?"Required field":"",onChange:i,value:t.state}),Object(a.jsx)(T.a,{color:"secondary",margin:"normal",name:"url",id:"url",label:"Url",type:"text",fullWidth:!0,onChange:i,value:t.url}),Object(a.jsx)(T.a,{color:"secondary",margin:"normal",name:"createdAt",id:"createdAt",label:"Created at",type:"text",fullWidth:!0,onChange:i,value:t.createdAt}),Object(a.jsx)(T.a,{color:"secondary",margin:"normal",name:"updatedAt",id:"updatedAt",label:"Updated at",type:"text",fullWidth:!0,onChange:i,value:t.updatedAt})]})},M=n(74),N=n.n(M),G=n(75),H=n.n(G),K=function(e){var t=e.issue,n=e.onEditClick,i=e.onDeleteClick;return Object(a.jsxs)(E.a,{children:[Object(a.jsx)(w.a,{children:t.id}),Object(a.jsx)(w.a,{children:t.title}),Object(a.jsx)(w.a,{children:t.state}),Object(a.jsx)(w.a,{children:t.url}),Object(a.jsx)(w.a,{children:t.createdAt}),Object(a.jsx)(w.a,{children:t.updatedAt}),Object(a.jsx)(w.a,{children:Object(a.jsx)(o.a,{color:"secondary",children:Object(a.jsx)(N.a,{onClick:function(){n(t)},color:"secondary"})})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(o.a,{color:"secondary",children:Object(a.jsx)(H.a,{onClick:function(){i(t)},color:"secondary"})})})]},t.id)};function P(){var e=Object(d.a)(["\n  padding: 5px 24px;\n"]);return P=function(){return e},e}var Q=[{id:"id",label:"Id"},{id:"title",label:"Title"},{id:"state",label:"State"},{id:"url",label:"Url"},{id:"createdAt",label:"Created at"},{id:"updatedAt",label:"Updated at"}],V=function(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0},X=function(e,t){return"desc"===e?function(e,n){return V(e,n,t)}:function(e,n){return-V(e,n,t)}},Y=function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))},$=Object(l.b)((function(e){return{listArray:e.issuesList}}),(function(e){return{newIssue:function(t){e(function(e){return{type:"ADD_ISSUE",payload:e}}(t))},editIssue:function(t){e(function(e){return{type:"EDIT_ISSUE",payload:e}}(t))},deleteIssue:function(t){e(function(e){return{type:"DELETE_ISSUE",payload:e}}(t))}}}))((function(e){var t=e.listArray,n=e.newIssue,r=e.editIssue,c=e.deleteIssue,s=Object(i.useState)("asc"),l=Object(S.a)(s,2),d=l[0],u=l[1],j=Object(i.useState)(""),b=Object(S.a)(j,2),h=b[0],p=b[1],O=Object(i.useState)(t),f=Object(S.a)(O,2),x=f[0],m=f[1],g=Object(i.useState)(!1),y=Object(S.a)(g,2),v=y[0],A=y[1],C=Object(i.useState)(!1),_=Object(S.a)(C,2),z=_[0],B=_[1],M=Object(i.useState)(!1),N=Object(S.a)(M,2),G=N[0],H=N[1],P=Object(i.useState)(""),V=Object(S.a)(P,2),$=V[0],te=V[1],ne=function(e,t){u(h===t&&"asc"===d?"desc":"asc"),p(t)},ae=function(){A(!1)},ie=function(e){te(e)},re=function(e){B(!0),te({id:e.id,title:e.title,state:e.state,url:e.url,createdAt:e.createdAt,updatedAt:e.updatedAt})},ce=function(e){H(!0),te({id:e.id,title:e.title,state:e.state,url:e.url})};return Object(i.useEffect)((function(){null!=t&&m(t)}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ee,{autoComplete:"off",children:Object(a.jsx)(T.a,{id:"standard-full-width",label:"Filter issues",size:"small",fullWidth:!0,margin:"dense",color:"secondary",onChange:function(e){if(""===e.target.value)return t;var n=t.filter((function(t){return t.title.toLowerCase().includes(e.target.value)}));return m(n)}})}),Object(a.jsxs)(k.a,{size:"small",children:[Object(a.jsx)(I.a,{children:Object(a.jsxs)(E.a,{children:[Q.map((function(e){return Object(a.jsx)(w.a,{sortDirection:h===e.id&&d,children:Object(a.jsx)(D.a,{active:h===e.id,direction:h===e.id?d:"asc",onClick:(t=e.id,function(e){ne(e,t)}),children:e.label})},e.id);var t})),Object(a.jsx)(w.a,{onClick:function(){A(!0),te({id:"",title:"",state:"",url:"",createdAt:"",updatedAt:""})},children:Object(a.jsx)(o.a,{color:"primary",children:Object(a.jsx)(F.a,{color:"primary"})})})]})}),Object(a.jsx)(L.a,{children:x.length?Y(x,X(d,h)).map((function(e){return Object(a.jsx)(K,{issue:e,onEditClick:re,onDeleteClick:ce},e.id)})):Object(a.jsx)("p",{children:"No Results"})})]}),Object(a.jsxs)(U.a,{open:v,onClose:ae,"aria-labelledby":"form-dialog-title",maxWidth:"xs",children:[Object(a.jsx)(Z.a,{id:"form-dialog-title",children:"Add new Issue"}),Object(a.jsx)(W.a,{children:Object(a.jsx)(J,{issue:$,handleChange:ie})}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(R.a,{onClick:function(){n($),A(!1)},children:"Save"}),Object(a.jsx)(R.a,{onClick:ae,children:"Cancel"})]})]}),Object(a.jsxs)(U.a,{open:z,onClose:ae,"aria-labelledby":"form-dialog-title",maxWidth:"xs",children:[Object(a.jsxs)(Z.a,{id:"form-dialog-title",children:["Issue id: ",$.id]}),Object(a.jsx)(W.a,{children:Object(a.jsx)(J,{issue:$,handleChange:ie})}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(R.a,{onClick:function(){r($),B(!1)},children:"Save"}),Object(a.jsx)(R.a,{onClick:function(){B(!1)},children:"Cancel"})]})]}),Object(a.jsxs)(U.a,{open:G,onClose:ae,"aria-labelledby":"form-dialog-title",maxWidth:"sm",children:[Object(a.jsx)(Z.a,{id:"form-dialog-title",children:"Are you sure?"}),Object(a.jsxs)(W.a,{children:[Object(a.jsxs)("p",{children:["Id: ",$.id]}),Object(a.jsxs)("p",{children:["Title: ",$.title]}),Object(a.jsxs)("p",{children:["State: ",$.state]}),Object(a.jsxs)("p",{children:["Url: ",$.url]})]}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(R.a,{onClick:function(){c($.id),H(!1)},children:"Delete"}),Object(a.jsx)(R.a,{onClick:function(){H(!1)},children:"Cancel"})]})]})]})})),ee=u.a.form(P()),te=Object(l.b)((function(e){return{issuesList:e.issuesList}}))((function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{}),Object(a.jsx)(s.a,{elevation:3,children:Object(a.jsx)($,{})})]})})),ne=n(39),ae=n(77),ie=n.n(ae),re=n(78),ce={issuesList:[{id:771598342,title:"update homepage headline",state:"open",url:"https://api.github.com/repos/angular/angular/issues/40029",createdAt:"2020-12-08T20:40:37Z",updatedAt:"2020-12-11T19:23:06Z"},{id:773984644,title:"fix(router): ensure named outlets with empty path parents are matched",state:"open",url:"https://api.github.com/repos/angular/angular/issues/40056",createdAt:"2020-12-09T21:50:59Z",updatedAt:"2020-12-10T21:51:54Z"},{id:777693345,title:"docs: add Aristeidis Bampakos to contributor list",state:"open",url:"https://api.github.com/repos/angular/angular/issues/40165",createdAt:"2020-12-16T23:14:32Z",updatedAt:"2020-12-16T23:14:46Z"},{id:772049835,title:"Angular animations leak",state:"open",url:"https://api.github.com/repos/angular/angular/issues/40191",createdAt:"2020-12-18T23:14:32Z",updatedAt:"2020-12-18T23:14:46Z"},{id:778972456,title:"Docs: Transfer in-memory-web-api into main repo",state:"open",url:"https://api.github.com/repos/angular/angular/issues/40190",createdAt:"2020-12-18T23:14:32Z",updatedAt:"2020-12-18T23:14:46Z"},{id:779834795,title:"ci: add jessicajaniuk to pullapprove groups",state:"open",url:"https://api.github.com/repos/angular/angular/issues/40176",createdAt:"2020-12-17T23:14:32Z",updatedAt:"2020-12-17T23:14:46Z"}]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ISSUE":return Object(B.a)(Object(B.a)({},e),{},{issuesList:[].concat(Object(re.a)(e.issuesList),[t.payload])});case"EDIT_ISSUE":var n=e.issuesList.map((function(e){return e.id===t.payload.id?t.payload:e}));return Object(B.a)(Object(B.a)({},e),{},{issuesList:n});case"DELETE_ISSUE":var a=e.issuesList.filter((function(e){return e.id!==t.payload}));return Object(B.a)(Object(B.a)({},e),{},{issuesList:a});default:return e}},le=Object(ne.c)(se,Object(ne.a)(ie.a)),de=document.getElementById("root");c.a.render(Object(a.jsx)(l.a,{store:le,children:Object(a.jsx)(te,{})}),de)},92:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.c8aee980.chunk.js.map