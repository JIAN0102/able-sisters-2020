<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/fronted/Header.vue';
import Footer from '@/components/fronted/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/app-fronted.scss';
</style>
