<template>
    <div class="section">
        <div class="secInner">
            <div class="introImg">
                <mf-tit/>
                <div class="backImg">
                    <img src="@/assets/images/meflex3.png" alt="">
                    <img src="@/assets/images/meflex2.png" alt="">
                </div>
            </div>
            <div class="introTxt">
                <h4>인플루언서 복제몰 구축 (프렌차이즈몰)</h4>
                <p>인플루언서가 셀러가되어 다양한 상품을 판매하며 팬덤과 소통
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import mfTit from '@/components/modules/mfTit.vue'

export default {
  components: { mfTit },

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
            .backImg {
                display: flex;
                margin: auto;
                img {
                    width: 450px;
                    height: 400px;
                    position: absolute;
                    left: 7%;
                    z-index: 100;
                    top: 40%;
                    &:last-child {
                        left: 22%;
                        top: 30%;
                        z-index: 1;
                    }
                }

            }
        }
        .introTxt {
            z-index: 100;
        }
    }
}

.introTxt {
    text-align: center;
    h4 {
        font-size: 2rem;
    }
}
@media (max-width: $tablet) {
.section {
    .secInner {
        .introImg {
            .backImg {
                img {
                    width: 400px;
                    height: 350px;
                }
            }   
        }
        .introTxt {
            h4 {font-size: 1.5rem;}
        }
    }
}
    
}
</style>