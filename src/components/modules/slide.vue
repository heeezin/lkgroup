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
@media (max-width: 400px) {
    .swiper-slide {
        width: 300px !important;
    }
}
</style>