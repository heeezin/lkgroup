<template>
    <Header/>
    <div class="section">
        <div class="main_inner">
            <h3>NEWS</h3>
            <div class="news">
                <div class="newsImg">
                    <img src="http://me-flex.co.kr/img/news/0001.png" alt="">
                </div>
                <div class="newsTxt">
                    <a href="https://www.etnews.com/20220610000184" target="_blank">
                        <span>2022-06-10 16:10</span></a>
                    <a href="https://www.etnews.com/20220610000184" target="_blank">
                        <p>미플렉스, 플랫폼 출시와 BSC 기반 토큰 발행 확정…"생태계 구축 가속화"</p>
                    </a>
                </div>
            </div>
            <div class="news">
                <div class="newsImg">
                    <img src="http://me-flex.co.kr/img/news/0002.png" alt="">
                </div>
                <div class="newsTxt">
                    <a href="https://www.joynews24.com/view/1502261" target="_blank">
                        <span>2022.07.20 08:17</span></a>
                    <a href="https://www.joynews24.com/view/1502261" target="_blank">
                        <p>'사불 손예진 母' 방은진, 미플렉스엔터 전속계약 체결</p></a>
                </div>
            </div>
            <div class="news">
                <div class="newsImg">
                    <img src="http://me-flex.co.kr/img/news/0004.png" alt="">
                </div>
                <div class="newsTxt">
                    <a href="https://www.nbntv.co.kr/news/articleView.html?idxno=992608" target="_blank"><span>2022.09.14 03:25</span></a>
                    <a href="https://www.nbntv.co.kr/news/articleView.html?idxno=992608" target="_blank"><p>조은숙, 한국 대표하는 1990년대 데뷔 50대 여배우…작품활동 및 최근 방송 영상은?</p></a>
                </div>
            </div>
        <page-btn/>
        </div>
    </div>
</template>
<script>
    import Header from "@/components/Header.vue"
    import PageBtn from './pageBtn.vue'
    
    export default {
        components: {
            Header,
            PageBtn,
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/main.scss";
    @import "@/assets/css/news.scss";
</style>