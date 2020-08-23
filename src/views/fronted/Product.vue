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
            <span>{{ product.category }}</span>
            <h1>{{ product.title }}</h1>
            <p>{{ product.content }}</p>
            <button
              class="btn btn-primary"
              @click="addCart()"
            >
              加入購物車
            </button>
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
        quantity: 1,
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
