(self.webpackChunk=self.webpackChunk||[]).push([[125],{3125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var o=r(5166),n={class:"invite-card center"},s={class:"crop"},i=(0,o.createVNode)("br",null,null,-1),c={class:"center"},a=(0,o.createVNode)("br",null,null,-1),u={class:"center"},l=(0,o.createVNode)("br",null,null,-1);var h=r(7757),g=r.n(h),d=r(6532);function f(e,t,r,o,n,s,i){try{var c=e[s](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(o,n)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var s=e.apply(t,r);function i(e){f(s,o,n,i,c,"next",e)}function c(e){f(s,o,n,i,c,"throw",e)}i(void 0)}))}}const p={data:function(){return{key:"",course:{},courseID:"",courseImg:"",imgSizes:{width:0,height:0,fScaleToTargetWidth:!0}}},methods:{scaleImage:function(e,t,r,o,n){if(console.log("HERE"),console.log(e),console.log(t),console.log(r),console.log(o),console.log(n),this.imgSizes={width:0,height:0,fScaleToTargetWidth:!0},e>0&&t>0&&r>0&&o>0){var s=r,i=t*r/e,c=e*o/t,a=o,u=c>r;(u=u?n:!n)?(this.imgSizes.width=Math.floor(s),this.imgSizes.height=Math.floor(i),this.imgSizes.fScaleToTargetWidth=!0):(this.imgSizes.width=Math.floor(c),this.imgSizes.height=Math.floor(a),this.imgSizes.fScaleToTargetWidth=!1),this.imgSizes.targetleft=Math.floor((r-this.imgSizes.width)/2),this.imgSizes.targettop=Math.floor((o-this.imgSizes.height)/2)}},joinCourse:function(){var e=this;return m(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.x.post("/invite/enroll/".concat(e.key));case 2:t.sent,e.$router.push({name:"Labs",params:{course_id:e.courseID}});case 4:case"end":return t.stop()}}),t)})))()},cancelCourse:function(){this.$router.push({name:"Courses"})},getCourse:function(){var e=this;return m(g().mark((function t(){var r,o;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return""==e.key&&console.log("404"),t.next=3,d.x.get("/invite/".concat(e.key));case 3:return r=t.sent,e.courseID=r.data.data.course_id,t.next=7,d.x.get("/courses/".concat(e.courseID));case 7:o=t.sent,e.course=o.data.data,e.courseImg=e.course.img_loc;case 10:case"end":return t.stop()}}),t)})))()},getKey:function(){var e=window.location.pathname;e=e.split("/"),this.key=e[1]}},beforeMount:function(){var e=this;return m(g().mark((function t(){var r,o;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.getKey(),t.next=3,e.getCourse();case 3:console.log(e.course),r=e,(o=new Image).onload=function(){r.scaleImage(this.width,this.height,600,338,!1)},o.src=e.courseImg;case 8:case"end":return t.stop()}}),t)})))()},render:function(e,t,r,h,g,d){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",{style:'background-image: url("'+this.courseImg+'")',class:"inviteBG"},null,4),(0,o.createVNode)("div",n,[(0,o.createVNode)("div",s,[(0,o.createVNode)("img",{src:this.courseImg,alt:"Course Image",width:"600"},null,8,["src"])]),i,(0,o.createVNode)("h3",c,(0,o.toDisplayString)(g.course.name),1),a,(0,o.createVNode)("p",u,(0,o.toDisplayString)(g.course.start_date)+" — "+(0,o.toDisplayString)(g.course.end_date),1),l,(0,o.createVNode)("button",{class:"btn btn-lg",style:{width:"97%","background-color":"#14a160","border-radius":"5px !important",color:"white"},onClick:t[1]||(t[1]=function(e){return d.joinCourse()})}," Join! ")])])}},v=p}}]);