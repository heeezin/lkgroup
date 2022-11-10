<template>
    <div class="section">
        <div class="news">
            <div class="news_inner">
                <div class="news_tit">
                    <h3>NEWS</h3>
                </div>
                <div class="imgBox">
                    <swiper
                        :spaceBetween="30"
                        :slidesPerView="3"
                        :centeredSlides="true"
                        :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        }"
                        :pagination="{
                        clickable: true,
                        }"
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
                        ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
                        ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
                        ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
                        ><swiper-slide>Slide 9</swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../Footer.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Autoplay } from "swiper";



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
    .news {
        width: 100%;
        height: 50vh;
        background: #7DB055;
        .news_tit {
            padding: 2vw 3vw;
            h3 {
            color: var(--text);
            font-size: 3rem;
            }
        }
        
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
  width: 500px;
  height: 50%;
  object-fit: cover;
}

    
</style>
