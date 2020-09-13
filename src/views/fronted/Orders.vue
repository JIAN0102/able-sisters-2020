<template>
  <main>
    <Loading :isLoading="isLoading" />
    <Steps :progress="1" />
    <div class="c-cart">
      <div class="l-wrapper-tiny">
        <div class="c-cart__section">
          <div class="u-mb-8 u-text-center">
            <h2 class="u-text-xl u-font-medium">購物車內容</h2>
          </div>
          <div class="c-table" v-if="carts.length">
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
                v-for="product in carts"
                :key="product.id"
              >
                <div class="col-row">
                  <div class="col-1/3@md">
                    <div class="c-table__box" data-title="商品名稱">
                      <img
                        class="u-mr-2"
                        :src="product.product.imageUrl[0]" :alt="product.product.title">
                      <span>{{ product.product.title }}</span>
                    </div>
                  </div>
                  <div class="col-1/3@md">
                    <div class="c-table__box" data-title="數量">
                      <!-- <span>{{ product.quantity }}</span> -->
                      <div class="p-product-detail__action">
                        <button
                          class="p-product-detail__btn p-product-detail__btn-minus"
                          @click="updateQuantity(product, -1)"
                          :disabled="product.quantity === 1"
                        >
                        </button>
                        <div class="p-product-detail__input">{{ product.quantity }}</div>
                        <button
                          class="p-product-detail__btn p-product-detail__btn-plus"
                          @click="updateQuantity(product, 1)"
                        >
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-1/3@md">
                    <div class="c-table__box" data-title="單價">
                      <span>{{ product.product.price | currency }}</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="c-table__remove"
                  @click="removeCart(product.product.id)"
                ></button>
              </li>
            </ul>
            <div class="c-table__coupon">
              <input
                type="text"
                placeholder="請輸入優惠碼"
                v-model="couponCode"
              >
              <button
                type="button"
                @click="addCoupon"
              >
                套用
              </button>
            </div>
            <div class="c-table__total">
              <p>
                總計
                <span class="u-color-primary">{{ cartTotal | currency }}</span>
              </p>
              <p v-if="coupon.enabled">
                折扣價
                <span class="u-color-primary">
                  {{ cartTotal * (coupon.percent / 100) | currency}}
                </span>
              </p>
            </div>
          </div>
          <div class="c-cart__remind" v-else>
            <p class="u-color-gray-400">目前購物車沒有任何商品</p>
          </div>
        </div>
        <div class="c-cart__section">
          <div class="u-mb-8 u-text-center">
            <h2 class="u-text-xl u-font-medium">購買資訊</h2>
          </div>
          <ValidationObserver
            tag="div"
            class="c-form"
            v-slot="{ invalid }"
          >
            <form
              @submit.prevent="sendOrder"
            >
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <label for="username">收件人姓名</label>
                <input
                  type="text"
                  id="username"
                  class="c-form__control"
                  :class="classes"
                  name="收件人姓名"
                  v-model="form.name"
                >
                <span class="c-form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required|email"
                v-slot="{ errors, classes }"
              >
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  class="c-form__control"
                  :class="classes"
                  name="Email"
                  v-model="form.email"
                >
                <span class="c-form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <label for="tel">電話</label>
                <input
                  type="text"
                  id="tel"
                  class="c-form__control"
                  :class="classes"
                  name="電話"
                  v-model="form.tel"
                >
                <span class="c-form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <label for="address">地址</label>
                <input
                  type="text"
                  id="address"
                  class="c-form__control"
                  :class="classes"
                  name="地址"
                  v-model="form.address"
                >
                <span class="c-form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                tag="div"
                class="c-form__group"
                rules="required"
              >
                <label>購買方式</label>
                <select
                  class="c-form__control"
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
                class="c-form__group"
              >
                <label for="message">留言</label>
                <textarea
                  id="message"
                  class="c-form__control"
                  v-model="form.message"
                ></textarea>
              </ValidationProvider>
              <div class="u-mt-10 u-text-right">
                <button
                  type="submit"
                  class="c-btn c-btn--primary"
                  :disabled="invalid"
                >
                  送出訂單
                </button>
              </div>
            </form>
          </ValidationObserver>
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
    sendOrder() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;

      const order = JSON.parse(JSON.stringify(this.form));

      if (this.coupon.enabled) {
        order.coupon = this.couponCode;
      }

      this.$http.post(api, order).then((res) => {
        if (res.data.data.id) {
          this.$router.push(`/checkout/${res.data.data.id}`);
        }

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
