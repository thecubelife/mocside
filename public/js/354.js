(self.webpackChunk=self.webpackChunk||[]).push([[354],{48:(e,r,t)=>{"use strict";t.d(r,{vX:()=>f,Do:()=>m,_L:()=>h,BS:()=>v,Ei:()=>p,C1:()=>b});var a=t(5166);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"function"==typeof e}function s(e){return null!==e&&"object"===n(e)&&!Array.isArray(e)}function i(e){return o(e.$validator)?Object.assign({},e):{$validator:e}}var u=function(e){if(e=(0,a.unref)(e),Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===n(e)){for(var r in e)return!0;return!1}return!!String(e).length},c=function(e){return e=(0,a.unref)(e),Array.isArray(e)?e.length:"object"===n(e)?Object.keys(e).length:String(e).length};function l(e){return function(r){return r=(0,a.unref)(r),!u(r)||e.test(r)}}a.unref,l(/^[a-zA-Z]*$/),l(/^[a-zA-Z0-9]*$/),l(/^\d*(\.\d+)?$/);function d(e,r){return function(t){return!u(t)||(!/\s/.test(t)||t instanceof Date)&&+(0,a.unref)(e)<=+t&&+(0,a.unref)(r)>=+t}}function f(e,r){return{$validator:d(e,r),$message:function(e){var r=e.$params;return"The value must be between ".concat(r.min," and ").concat(r.max)},$params:{min:e,max:r}}}var m={$validator:l(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/),$message:"Value is not a valid email address"};function v(e){return{$validator:(r=e,function(e){return!u(e)||c(e)<=(0,a.unref)(r)}),$message:function(e){var r=e.$params;return"The maximum length allowed is ".concat(r.max)},$params:{max:e}};var r}function p(e){return{$validator:(r=e,function(e){return!u(e)||c(e)>=(0,a.unref)(r)}),$message:function(e){var r=e.$params;return"This field should be at least ".concat(r.min," long")},$params:{min:e}};var r}var b={$validator:function(e){return"string"==typeof e&&(e=e.trim()),u(e)},$message:"Value is required"};l(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);var h={$validator:l(/(^[0-9]*$)|(^-[0-9]+$)/),$message:"Value is not an integer"};l(/^[-]?\d*(\.\d+)?$/)},8354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>k});var a=t(5166),n={class:"login"},o=(0,a.createVNode)("h3",{class:"login-title"},"Login",-1),s={class:"form-group"},i=(0,a.createVNode)("label",{for:"userEmail"},"Username/Email",-1),u={key:0,class:"invalid-feedback"},c=(0,a.createVNode)("br",null,null,-1),l={class:"form-group"},d=(0,a.createVNode)("label",{for:"password"},"Password",-1),f={key:0,class:"invalid-feedback"},m=(0,a.createStaticVNode)('<br><div class="form-group form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="remember">Remember Me <div class="valid-feedback">Valid.</div><div class="invalid-feedback">Check this checkbox to continue.</div></label></div><div class="form-group"><button class="btn btn-danger btn-block">Login</button></div>',3);var v=t(7757),p=t.n(v),b=t(2380),h=t(7181),x=t(3082),$=t(48);function g(e,r,t,a,n,o,s){try{var i=e[o](s),u=i.value}catch(e){return void t(e)}i.done?r(u):Promise.resolve(u).then(a,n)}const y={setup:function(){return{v$:(0,x.ZP)()}},data:function(){return{error:null,message:null,userForm:{userEmail:"",password:""},isSubmitted:!1}},validations:{userForm:{userEmail:{required:$.C1},password:{required:$.C1}}},methods:{handleSubmit:function(){this.isSubmitted=!0,this.v$.$touch(),this.v$.$invalid||this.login()},login:function(){var e,r=this;return(e=p().mark((function e(){var t,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:r.userForm.userEmail,password:r.userForm.password},r.error=null,e.prev=2,e.next=5,b.Z.login(t);case 5:return e.next=7,r.$store.dispatch("auth/getAuthUser");case 7:if(!e.sent){e.next=13;break}r.$store.dispatch("auth/setGuest",{value:"isNotGuest"}),r.$router.go(-1),e.next=16;break;case 13:throw(a=Error("Unable to fetch user after login, check your API settings.")).name="Fetch User",a;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),r.error=(0,h.b)(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})),function(){var r=this,t=arguments;return new Promise((function(a,n){var o=e.apply(r,t);function s(e){g(o,a,n,s,i,"next",e)}function i(e){g(o,a,n,s,i,"throw",e)}s(void 0)}))})()}},render:function(e,r,t,v,p,b){return(0,a.openBlock)(),(0,a.createBlock)("div",null,[(0,a.createVNode)("div",n,[o,(0,a.createVNode)("form",{onSubmit:r[3]||(r[3]=(0,a.withModifiers)((function(){return b.handleSubmit&&b.handleSubmit.apply(b,arguments)}),["prevent"])),class:"needs-validation"},[(0,a.createVNode)("div",s,[i,(0,a.withDirectives)((0,a.createVNode)("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=function(e){return p.userForm.userEmail=e}),id:"userEmail",name:"userEmail",class:["form-control",{"is-invalid":p.isSubmitted&&v.v$.userForm.userEmail.$error}],autocomplete:"username"},null,2),[[a.vModelText,p.userForm.userEmail]]),p.isSubmitted&&v.v$.userForm.userEmail.$error?((0,a.openBlock)(),(0,a.createBlock)("div",u," Please enter your username or email address ")):(0,a.createCommentVNode)("",!0)]),c,(0,a.createVNode)("div",l,[d,(0,a.withDirectives)((0,a.createVNode)("input",{type:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return p.userForm.password=e}),id:"password",name:"password",class:["form-control",{"is-invalid":p.isSubmitted&&v.v$.userForm.password.$error}],autocomplete:"current-password"},null,2),[[a.vModelText,p.userForm.password]]),p.isSubmitted&&v.v$.userForm.password.$error?((0,a.openBlock)(),(0,a.createBlock)("div",f," Please enter your password ")):(0,a.createCommentVNode)("",!0)]),m],32)])])}},k=y}}]);