import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/fronted/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/fronted/Index.vue'),
      },
      {
        path: '/products',
        name: '前台產品列表',
        component: () => import('../views/fronted/Products.vue'),
      },
      {
        path: '/product/:id',
        name: '前台產品細節',
        component: () => import('../views/fronted/Product.vue'),
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/fronted/About.vue'),
      },
      {
        path: '/orders',
        name: '訂購明細',
        component: () => import('../views/fronted/Orders.vue'),
      },
      {
        path: '/checkout/:id',
        name: '確認訂單',
        component: () => import('../views/fronted/Checkout.vue'),
      },
      {
        path: '/completed/:id',
        name: '完成訂購',
        component: () => import('../views/fronted/Completed.vue'),
      },
      {
        path: '/login',
        name: '後台登入',
        component: () => import('../views/fronted/Login.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: '後台 Admin',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品列表',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'orders',
        name: '後台訂單',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'coupons',
        name: '後台優惠券',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'storages',
        name: '圖片列表',
        component: () => import('../views/backend/Storages.vue'),
      },
      {
        path: 'customer_orders',
        name: '客戶訂單',
        component: () => import('../views/backend/CustomerOrders.vue'),
      },
      {
        path: 'customer_checkout/:id',
        name: '客戶訂單列表',
        component: () => import('../views/backend/CustomerCheckout.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
