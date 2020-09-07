<template>
  <main>
    <Loading :isLoading="isLoading" />
    <Steps :progress="3" />
    <div class="c-cart">
      <div class="l-wrapper-tiny">
        <div class="c-cart__section">
          <div class="u-mb-8 u-text-center">
            <h2 class="u-text-xl u-font-medium">付款完成，感謝您的購買！</h2>
          </div>
          <img class="u-full u-mb-10" src="@/assets/images/congratulation.jpg">
          <div class="c-info">
            <ul class="c-info__list">
              <li class="c-info__item">
                <div class="c-info__title">
                  <span>Email</span>
                </div>
                <div class="c-info__content">
                  <span>{{ order.user.email }}</span>
                </div>
              </li>
              <li class="c-info__item">
                <div class="c-info__title">
                  <span>姓名</span>
                </div>
                <div class="c-info__content">
                  <span>{{ order.user.name }}</span>
                </div>
              </li>
              <li class="c-info__item">
                <div class="c-info__title">
                  <span>收件人電話</span>
                </div>
                <div class="c-info__content">
                  <span>{{ order.user.tel }}</span>
                </div>
              </li>
              <li class="c-info__item">
                <div class="c-info__title">
                  <span>收件人地址</span>
                </div>
                <div class="c-info__content">
                  <span>{{ order.user.address }}</span>
                </div>
              </li>
              <li class="c-info__item">
                <div class="c-info__title">
                  <span>付款狀態</span>
                </div>
                <div class="c-info__content">
                  <span
                    class="text-success"
                    v-show="order.paid"
                  >
                    付款完成
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="u-mt-10 text-right"
          >
            <router-link
              class="c-btn c-btn--primary"
              to="/products">
              繼續購買
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Steps from '@/components/fronted/Steps.vue';

export default {
  components: {
    Steps,
  },
  data() {
    return {
      isLoading: false,
      order: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
      },
      orderId: '',
    };
  },
  created() {
    this.orderId = this.$route.params.id;

    if (this.orderId) {
      this.getProductDetail(this.orderId);
    }
  },
  methods: {
    getProductDetail(id) {
      this.isLoading = true;

      this.orderId = id;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${id}`;

      this.$http.get(api).then((res) => {
        this.order = res.data.data;

        this.isLoading = false;
      });
    },
  },
};
</script>

<style>
</style>
