<template>
  <main>
    <Loading :active.sync="isLoading" />
    <div class="p-product">
      <div class="l-wrapper">
        <div class="p-product__main">
          <div class="p-product__filter">
            <ul>
              <li
                :class="{'active':category==='all'}"
                @click="category='all'"
              >
                全部商品
              </li>
              <li
                v-for="(item, index) in categoryList"
                :key="index"
                :class="{'active':item===category}"
                @click="category=item"
              >
                <div class="icon" :class="`icon-${item}`"></div>
                {{ item }}
              </li>
            </ul>
          </div>
          <ul class="p-product__list">
            <li class="p-product__item" v-for="product in filterProduct" :key="product.id">
              <div class="p-product__card">
                <button
                  class="btn btn-primary p-product__cart"
                  @click="addCart(product)"
                >
                  加入購物車
                </button>
                <span class="p-product__category">{{ product.category }}</span>
                <router-link class="p-product__link" :to="`/product/${product.id}`">
                  <img :src="product.imageUrl[0]" :alt="product.title">
                  <h2>{{ product.title }}</h2>
                  <p>{{ product.content }}</p>
                  <ul>
                    <li>{{ product.origin_price }}</li>
                    <li>{{ product.price }}</li>
                  </ul>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
        <Pagination :page="pagination" @emitPages="getProducts" />
      </div>
    </div>
  </main>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      category: 'all',
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    categoryList() {
      // 把產品裡面唯一的 category 抓出來跑迴圈
      const allCategory = [];
      const uniqueCategory = [];
      this.products.forEach((product) => allCategory.push(product.category));
      allCategory.forEach((val) => {
        if (uniqueCategory.indexOf(val) === -1) uniqueCategory.push(val);
      });
      return uniqueCategory;
    },
    filterProduct() {
      // 過濾產品
      if (this.category === 'all') {
        return this.products;
      } return this.products.filter((product) => product.category === this.category);
    },
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;

        this.isLoading = false;
      });
    },
    addCart(product) {
      this.isLoading = true;

      const { id } = product;

      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.post(api, {
        product: id,
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
  },
};
</script>

<style>

</style>
