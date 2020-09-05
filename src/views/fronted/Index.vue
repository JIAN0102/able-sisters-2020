<template>
  <main>
    <div class="c-hero">
      <div class="c-hero__media">
        <!-- <img src="@/assets/images/home-banner.png"> -->
      </div>
      <div class="c-hero__slogan">
        <img src="@/assets/images/slogan.svg">
      </div>
    </div>
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
        島上擺攤，擺攤幾次過後就也來到島上開店了。</p>
      </div>
    </div>
    <div class="p-gallery">
      <div class="col-row">
        <div class="col-1/2@md">
          <img src="@/assets/images/store-outside.jpg">
        </div>
        <div class="col-1/2@md">
          <img src="@/assets/images/store-inside.jpg">
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
                <div class="p-comment__photo"></div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-mb-3">
                    <span class="u-color-primary">仰韶</span> (手工藝大師)
                  </h3>
                  <p class="u-color-gray-400">姊姊麻兒個性似乎很害羞，每次找她搭話都不理我...，我看起來很可怕嗎？</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo"></div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-mb-3">
                    <span class="u-color-primary">牛奶糖</span> (職業模特兒)
                  </h3>
                  <p class="u-color-gray-400">姊姊麻兒個性似乎很害羞，每次找她搭話都不理我...，我看起來很可怕嗎？</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo"></div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-mb-3">
                    <span class="u-color-primary">牛奶糖</span> (職業模特兒)
                  </h3>
                  <p class="u-color-gray-400">姊姊麻兒個性似乎很害羞，每次找她搭話都不理我...，我看起來很可怕嗎？</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="p-comment__card">
                <div class="p-comment__photo"></div>
                <div class="p-comment__content">
                  <h3 class="u-text-lg u-mb-3">
                    <span class="u-color-primary">牛奶糖</span> (職業模特兒)
                  </h3>
                  <p class="u-color-gray-400">姊姊麻兒個性似乎很害羞，每次找她搭話都不理我...，我看起來很可怕嗎？</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button swiper-button-next" slot="button-next"></div>
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
        navigation: {
          nextEl: '.p-comment .swiper-button-next',
          prevEl: '.p-comment .swiper-button-prev',
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
  computed: {
  },
  mounted() {
  },
};
</script>

<style>

</style>
