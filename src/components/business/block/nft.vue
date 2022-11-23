<template>
    <div class="section nftSec">
        <div class="colorBg">
            <div class="secInner">
                <div class="nftLogo">
                    <span>KOREA SOTHEBY’S
                    NFT MARKETPLACE
                    </span>
                    <div class="nftImg">
                        <img src="@/assets/images/nftIcon1.png" alt="">
                        <img src="@/assets/images/nftIcon2.png" alt="">
                    </div>
                </div>
                <div class="nftTxt">
                    <div class="iconWrap">
                        <div class="iconBox">
                            <img src="@/assets/images/nftIcon3.png" alt="">
                            <p>HIGH-END 예술품<br>NFT 판매</p>
                        </div>
                        <div class="iconBox">
                            <img src="@/assets/images/nftIcon4.png" alt="">
                            <p>아티스트 작가 브랜드<br>콜라보 리미티드 상품 판매</p>
                        </div>
                        <div class="iconBox">
                            <img src="@/assets/images/nftIcon5.png" alt="">
                            <p>아티스트 콜라보<br>공연 및 전시회 티켓 판매</p>
                        </div>
                    </div>
                    <div class="txtWrap">
                        <div class="txtBox">
                            <span>MEFLEX X KOREA SOTHEBY’S</span>
                            <p>Korea Sotheby’s 와 협약 및 공동운영 NFT Marketplace 런칭 예정</p>
                            <p>·유명 작가의 실물 그림 판매</p>
                            <p>·인플루언서 + 작가 협업 NFT 판매</p>
                            <p>·브랜드 + 작가 협업 NFT 판매</p>
                            <p>·인플루언서 마케팅</p>
                            <p>·유튜브, 틱톡 컨텐츠 생산</p>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
@import "@/assets/css/block.scss";
p {
    font-size: 1.2rem;
}
.nftSec {
    background: url('@/assets/images/block1.png') center center/cover no-repeat;
    .nftTxt {
        width: 40%;
    }
}
@media (max-width: $tablet) {
    .nftSec {
        background: url('@/assets/images/blockM.png') center center/cover no-repeat;
    }
}
@media (max-width: $mobile) {
    .section {
        height: 190vh;
        .colorBg {
            height: 190vh;
            }
    }
}
</style>
