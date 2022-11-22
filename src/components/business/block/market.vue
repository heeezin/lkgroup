<template>
    <div class="section market">
        <div class="colorBg"></div>
        <div class="secInner">
            <div class="nftLogo">
                <p>KOREA SOTHEBY’S NFT MARKETPLACE</p>
                <img src="@/assets/images/marketIcon.png" alt="">
                <p>소더비 NFT 마켓플레이스 X 아티스트 & 브랜드가 만나 콜라보 NFT 판매</p>
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
                    <a href="/">MARKET PLACE 바로가기</a>
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

.market {
    background: url('@/assets/images/marketBg.png') center center no-repeat;
    .secInner {
        position: absolute;
        z-index: 100;
        padding-bottom: 0;
        .nftLogo {
            img {
                width: 950px;
                height: 340px;
            }
        }
        .nftRight {
            text-align: center;
            .nftImg {
                display: flex;
                justify-content: center;
                img {
                    width: 250px;
                }
            }
            .nftTxt {
                color: var(--text);
                span {
                    font-size: 1.8rem;
                    font-weight: 700;
                }
                .main_btn {
                    width: 330px;
                }
            }
        }
    }
}
</style>