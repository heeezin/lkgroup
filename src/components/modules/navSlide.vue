<template>
    <swiper
        :slides-per-view="1"
        :autoplay="{
        disableOnInteraction: false,
        }"
        :navigation="true"
        :mousewheel="true"
        :modules="modules"
        class="navSwiper"
        >
        <swiper-slide>
            <div>
                <span>2019.07</span>
                <p>엘케이파트너스 설립</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2019.10</span>
                <p>쩐주단 지사 설립</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2020.03</span>
                <p>쿠팡 업무협약</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2020.06</span>
                <p>미세잎 마스크 기획/런칭</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2021.03</span>
                <p>상수동 이전</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2021.12</span>
                <p>미플렉스 브랜드 런칭</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2022.05</span>
                <p>미플렉스 코인발행</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
                <span>2022.07</span>
                <p>미플렉스 온라인 쇼핑몰 런칭</p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Autoplay, Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import "swiper/css/navigation";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
        modules: [Autoplay,Navigation, Mousewheel ],
        };
  },
}
</script>
<style lang="scss" scoped>
.navSwiper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
}
.swiper-slide {
    span, p {
        font-weight: 700;
        font-size: 3rem;
        color: var(--text);
    }
    z-index: -1;
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
.swiper-slide:nth-child(1) {
    background: url('../../assets/images/history_01.jpg') center center no-repeat;
}
.swiper-slide:nth-child(2) {
    background: url('../../assets/images/history_02.jpg') center center no-repeat;
}
.swiper-slide:nth-child(3) {
    background: url('../../assets/images/history_03.jpg') center center no-repeat;
}
.swiper-slide:nth-child(4) {
    background: url('../../assets/images/history_04.jpg') center center no-repeat;
}
.swiper-slide:nth-child(5) {
    background: url('../../assets/images/history_05.jpg') center center no-repeat;
}
.swiper-slide:nth-child(6) {
    background: url('../../assets/images/history_06.jpg') center center no-repeat;
}
.swiper-slide:nth-child(7) {
    background: url('../../assets/images/history_07.jpg') center center no-repeat;
}
.swiper-slide:nth-child(8) {
    background: url('../../assets/images/history_08.jpg') center center no-repeat;
}

.swiper-slide img {
    display: block;
    height: 50%;
    object-fit: cover;
}
.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after,
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    color: var(--text);
    left: 40px;
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    padding-right: 80px;
}

// @media (max-width: $mobile) {
//     .swiper-slide:nth-child(1) {
//     background: url('../../assets/images/m_history_01.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(2) {
//     background: url('../../assets/images/m_history_02.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(3) {
//     background: url('../../assets/images/m_history_03.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(4) {
//     background: url('../../assets/images/m_history_04.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(5) {
//     background: url('../../assets/images/m_history_05.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(6) {
//     background: url('../../assets/images/m_history_06.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(7) {
//     background: url('../../assets/images/m_history_07.jpg') center center no-repeat;
// }
// .swiper-slide:nth-child(8) {
//     background: url('../../assets/images/m_history_08.jpg') center center no-repeat;
// }
// }
</style>
