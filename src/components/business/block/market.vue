<template>
    <div class="section market">
        <div class="colorBg">
            <div class="secInner">
                <div class="nftLogo">
                    <span>KOREA SOTHEBY’S NFT MARKETPLACE</span>
                    <div class="icon">
                        <img src="@/assets/images/marketIcon.png" alt="">
                    </div>
                    <p>소더비 NFT 마켓플레이스 X 아티스트 & 브랜드가<br>만나콜라보 NFT 판매</p>
                </div>
                <div class="nftRight">
                    <div class="nftImg">
                        <img src="@/assets/images/market1.png" alt="">
                        <img src="@/assets/images/market2.png" alt="">
                    </div>
                    <div class="nftTxt">
                        <span>예술, 그리고 블록체인</span>
                        <p>MEFLEX는 인플루언서와 함께하는 쇼핑몰을 운영하며 축적된 데이터를 분석한 결과 인플루언서 IP 에 주목하였고 이를 기반으로 블록체인 기술을 활용한 실물 NFT 마켓 플레이스를 구축하여 디지털 이코노미 플랫폼을 완성하고자 합니다.</p>
                        <div class="main_btn"
                        data-sal="slide-up"
                        data-sal-delay="700"    
                    >
                        <a href="http://me-flex.co.kr/">MARKET PLACE 바로가기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sal from "sal.js";

export default {
    mounted() {
        sal()
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
@import "@/assets/css/block.scss";

p {
    font-size: 1rem;
}
.market {
    background: url('@/assets/images/marketBg.png') center center/cover no-repeat;
    .secInner {
        padding:120px 0;
        .nftLogo {
            img {width: 100%;} 
        .nftImg {
        
        img { 
            width: 44%;
            height: 15vw;
            }
        }
    }
        .nftRight {
            width: 40%;
            text-align: center;
            .nftImg {
                display: flex;
                justify-content: center;
                img {
                    width: 30%;
                }
            }
            .nftTxt {
                color: var(--text);
                p  {
                    font-weight: 500;
                }
                span {
                    font-size: 1.4rem;
                    font-weight: 700;
                }
                .main_btn {
                    width: 340px;
                    font-size: 1.3rem;
                }
            }
        }
    }
}
@media (max-width: $tablet) {
    p {
        font-weight: 400;
        text-align: center;
    }
    .market {
        p {
            color: var(--bg);
        }
        background: url('@/assets/images/marketBgM.png') center center /cover no-repeat;
        .secInner {
            width: 100%;
            padding: 120px 0 0;
            .nftLogo {
                .icon {
                    img { padding-bottom: 2%;}
                }
            }
            .nftRight {
                width: 100%;
                .nftTxt {
                    position: absolute;
                    bottom: 0;
                    background: #CECECE;
                    color: var(--bg);
                    p {padding: 3%;}
                    .main_btn {
                    width: 79%;
                    font-size: 1.3rem;
                }
                }
            }
        }
    }
}
@media (max-width: $mobile) {
    p {
        font-size: 0.7rem;
    }
}
@media screen and (min-width: $Smobile) and (max-width: $mobile) {  
    .main_btn {
        a {
            font-size: 1rem;
        }
    }
    .market {
        .secInner {
            padding: 100px 0 0;
            .nftRight {
                .nftImg {
                    img {
                        width: 28%;
                    }
                }
            }
        }
    }
    
}
@media (max-width: $Smobile) {
    p {
            font-size: 0.8rem;
            color: var(--bg);
        }
    .market {
        
        .secInner {
            .introLeft {
                height: 40vh;
            }
            .nftImg {
        
                img { 
                    width: 50%;
                    }
            }
            .nftRight {
                .nftImg {
                    padding: 5% 0;
                    img {
                        width: 30%;
                    }
                }
            }
        }
    }
    .main_btn {
        a {
            font-size: 1rem;
        }
    }
}
</style>