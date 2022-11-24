<template>
    <div class="section">
        <div class="imageColor"></div>
        <div class="enter main">
            <div class="enter_inner main_inner">
                <div class="main_tit"
                    data-sal="slide-up"
                    data-sal-delay="500"
                >
                    <h3>종합 엔터테인먼트 ‘MEFLEX ENT’</h3>
                </div> 
                <div class="main_txt"
                    data-sal="slide-up"
                    data-sal-delay="600"
                >
                    <p>
                        배우 매니지먼트, 아이돌 트레이닝,
                        크리에이터 협업 및 에이전시 등
                        종합 엔터테인먼트 운영
                    </p>
                </div>
                <more-btn/>
            </div>
        </div>
    </div>
</template>
<script>
import sal from "sal.js";
import MoreBtn from '../modules/moreBtn.vue'
export default {
    components: {
        MoreBtn
    },
    mounted() {
        sal();
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";

.section {
    background: url("../../assets/images/enter.png") no-repeat center / cover;
    position: relative;
    z-index: 1;
    .imageColor {
        background-color: rgba(0,0,0,0.6);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}
.main {
    display: flex;
    justify-content: center;
    height: 50vw;
    .main_inner {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        width: 50%;
        color: #fff;
        padding-top: 20vw;
        .main_tit{
        }
        .main_txt{
            padding: 2vw 0;
        }
        .main_btn {
            width: 200px;
            background: var(--point);
            border-radius: 10px;
            font-size: 1.5rem;
            text-align: center;
            a {
                color: #fff;
                font-weight: 700;
                display: block;
                padding: 1vw;
            }
        }
    }
}
h3 {padding-bottom: 7%;}
@media (max-width: $mobile) {
    .main {
        .main_inner {
            width: 100%;
            padding: 100% 4% 0;
        }
    }
}
</style>
