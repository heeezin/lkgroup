<template>
    <div class="section">
        <div class="secInner">
            <div class="introImg">
                <mf-tit/>
                <div class="backImg">
                    <img src="@/assets/images/meflex4.png" alt="">
                    <img src="@/assets/images/meflex5.png" alt="">
                </div>
            </div>
            <div class="introTxt">
                <h4>전용 룩북 컨텐츠 및 쇼핑 태그 기능</h4>
                <p>매거진 형태의 룩북 컨텐츠와 쇼핑태그 기능으로 구매 편의성 증가
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
                    font-size: 1rem;
                }
            }
            .backImg {
                display: flex;
                margin: auto;
                img {
                    width: 520px;
                    height: 450px;
                    position: absolute;
                    left: 7%;
                    z-index: 100;
                    top: 29%;
                    &:last-child {
                        left: 20%;
                        top: 30%;
                        z-index: 1;
                        transform: rotate(15deg);
                    }
                }

            }
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
        .secInner{
            .introImg {
            .backImg {
                img {
                    left: 0;
                    top: 29%;
                    &:last-child {
                        left: 13%;
                        top: 30%;
                    }
                }

            }
            
        }
        }
    }
}
@media (max-width: $mobile) {
    .Title {
                p {
                    font-size: 1rem;
                }
            }
    .section {
        .secInner {
            .introImg {
                .backImg {
                    img {
                        width: 80%;
                        height: 31%;
                        left: -8%;
                        top: 31%;
                        &:last-child {
                            left: 11%;
                            top: 32%;
                            z-index: 100;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: $Smobile) {
    .section {
        .secInner{
            padding: 120px 30px;
            .Title {
                p {
                    font-size: 1rem;
                }
            }
            .introTxt {
                width: 85%;
            }
            .introImg {
            .backImg {
                width: 80%;
                height: 30vh;
                img {
                    left: 0;
                    top: 31%;
                    width: 80%;
                    height: 33%;
                }

            }
        }
        }
    }
}
</style>