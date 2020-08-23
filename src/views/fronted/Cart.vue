<template>
  <main>
    <Loading :active.sync="isLoading" />
    <Steps :progress="1" />
    <div class="l-wrapper-tiny">
      <div class="text-right mb-3">
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
        >
          <i class="far fa-trash-alt"> 刪除所有品項</i>
        </button>
      </div>
      <table class="table">
        <thead>
          <th>刪除</th>
          <th>品名</th>
          <th width="150px">
            數量
          </th>
          <th>單位</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="product in carts" :key="product.id">
            <td class="align-middle">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCart(product.product.id)"
              >
                <i class="far fa-trash-alt" />
              </button>
            </td>
            <td class="align-middle">
              {{ product.product.title }}
            </td>
            <td class="align-middle">
              <div class="input-group">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-outline-primary"
                    @click="updateQuantity(product, 1)"
                  >
                    +
                  </button>
                </div>
                <input
                  id="inlineFormInputGroupUsername"
                  type="text"
                  class="form-control text-center"
                  :value="product.quantity"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary"
                    :disabled="product.quantity === 1"
                    @click="updateQuantity(product, -1)"
                  >
                    -
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle">
              {{ product.product.unit }}
            </td>
            <td class="align-middle text-right">
              {{ product.product.price }}
            </td>
          </tr>
        </tbody>
        <tfoot v-if="carts.length">
          <tr>
            <td colspan="4" class="text-right">
              總計
            </td>
            <td class="text-right">
              {{ cartTotal }}
            </td>
          </tr>
          <tr v-if="coupon.enabled">
            <td
              colspan="4"
              class="text-right text-success"
            >
              折扣價
            </td>
            <td
              class="text-right text-success"
            >
              {{ cartTotal * (coupon.percent / 100) }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group inpur-group-sm mb-3" v-if="carts.length">
        <input
          type="text"
          class="form-control"
          placeholder="請輸入優惠碼"
          v-model="couponCode"
        >
        <div class="input-group-append">
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="addCoupon"
          >
            套用優惠碼
          </button>
        </div>
      </div>
    </div>
    <div class="l-wrapper-tiny">
      <ValidationObserver
        tag="div"
        v-slot="{ invalid }"
      >
        <form @submit.prevent="sendOrder">
          <ValidationProvider
            tag="div"
            class="form-group"
            rules="required"
            v-slot="{ errors, classes }"
          >
            <label for="username">收件人姓名</label>
            <input
              type="text"
              id="username"
              class="form-control"
              :class="classes"
              name="收件人姓名"
              v-model="form.name"
            >
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            class="form-group"
            rules="required|email"
            v-slot="{ errors, classes }"
          >
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              :class="classes"
              name="Email"
              v-model="form.email"
            >
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            class="form-group"
            rules="required"
            v-slot="{ errors, classes }"
          >
            <label for="tel">電話</label>
            <input
              type="text"
              id="tel"
              class="form-control"
              :class="classes"
              name="電話"
              v-model="form.tel"
            >
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            class="form-group"
            rules="required"
            v-slot="{ errors, classes }"
          >
            <label for="address">地址</label>
            <input
              type="text"
              id="address"
              class="form-control"
              :class="classes"
              name="地址"
              v-model="form.address"
            >
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            class="form-group"
            rules="required"
          >
            <label>購買方式</label>
            <select
              class="form-control"
              required
              v-model="form.payment"
            >
              <option value="" selected disabled>請選擇付款方式</option>
              <option value="WebATM">WebATM</option>
              <option value="ATM">ATM</option>
              <option value="CVS">CVS</option>
              <option value="Barcode">Barcode</option>
              <option value="Credit">Credit</option>
              <option value="ApplePay">ApplePay</option>
              <option value="GooglePay">GooglePay</option>
            </select>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            class="form-group"
            rules="required"
            v-slot="{ errors, classes }"
          >
            <label for="message">留言</label>
            <textarea
              cols="30"
              rows="5"
              id="message"
              class="form-control"
              :class="classes"
              name="留言"
              v-model="form.message"
            ></textarea>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="invalid"
          >
            送出訂單
          </button>
        </form>
      </ValidationObserver>
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
      carts: [],
      cartTotal: 0,
      coupon: {},
      couponCode: '',
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data;
          this.cartTotal = 0;

          this.carts.forEach((product) => {
            this.cartTotal += product.product.price * product.quantity;
          });

          this.isLoading = false;
        })
        .catch(() => {
        });
    },
    removeCart(id) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;

      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false;

          this.getCart();
          const successMessage = res.data.message;
          this.$bus.$emit('get-cart');
          this.$bus.$emit('message', successMessage, 'success');
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    updateQuantity(product, quantity) {
      this.isLoading = true;

      const newQuantity = product.quantity + quantity;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;

      const cartItem = {
        product: product.product.id,
        quantity: newQuantity,
      };

      this.$http.patch(api, cartItem).then(() => {
        this.isLoading = false;

        this.getCart();
      }).catch((err) => {
        this.$bus.$emit('message', err.response.data.message, 'danger');
      });
    },
    addCoupon() {
      if (!this.couponCode) return;

      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/coupon/search`;

      this.$http.post(api, { code: this.couponCode }).then((res) => {
        this.coupon = res.data.data;

        this.isLoading = false;
      }).catch((err) => {
        this.$bus.$emit('message', err.response.data.message, 'danger');

        this.isLoading = false;
      });
    },
  },
};
</script>

<style>

</style>
