<template>
  <header class="l-header">
    <div class="l-header__main">
      <router-link to="/" class="l-header__logo">
        Able-Sisters Logo
      </router-link>
      <div class="l-header__nav">
        <ul class="l-header__list">
          <li class="l-header__item">
            <router-link
              to="/products"
              class="l-header__link"
            >
              手工服飾
            </router-link>
          </li>
          <li class="l-header__item">
            <router-link
              to="/about"
              class="l-header__link"
            >
              關於我們
            </router-link>
          </li>
          <li class="l-header__item">
            <router-link
              to="/cart"
              class="l-header__link"
            >
              購物車
              <span v-show="carts.length !== 0">{{ carts.length }}</span>
            </router-link>
          </li>
          <li class="l-header__item">
            <router-link
              to="/login"
              class="l-header__link"
            >
              登入後台
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        Able Sisters 前台
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/products"
            >
              手工服飾
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
            >
              關於我們
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/cart"
            >
              購物車
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/login"
            >
              登入後台
            </router-link>
          </li>
        </ul>
      </div>
    </nav> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('get-cart', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(api).then((res) => {
        this.carts = res.data.data;
      });
    },
  },
};
</script>

<style>

</style>
