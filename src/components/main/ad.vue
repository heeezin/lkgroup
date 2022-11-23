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
                <more-btn/>
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
@import url('../../assets/css/main.scss');
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
</style>