<template>
  <div class="l-loading" :class="{'is-loaded': !isLoading}">
    <div class="l-loading__circle"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
</style>
