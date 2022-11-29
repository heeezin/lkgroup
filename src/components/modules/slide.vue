<template>
    <swiper
        :spaceBetween="30"
        :slides-per-view="3"
        :autoplay="{
        disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
    </swiper>
</template>
<script>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
        modules: [Autoplay],
        };
  },
}
</script>
<style lang="scss" scoped>
.mySwiper {
    width: 100%;
    height: 30vh;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    &:nth-child(1) {
        background: url('http://me-flex.co.kr/img/news/0001.png') center center/cover no-repeat;
    }
    &:nth-child(2) {
        background: url('http://me-flex.co.kr/img/news/0002.png') center center/cover no-repeat;
    }
    &:nth-child(3) {
        background: url('http://me-flex.co.kr/img/news/0004.png') center center/cover no-repeat;
    }
    &:nth-child(4) {
        background: url('http://me-flex.co.kr/img/news/0005.png') center center/cover no-repeat;
    }
    &:nth-child(5) {
        background: url('http://me-flex.co.kr/img/news/0006.png') center center/cover no-repeat;
    }

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
@media (max-width: 600px) {
    .swiper-slide {
        width: 350px !important;
    }
}
</style>