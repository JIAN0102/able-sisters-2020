<template>
  <main>
    <Loading :active.sync="isLoading" />
    <Steps :progress="3" />
    <div class="c-cart">
      <div class="l-wrapper-tiny">
        <div class="c-cart__section">
          <div class="u-text-center">
            <h2 class="u-text-xl u-font-medium u-mb-8">付款完成，感謝您的購買！</h2>
          </div>
          <div>
          <form>
            <table class="table">
              <tbody>
                <tr>
                  <th>Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span
                      class="text-success"
                      v-show="order.paid"
                    >
                      付款完成
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="text-right"
            >
              <router-link
                class="c-btn c-btn--primary"
                to="/products">
                繼續購買
              </router-link>
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
