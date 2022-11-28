<template>
    <swiper
        :slides-per-view="1"
        :autoplay="{
        disableOnInteraction: false,
        }"
        :modules="modules"
        class="coverSwiper"
        >
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
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
<style>
.coverSwiper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 1;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);

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
.coverSwiper .swiper-slide:nth-child(1) {
    background: url('@/assets/images/creat.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(2) {
    background: url('@/assets/images/creat2.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(3) {
    background: url('@/assets/images/creat3.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(4) {
    background: url('@/assets/images/creat4.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(5) {
    background: url('@/assets/images/creat5.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(6) {
    background: url('@/assets/images/creat6.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(7) {
    background: url('@/assets/images/creat7.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(8) {
    background: url('@/assets/images/creat8.png') center center/cover no-repeat;
}
.coverSwiper .swiper-slide:nth-child(9) {
    background: url('@/assets/images/creat9.png') center center/cover no-repeat;
}


.swiper-slide img {
    display: block;
    height: 50%;
    object-fit: cover;
}
</style>
