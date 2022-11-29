<template>
    <div class="section">
        <div class="secInner">
            <div class="introImg">
                <mf-tit/>
                <div class="backImg">
                    <img src="@/assets/images/meflex6.png" alt="">
                </div>
            </div>
            <div class="introTxt">
                <h4>자체발행 코인 활용</h4>
                <p>쇼핑몰 내에서 코인을 활용한 다양한 기능 제공</p>
                <div class="main_btn"
                data-sal="slide-up"
                data-sal-delay="700"    
            >
                <a href="https://meflex.co.kr" target="_blank">쇼핑몰 바로가기</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mfTit from '@/components/modules/mfTit.vue'
import sal from "sal.js";

export default {
  components: { mfTit },
  mounted() {
    sal()
  }

}
</script>
<style lang="scss" scoped>
@import "@/assets/css/meflex.scss";
.section {
    .secInner {
        .introImg {
            .Title {
                p {
                    font-size: 1.3rem;
                }
            }
        }
    }
    .main_btn {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        z-index: 1000;
        margin: 5% auto;
        width: 240px;
        background: var(--point);
        border-radius: 15px;
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

.introTxt {
    text-align: center;
    h4 {
        font-size: 2rem;
    }
}
@media screen and (min-width: $Smobile) and (max-width: $mobile) {
    .section {
        .secInner{
            .introImg {
            .backImg {
                height: 80%;
                img {
                    left: 0;
                    top: 28%;
                    width: 100%;
                    height: 100%;
                }

            }
        }
        }
        .main_btn {
            a {
                font-size: 1.1rem;
            }
        }
    }
}
@media (max-width: $Smobile) {
    .section {
        .secInner{
            .introImg {
            .backImg {
                width: 70%;
                height: 70%;
                img {
                    width: 100%;
                    height: 100%;
                }

            }
        }
        }
        .main_btn {
            a {
                font-size: 1.1rem;
            }
        }
    }
}
</style>