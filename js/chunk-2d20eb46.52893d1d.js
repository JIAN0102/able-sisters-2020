(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20eb46"],{b101:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Sidebar"),s("div",{staticClass:"px-5"},[t.checkAuth?s("router-view"):t._e()],1)],1)},i=[],e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/admin"}},[t._v(" Able Sisters 後台管理系統 ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[t._v(" 產品列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[t._v(" 優惠卷列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/storages"}},[t._v(" 圖片管理 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[t._v(" 訂單列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/customer_orders"}},[t._v(" 模擬下單系統 ")])],1),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.signout}},[t._v(" 登出 ")])])])])],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],o={data:function(){return{}},methods:{signout:function(){this.$cookies.remove("token"),this.$router.push("/login")}}},l=o,c=s("2877"),u=Object(c["a"])(l,e,r,!1,null,null,null),v=u.exports,h={components:{Sidebar:v},data:function(){return{checkAuth:!1}},created:function(){var t=this,a=this.$cookies.get("token"),s="".concat("https://course-ec-api.hexschool.io/api","/auth/check");this.setAxiosAuthorization(),this.$http.post(s,{api_token:a}).then((function(a){a.data.success||(t.checkAuth=!1,t.$router.push("/login")),t.checkAuth=!0})).catch((function(){t.checkAuth=!1,t.$router.push("/login")}))}},d=h,p=Object(c["a"])(d,n,i,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d20eb46.52893d1d.js.map