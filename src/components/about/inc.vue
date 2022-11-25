<template>
    <Header/>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
        <div class="main_inner">
            <video controls autoplay loop muted id="player">
                <source 
            src="http://lkpartnersinc.co.kr/img/video/mefelx_video01.mp4"
                />
            </video>
            <div class="main_tit">
                <h3>성공을 만드는 시너지</h3>
                <p>엘케이파트너스아이엔씨는 항상 급변하는 산업 트랜드에 맞춰 새로운 패러다임을 추구합니다.</p>
                <p>
                    오랜 경험과 노하우를 바탕으로 새로운 산업에
                    능동적으로 대응 가능하도록 인프라를 구축해
                    놓았으며, 자사가 보유한 엔터테인먼트 리소스로
                    이커머스와 광고/마케팅 대행 사업을 진행하며,
                    더 나아가 4차 산업 혁명의 주력 기술인 블록체인
                    기술을 응용하여 전문적이고 차별화된 비즈니스
                    플랫폼으로 소비자에게 새로운 패러다임을
                    제시하고자 합니다.
                </p>
            </div>
        </div>
    </div>
    <logo/>
    </full-page>
</template>
<script>
import Header from '../Header.vue'
import Logo from './logo.vue'
export default {
    components: {
        Header,
        Logo
    },
    methods: {
  // Called when your components are ready. That is up to you to decide when.
  componentsReady() {
    this.$refs.fullpage.init()
  }
}

}
</script>
<style lang="scss" scoped>
@import '@/assets/css/about.scss';
</style>