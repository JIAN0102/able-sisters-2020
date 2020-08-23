<template>
  <div class="c-steps">
    <ul
      class="c-steps__list"
      :class="{
        'is-step-1':progress===1,
        'is-step-2':progress===2,
        'is-step-3':progress===3,
      }"
    >
      <li class="c-steps__item">
        <span></span>
        <h3>訂購明細</h3>
      </li>
      <li class="c-steps__item">
        <span></span>
        <h3>確認訂單</h3>
      </li>
      <li class="c-steps__item">
        <span></span>
        <h3>完成訂購</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
    },
  },
};
</script>

<style>

</style>
