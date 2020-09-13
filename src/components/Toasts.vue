<template>
  <div
    class="c-toast"
  >
    <ul class="c-toast__list">
      <li
        class="c-toast__item"
        v-for="message in messages"
        :key="message.timestamp"
      >
        <div class="c-toast__header">
          <div
            class="c-toast__box"
            :class="`u-bg-${message.status}`"
          >
          </div>
          <strong>Able Sisters</strong>
          <small>現在</small>
        </div>
        <div class="c-toast__body">
          {{ message.message }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.$bus.$on('message', (message, status = 'danger') => {
      this.updateMessage(message, status);
    });
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);

      this.messages.push({
        timestamp,
        message,
        status,
      });

      this.removeMessage(timestamp);
    },
    removeMessage(timestamp) {
      setTimeout(() => {
        this.messages.forEach((message, index) => {
          if (message.timestamp === timestamp) {
            this.messages.splice(index, 1);
          }
        });
      }, 4000);
    },
  },
};
</script>

<style>

</style>
