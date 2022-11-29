<template>
    <Header/>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
        <div class="secInner">
            <div class="introImg">
                <div class="Title">
                    <span>NOW<br>MEFLEX</span>
                </div>
                <div class="backImg">
                    <img src="@/assets/images/meflex_1.png" alt="">
                </div>
            </div>
            <div  class="introTxt">
                <p>자사의 엔터테인먼트 사업을 기반으로 각 분야 탑 클래스 셀럽 및
                인플루언서들과 협업하여 복합 패션 플랫폼을 런칭하였습니다.
                그들만의 개성을 담은 룩북 컨텐츠를 제작하고 개개인에게 쇼핑몰을
                제작 및 양도해 책임감과 오너십을 갖게 만들어 인플루언서들이
                SNS 활동으로 본인이 마케터가 되어 룩북에 대한 코디 추천 및 상품 추천을 진행하게 됩니다.
                인플루언서가 판매하는 상품에 대해 수익을 배분하는 시스템이기
                때문에 인플루언서들은 수익을 위해 자발적 홍보 및 판매를 진행하게
                되고 해당 부분이 주요 비즈니스 모델 및 마케팅 포인트가 됩니다.
                여기에 덧붙여 BNB 기반의 미플렉스 코인을 런칭하여 쇼핑몰
                내에서 다양한 활동을 통해 코인을 수급 및 포인트로 활용할 수 있게
                됩니다.
                </p>
            </div>
        </div>
    </div>
    <mf-about/>
    <mf-about-2/>
    <mf-about-3/>
    </full-page>
</template>
<script>
import Header from '@/components/Header.vue'
import MfAbout from './mfAbout.vue'
import MfAbout2 from './mfAbout2.vue'
import MfAbout3 from './mfAbout3.vue'

export default {
components: { Header, MfAbout, MfAbout2, MfAbout3},
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/reset.scss";
@import "@/assets/css/main.scss";
@import "@/assets/css/meflex.scss";
</style>