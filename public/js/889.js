(self.webpackChunk=self.webpackChunk||[]).push([[889],{9889:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>ne});var s=t(5166),r={key:0},n={class:"delete Course"},c={class:"delete-buttons"},l={class:"enrollModal"},u=(0,s.createVNode)("label",{for:"enrollCode"},"Course Enroll Code:  ",-1),i=(0,s.createVNode)("br",null,null,-1),a=(0,s.createVNode)("div",{class:"courses header"},[(0,s.createVNode)("div",{class:"heading"},[(0,s.createVNode)("h2",null,"My Courses"),(0,s.createVNode)("hr")])],-1),d={class:"navigation"},h=(0,s.createVNode)("br",null,null,-1),f={class:"filterSettings"},p=(0,s.createVNode)("span",null,"Display Archived Courses: ",-1),m={class:"switch"},C=(0,s.createVNode)("span",{class:"slider round"},null,-1),g=(0,s.createVNode)("br",null,null,-1),v={class:"dropdown"},N=(0,s.createVNode)("button",{class:"dropbtn fas fa-filter"},null,-1),w={class:"dropdown-content"},V=(0,s.createVNode)("br",null,null,-1),k={class:"coursecontainer"},b={class:"courserow row mb-5"},D={id:"menu"},y={class:"menu-item"},x={class:"menu-item"},I={class:"width col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"},B={class:"card coursecard w-100"},E={class:"courses card-content"},T={class:"card-title my-3 mx-2 mb-0"},M=(0,s.createVNode)("hr",{class:"courses my-0"},null,-1),U={key:0,class:"add-course fixed-course-width"},_=(0,s.createVNode)("div",{class:"width col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"},[(0,s.createVNode)("div",{class:"card coursecard w-100",style:{"background-color":"transparent !important"}},[(0,s.createVNode)("div",{class:"courses card-img-add"})])],-1),L={key:1,class:"add-course fixed-course-width"},S=(0,s.createVNode)("div",{class:"width col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"},[(0,s.createVNode)("div",{class:"card coursecard w-100",style:{"background-color":"transparent !important"}},[(0,s.createVNode)("div",{class:"courses card-img-add"})])],-1),P={key:2},O=(0,s.createVNode)("h1",null,"No Registered Courses",-1),$={key:0,id:"archived-courses",style:{width:"100%"}},A=(0,s.createVNode)("div",{class:"oldCourseHeader"},[(0,s.createVNode)("h4",null,"Archived Courses"),(0,s.createVNode)("hr")],-1),H=(0,s.createVNode)("br",null,null,-1),F={id:"course-container",class:"coursecontainer"},Z={class:"courserow row mb-5"},j={id:"menu"},J={class:"menu-item"},R={class:"menu-item"},X={class:"width col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"},Y={class:"card coursecard w-100"},q={class:"courses card-content"},z={class:"card-title my-3 mx-2 mb-0"},G=(0,s.createVNode)("hr",{class:"courses my-0"},null,-1);var K=t(7757),Q=t.n(K),W=t(2813),ee=t(6532),oe=t(2119);function te(e,o,t,s,r,n,c){try{var l=e[n](c),u=l.value}catch(e){return void t(e)}l.done?o(u):Promise.resolve(u).then(s,r)}function se(e){return function(){var o=this,t=arguments;return new Promise((function(s,r){var n=e.apply(o,t);function c(e){te(n,s,r,c,l,"next",e)}function l(e){te(n,s,r,c,l,"throw",e)}c(void 0)}))}}const re={data:function(){return{authUser:null,enrolledCourses:[],courses:[],unfilteredCourses:[],childIsOpen:!1,courseID:null,username:"",rightClickID:"",courseName:"",filter:!0,sort:"4",showOldCourses:!1,showDeleteModal:!1,showEnrollModal:!1,reloadDeleteModal:0,deletingCourse:{id:"",course:{},key:""},ignoreUnmount:!1,enrollCode:""}},setup:function(){var e=(0,oe.yj)();return{currentDirectory:(0,s.computed)((function(){return e.path}))}},methods:{enroll:function(){var e=this;return se(Q().mark((function o(){var t,s,r,n;return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,ee.x.get("/invite/".concat(e.enrollCode));case 2:t=o.sent,s=t.data.data,console.log(s),null==s?(console.log("Course not found!"),e.$notify({type:"error",text:"That course enroll code is invalid!"})):0!=s.max_uses&&s.uses>=s.max_uses?e.$notify({type:"error",text:"The maximum number of uses for that course enroll code has already been reached!"}):(r=new Date((new Date).toISOString().split("T")[0]+" "+(new Date).toISOString().split("T")[1].split(".")[0]),n=new Date(s.expire_date),r>n?e.$notify({type:"error",text:"That course enroll code has expired!"}):e.$router.push("/"+e.enrollCode+"/enroll"));case 6:case"end":return o.stop()}}),o)})))()},showMenu:function(e){if(this.isProf){this.rightClickID=String(e);var o=document.getElementById(this.rightClickID).childNodes[0],t=document.getElementById("out-click");o.style.top="".concat(window.event.pageY,"px"),o.style.left="".concat(window.event.pageX,"px"),o.classList.add("show"),t.style.display="block"}},closeMenu:function(){try{document.getElementById(this.rightClickID).childNodes[0].classList.remove("show")}catch(e){}document.getElementById("out-click").style.display="none",this.rightClickID=""},addCourse:function(){var e=this;return se(Q().mark((function o(){var t,s;return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t={name:"New Course",description:"New Course",owner_id:e.authUser.fsc_user.fsc_id},o.next=3,ee.x.post("/courses",t);case 3:return s=o.sent,e.courseID=s.data.data.id,e.enrolledCourses.push(e.courseID),e.addProfessor(),e.childIsOpen=!0,e.courses.currentCourses.push(s.data.data),e.unfilteredCourses.push(s.data.data),e.sortCourses(4),o.next=13,ee.x.post("/gradebook/init/".concat(e.courseID),{scope:"course"});case 13:o.sent,e.$router.push({name:"EditCourse",params:{course_id:e.courseID}});case 15:case"end":return o.stop()}}),o)})))()},addProfessor:function(){var e=this;return se(Q().mark((function o(){var t,s;return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t={courses:JSON.stringify({courses:e.enrolledCourses})},o.next=3,ee.x.put("/professors/".concat(e.authUser.fsc_user.fsc_id),t);case 3:return s=o.sent,o.abrupt("return",s);case 5:case"end":return o.stop()}}),o)})))()},editCourse:function(e){this.childIsOpen=!0,this.courseID=e,this.$router.push({name:"EditCourse",params:{course_id:this.courseID}})},closeDeleting:function(){this.showDeleteModal=!1},deleting:function(e,o,t){document.getElementById("out-click").style.display="none",this.showDeleteModal=!0,this.deletingCourse.id=e,this.deletingCourse.course=o,this.deletingCourse.key=t},deleteCourse:function(){var e=this;return se(Q().mark((function o(){var t,s,r,n;return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.deletingCourse.id,e.deletingCourse.course,e.deletingCourse.key,e.childIsOpen=!1,document.getElementById("out-click").style.display="none",o.next=7,ee.x.delete("/courses/".concat(t));case 7:for(s=o.sent,console.log(s),console.log("delete Course: "+t),n=null,r=0;r<=e.enrolledCourses.length;r++)e.enrolledCourses[r]==t&&(n=r);e.enrolledCourses.splice(n,1),e.addProfessor(),delete e.courses.course,e.courseID=null,e.unfilteredCourses=e.unfilteredCourses.filter((function(e){return e.id!=t})),e.separateCourses(),e.closeDeleting();case 19:case"end":return o.stop()}}),o)})))()},goToLabs:function(e,o){""==this.rightClickID&&(this.childIsOpen=!0,this.courseID=e,this.courseName=o,this.$router.push({name:"Labs",params:{course_id:this.courseID}}))},pushToLabs:function(e){this.ignoreUnmount=!0;var o=e[0],t=(e[1],e[2]);e[3];this.routeToLabs(o,t)},routeToLabs:function(e,o){console.log("routeToLabs"),console.log(this.ignoreUnmount),this.$router.push("/courses/"+e+"/labs/"+o+"/problems")},pushToLabEdit:function(e){this.ignoreUnmount=!0;var o=e[0],t=(e[1],e[2]);e[3];this.routeToLabEdit(o,t)},routeToLabEdit:function(e,o){console.log("route to lab edit"),console.log(this.ignoreUnmount),this.$router.push("/courses/"+e+"/labs/"+o+"/edit")},pushToCourses:function(e){this.ignoreUnmount=!0;var o=e[0];e[1];this.routeToCourses(o)},routeToCourses:function(e){console.log("routeToCourses"),console.log(this.ignoreUnmount),this.$router.push("/courses/"+e+"/labs")},getCourses:function(){var e=this;return se(Q().mark((function o(){var t,s,r;return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.courses=[],e.unfilteredCourses=[],t=0;case 3:if(!(t<e.enrolledCourses.length)){o.next=12;break}return s=e.enrolledCourses[t],o.next=7,ee.x.get("/courses/".concat(s));case 7:r=o.sent,e.unfilteredCourses.push(r.data.data);case 9:t++,o.next=3;break;case 12:e.sortCourses(4);case 13:case"end":return o.stop()}}),o)})))()},filterByDate:function(){if(this.courses=[],this.filter)for(var e=0;e<this.unfilteredCourses.length;e++)this.withinDate(this.unfilteredCourses[e])&&this.courses.push(this.unfilteredCourses[e]);else for(var o=0;o<this.unfilteredCourses.length;o++)this.courses.push(this.unfilteredCourses[o])},separateCourses:function(){console.log("HERE");for(var e=[],o=[],t=0;t<this.unfilteredCourses.length;t++)console.log("Inside for-loop"),this.withinDate(this.unfilteredCourses[t])?(console.log("current"),e.push(this.unfilteredCourses[t])):(console.log("old"),o.push(this.unfilteredCourses[t]));console.log(e),console.log(o),this.courses={currentCourses:e,oldCourses:o},console.log(this.courses)},withinDate:function(e){var o=new Date(Date.now());if(null==e.start_date)return!1;if(null==e.end_date)return!1;var t=e.start_date.split("-")[2],s=e.start_date.split("-")[1]-1,r=e.start_date.split("-")[0],n=e.end_date.split("-")[2],c=e.end_date.split("-")[1]-1,l=e.end_date.split("-")[0],u=new Date(r,s,t,o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds());return new Date(l,c,n,o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds())>=o&&u<=o},sortCourses:function(e){this.sort=e,0==this.sort?this.sortByStartDate():1==this.sort?this.sortByEndDate():2==this.sort?this.sortByNextProblemDue():3==this.sort?this.sortByName():this.sortByID(),this.separateCourses()},sortByStartDate:function(){this.unfilteredCourses.sort((function(e,o){var t=e.start_date.split("-"),s=o.start_date.split("-"),r=Date.UTC(t[0],t[1]-1,t[2],0,0,0,0),n=Date.UTC(s[0],s[1]-1,s[2],0,0,0,0);return r<n?-1:r>n?1:0}))},sortByEndDate:function(){this.unfilteredCourses.sort((function(e,o){var t=e.end_date.split("-"),s=o.end_date.split("-"),r=Date.UTC(t[0],t[1]-1,t[2],0,0,0,0),n=Date.UTC(s[0],s[1]-1,s[2],0,0,0,0);return r<n?-1:r>n?1:0}))},sortByNextProblemDue:function(){},sortByName:function(){this.unfilteredCourses.sort((function(e,o){var t=e.name.toLowerCase(),s=o.name.toLowerCase();return t<s?-1:t>s?1:0}))},sortByID:function(){this.unfilteredCourses.sort((function(e,o){return e.id-o.id}))},Unmounting:function(){if(!this.ignoreUnmount){this.childIsOpen=!1,this.courseID=null;var e=this.refreshPage();console.log("unmounting the labs page"),e?this.$router.push({name:"Courses"}):this.routeToChild()}this.ignoreUnmount=!1},courseEdited:function(){var e=this;return se(Q().mark((function o(){var t;return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.unfilteredCourses=e.unfilteredCourses.filter((function(o){return o.id!=e.courseID})),o.next=3,ee.x.get("/courses/".concat(e.courseID));case 3:t=o.sent,e.unfilteredCourses.push(t.data.data),e.separateCourses(),e.Unmounting();case 7:case"end":return o.stop()}}),o)})))()},hasLabAccess:function(e){for(var o=0;o<this.enrolledCourses.length;o++)if(this.enrolledCourses[o]==e)return!0;return!1},hasEditAccess:function(e){return!!this.isProf&&this.hasLabAccess(e)},routeToChild:function(){if(""==(e=window.location.pathname.substring("/courses".length)))return console.log("just on the courses page"),!0;console.log("on this page: "+e);var e,o=(e=e.split("/"))[1],t=e[2];return"labs"==t?this.hasLabAccess(o)&&this.goToLabs(o,""):"edit"==t?this.hasEditAccess(o)&&this.editCourse(o):console.log(t),!1},refreshPage:function(){var e=window.location.pathname;return"/"==e?(console.log("on home page"),!1):"/profile"!=e}},computed:{isProf:function(){return null!=W.Z.getters["auth/isProf"]&&W.Z.getters["auth/isProf"]}},watch:{showDeleteModal:function(){this.showDeleteModal||this.reloadDeleteModal++}},mounted:function(){var e=this;return se(Q().mark((function o(){return Q().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("mounted course page"),e.childIsOpen=!1,o.next=4,W.Z.getters["auth/authUser"];case 4:return e.authUser=o.sent,e.username=e.authUser.username,console.log(e.authUser),e.authUser.fsc_user.courses&&(e.enrolledCourses=JSON.parse(e.authUser.fsc_user.courses).courses),o.next=10,e.getCourses();case 10:e.separateCourses(),e.routeToChild();case 12:case"end":return o.stop()}}),o)})))()},render:function(e,o,t,K,Q,W){var ee=(0,s.resolveComponent)("vue-final-modal"),oe=(0,s.resolveComponent)("router-view");return(0,s.openBlock)(),(0,s.createBlock)(s.Fragment,null,[(0,s.createVNode)("div",null,[e.childIsOpen?(0,s.createCommentVNode)("",!0):((0,s.openBlock)(),(0,s.createBlock)("div",r,[(0,s.createVNode)(ee,{class:"delete-modal",modelValue:e.showDeleteModal,"onUpdate:modelValue":o[4]||(o[4]=function(o){return e.showDeleteModal=o}),classes:"modal-container","content-class":"modal-content delete-modal","esc-to-close":!0},{default:(0,s.withCtx)((function(){return[(0,s.createVNode)("button",{class:"modal-close",onClick:o[1]||(o[1]=function(e){return W.closeDeleting()})},"x"),(0,s.createVNode)("div",n,[(0,s.createVNode)("p",null,"Are you sure you would like to delete "+(0,s.toDisplayString)(e.deletingCourse.course.name),1),(0,s.createVNode)("div",c,[(0,s.createVNode)("button",{class:"btn btn-md btn-danger delete-button",onClick:o[2]||(o[2]=function(e){return W.closeDeleting()})}," Cancel "),(0,s.createVNode)("button",{class:"btn btn-md btn-danger delete-button",onClick:o[3]||(o[3]=function(e){return W.deleteCourse()})}," Delete ")])])]})),_:1},8,["modelValue"]),(0,s.createVNode)(ee,{class:"delete-modal",modelValue:e.showEnrollModal,"onUpdate:modelValue":o[8]||(o[8]=function(o){return e.showEnrollModal=o}),classes:"modal-container","content-class":"modal-content delete-modal","esc-to-close":!0},{default:(0,s.withCtx)((function(){return[(0,s.createVNode)("button",{class:"modal-close",onClick:o[5]||(o[5]=function(o){return e.showEnrollModal=!1})},"x"),(0,s.createVNode)("div",l,[u,(0,s.withDirectives)((0,s.createVNode)("input",{id:"enrollCode",name:"enrollCode",type:"text","onUpdate:modelValue":o[6]||(o[6]=function(o){return e.enrollCode=o})},null,512),[[s.vModelText,e.enrollCode]]),i,(0,s.createVNode)("button",{class:"btn btn-success btn-md",onClick:o[7]||(o[7]=function(e){return W.enroll()})},"Enroll")])]})),_:1},8,["modelValue"]),a,(0,s.createVNode)("small",d,[(0,s.createVNode)("span",null,(0,s.toDisplayString)(e.username)+(0,s.toDisplayString)(K.currentDirectory),1)]),h,(0,s.createVNode)("div",f,[p,(0,s.createVNode)("label",m,[(0,s.withDirectives)((0,s.createVNode)("input",{type:"checkbox","onUpdate:modelValue":o[9]||(o[9]=function(o){return e.showOldCourses=o})},null,512),[[s.vModelCheckbox,e.showOldCourses]]),C]),g,(0,s.createVNode)("div",v,[N,(0,s.createVNode)("div",w,[(0,s.createVNode)("small",null,[(0,s.createVNode)("span",{onClick:o[10]||(o[10]=function(e){return W.sortCourses(0)}),class:0==e.sort?"selected":""},"Start",2)]),(0,s.createVNode)("small",null,[(0,s.createVNode)("span",{onClick:o[11]||(o[11]=function(e){return W.sortCourses(1)}),class:1==e.sort?"selected":""},"End",2)]),(0,s.createVNode)("small",null,[(0,s.createVNode)("span",{onClick:o[12]||(o[12]=function(e){return W.sortCourses(2)}),class:2==e.sort?"selected":""},"Next Problem Due",2)]),(0,s.createVNode)("small",null,[(0,s.createVNode)("span",{onClick:o[13]||(o[13]=function(e){return W.sortCourses(3)}),class:3==e.sort?"selected":""},"Name",2)]),(0,s.createVNode)("small",null,[(0,s.createVNode)("span",{onClick:o[14]||(o[14]=function(e){return W.sortCourses(4)}),class:4==e.sort?"selected":""},"Unsorted",2)])])])]),V,(0,s.createVNode)("div",k,[(0,s.createVNode)("div",b,[((0,s.openBlock)(!0),(0,s.createBlock)(s.Fragment,null,(0,s.renderList)(e.courses.currentCourses,(function(e,o){return(0,s.openBlock)(),(0,s.createBlock)("div",{class:"fixed-course-width",key:e.id,course:e},[(0,s.createVNode)("span",{id:e.id,onContextmenu:(0,s.withModifiers)((function(o){return W.showMenu(e.id)}),["prevent"]),onClick:(0,s.withModifiers)((function(o){return W.goToLabs(e.id,e.name)}),["prevent"]),class:"no-decor pointer"},[(0,s.createVNode)("ul",D,[(0,s.createVNode)("li",y,[(0,s.withDirectives)((0,s.createVNode)("a",{class:"pointer no-decor",onClick:function(o){return W.editCourse(e.id)}},"Edit",8,["onClick"]),[[s.vShow,W.isProf]])]),(0,s.createVNode)("li",x,[(0,s.withDirectives)((0,s.createVNode)("a",{class:"pointer no-decor",onClick:function(t){return W.deleting(e.id,e,o)}},"Delete",8,["onClick"]),[[s.vShow,W.isProf]])])]),(0,s.createVNode)("div",I,[(0,s.createVNode)("div",B,[(0,s.createVNode)("div",{class:"courses card-img-top",style:{backgroundImage:"url(".concat(e.img_loc,")")}},null,4),(0,s.createVNode)("div",E,[(0,s.createVNode)("h6",T,(0,s.toDisplayString)(e.name),1),M])])])],40,["id","onContextmenu","onClick"])],8,["course"])})),128)),W.isProf?((0,s.openBlock)(),(0,s.createBlock)("div",U,[(0,s.createVNode)("a",{onClick:o[15]||(o[15]=function(e){return W.addCourse()}),class:"no-decor pointer"},[_])])):(0,s.createCommentVNode)("",!0),W.isProf?(0,s.createCommentVNode)("",!0):((0,s.openBlock)(),(0,s.createBlock)("div",L,[(0,s.createVNode)("a",{onClick:o[16]||(o[16]=function(o){return e.showEnrollModal=!0}),class:"no-decor pointer"},[S])])),0==e.courses.length?((0,s.openBlock)(),(0,s.createBlock)("div",P,[O])):(0,s.createCommentVNode)("",!0)])]),e.showOldCourses?((0,s.openBlock)(),(0,s.createBlock)("div",$,[A,H,(0,s.createVNode)("div",F,[(0,s.createVNode)("div",Z,[((0,s.openBlock)(!0),(0,s.createBlock)(s.Fragment,null,(0,s.renderList)(e.courses.oldCourses,(function(e,o){return(0,s.openBlock)(),(0,s.createBlock)("div",{class:"fixed-course-width",key:e.id,course:e},[(0,s.createVNode)("span",{id:e.id,onContextmenu:(0,s.withModifiers)((function(o){return W.showMenu(e.id)}),["prevent"]),onClick:(0,s.withModifiers)((function(o){return W.goToLabs(e.id,e.name)}),["prevent"]),class:"no-decor pointer"},[(0,s.createVNode)("ul",j,[(0,s.createVNode)("li",J,[(0,s.withDirectives)((0,s.createVNode)("a",{class:"pointer no-decor",onClick:function(o){return W.editCourse(e.id)}},"Edit",8,["onClick"]),[[s.vShow,W.isProf]])]),(0,s.createVNode)("li",R,[(0,s.withDirectives)((0,s.createVNode)("a",{class:"pointer no-decor",onClick:function(t){return W.deleting(e.id,e,o)}},"Delete",8,["onClick"]),[[s.vShow,W.isProf]])])]),(0,s.createVNode)("div",X,[(0,s.createVNode)("div",Y,[(0,s.createVNode)("div",{class:"courses card-img-top",style:{backgroundImage:"url(".concat(e.img_loc,")")}},null,4),(0,s.createVNode)("div",q,[(0,s.createVNode)("h6",z,(0,s.toDisplayString)(e.name),1),G])])])],40,["id","onContextmenu","onClick"])],8,["course"])})),128))])])])):(0,s.createCommentVNode)("",!0)])),e.childIsOpen?((0,s.openBlock)(),(0,s.createBlock)(oe,{key:1,onUnmounting:o[17]||(o[17]=function(e){return W.Unmounting()}),onCourseEdited:W.courseEdited,onPushToLabs:W.pushToLabs,onStudentView:W.pushToCourses,onEditLab:W.pushToLabEdit,courseID:e.courseID,courseName:e.courseName},null,8,["onCourseEdited","onPushToLabs","onStudentView","onEditLab","courseID","courseName"])):(0,s.createCommentVNode)("",!0)]),e.childIsOpen?(0,s.createCommentVNode)("",!0):((0,s.openBlock)(),(0,s.createBlock)("div",{key:0,id:"out-click",onClick:o[18]||(o[18]=function(){return W.closeMenu&&W.closeMenu.apply(W,arguments)})}))],64)}},ne=re}}]);