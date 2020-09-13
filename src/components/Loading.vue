<template>
  <div class="l-loading" :class="{'is-loaded': !isLoading}">
    <img src="@/assets/images/island.svg">
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
