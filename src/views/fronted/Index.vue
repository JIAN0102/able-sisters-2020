<template>
  <main>
    <div class="c-hero">
      <div class="c-hero__media"></div>
      <!-- <div class="c-hero__slogan">
        <img src="@/assets/images/slogan.svg">
      </div> -->
    </div>
    <ul class="p-home-category">
      <li class="p-home-category__item">
        <button
          type="button"
          @click="categoryProduct('all')"
        >
          <img src="@/assets/images/icon-hanger.svg">
          <h3 class="u-text-base">全部商品</h3>
        </button>
      </li>
      <li class="p-home-category__item">
        <button
          type="button"
          @click="categoryProduct('連衣裙')"
        >
          <img src="@/assets/images/icon-dress.svg">
          <h3 class="u-text-base">連衣裙</h3>
        </button>
      </li>
      <li class="p-home-category__item">
        <button
          type="button"
          @click="categoryProduct('帽子')"
        >
          <img src="@/assets/images/icon-hat.svg">
          <h3 class="u-text-base">帽子</h3>
        </button>
      </li>
      <li class="p-home-category__item">
        <button
          type="button"
          @click="categoryProduct('飾品')"
        >
          <img src="@/assets/images/icon-accessories.svg">
          <h3 class="u-text-base">飾品</h3>
        </button>
      </li>
    </ul>
    <div class="p-intro">
      <div class="l-wrapper-tiny">
        <div class="u-text-center">
          <h2 class="u-text-xl u-font-medium u-mb-8">
            關於 <span class="u-color-primary">Able Sisters</span>
          </h2>
        </div>
        <p>刺蝟姐妹的裁縫店名叫「Able Sisters」，一開始是位在初代動物之森中的村子
          裡，由刺蝟三姐妹的大姐麻兒與小妹絹兒負責營運，販售服裝以及設計圖樣。起初
          這間裁縫店是她們的父母開的，一家五口原本過著快樂的生活。但是一次意外讓她
          們的父母過世了，因此年紀最長的麻兒只好扛起照顧妹妹們的責任，繼續維持著裁
          縫店的生計。<br><br>
          而二姐綿兒卻在父母過世後決定獨立，想要成為一個時尚設計師，在與麻兒爭吵之
          後離開了家，小妹絹兒則因為年紀太小了，幾乎不記得發生了什麼事情。因此裁縫
          店便由麻兒與絹兒繼承，在動物之森系列中每一作都固定登場，而外觀也都是一致
          的獨棟紅屋與綠色屋頂，只有在 3DS 版《走出戶外動物之森》中，裁縫店的二樓
          是美髮店。在 Switch 版動物森友會中，一開始是絹兒受到豆貍與粒貍的邀請來
          島上擺攤，擺攤幾次過後就也來到島上開店了。
        </p>
      </div>
    </div>
    <div class="p-gallery">
      <div class="col-row">
        <div class="col-1/2@md">
          <img class="u-full" src="@/assets/images/store-outside.jpg">
        </div>
        <div class="col-1/2@md">
          <img class="u-full" src="@/assets/images/store-inside.jpg">
        </div>
      </div>
    </div>
    <div class="p-comment">
      <div class="l-wrapper">
        <div class="u-mb-10 u-text-center">
          <h2 class="u-text-xl u-font-medium">
            動物們對 <span class="u-color-primary">Able Sisters</span> 的評價是？
          </h2>
        </div>
        <div class="p-comment__slider">
          <swiper ref="comment" :options="swiperOptions">
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo">
                  <img class="u-full" src="@/assets/images/customer-1.svg">
                </div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-font-medium u-mb-3">
                    <span class="u-color-primary">仰韶</span> (手工藝達人)
                  </h3>
                  <p class="u-color-gray-400">姊姊麻兒個性似乎很害羞，每次找她搭話都不理我...，我看起來很可怕嗎？</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo">
                  <img class="u-full" src="@/assets/images/customer-2.svg">
                </div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-font-medium u-mb-3">
                    <span class="u-color-primary">牛奶糖</span> (平面模特兒)
                  </h3>
                  <p class="u-color-gray-400">Able Sisters 手工縫製的衣服穿起來都很舒適，我每天早上九點都會固定去逛逛呢！</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo">
                  <img class="u-full" src="@/assets/images/customer-3.svg">
                </div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-font-medium u-mb-3">
                    <span class="u-color-primary">恰咪</span> (知名彩妝師)
                  </h3>
                  <p class="u-color-gray-400">妹妹娟兒招呼客人很熱情呢，應該已經被我艷麗的外表給迷住了吧，哇哈哈哈！</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo">
                  <img class="u-full" src="@/assets/images/customer-4.svg">
                </div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-font-medium u-mb-3">
                    <span class="u-color-primary">李彻</span> (脫口秀演員)
                  </h3>
                  <p class="u-color-gray-400">Able Sisters 的衣服穿起來就是萬眾矚目的焦點，搭配上我憂鬱的眼神簡直是天衣無縫！</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-btn swiper-btn-prev" slot="button-prev">
            <img src="@/assets/images/icon-arrow-prev.svg">
          </div>
          <div class="swiper-btn swiper-btn-next" slot="button-next">
            <img src="@/assets/images/icon-arrow-next.svg">
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
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1,
        // watchOverflow: true,
        // centerInsufficientSlides: true,
        navigation: {
          nextEl: '.p-comment .swiper-btn-next',
          prevEl: '.p-comment .swiper-btn-prev',
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
  methods: {
    categoryProduct(category) {
      this.$router.push({
        path: '/products',
        query: {
          category,
        },
      });
    },
  },
};
</script>

<style>

</style>
