(self.webpackChunk=self.webpackChunk||[]).push([[363],{363:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ne});var n=r(5166),o={class:"delete Course"},a={class:"delete-buttons"},l={class:"courses header"},s={class:"heading"},c=(0,n.createVNode)("hr",null,null,-1),i={class:"navigation"},u=(0,n.createVNode)("br",null,null,-1),d=(0,n.createVNode)("br",null,null,-1),b=(0,n.createVNode)("br",null,null,-1),p=(0,n.createVNode)("br",null,null,-1),m=(0,n.createVNode)("label",{for:"sort"},"Sort By: ",-1),g=(0,n.createVNode)("option",{value:"0"},"Due Date",-1),f=(0,n.createVNode)("option",{value:"1"},"Name",-1),h=(0,n.createVNode)("option",{value:"2"},"Unsorted",-1),k={style:{border:"1px solid #9e9e9e !important",padding:"0 !important",width:"min-content !important",margin:"2rem 2rem 2rem 2rem !important"}},N={class:"table labtable",style:{margin:"0 !important"}},v={class:"labtable"},D=(0,n.createVNode)("th",null,"Title",-1),V=(0,n.createVNode)("th",null,"# Problems",-1),y={key:0},w=(0,n.createVNode)("th",null,"Due Date",-1),x={key:1},C={key:0},L={key:1},B=(0,n.createVNode)("td",{colspan:"5"},"Add Lab",-1),I={style:{border:"1px solid #9e9e9e !important",padding:"0 !important",width:"min-content !important",margin:"2rem 2rem 2rem 2rem !important"}},P={class:"table problemtable",style:{margin:"0 !important"}},_=(0,n.createVNode)("thead",{class:"problemtable",style:{border:"none !important"}},[(0,n.createVNode)("tr",null,[(0,n.createVNode)("th",null,[(0,n.createVNode)("i",{class:"fas fa-grin-alt spacer"})]),(0,n.createVNode)("th",null,"Lab Name"),(0,n.createVNode)("th",null,"# Problems"),(0,n.createVNode)("th",null,"% Complete"),(0,n.createVNode)("th",null,"Due Date"),(0,n.createVNode)("th",null,"Points Earned"),(0,n.createVNode)("th",null,"Points Possible"),(0,n.createVNode)("th",null,"Grade Percentage")])],-1),S={key:0},O=(0,n.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),E={key:1},U=(0,n.createVNode)("i",{class:"fas fa-chevron-down"},null,-1),M={class:"lab-tableDrop"},T={class:"description-data",colspan:"8"},j={style:{border:"1px solid #9e9e9e !important","border-right":"none !important",padding:"0 !important",margin:"0.5rem 1rem 0.5rem 1rem !important"}},F={class:"table",style:{margin:"0",width:"-webkit-fill-available"}},G=(0,n.createVNode)("thead",{class:"labtable"},[(0,n.createVNode)("tr",null,[(0,n.createVNode)("th",null,"Title"),(0,n.createVNode)("th",null,"# Test Cases"),(0,n.createVNode)("th",null,"# Test Cases Passed"),(0,n.createVNode)("th",null,"Due Date"),(0,n.createVNode)("th",null,"Points Earned"),(0,n.createVNode)("th",null,"Points Possible"),(0,n.createVNode)("th",null,"Grade Percentage")])],-1),A={style:{"border-bottom":"0 !important"}},$={key:1},J={id:"menu"},R={class:"menu-item"},Z={class:"menu-item"};var H=r(7757),X=r.n(H),Y=r(6532),q=r(2813),z=r(2119);function K(e,t,r,n,o,a,l){try{var s=e[a](l),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function Q(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function l(e){K(a,n,o,l,s,"next",e)}function s(e){K(a,n,o,l,s,"throw",e)}l(void 0)}))}}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=["Labs","Grades"];const re=(0,n.defineComponent)({props:["courseID","courseName"],emits:["unmounting","courseEdited"],name:"Course",data:function(){return{labs:[],unfilteredLabs:[],childisOpen:!1,labID:null,labName:null,authUser:null,fscID:null,progress:[],username:"",rightClickID:"",student:{},grades:{},problems:{},expandedProblem:null,sort:"1",showDeleteModal:!1,reloadDeleteModal:0,deletingLab:{id:"",lab:{},key:""}}},setup:function(){var e=(0,z.yj)(),t=(0,n.computed)((function(){return e.path})),r=(0,n.reactive)({selectedTab:te[0]});return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({currentDirectory:t,tabs:te},(0,n.toRefs)(r))},methods:{isExpanded:function(e){return this.expandedProblem==e},toggleExpansion:function(e){this.isExpanded(e)?(this.lang="",this.expandedProblem=null):this.expandedProblem=e},getStudentObject:function(){var e=this;return Q(X().mark((function t(){var r;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.authUser),t.next=3,Y.x.get("/students/".concat(e.authUser.fsc_user.fsc_id));case 3:r=t.sent,e.student=r.data,console.log(r.data);case 6:case"end":return t.stop()}}),t)})))()},getGrades:function(){var e=this;return Q(X().mark((function t(){var r,n,o,a,l,s,c,i,u,d;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=[],(r={grade:0,labs:[]}).grade=JSON.parse(e.student.gradebook_courses).grades[e.courseID],a=JSON.parse(e.student.gradebook_labs),console.log("BEFORE FOR LOOP"),console.log(e.labs.length),l=0;case 7:if(!(l<e.labs.length)){t.next=19;break}return t.next=10,Y.x.get("/gradebook/".concat(e.labs[l].id));case 10:for(s=(s=t.sent).data.data,n.push(e.labs[l].id),c=[],i=0;i<s.problems.length;i++)c.push({problemID:s.problems[i],grade:s.grades[s.problems[i]]}),o.push(s.problems[i]);r.labs.push({grade:a.grades[e.labs[l].id],labID:e.labs[l].id,name:e.labs[l].name,numProblems:e.labs[l].num_problems,percentComplete:e.labs[l].percent,dueDate:e.labs[l].due_date,total_points:e.labs[l].total_points,problems:c});case 16:l++,t.next=7;break;case 19:return e.grades=r,u={problems:o,labs:n},t.next=23,Y.x.post("/gradebook/worth/",u);case 23:d=t.sent,e.problems=d.data.data.problems;case 25:case"end":return t.stop()}}),t)})))()},showMenu:function(e){if(this.isProf){this.rightClickID=String(e);var t=document.getElementById(this.rightClickID).childNodes[0],r=document.getElementById("out-click");t.style.top="".concat(window.event.clientY+document.body.scrollTop,"px"),t.style.left="".concat(window.event.clientX,"px"),t.classList.add("show"),r.style.display="block"}},closeMenu:function(){try{document.getElementById(this.rightClickID).childNodes[0].classList.remove("show")}catch(e){}document.getElementById("out-click").style.display="none",this.rightClickID=""},goToProblems:function(e,t){this.childisOpen=!0,this.labID=e,this.labName=t,this.$router.push({name:"Problems",params:{lab_id:e}})},getLabs:function(){var e=this;return Q(X().mark((function t(){var r,n;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.x.get("/labs/".concat(e.courseID));case 2:return r=t.sent,e.unfilteredLabs=r.data.data,t.next=6,e.getStudent();case 6:if(t.sent,e.isProf){t.next=19;break}n=0;case 9:if(!(n<e.unfilteredLabs.length)){t.next=19;break}return t.next=12,e.getPercent(e.unfilteredLabs[n]);case 12:return e.unfilteredLabs[n].percent=t.sent,t.next=15,e.getActivity(e.unfilteredLabs[n]);case 15:e.unfilteredLabs[n].activity=t.sent;case 16:n++,t.next=9;break;case 19:return console.log("get labs"),t.next=22,e.sortLabs();case 22:return t.next=24,e.getColors();case 24:case"end":return t.stop()}}),t)})))()},getColors:function(){var e=this;return Q(X().mark((function t(){var r;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=0;r<e.unfilteredLabs.length;r++)console.log(e.unfilteredLabs[r].id+" "+e.unfilteredLabs[r].percent),"100%"==e.unfilteredLabs[r].percent?(console.log("green background"),document.getElementById(e.unfilteredLabs[r].id).classList.add("complete")):"0%"!=e.unfilteredLabs[r].percent?(console.log("red background"),document.getElementById(e.unfilteredLabs[r].id).classList.add("incomplete")):console.log("blank color background");case 1:case"end":return t.stop()}}),t)})))()},getGradeColors:function(){var e=this;return Q(X().mark((function t(){var r,n,o,a,l;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=0;r<e.grades.labs.length;r++)for(console.log(e.grades.labs[r].labID+" "+e.grades.labs[r].percentComplete),"100%"==e.grades.labs[r].percentComplete?(console.log("green background"),n="gl"+e.grades.labs[r].labID,document.getElementById(n).classList.add("complete")):"0%"!=e.grades.labs[r].percentComplete?(console.log("red background"),o="gl"+e.grades.labs[r].labID,document.getElementById(o).classList.add("incomplete")):console.log("blank color background"),console.log("About to get Problem Colors"),a=0;a<e.grades.labs[r].problems.length;a++)console.log("problem: "+a+" in lab: "+r),console.log(e.grades.labs[r].problems[a].problemID+" "+e.grades.labs[r].problems[a].grade),100==e.grades.labs[r].problems[a].grade?(console.log("green background"),l=document.getElementById("gp"+e.grades.labs[r].problems[a].problemID),console.log(l),l.classList.add("complete")):0!=e.grades.labs[r].problems[a].grade?(console.log("red background"),l=document.getElementById("gp"+e.grades.labs[r].problems[a].problemID),console.log(l),l.classList.add("incomplete")):console.log("Standard Background");case 1:case"end":return t.stop()}}),t)})))()},Unmounting:function(){var e=this;return Q(X().mark((function t(){var r;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.childisOpen=!1,e.labID=null,e.labName=null,r=e.refreshPage(),console.log("unmounting the problems page"),console.log(r),r&&e.$router.push({name:"Labs",params:{course_id:e.courseID}}),t.next=9,e.getColors();case 9:return t.next=11,e.getGradeColors();case 11:return t.next=13,e.getProblemColors();case 13:case"end":return t.stop()}}),t)})))()},labEdited:function(){var e=this;return Q(X().mark((function t(){var r;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("lab is edited"),e.childisOpen=!1,e.labs=e.labs.filter((function(t){return t.id!=e.labID})),t.next=5,Y.x.get("/labs/full/".concat(e.labID));case 5:return r=t.sent,e.labs.push(r.data.data),t.next=9,e.getColors();case 9:return t.next=11,e.getGradeColors();case 11:return t.next=13,e.getProblemColors();case 13:e.Unmounting();case 14:case"end":return t.stop()}}),t)})))()},addLab:function(){var e=this;return Q(X().mark((function t(){var r,n;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:"New Lab",description:"New Lab",course_id:e.courseID,due_date:"2021-06-03"},t.next=3,Y.x.post("/labs/",r);case 3:n=t.sent,e.labs.push(n.data.data),e.unfilteredLabs.push(n.data.data),e.sortLabs(),console.log(n.data.data),e.labID=n.data.data.id,e.labName=n.data.data.name,console.log(e.labID),e.childisOpen=!0,e.$router.push({name:"EditLab",params:{lab_id:e.labID}});case 13:case"end":return t.stop()}}),t)})))()},editLab:function(e,t){this.childisOpen=!0,this.labID=e,this.labName=t,this.$router.push({name:"EditLab",params:{lab_id:this.labID}})},closeDeleting:function(){this.showDeleteModal=!1},deleting:function(e,t,r){document.getElementById("out-click").style.display="none",this.showDeleteModal=!0,this.deletingLab.id=e,this.deletingLab.lab=t,this.deletingLab.key=r},removeLab:function(){var e=this;return Q(X().mark((function t(){var r,n;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deletingLab.id,r=e.deletingLab.lab,n=e.deletingLab.key,t.next=5,Y.x.delete("/labs/".concat(r.id));case 5:t.sent,e.labs=e.labs.filter((function(e,t){return t!=n})),e.unfilteredLabs=e.unfilteredLabs.filter((function(e){return e.id!=r.id})),e.closeDeleting();case 9:case"end":return t.stop()}}),t)})))()},getStudent:function(){var e=this;return Q(X().mark((function t(){var r;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.authUser=q.Z.getters["auth/authUser"],e.fscID=e.authUser.fsc_user.fsc_id,e.isProf){t.next=8;break}return t.next=5,Y.x.get("/progress/".concat(e.fscID));case 5:return r=t.sent,e.progress=r.data.data,t.abrupt("return",e.progress);case 8:return t.abrupt("return",{});case 9:case"end":return t.stop()}}),t)})))()},getPercent:function(e){var t=this;return Q(X().mark((function r(){var n,o,a;return X().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=JSON.parse(t.progress.labs),a=0;case 2:if(!(a<n.length)){r.next=9;break}if(n[a].lab_id!=e.id){r.next=6;break}return o=n[a],r.abrupt("break",9);case 6:a++,r.next=2;break;case 9:if(0!=e.numProblems){r.next=13;break}return r.abrupt("return","0%");case 13:if(o){r.next=17;break}return r.abrupt("return","0%");case 17:return r.abrupt("return",parseInt(o.num_completed/e.num_problems*100)+"%");case 18:case"end":return r.stop()}}),r)})))()},getActivity:function(e){var t=this;return Q(X().mark((function r(){var n,o;return X().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=JSON.parse(t.progress.labs),o=0;case 2:if(!(o<n.length)){r.next=8;break}if(n[o].lab_id!=e.id){r.next=5;break}return r.abrupt("return",n[o].last_progress);case 5:o++,r.next=2;break;case 8:case"end":return r.stop()}}),r)})))()},routeToChild:function(){var e=window.location.pathname,t="/courses/"+this.courseID+"/labs";if(""==(r=e.substring(t.length)))console.log("just on the labs page");else{console.log("on this page: "+r);for(var r,n=(r=r.split("/"))[1],o=r[2],a="",l=0;l<this.labs.length;l++)if(this.labs[l].id==n){a=this.labs[l].name;break}"problems"==o?this.goToProblems(n,a):"edit"==o?this.editLab(n,a):console.log(o)}},filterByPublish:function(){var e=this;return Q(X().mark((function t(){var r,n;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("filter by publish"),e.labs=[],e.isProf)for(console.log("professor"),n=0;n<e.unfilteredLabs.length;n++)e.labs.push(e.unfilteredLabs[n]);else for(console.log("student"),r=0;r<e.unfilteredLabs.length;r++)console.log("\n\n\n\n"+r),e.published(e.unfilteredLabs[r])&&(console.log("Lab is published. Checking if it has problems..."),e.unfilteredLabs[r].num_problems>0&&(console.log("Lab does have problems"),e.labs.push(e.unfilteredLabs[r])));return t.abrupt("return","Hi");case 4:case"end":return t.stop()}}),t)})))()},published:function(e){var t=new Date(Date.now());if(""==e.publish_date||null==e.publish_date)return!1;var r=e.publish_date.split("-")[2],n=e.publish_date.split("-")[1]-1,o=e.publish_date.split("-")[0],a=new Date(o,n,r,0,0,0,0);return a<t},sortLabs:function(){var e=this;return Q(X().mark((function t(){return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.sort){t.next=5;break}return t.next=3,e.sortByDueDate();case 3:t.next=12;break;case 5:if(1!=e.sort){t.next=10;break}return t.next=8,e.sortByName();case 8:t.next=12;break;case 10:return t.next=12,e.sortByID();case 12:return console.log(e.unfilteredLabs),t.next=15,e.filterByPublish();case 15:return t.abrupt("return","");case 16:case"end":return t.stop()}}),t)})))()},sortByDueDate:function(){var e=this;return Q(X().mark((function t(){return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.unfilteredLabs.sort((function(e,t){var r=e.due_date.split("-"),n=t.due_date.split("-"),o=Date.UTC(r[0],r[1]-1,r[2],0,0,0,0),a=Date.UTC(n[0],n[1]-1,n[2],0,0,0,0);return o<a?-1:o>a?1:0}));case 1:case"end":return t.stop()}}),t)})))()},sortByName:function(){var e=this;return Q(X().mark((function t(){return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.unfilteredLabs.sort((function(e,t){var r=e.name.toLowerCase(),n=t.name.toLowerCase();return r<n?-1:r>n?1:0}));case 1:case"end":return t.stop()}}),t)})))()},sortByID:function(){var e=this;return Q(X().mark((function t(){return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.unfilteredLabs.sort((function(e,t){return e.id-t.id}));case 1:case"end":return t.stop()}}),t)})))()},refreshPage:function(){var e=window.location.pathname.substring("/courses".length);if(console.log(e),""==e)return console.log("just on the courses page"),!1;console.log("on this page: "+e);(e=e.split("/"))[1],e[2];return!0}},computed:{isProf:function(){return null!=q.Z.getters["auth/isProf"]&&q.Z.getters["auth/isProf"]}},watch:{showDeleteModal:function(){this.showDeleteModal||this.reloadDeleteModal++}},mounted:function(){return Q(X().mark((function e(){return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Mounted");case 1:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var e=this;return Q(X().mark((function t(){return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Before Mount"),e.childisOpen=!1,t.next=4,e.getLabs();case 4:return t.next=6,q.Z.getters["auth/authUser"];case 6:if(e.authUser=t.sent,e.username=e.authUser.username,e.routeToChild(),e.isProf){t.next=14;break}return t.next=12,e.getStudentObject();case 12:return t.next=14,e.getGrades();case 14:return t.next=16,e.getGradeColors();case 16:console.log("HELLO");case 17:case"end":return t.stop()}}),t)})))()},beforeUnmount:function(){this.$emit("unmounting")}});re.render=function(e,t,r,H,X,Y){var q=this,z=(0,n.resolveComponent)("vue-final-modal"),K=(0,n.resolveComponent)("tab"),Q=(0,n.resolveComponent)("tabs"),W=(0,n.resolveComponent)("tab-panel"),ee=(0,n.resolveComponent)("tab-panels"),te=(0,n.resolveComponent)("router-view");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.withDirectives)((0,n.createVNode)("div",null,[(0,n.createVNode)(z,{modelValue:e.showDeleteModal,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.showDeleteModal=t}),classes:"modal-container","content-class":"modal-content delete-modal","esc-to-close":!0},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("button",{class:"modal-close",onClick:t[1]||(t[1]=function(t){return e.closeDeleting()})},"x"),(0,n.createVNode)("div",o,[(0,n.createVNode)("p",null," Are you sure you would like to delete "+(0,n.toDisplayString)(e.deletingLab.lab.name),1),(0,n.createVNode)("div",a,[(0,n.createVNode)("button",{class:"btn btn-md btn-danger delete-button",onClick:t[2]||(t[2]=function(t){return e.closeDeleting()})}," Cancel "),(0,n.createVNode)("button",{class:"btn btn-md btn-danger delete-button",onClick:t[3]||(t[3]=function(t){return e.removeLab()})}," Delete ")])])]})),_:1},8,["modelValue"]),(0,n.createVNode)("div",l,[(0,n.createVNode)("div",s,[(0,n.createVNode)("h2",null,(0,n.toDisplayString)(e.courseName),1),c,(0,n.createVNode)(Q,{modelValue:e.selectedTab,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.selectedTab=t})},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.tabs,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(K,{class:"tab",key:"t".concat(t),val:e,label:e,indicator:!0},null,8,["val","label"])})),128))]})),_:1},8,["modelValue"])])]),(0,n.createVNode)("small",i,[(0,n.createVNode)("span",null,(0,n.toDisplayString)(e.username)+(0,n.toDisplayString)(e.currentDirectory),1),u,(0,n.createVNode)("span",{class:"pointer underline",onClick:t[6]||(t[6]=function(e){return q.$emit("unmounting")})},"↩ Return to Courses")]),d,b,p,m,(0,n.withDirectives)((0,n.createVNode)("select",{id:"sort","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.sort=t}),onChange:t[8]||(t[8]=function(){return e.sortLabs&&e.sortLabs.apply(e,arguments)})},[g,f,h],544),[[n.vModelSelect,e.sort]]),(0,n.createVNode)(ee,{modelValue:e.selectedTab,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.selectedTab=t}),animate:!0},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(W,{val:"Labs"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",k,[(0,n.createVNode)("table",N,[(0,n.createVNode)("thead",v,[(0,n.createVNode)("tr",null,[D,V,e.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("th",y,"% Complete")),w,e.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("th",x,"Last Activity"))])]),(0,n.createVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.labs,(function(t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t.id},[e.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("tr",{key:0,class:"lab pointer",id:t.id,onClick:function(r){return e.goToProblems(t.id,t.name)}},[(0,n.createVNode)("td",null,[(0,n.createVNode)("a",null,(0,n.toDisplayString)(t.name),1)]),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.num_problems),1),e.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("td",C,(0,n.toDisplayString)(t.percent),1)),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.due_date),1),e.isProf?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("td",L,(0,n.toDisplayString)(t.activity),1))],8,["id","onClick"])),e.isProf?((0,n.openBlock)(),(0,n.createBlock)("tr",{key:1,class:"lab pointer",onClick:(0,n.withModifiers)((function(r){return e.goToProblems(t.id,t.name)}),["prevent"]),onContextmenu:(0,n.withModifiers)((function(r){return e.showMenu(t.id)}),["prevent"])},[(0,n.createVNode)("td",null,[(0,n.createVNode)("a",null,(0,n.toDisplayString)(t.name),1)]),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.num_problems),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.due_date),1)],40,["onClick","onContextmenu"])):(0,n.createCommentVNode)("",!0)],64)})),128)),e.isProf?((0,n.openBlock)(),(0,n.createBlock)("tr",{key:0,class:"lab pointer",onClick:t[9]||(t[9]=function(){return e.addLab&&e.addLab.apply(e,arguments)})},[B])):(0,n.createCommentVNode)("",!0)])])])]})),_:1}),(0,n.createVNode)(W,{val:"Grades"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",I,[(0,n.createVNode)("table",P,[_,(0,n.createVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.grades.labs,(function(t,r){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:r},[(0,n.createVNode)("tr",{class:"problem pointer",id:"gl"+t.labID,onClick:function(r){return e.toggleExpansion(t.labID)}},[e.isExpanded(t.labID)?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("td",S,[O])),e.isExpanded(t.labID)?((0,n.openBlock)(),(0,n.createBlock)("td",E,[U])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.name),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.numProblems),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.percentComplete),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.dueDate),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(null==t.grade?"--":t.grade),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.total_points),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(0==t.total_points||null==t.grade?0:.01*parseInt(t.grade/t.total_points*1e4))+"% ",1)],8,["id","onClick"]),(0,n.withDirectives)((0,n.createVNode)("tr",M,[(0,n.createVNode)("td",T,[(0,n.createVNode)("div",j,[(0,n.createVNode)("table",F,[G,(0,n.createVNode)("tbody",A,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.grades.labs[r].problems,(function(t,r){return(0,n.openBlock)(),(0,n.createBlock)("tr",{key:r,class:"lab pointer",id:"gp"+t.problemID},[(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.problems[t.problemID].name),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.problems[t.problemID].test_cases),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.problems[t.problemID].passed),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.problems[t.problemID].due_date),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(t.grade),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(e.problems[t.problemID].worth),1),(0,n.createVNode)("td",null,(0,n.toDisplayString)(0==e.problems[t.problemID].worth||null==t.grade?0:.01*parseInt(t.grade/e.problems[t.problemID].worth*1e4))+"% ",1)],8,["id"])})),128))])])])])],512),[[n.vShow,e.isExpanded(t.labID)]])],64)})),128))])])])]})),_:1})]})),_:1},8,["modelValue"])],512),[[n.vShow,!e.childisOpen]]),e.childisOpen?((0,n.openBlock)(),(0,n.createBlock)(te,{key:0,onUnmounting:t[11]||(t[11]=function(t){return e.Unmounting()}),onLabEdited:t[12]||(t[12]=function(t){return e.labEdited()}),labID:e.labID,labName:e.labName},null,8,["labID","labName"])):(0,n.createCommentVNode)("",!0),e.childisOpen?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("div",$,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.labs,(function(t,r){return(0,n.openBlock)(),(0,n.createBlock)("div",{key:t.id},[(0,n.createVNode)("div",{id:t.id},[(0,n.createVNode)("ul",J,[(0,n.createVNode)("li",R,[e.isProf?((0,n.openBlock)(),(0,n.createBlock)("a",{key:0,class:"pointer no-decor",onClick:function(r){return e.editLab(t.id,t.name)}},"Edit",8,["onClick"])):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("li",Z,[e.isProf?((0,n.openBlock)(),(0,n.createBlock)("a",{key:0,class:"pointer no-decor",onClick:function(n){return e.deleting(t.id,t,r)}},"Delete",8,["onClick"])):(0,n.createCommentVNode)("",!0)])])],8,["id"])])})),128)),(0,n.createVNode)("div",{id:"out-click",onClick:t[13]||(t[13]=function(){return e.closeMenu&&e.closeMenu.apply(e,arguments)})})]))],64)};const ne=re}}]);