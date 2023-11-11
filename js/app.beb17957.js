(function(){"use strict";var e={1991:function(e,t,l){var o=l(9963),n=l(6252);const i={id:"app"};function r(e,t,l,o,r,s){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(a)])}var s={name:"App"},a=l(3744);const d=(0,a.Z)(s,[["render",r]]);var m=d,u=l(2201);function p(e,t,l,o,i,r){const s=(0,n.up)("employee-form"),a=(0,n.up)("employee-list");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(s),(0,n.Wm)(a)])}var c=l(3577);const y=e=>((0,n.dD)("data-v-06887ede"),e=e(),(0,n.Cn)(),e),f=y((()=>(0,n._)("h2",{class:"list-title"},"Employee List",-1))),h={class:"employee-table"},b=y((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"First Name"),(0,n._)("th",null,"Last Name"),(0,n._)("th",null,"Experience"),(0,n._)("th",null,"Age"),(0,n._)("th",null,"Address"),(0,n._)("th")])],-1))),g=["onClick"],E=["onClick"];function _(e,t,l,i,r,s){const a=(0,n.up)("employee-form");return(0,n.wg)(),(0,n.iD)("div",null,[f,(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>s.openModal&&s.openModal(...e)),class:"add-button"},"Add Employee"),(0,n._)("table",h,[b,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.employees,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,(0,c.zw)(e.firstName),1),(0,n._)("td",null,(0,c.zw)(e.lastName),1),(0,n._)("td",null,(0,c.zw)(e.experience),1),(0,n._)("td",null,(0,c.zw)(e.age),1),(0,n._)("td",null,(0,c.zw)(e.address),1),(0,n._)("td",null,[(0,n._)("button",{class:"edit-button",onClick:e=>s.editEmployee(t)},"Edit",8,g),(0,n._)("button",{class:"delete-button",onClick:e=>s.deleteEmployee(t)},"Delete",8,E)])])))),128))])]),r.showModal?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-container",onClick:t[2]||(t[2]=(...e)=>s.closeModal&&s.closeModal(...e))},[(0,n._)("div",{class:"modal-content",onClick:t[1]||(t[1]=(0,o.iM)((()=>{}),["stop"]))},[(0,n.Wm)(a,{employee:s.selectedEmployee,editingIndex:r.editingIndex,onSubmit:s.handleSubmit},null,8,["employee","editingIndex","onSubmit"])])])):(0,n.kq)("",!0)])}const v=e=>((0,n.dD)("data-v-714b508f"),e=e(),(0,n.Cn)(),e),w={class:"form"},x=v((()=>(0,n._)("h2",{class:"form-title"},"Employee Form",-1))),I=v((()=>(0,n._)("label",{class:"form-lable",for:"firstName"},"First Name",-1))),k=v((()=>(0,n._)("label",{class:"form-lable",for:"lastName"},"Last Name",-1))),M=v((()=>(0,n._)("label",{class:"form-lable",for:"experience"},"Experience (years)",-1))),N=v((()=>(0,n._)("label",{class:"form-lable",for:"age"},"Age",-1))),O=v((()=>(0,n._)("label",{class:"form-lable",for:"address"},"Address",-1))),C={type:"submit",class:"submit-button"};function D(e,t,l,i,r,s){return(0,n.wg)(),(0,n.iD)("div",w,[x,(0,n._)("form",{onSubmit:t[5]||(t[5]=(0,o.iM)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"])),class:"form-container"},[I,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.localEmployee.firstName=e),required:""},null,512),[[o.nr,r.localEmployee.firstName]]),k,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.localEmployee.lastName=e),required:""},null,512),[[o.nr,r.localEmployee.lastName]]),M,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>r.localEmployee.experience=e),required:""},null,512),[[o.nr,r.localEmployee.experience]]),N,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>r.localEmployee.age=e),required:""},null,512),[[o.nr,r.localEmployee.age]]),O,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>r.localEmployee.address=e),required:""},null,512),[[o.nr,r.localEmployee.address]]),(0,n._)("button",C,(0,c.zw)(null===l.editingIndex?"Add":"Update"),1)],32)])}var F={name:"EmployeeForm",props:{employee:Object,editingIndex:Number},data(){return{localEmployee:{...this.employee}}},watch:{employee:{handler(e){this.localEmployee={...e}},deep:!0}},methods:{submitForm(){this.$emit("submit",this.localEmployee,this.editingIndex),this.localEmployee={firstName:"",lastName:"",experience:"",age:"",address:""}}}};const j=(0,a.Z)(F,[["render",D],["__scopeId","data-v-714b508f"]]);var A=j,q={name:"EmployeeList",components:{EmployeeForm:A},data(){return{showModal:!1,editingIndex:null}},computed:{employees(){return this.$store.state.employees},selectedEmployee(){return null!==this.editingIndex?this.employees[this.editingIndex]:null}},methods:{openModal(){this.showModal=!0,this.editingIndex=null},closeModal(){this.showModal=!1},editEmployee(e){this.showModal=!0,this.editingIndex=e},deleteEmployee(e){this.$store.commit("deleteEmployee",e)},handleSubmit(e,t){null===t?this.$store.commit("addEmployee",e):this.$store.commit("updateEmployee",{index:t,employee:e}),this.closeModal()}}};const z=(0,a.Z)(q,[["render",_],["__scopeId","data-v-06887ede"]]);var U=z,L={name:"Home",components:{EmployeeList:U}};const S=(0,a.Z)(L,[["render",p]]);var V=S;const $=[{path:"/",name:"Home",component:V}],W=(0,u.p7)({history:(0,u.PO)(),routes:$});var Z=W,H=(l(560),l(3907)),P=(0,H.MT)({state:{employees:[],editingIndex:null},mutations:{addEmployee(e,t){e.employees.push(t)},updateEmployee(e,{index:t,employee:l}){e.employees[t]=l,e.editingIndex=null},deleteEmployee(e,t){e.employees.splice(t,1)},startEdit(e,t){e.editingIndex=t}},getters:{getEmployees:e=>e.employees,getEditingIndex:e=>e.editingIndex}});const T=(0,o.ri)(m);T.use(Z),T.use(P),T.mount("#app")}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,o,n,i){if(!o){var r=1/0;for(m=0;m<e.length;m++){o=e[m][0],n=e[m][1],i=e[m][2];for(var s=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(l.O).every((function(e){return l.O[e](o[a])}))?o.splice(a--,1):(s=!1,i<r&&(r=i));if(s){e.splice(m--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[o,n,i]}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,r=o[0],s=o[1],a=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(a)var m=a(l)}for(t&&t(o);d<r.length;d++)i=r[d],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(m)},o=self["webpackChunkemployee_list"]=self["webpackChunkemployee_list"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(1991)}));o=l.O(o)})();
//# sourceMappingURL=app.beb17957.js.map