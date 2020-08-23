<template>
  <main>
    <div class="c-hero">
      <div class="c-hero__media">
        <img src="@/assets/images/home-banner.png">
      </div>
      <div class="c-hero__slogan">
        <img src="@/assets/images/slogan.svg">
      </div>
    </div>
    <div class="p-intro">
      <h2>關於 Able Sisters</h2>
    </div>
    <div class="p-comment">
      <h2>動物們對 <span>Able Sisters</span> 的評價是？</h2>
      <swiper ref="comment" :options="swiperOptions">
        <swiper-slide>
          <img src="https://images.unsplash.com/photo-1557064349-7b3817527fb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    commentSwiper() {
      return this.$refs.comment.$swiper;
    },
  },
  mounted() {
    // this.heroSwiper.slideTo(3, 1000, false);
    // this.commentSwiper.slideTo(3, 1000, false);
  },
};
</script>

<style>

</style>
