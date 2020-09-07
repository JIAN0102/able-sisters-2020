<template>
  <main>
    <Loading :isLoading="isLoading" />
    <Steps :progress="2" />
    <div class="c-cart">
      <div class="l-wrapper-tiny">
        <div class="c-cart__section">
          <div class="u-mb-8 u-text-center">
            <h2 class="u-text-xl u-font-medium">確認訂單</h2>
          </div>
          <div class="c-table">
            <div class="c-table__header">
              <div class="col-row">
                <div class="col-1/3@md">
                  <div class="c-table__box">
                    <span>商品名稱</span>
                  </div>
                </div>
                <div class="col-1/3@md">
                  <div class="c-table__box">
                    <span>數量</span>
                  </div>
                </div>
                <div class="col-1/3@md">
                  <div class="c-table__box">
                    <span>單價</span>
                  </div>
                </div>
              </div>
            </div>
            <ul class="c-table__list">
              <li
                class="c-table__item"
                v-for="(product, index) in order.products"
                :key="index"
              >
                <div class="col-row">
                  <div class="col-1/3@md">
                    <div class="c-table__box">
                      <span>{{ product.product.title }}</span>
                    </div>
                  </div>
                  <div class="col-1/3@md">
                    <div class="c-table__box">
                      <span>{{ product.quantity }} / {{product.product.unit}}</span>
                    </div>
                  </div>
                  <div class="col-1/3@md">
                    <div class="c-table__box">
                      <span>{{ product.product.price | currency }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="c-table__total">
              <p>
                折扣價
                <span class="u-color-primary">
                  {{ order.amount | currency }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="c-table__section">
          <div class="u-mb-8 u-text-center">
            <h2 class="u-text-xl u-font-medium">訂單資訊</h2>
          </div>
          <div>
            <form
              @submit.prevent="payOrder"
            >
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
                        class="u-color-primary"
                        v-show="order.paid"
                      >
                        付款完成
                      </span>
                      <span
                        class="u-color-secondary"
                        v-show="!order.paid"
                      >
                        未付款
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                class="u-mt-10 text-right"
                v-show="order.paid === false"
              >
                <router-link
                  class="c-btn c-btn--secondary-outline u-mr-3"
                  to="/">
                  取消購買
                </router-link>
                <button
                  type="submit"
                  class="c-btn c-btn--primary"
                >
                  確認付款
                </button>
              </div>
            </form>
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
    this.$bus.$emit('get-cart');
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
    payOrder() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;

      this.$http.post(api).then((res) => {
        if (res.data.data.id) {
          this.$router.push(`/completed/${res.data.data.id}`);
        }
      });
    },
  },
};
</script>

<style>
</style>
