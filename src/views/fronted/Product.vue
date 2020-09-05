<template>
  <main>
    <Loading :active.sync="isLoading" />
    <div class="p-product-detail">
      <div class="p-product-detail__main">
        <div class="p-product-detail__photo">
          <img :src="product.imageUrl[0]" :alt="product.title">
        </div>
        <div class="p-product-detail__content">
          <div class="p-product-detail__inner">
            <h2 class="u-text-base u-color-secondary u-mb-2">{{ product.category }}</h2>
            <h1 class="u-text-xl u-font-medium u-mb-4">{{ product.title }}</h1>
            <p>{{ product.content }}</p>
            <div class="p-product-detail__quantity">
              <span class="u-mr-5">數量</span>
              <div class="p-product-detail__action">
                <button
                  class="p-product-detail__btn p-product-detail__btn-minus"
                  @click="updateQuantity(-1)" :disabled="quantity === 1"
                >
                </button>
                <div class="p-product-detail__input">{{ quantity }}</div>
                <button
                  class="p-product-detail__btn p-product-detail__btn-plus"
                  @click="updateQuantity(1)"
                >
                </button>
              </div>
            </div>
            <button
              class="c-btn c-btn--primary"
              @click="addCart()"
            >
              加入購物車
            </button>
            <!-- <button
              class="c-btn c-btn--primary"
              @click="removeCart()"
            >
              移除購物車
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      product: {
        imageUrl: [],
        num: 0,
      },
      quantity: 1,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.getProductDetail(id);
  },
  methods: {
    getProductDetail(id) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;

      this.$http.get(api).then((res) => {
        this.product = res.data.data;

        this.isLoading = false;
      });
    },
    addCart() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.post(api, {
        product: this.product.id,
        quantity: this.quantity,
      })
        .then(() => {
          this.isLoading = false;

          this.$bus.$emit('get-cart');
          this.$bus.$emit('message', '加入購物車成功', 'success');
        })
        .catch((err) => {
          this.isLoading = false;

          const errorMessage = err.response.data.errors[0];
          this.$bus.$emit('message', errorMessage, 'danger');
        });
    },
    updateQuantity(quantity) {
      this.quantity += quantity;
    },
    removeCart() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${this.product.id}`;

      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false;

          const successMessage = res.data.message;
          this.$bus.$emit('get-cart');
          this.$bus.$emit('message', successMessage, 'success');
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>

</style>
