<template>
  <div class="l-loading" :class="{'is-loaded': !isLoading}"></div>
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
