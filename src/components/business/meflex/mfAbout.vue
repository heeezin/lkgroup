<template>
    <div class="section">
        <div class="secInner">
            <div class="introImg">
                <mf-tit/>
                <div class="backImg">
                    <img src="@/assets/images/meflex_2.png" alt="">
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
            
        }
        .introTxt {
            h4 {font-size: 1.5rem;}
        }
    }
}
}
@media (max-width: $mobile) {
    .section {
        .secInner {
            .introImg {
                .backImg {
                    
                }
                .Title {
                p {
                    font-size: 1rem;
                }
            }
            }
            .introTxt {
                width: 80%;
                h4 {font-size: 1.2rem;}

            }
        }
    }
}
@media screen and (min-width: $Smobile) and (max-width: $mobile) {
    .section {
        .secInner {
            .introImg {
                
            }
        }
    }   
}
@media (max-width: $Smobile) {
    
    .section {
        .secInner{
            padding: 120px 30px;
            .Title {
                p{
                    font-size: 1rem;
                }
            }
            .introImg {
            
        }
        }
    }
}
</style>