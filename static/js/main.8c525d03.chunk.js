(this["webpackJsonpfront-estoque"]=this["webpackJsonpfront-estoque"]||[]).push([[0],{352:function(t,e,n){},417:function(t,e,n){},418:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),a=n(14),r=n.n(a),c=(n(352),n(196)),u=n(335),s=n(227),d=n.n(s),f=n(91),l=n.n(f),p=n(195);function h(){return(h=Object(p.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/cadastrar",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=Object(p.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id_produto,t.next=3,fetch("http://localhost:3001/delete/".concat(n),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(p.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id_produto,t.next=3,fetch("http://localhost:3001/update/".concat(n),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return t>=0&&t<=20?"Cr\xedtico":t>=21&&t<=50?"Alerta":"Ok"}var O=n(59),v=[{title:"Id",field:"id_produto",cellStyle:{width:1,maxWidth:1},headerStyle:{width:20,maxWidth:20}},{title:"Nome",field:"nome"},{title:"Descri\xe7\xe3o",field:"descricao"},{title:"Pre\xe7o",field:"preco"},{title:"Quantidade",field:"quantidade"},{title:"Situa\xe7\xe3o",field:"quantidade",render:function(t){return Object(O.jsx)("div",{className:m(t.quantidade),children:m(t.quantidade)})}}];var w=function(){var t=Object(o.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1];return Object(o.useEffect)((function(){fetch("http://localhost:3001/").then((function(t){return t.json()})).then((function(t){return i(t)}))}),[]),Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{options:{paging:!1,actionsColumnIndex:-1,addRowPosition:"first"},title:"Tabela Produtos",data:n,columns:v,editable:{onRowAdd:function(t){return new Promise((function(e,o){var a=[].concat(Object(c.a)(n),[t]);!function(t){h.apply(this,arguments)}(t),i(a),e()}))},onRowDelete:function(t){return new Promise((function(e,o){var a=t.tableData.id,r=Object(c.a)(n);!function(t){j.apply(this,arguments)}(t),r.splice(a,1),setTimeout((function(){i(r),e()}),2e3)}))},onRowUpdate:function(t,e){return new Promise((function(o,a){var r=e.tableData.id,u=Object(c.a)(n);u[r]=t,function(t){b.apply(this,arguments)}(t),setTimeout((function(){i(u),o()}),2e3)}))}}})})};n(417);var x=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(w,{})})},y=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,820)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),i(t),a(t),r(t)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),y()}},[[418,1,3]]]);
//# sourceMappingURL=main.8c525d03.chunk.js.map