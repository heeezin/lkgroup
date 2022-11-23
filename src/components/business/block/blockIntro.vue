<template>
    <Header/>
    <div class="section introSec">
        <div class="colorBg">
            <div class="secInner">
                <div class="introLeft">
                    <h3>WHY NFT?</h3>
                    <p>NFT란 대체불가능토큰(Non-Fungible Token)으로
                        각 토큰마다 고유값을 가지고 있기 때문에 다른 토큰으로
                        대체하는 것이 불가능한 가상자산(암호화폐)를 의미합니다.
                        오늘날 창작, 소유권 증명, 미술품의 진품 증명서를
                        저장하는 등 기존의 자산을 디지털화하여 자산 소유권을
                        명확히 하는 수단으로써 활용되며, 게임·예술품·부동산 등
                        다양하고 폭 넓은 분야에서 활용되고 있습니다.
                    </p>
                </div>
                <div class="introRight">
                    <h3>MEFLEX 만의 특별한 NFT</h3>
                    <p>
                    NFT는 단순한 플랫폼의 한계를 넘어 다양한 파생상품을
                    탄생시키고 있으며, 누구에게나 주어지는 진입기회에 비해
                    NFT창작자 혹은 마케터로써 활동하기 위한 장입장벽이
                    다소 높은 것이 사실입니다.
                    MEFLEX는 이러한 진입장벽을 허물고, 인플루언서의
                    인지도를 활용한 마케터로서의 역량을 이끌어내 창작자와
                    마케터가 상호보완하여 궁극적으로 스마트컨트랙트를
                    활용한 계약 플랫폼을 구축합니다.
                    </p>
                </div>
            </div> 
        </div>
    </div>
    <nft/>
    <market/>
</template>
<script>
import Header from '@/components/Header.vue'
import Market from '../block/market.vue'
import Nft from './nft.vue'

export default {
    components: {
        Header,
        Nft,
        Market

    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
@import "@/assets/css/block.scss";

.introSec {
    background: url('@/assets/images/nft1.png') center center /cover no-repeat;
    color: var(--text);
    .secInner {
        padding-top: 17%;
        h3 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.2rem;
            padding-top: 3%;
        }
        
    }
}
@media (max-width: $mobile) {
    .introSec {
        background: url('@/assets/images/nftM1.png') center center /cover no-repeat;
    }
}
</style>
