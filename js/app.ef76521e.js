(function(){"use strict";var t={8686:function(t,o,e){var n=e(6369),i=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("待办事项")]),o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("todo-header",{on:{addTodoItem:t.addTodoItem}}),o("todo-list",{attrs:{todos:t.todos}}),o("todo-footer",{attrs:{todos:t.todos,clearAllDoneThings:t.clearAllDoneThings},on:{checkAllTodo:t.checkAllTodo}})],1)])])},r=[],d=(e(541),function(){var t=this,o=t._self._c;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.isAll},on:{change:t.checkAll}})]),o("span",[o("span",[t._v("已完成"+t._s(t.doneTotal))]),t._v(" / 全部"+t._s(t.todos.length)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAllDoneThings}},[t._v("清除已完成任务")])])}),s=[],l={name:"TodoFooter",props:["todos","clearAllDoneThings"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((t,o)=>t+(o.done?1:0)),0)},isAll(){return this.doneTotal==this.total}},methods:{checkAll(){this.$emit("checkAllTodo",!this.isAll)}}},a=l,u=e(1001),c=(0,u.Z)(a,d,s,!1,null,"79effb49",null),h=c.exports,f=function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"添加任务，按回车键确认"},domProps:{value:t.title},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodoThings.apply(null,arguments)},input:function(o){o.target.composing||(t.title=o.target.value)}}})])},p=[],m=e(691),v={name:"TodoHeader",data(){return{title:""}},methods:{addTodoThings(t){const o={id:(0,m.x0)(),title:this.title,done:!1};if(!this.title.trim())return alert("输入不能为空");this.$emit("addTodoItem",o),this.title=""}}},T=v,b=(0,u.Z)(T,f,p,!1,null,"a3f6c312",null),g=b.exports,k=function(){var t=this,o=t._self._c;return o("div",[o("ul",{staticClass:"todo-main"},[o("transition-group",{attrs:{name:"el-zoom-in-center",appear:""}},t._l(t.todos,(function(t){return o("todo-item",{key:t.id,attrs:{todoItem:t}})})),1)],1)])},_=[],y=function(){var t=this,o=t._self._c;return o("div",[o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todoItem.done},on:{change:function(o){return t.handleCheck(t.todoItem.id)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todoItem.isEdit,expression:"!todoItem.isEdit"}]},[t._v(t._s(t.todoItem.title))]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.todoItem.isEdit,expression:"todoItem.isEdit"}],ref:"inputTitle",attrs:{type:"text"},domProps:{value:t.todoItem.title},on:{blur:function(o){return t.handleBlur(t.todoItem,o)}}})]),o("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.handleDelete(t.todoItem.id)}}},[t._v(" 删除")]),o("button",{staticClass:"btn btn-edit",on:{click:function(o){return t.handleEdit(t.todoItem)}}},[t._v(" 编辑")])])])},$=[],w={name:"TodoItem",props:["todoItem"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){confirm("确定删除吗?")&&this.$bus.$emit("deleteTodo",t)},handleEdit(t){t.hasOwnProperty("isEdit")?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){this.$refs.inputTitle.focus()}))},handleBlur(t,o){if(t.isEdit=!1,!o.target.value.trim())return alert("输入不能为空");this.$bus.$emit("updateTodo",t.id,o.target.value)}}},x=w,I=(0,u.Z)(x,y,$,!1,null,"6581e862",null),O=I.exports,A={name:"TodoList",components:{TodoItem:O},props:["todos"]},E=A,C=(0,u.Z)(E,k,_,!1,null,"0ce7c9b7",null),P=C.exports,S={name:"App",components:{TodoHeader:g,TodoList:P,TodoFooter:h},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[],sign:"有志者，事竟成!"}},methods:{addTodoItem(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((o=>{o.id===t&&(o.done=!o.done)}))},deleteTodo(t){this.todos=this.todos.filter((o=>o.id!==t))},checkAllTodo(t){this.todos.forEach((o=>o.done=t))},clearAllDoneThings(){this.todos=this.todos.filter((t=>!t.done))},updateTodo(t,o){this.todos.forEach((e=>{e.id===t&&(e.title=o)}))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("deleteTodo",this.deleteTodo),this.$bus.$on("updateTodo",this.updateTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("deleteTodo"),this.$bus.$off("updateTodo")}},j=S,D=(0,u.Z)(j,i,r,!1,null,null,null),N=D.exports,Z=e(8499),F=e.n(Z);n["default"].use(F()),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(N),beforeCreate(){n["default"].prototype.$bus=this}}).$mount("#app")}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}e.m=t,function(){var t=[];e.O=function(o,n,i,r){if(!n){var d=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||d>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<d&&(d=r));if(s){t.splice(u--,1);var a=i();void 0!==a&&(o=a)}}return o}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,i,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var i,r,d=n[0],s=n[1],l=n[2],a=0;if(d.some((function(o){return 0!==t[o]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var u=l(e)}for(o&&o(n);a<d.length;a++)r=d[a],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},n=self["webpackChunktodo_list_ui"]=self["webpackChunktodo_list_ui"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(8686)}));n=e.O(n)})();
//# sourceMappingURL=app.ef76521e.js.map