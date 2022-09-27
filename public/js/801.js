(self.webpackChunk=self.webpackChunk||[]).push([[801],{2684:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(5166);const o={name:"BaseBtn",props:{type:{type:String,default:"submit"},text:{type:String,default:"Submit"}},render:function(e,t,a,o,l,c){return(0,r.openBlock)(),(0,r.createBlock)("button",(0,r.mergeProps)({type:a.type},e.$attrs,{class:"px-2.5 py-1.5 border border-transparent text-xs rounded shadow-sm text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center transition"}),(0,r.toDisplayString)(a.text),17,["type"])}},l=o},7801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q});var r=a(5166);var o={id:"carousel",class:"carousel slide","data-ride":"carousel","data-interval":"6500"},l={class:"carousel-inner h-100"},c={class:"carousel-item active"},n=(0,r.createVNode)("img",{src:"/images/1.jpg?9009f277e31744bd3a7c0647e2a2d614",alt:"Image carousel",class:"w-100"},null,-1),s={class:"carousel-caption"},d={class:"container"},i={class:"row justify-content-center"},u={class:"col-8 bg-custom d-none d-md-block py-3 px-0"},p=(0,r.createVNode)("h1",null,"Mocs-IDE",-1),f=(0,r.createVNode)("div",{class:"border-top border-danger w-50 mx-auto my-3"},null,-1),m=(0,r.createVNode)("h4",null,"A modern, free to use online IDE for virtual classrooms",-1),g=(0,r.createTextVNode)("Login"),V=(0,r.createTextVNode)("Sign Up"),b=(0,r.createVNode)("div",{class:"carousel-item"},[(0,r.createVNode)("img",{src:"/images/2.jpg?8125fd432973fbfa31bf33e39dffb104",alt:"Image carousel",class:"w-100"}),(0,r.createVNode)("div",{class:"carousel-caption"},[(0,r.createVNode)("div",{class:"container"},[(0,r.createVNode)("div",{class:"row justify-content-end text-right"},[(0,r.createVNode)("div",{class:"col-5 bg-custom d-none d-lg-block py-3 px-0 pr-3"},[(0,r.createVNode)("p",{class:"pb-3"}," Developed by students from Florida Southern College's CS department "),(0,r.createVNode)("a",{href:"#",class:"btn btn-danger btn-lg"},"Button")])])])])],-1),N=(0,r.createVNode)("div",{class:"carousel-item"},[(0,r.createVNode)("img",{src:"/images/3.jpg?0cacc0b433074e7f665cbd0c81e5d553",alt:"Image carousel",class:"w-100"}),(0,r.createVNode)("div",{class:"carousel-caption"},[(0,r.createVNode)("div",{class:"container"},[(0,r.createVNode)("div",{class:"row justify-content-start text-left"},[(0,r.createVNode)("div",{class:"col-7 bg-custom d-none d-lg-block py-3 px-0 pl-3"},[(0,r.createVNode)("p",{class:"lead"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla? "),(0,r.createVNode)("a",{href:"#",class:"btn btn-primary btn-lg"},"Button")])])])])],-1),v=(0,r.createVNode)("a",{href:"",class:"carousel-control-prev",role:"button","data-slide":"prev"},[(0,r.createVNode)("span",{class:"fas fa-chevron-left fa-2x"})],-1),h=(0,r.createVNode)("a",{href:"",class:"carousel-control-next",role:"button","data-slide":"next"},[(0,r.createVNode)("span",{class:"fas fa-chevron-right fa-2x"})],-1),y=(0,r.createVNode)("footer",null,[(0,r.createVNode)("div",{class:"container"},[(0,r.createVNode)("div",{class:"row text-light text-center py-4 justify-content-center"},[(0,r.createVNode)("p",null,"Stuff can go here")])])],-1),x=(0,r.createVNode)("div",{class:"socket text-light text-center py-3"},[(0,r.createVNode)("p",null,[(0,r.createVNode)("a",{href:"#",target:"_blank"},"and here")])],-1);var k={class:"modal-wrapper-1"},w={class:"modal-wrapper-2"},B={class:"modal-wrapper-3"},S={class:"modal-wrapper-4"};const C={setup:function(e,t){var a=t.emit;return{close:function(){a("close")}}},methods:{handleClose:function(){this.$emit("close")}},render:function(e,t,a,o,l,c){return(0,r.openBlock)(),(0,r.createBlock)(r.Fragment,null,[(0,r.createVNode)("div",{onClick:t[1]||(t[1]=function(){return c.handleClose&&c.handleClose.apply(c,arguments)}),class:"modal-section"}),(0,r.createVNode)("div",k,[(0,r.createVNode)("div",w,[(0,r.createVNode)("div",B,[(0,r.createVNode)("div",S,[(0,r.createVNode)("h3",null,[(0,r.renderSlot)(e.$slots,"title")]),(0,r.createVNode)("main",null,[(0,r.renderSlot)(e.$slots,"body")])])])])])],64)}};const I={name:"FormInput",inheritAttrs:!1,props:{name:{type:String,required:!0},label:{type:String,default:""},value:{type:[String,Number]},type:{type:String,default:"text"},showLabel:{type:Boolean,default:!0},required:{type:Boolean,default:!1},placeholder:{type:String,default:null},autocomplete:{type:String,default:null}},methods:{updateValue:function(e){return this.$emit("input",e.target.value)}},render:function(e,t,a,o,l,c){return(0,r.openBlock)(),(0,r.createBlock)("div",null,[a.label?((0,r.openBlock)(),(0,r.createBlock)("label",{key:0,for:a.name,class:["form-label",{"sr-only":!a.showLabel}]},(0,r.toDisplayString)(a.label),11,["for"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("input",{id:a.name,type:a.type,value:a.value,required:a.required,onInput:t[1]||(t[1]=function(){return c.updateValue&&c.updateValue.apply(c,arguments)}),placeholder:a.placeholder,autocomplete:a.autocomplete,class:"form-input"},null,40,["id","type","value","required","placeholder","autocomplete"])])}};const j={components:{Modal:C,FormInput:I,BaseBtn:a(2684).Z},data:function(){return{email:null,password:null,error:null}},methods:{},render:function(e,t,a,k,w,B){var S=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("div",o,[(0,r.createVNode)("div",l,[(0,r.createVNode)("div",c,[n,(0,r.createVNode)("div",s,[(0,r.createVNode)("div",d,[(0,r.createVNode)("div",i,[(0,r.createVNode)("div",u,[p,f,m,(0,r.createVNode)(S,{to:"/login",class:"btn btn-danger btn-lg mr-2"},{default:(0,r.withCtx)((function(){return[g]})),_:1}),(0,r.createVNode)(S,{to:"/register",class:"btn btn-danger btn-lg ml-2"},{default:(0,r.withCtx)((function(){return[V]})),_:1})])])])])]),b,N]),v,h]),y,x])}},q=j}}]);