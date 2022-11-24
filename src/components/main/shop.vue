<template>
    <div class="section">
        <div class="secInner">
            <div class="shopImgBack">
                <div class="shopImgWrap">
                    <div class="shopImg">
                        <img src="../../assets/images/shop1.png" alt="">
                        <img src="../../assets/images/shop2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="shop main">
                <div class="shop_inner main_inner">
                    <div class="main_tit"
                        data-sal="slide-up"
                        data-sal-delay="300"
                    >
                        <h3>온라인 명품 쇼핑몰 ‘MEFLEX’</h3>
                    </div>
                    <div class="main_txt"
                        data-sal="slide-up"
                        data-sal-delay="500"
                    >
                        <p>
                            자사의 인플루언서 풀을 활용한
                            마케팅을 통해 다양한 명품 판매 및
                            커뮤니티 채널 구축
                        </p>
                    </div>
                    <more-btn/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sal from "sal.js";
import moreBtn from '../modules/moreBtn.vue';

export default {
  components: { moreBtn },
    mounted() {
        sal();
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/reset.scss';
@import '@/assets/css/main.scss';
.section {
    height: 100vh;
    position: relative;
    z-index: 1;
    background: var(--bg);
    // .imageColor {
    //     background-color: rgba(0,0,0,0.9);
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     z-index: -1;
    // }
    .shopImgBack {
        background: -webkit-linear-gradient(140deg, rgb(81, 25, 210), rgb(135, 20, 135));
        z-index: -2;
        position: absolute;
        width: 550px;
        height: 550px;
        border-radius: 50%;
        left: 13%;
        top: 16%;
        .shopImg {
            display: flex;
            left: 40px;
            img {
                width: 255px;
                height: 460px;
                &:last-child {
                    transform: rotate(10deg);
                }
            }
        }
    }
}
.main {
    display: flex;
    justify-content: flex-end;
    height: 50vw;
    .main_inner {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        width: 50%;
        color: #fff;
        padding: 20vw 5vw;
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
@media (max-width: $mobile){
    .section {
    .imageColor {
    }
    .shopImgBack {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        left: 7%;
        .shopImg {
            display: flex;
            width: 100%;
            img {
                width: 40vw;
                height: 45vh;
            }
        }
    }
    }
}
@media (max-width: $Smobile){
    .main {
        .main_inner {
            .main_txt {
                p {font-size: 1.3rem;}
            }
        }
    }
}
</style>