<template>
  <footer class="l-footer">
    <div class="l-footer__main">
      <div class="l-wrapper">
        <div class="l-footer__nav">
          <img src="@/assets/images/able-sisters-2.png">
          <ul class="l-footer__list">
            <li class="l-footer__item">
              <router-link
                class="l-footer__link"
                to="/products"
              >
                手工服飾
              </router-link>
            </li>
            <li class="l-footer__item">
              <router-link
                class="l-footer__link"
                to="/about"
              >
                關於我們
              </router-link>
            </li>
            <li class="l-footer__item">
              <router-link
                class="l-footer__link"
                to="/orders"
              >
                購物車
              </router-link>
            </li>
            <li class="l-footer__item">
              <router-link
                class="l-footer__link"
                to="/login"
              >
                登入後台
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="l-footer__copyright">
      <div class="l-wrapper">
        <div class="u-text-center">
          <p class="u-color-gray-400">網站所有內容、圖片僅為練習使用，無任何商業用途。</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style>

</style>
