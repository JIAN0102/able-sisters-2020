(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20961c"],{a98f:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("main",[a("Loading",{attrs:{isLoading:s.isLoading}}),a("div",{staticClass:"p-login"},[a("div",{staticClass:"p-login__main"},[a("div",{staticClass:"l-wrapper-tiny"},[a("ValidationObserver",{staticClass:"c-form",attrs:{tag:"div"},scopedSlots:s._u([{key:"default",fn:function(t){var e=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),s.signin(t)}}},[a("div",{staticClass:"u-mb-10 u-text-center"},[a("h1",{staticClass:"u-text-xl u-font-medium"},[s._v(" 登入後台 ")])]),a("ValidationProvider",{staticClass:"c-form__group",attrs:{tag:"div",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(t){var e=t.errors,i=t.classes;return[a("input",{directives:[{name:"model",rawName:"v-model",value:s.user.email,expression:"user.email"}],staticClass:"c-form__control",class:i,attrs:{id:"inputEmail",type:"email",name:"Email",placeholder:"Email address"},domProps:{value:s.user.email},on:{input:function(t){t.target.composing||s.$set(s.user,"email",t.target.value)}}}),a("span",{staticClass:"c-form__error"},[s._v(s._s(e[0]))])]}}],null,!0)}),a("ValidationProvider",{staticClass:"c-form__group",attrs:{tag:"div",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(t){var e=t.errors,i=t.classes;return[a("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"c-form__control",class:i,attrs:{id:"inputPassword",type:"password",placeholder:"Password"},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}}),a("span",{staticClass:"c-form__error"},[s._v(s._s(e[0]))])]}}],null,!0)}),a("div",{staticClass:"u-mt-10 u-text-right"},[a("button",{staticClass:"c-btn c-btn--primary",attrs:{type:"submit",disabled:e}},[s._v(" 登入 ")])])],1)]}}])})],1)])])],1)},i=[],r={data:function(){return{isLoading:!1,user:{email:"",password:""}}},methods:{signin:function(){var s=this;this.isLoading=!0;var t="".concat("https://course-ec-api.hexschool.io/api","/auth/login");this.$http.post(t,this.user).then((function(t){var a=t.data.token,e=t.data.expired;s.$cookies.set("token",a,new Date(1e3*e)),s.$bus.$emit("message","".concat(t.data.message),"success"),s.isLoading=!1,s.$router.push("/admin")})).catch((function(t){s.$bus.$emit("message","".concat(t.response.data.message),"danger"),s.isLoading=!1}))}}},n=r,o=a("2877"),u=Object(o["a"])(n,e,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20961c.9611a2dc.js.map