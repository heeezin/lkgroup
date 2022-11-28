<template>
    <Header/>
    <div class="section">
        <div class="main_inner">
            <h3>NEWS</h3>
            <div class="news">
                <div class="newsImg">
                    <img src="http://me-flex.co.kr/img/news/0004.png" alt="">
                </div>
                <div class="newsTxt">
                    <a href="https://www.nbntv.co.kr/news/articleView.html?idxno=992608" target="_blank"><span>2022.09.14 03:25</span></a>
                    <a href="https://www.nbntv.co.kr/news/articleView.html?idxno=992608" target="_blank"><p>조은숙, 한국 대표하는 1990년대 데뷔 50대 여배우…작품활동 및 최근 방송 영상은?</p></a>
                </div>
            </div>
            <div class="news">
                <div class="newsImg">
                    <img src="http://me-flex.co.kr/img/news/0005.png" alt="">
                </div>
                <div class="newsTxt">
                    <a href="https://www.newsen.com/news_view.php?uid=202205261808056310" target="_blank"><span>2022.05.26 18:13:54</span></a>
                    <a href="https://www.newsen.com/news_view.php?uid=202205261808056310" target="_blank"><p>‘경소문’ 김은수 ‘금수저’ 캐스팅, 육성재와 연기 호흡.</p></a>
                </div>
            </div>
            <div class="news">
                <div class="newsImg">
                    <img src="http://me-flex.co.kr/img/news/0006.png" alt="">
                </div>
                <div class="newsTxt">
                    <a href="http://www.dt.co.kr/contents.html?article_no=2022041702109970821008&ref=naver" target="_blank"><span>2022.04.18 10:50</span></a>
                    <a href="http://www.dt.co.kr/contents.html?article_no=2022041702109970821008&ref=naver" target="_blank"><p>DJ소다 "맥심 4월호 표지모델 됐어요~"</p></a>
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