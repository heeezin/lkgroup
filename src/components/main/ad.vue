<template>

    <div class="section">
        <div class="imageColor"></div>
        <div class="shop main">
            <div class="shop_inner main_inner">
                <div class="main_tit"
                    data-sal="slide-up"
                    data-sal-delay="500"
                >
                    <h3>광고 / 마케팅</h3>
                </div>
                <div class="main_txt"
                    data-sal="slide-up"
                    data-sal-delay="600"
                >
                    <p>
                        영상·미디어 컨텐츠 기획 및 제작
                        광고영상, SNS 컨텐츠
                        제작 및 운영
                    </p>
                </div>
                <div class="btnWrap">
                    <div class="main_btn"
                        data-sal="slide-up"
                        data-sal-delay="700"    
                    >
                        <router-link to="/ad/marketing">자세히 보기</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sal from "sal.js";
import moreBtn from '../modules/moreBtn.vue';

export default {
    components: {
        moreBtn
    },
    mounted() {
        sal()
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/reset.scss";
@import "@/assets/css/main.scss";

.section {
    background: url("../../assets/images/ad.png") no-repeat center / cover;
    position: relative;
    z-index: 1;
    .imageColor {
        background-color: rgba(0,0,0,0.7);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}
.main {
    display: flex;
    justify-content: flex-end;
    height: 50vw;
    .main_inner {
        width: 51%;
        color: #fff;
        padding: 20vw 5vw;
        .main_tit{
        }
    }
}
@media (max-width: $mobile) {
    p {text-align: center;}
    .main {
        .main_inner {
            text-align: center;
            width: 100%;
            padding-top: 138%;
        }
    }
}
@media screen and (min-width: $Smobile) and (max-width: $mobile) {
    .main {
        .main_inner {
            padding-top: 65vw;
        }
    }
}
@media (max-width: $Smobile) {
    .main {
        .main_inner {
            padding-top: 140%;
        }
    }
}
</style>