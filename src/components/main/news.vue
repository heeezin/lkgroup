<template>
    <div class="section">
        <div class="news">
            <div class="news_inner">
                <div class="sec_tit news_tit">
                    <h3>NEWS</h3>
                </div>
                <swiper
                    :spaceBetween="30"
                    :slides-per-view="3"
                    :autoplay="{
                    disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>1</swiper-slide>
                    <swiper-slide>2</swiper-slide>
                    <swiper-slide> 3</swiper-slide>
                    <swiper-slide> 4</swiper-slide>
                    <swiper-slide> 5</swiper-slide>
                    <swiper-slide> 6</swiper-slide>
                    <swiper-slide> 7</swiper-slide>
                    <swiper-slide> 8</swiper-slide>
                    <swiper-slide> 9</swiper-slide>
                </swiper>
                <div class="news_btn main_btn">
                    <a href="/">자세히 보기</a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../Footer.vue';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";


export default {
    components: {
        Swiper,
        SwiperSlide,
        Footer
    },
    setup() {
      return {
        modules: [Autoplay],
      };
  },
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";

    .news {
        width: 100%;
        height: 60vh;
        background: #7DB055;
    }
    .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width: 300px;
  height: 300px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  height: 50%;
  object-fit: cover;
}

    
</style>
