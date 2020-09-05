<template>
  <main>
    <Loading :active.sync="isLoading" />
    <div class="p-product">
      <div class="l-wrapper">
        <div class="p-product__main">
          <div class="p-product__filter">
            <ul>
              <li
                :class="{'is-active':category==='all'}"
                @click="category='all'"
              >
                <div class="icon"></div>
                <h3 class="u-text-base">全部商品</h3>
              </li>
              <li
                v-for="(item, index) in categoryList"
                :key="index"
                :class="{'is-active':item===category}"
                @click="category=item"
              >
                <div class="icon" :class="`icon-${item}`"></div>
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="p-product__list">
            <h1 class="u-text-xl u-font-medium u-mb-6">
              {{ category === 'all' ? '全部商品' : category }}
            </h1>
            <div class="col-row u-horizontal-20 u-vertical-20">
              <div class="col-1/2@md col-1/3@xl" v-for="product in filterProduct" :key="product.id">
                <div class="p-product__card">
                  <button
                    class="p-product__cart"
                    @click="addCart(product)"
                  >
                    加入購物車
                  </button>
                  <span class="p-product__category">{{ product.category }}</span>
                  <router-link class="p-product__link" :to="`/product/${product.id}`">
                    <img class="u-mb-3" :src="product.imageUrl[0]" :alt="product.title">
                    <h2 class="u-text-lg u-font-medium u-mb-3">{{ product.title }}</h2>
                    <p class="u-color-gray-400 u-mb-5">{{ product.content }}</p>
                    <ul class="p-product__price">
                      <li>{{ product.origin_price | currency}}</li>
                      <li class="u-color-primary">
                        優惠價
                        <span class="u-text-lg u-ml-1">
                          {{ product.price  | currency}}
                        </span>
                      </li>
                    </ul>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
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
