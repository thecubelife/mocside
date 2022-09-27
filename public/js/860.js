(self.webpackChunk=self.webpackChunk||[]).push([[860],{1860:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var n=r(5166),a={key:0},o={class:"courses header"},s={class:"heading"},c=(0,n.createVNode)("hr",null,null,-1),l={class:"navigation"},i=(0,n.createVNode)("br",null,null,-1),u={class:"table problemtable"},d={class:"problemtable"},p=(0,n.createVNode)("th",null,[(0,n.createVNode)("i",{class:"fas fa-chevron-down spacer"})],-1),m=(0,n.createVNode)("th",null,"Title",-1),b=(0,n.createVNode)("th",null,"# Test Cases",-1),f={key:0},h=(0,n.createVNode)("th",null,"Due Date",-1),g={key:1},v=(0,n.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),k=(0,n.createVNode)("i",{class:"fas fa-chevron-down"},null,-1),N={key:0},x={key:1},V={class:"description-data"},D={colspan:"5",class:"description-data"},y={class:"problem-description"},w={class:"row"},P={class:"col-11"},I={class:"right col-1"},_=(0,n.createVNode)("i",{class:"fas fa-edit"},null,-1),S=(0,n.createVNode)("i",{class:"fas fa-trash-alt"},null,-1),B=(0,n.createVNode)("br",null,null,-1),C=(0,n.createVNode)("br",null,null,-1),E=(0,n.createVNode)("br",null,null,-1),U={style:{width:"50% !important"}},M={class:"row"},O={class:"col-9"},A=(0,n.createVNode)("option",{value:"",selected:"",disabled:"",hidden:""}," Select a language... ",-1),J=(0,n.createVNode)("option",{value:"Java"},"Java",-1),T=(0,n.createVNode)("option",{value:"Python"},"Python",-1),$={class:"col-3 ml-1"},L=(0,n.createVNode)("td",{colspan:"5"},"Add Problem",-1);var F=r(7757),Z=r.n(F),j=r(6532),R=r(2813),q=r(2119);function z(e,t,r,n,a,o,s){try{var c=e[o](s),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function G(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){z(o,n,a,s,c,"next",e)}function c(e){z(o,n,a,s,c,"throw",e)}s(void 0)}))}}const H={props:["labID","labName"],emits:["unmounting","labEdited"],data:function(){return{problems:[],childIsOpen:!1,problemID:null,expandedProblem:null,lang:"",progress:[],authUser:null,fscID:null,deletedMe:!1,username:""}},setup:function(){var e=(0,q.yj)();return{currentDirectory:(0,n.computed)((function(){return e.path}))}},methods:{convertDate:function(e){var t=e.split("-");console.log("\n\n\n"),console.log(t);var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Number(t[1])-1],n=Number(t[2].split(" ")[0]);return console.log(n),r+" "+n},addProblem:function(){var e=this;return G(Z().mark((function t(){var r,n;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:"New Problem",description:JSON.stringify({ops:[{insert:"New Problem"}]}),lab_id:e.labID,due_date:"2021-05-29 13:04:03",copy_id:e.labID,java_starter:"public class Main{\n\tpublic static void main(String[] args){\n\t\t\n\t}\n}",python_starter:'def main():\n\n\n\nif __name__ == "__main__":\n\tmain()'},t.next=3,j.x.post("/problems",r);case 3:n=t.sent,e.problemID=n.data.data.id,e.problems.push(n.data.data),e.childIsOpen=!0,e.$router.push({name:"EditAssignment",params:{problem_id:e.problemID}});case 8:case"end":return t.stop()}}),t)})))()},editProblem:function(e){this.childIsOpen=!0,this.problemID=e,this.$router.push({name:"EditAssignment",params:{problem_id:this.problemID}})},deleteProblem:function(e,t){var r=this;return G(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!confirm("Are you Sure you want to remove "+e.name+" from this Lab?")){n.next=6;break}return n.next=4,j.x.delete("/problems/".concat(e.id));case 4:n.sent,r.problems=r.problems.filter((function(e,r){return r!=t}));case 6:case"end":return n.stop()}}),n)})))()},deleteMe:function(){var e=this;return G(Z().mark((function t(){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("deleteMe"),e.deletedMe=!0,e.$router.push({name:"Problems",params:{lab_id:e.labID}});case 3:case"end":return t.stop()}}),t)})))()},goToProblem:function(e){this.childIsOpen=!0,this.problemID=e,this.$router.push({name:"Assignment",params:{problem_id:e}})},getProblems:function(){var e=this;return G(Z().mark((function t(){var r,n;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.x.get("/problems/".concat(e.labID));case 2:return r=t.sent,e.problems=r.data.data,t.next=6,e.getStudent();case 6:if(t.sent,e.isProf){t.next=19;break}n=0;case 9:if(!(n<e.problems.length)){t.next=19;break}return t.next=12,e.getPercent(e.problems[n]);case 12:return e.problems[n].percent=t.sent,t.next=15,e.getActivity(e.problems[n]);case 15:e.problems[n].activity=t.sent;case 16:n++,t.next=9;break;case 19:case"end":return t.stop()}}),t)})))()},getStudent:function(){var e=this;return G(Z().mark((function t(){var r;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.authUser=R.Z.getters["auth/authUser"],e.fscID=e.authUser.fsc_user.fsc_id,t.next=4,j.x.get("/progress/".concat(e.fscID));case 4:return r=t.sent,e.progress=r.data.data,t.abrupt("return",e.progress);case 7:case"end":return t.stop()}}),t)})))()},getPercent:function(e){var t=this;return G(Z().mark((function r(){var n,a,o;return Z().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=JSON.parse(t.progress.assignments),o=0;case 2:if(!(o<n.length)){r.next=9;break}if(n[o].assignment_id!=e.id){r.next=6;break}return a=n[o],r.abrupt("break",9);case 6:o++,r.next=2;break;case 9:if(0!=e.test_cases){r.next=13;break}return r.abrupt("return","0%");case 13:if(a){r.next=17;break}return r.abrupt("return","0%");case 17:return r.abrupt("return",parseInt(a.cases_passed/e.test_cases*100)+"%");case 18:case"end":return r.stop()}}),r)})))()},getActivity:function(e){var t=this;return G(Z().mark((function r(){var n,a;return Z().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=JSON.parse(t.progress.assignments),a=0;case 2:if(!(a<n.length)){r.next=8;break}if(n[a].assignment_id!=e.id){r.next=5;break}return r.abrupt("return",n[a].last_progress);case 5:a++,r.next=2;break;case 8:case"end":return r.stop()}}),r)})))()},problemEdited:function(){var e=this;return G(Z().mark((function t(){var r,n;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.problemID,e.problems=e.problems.filter((function(t){return t.id!=e.problemID})),t.next=4,j.x.get("/problems/full/".concat(e.problemID));case 4:return n=t.sent,e.problems.push(n.data.data),console.log(n.data.data),t.next=9,e.Unmounting();case 9:if(!e.deletedMe){t.next=14;break}return t.next=12,j.x.delete("/problems/".concat(r));case 12:t.sent,e.problems=e.problems.filter((function(e){return e.id!=r}));case 14:case"end":return t.stop()}}),t)})))()},Unmounting:function(){var e=this;return G(Z().mark((function t(){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.childIsOpen=!1,e.problemID=null,e.$router.push({name:"Problems",params:{lab_id:e.labID}});case 3:case"end":return t.stop()}}),t)})))()},isExpanded:function(e){return this.expandedProblem==e},toggleExpansion:function(e){this.isExpanded(e)?(this.lang="",this.expandedProblem=null):this.expandedProblem=e}},computed:{isProf:function(){return null!=R.Z.getters["auth/isProf"]&&R.Z.getters["auth/isProf"]}},beforeMount:function(){var e=this;return G(Z().mark((function t(){var r;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.childIsOpen=!1,t.next=3,e.getProblems();case 3:console.log("\n\nBefore date convert"),console.log(e.problems),r=0;case 6:if(!(r<e.problems.length)){t.next=13;break}return t.next=9,e.convertDate(e.problems[r].due_date);case 9:e.problems[r].due_date=t.sent;case 10:r++,t.next=6;break;case 13:console.log("\n\nAfter date convert"),console.log(e.problems);case 15:case"end":return t.stop()}}),t)})))()},beforeUnmount:function(){this.$emit("unmounting")},mounted:function(){var e=this;return G(Z().mark((function t(){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.Z.getters["auth/authUser"];case 2:e.authUser=t.sent,e.username=e.authUser.username;case 4:case"end":return t.stop()}}),t)})))()},render:function(e,t,r,F,Z,j){var R=this,q=(0,n.resolveComponent)("router-view");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[Z.childIsOpen?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("div",a,[(0,n.createVNode)("div",o,[(0,n.createVNode)("div",s,[(0,n.createVNode)("h2",null,(0,n.toDisplayString)(this.labName),1),c])]),(0,n.createVNode)("small",l,[(0,n.createVNode)("span",null,(0,n.toDisplayString)(Z.username)+(0,n.toDisplayString)(F.currentDirectory),1),i,(0,n.createVNode)("span",{class:"pointer underline",onClick:t[1]||(t[1]=function(e){return R.$emit("unmounting")})},"↩ Return to Labs")]),(0,n.createVNode)("table",u,[(0,n.createVNode)("thead",d,[(0,n.createVNode)("tr",null,[p,m,b,j.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("th",f,"% Successful")),h,j.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("th",g,"Last Activity"))])]),(0,n.createVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(Z.problems,(function(e,r){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:e.id},[(0,n.createVNode)("tr",{class:"problem pointer",onClick:function(t){return j.toggleExpansion(e.id)}},[(0,n.withDirectives)((0,n.createVNode)("td",null,[v],512),[[n.vShow,!j.isExpanded(e.id)]]),(0,n.withDirectives)((0,n.createVNode)("td",null,[k],512),[[n.vShow,j.isExpanded(e.id)]]),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.name),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.test_cases),1),j.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("td",N,(0,n.toDisplayString)(e.percent),1)),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.due_date.split(" ")[0])+" "+(0,n.toDisplayString)(e.due_date.split(" ")[1]),1),j.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("td",x,(0,n.toDisplayString)(e.activity),1))],8,["onClick"]),(0,n.withDirectives)((0,n.createVNode)("tr",V,[(0,n.createVNode)("td",D,[(0,n.createVNode)("div",y,[(0,n.createVNode)("div",w,[(0,n.createVNode)("h4",P,[(0,n.createVNode)("b",null,(0,n.toDisplayString)(e.name),1)]),(0,n.createVNode)("div",I,[j.isProf?((0,n.openBlock)(),(0,n.createBlock)("a",{key:0,onClick:function(t){return j.editProblem(e.id)},class:"courselaunch text-danger mx-2 my-1 no-decor pointer"},[_],8,["onClick"])):(0,n.createCommentVNode)("",!0),j.isProf?((0,n.openBlock)(),(0,n.createBlock)("a",{key:1,onClick:function(t){return j.deleteProblem(e,r)},class:"courselaunch text-danger mx-2 my-1 no-decor pointer"},[S],8,["onClick"])):(0,n.createCommentVNode)("",!0)])]),(0,n.createVNode)("p",null,[B,(0,n.createTextVNode)(" Due Date: "+(0,n.toDisplayString)(e.due_date.split(" ")[0])+" ",1),C,(0,n.createTextVNode)(" Test Cases: "+(0,n.toDisplayString)(e.test_cases)+" ",1),E]),(0,n.createVNode)("div",U,[(0,n.createVNode)("div",M,[(0,n.createVNode)("div",O,[(0,n.withDirectives)((0,n.createVNode)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return Z.lang=e}),id:"lang",class:"form-select"},[A,J,T],512),[[n.vModelSelect,Z.lang]])]),(0,n.createVNode)("div",$,[(0,n.createVNode)("button",{type:"launch",name:"launch",class:"launch-workspace btn btn-success",disabled:!Z.lang.length,onClick:function(t){return j.goToProblem(e.id)}}," Launch in "+(0,n.toDisplayString)(Z.lang),9,["disabled","onClick"])])])])])])],512),[[n.vShow,j.isExpanded(e.id)]])],64)})),128)),j.isProf?((0,n.openBlock)(),(0,n.createBlock)("tr",{key:0,class:"lab pointer",onClick:t[3]||(t[3]=function(){return j.addProblem&&j.addProblem.apply(j,arguments)})},[L])):(0,n.createCommentVNode)("",!0)])])])),Z.childIsOpen?((0,n.openBlock)(),(0,n.createBlock)(q,{key:1,onUnmounting:t[4]||(t[4]=function(e){return j.Unmounting()}),onProblemEdited:t[5]||(t[5]=function(e){return j.problemEdited()}),onDeleteMe:t[6]||(t[6]=function(e){return j.deleteMe()}),problemID:Z.problemID,lang:Z.lang,labID:r.labID},null,8,["problemID","lang","labID"])):(0,n.createCommentVNode)("",!0)],64)}},K=H}}]);