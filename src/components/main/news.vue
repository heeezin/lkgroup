<template>
    <div class="section">
        <div class="news">
            <div class="news_inner">
                <div class="sec_tit news_tit">
                    <h3>NEWS</h3>
                </div>
                <slide/>
                <div class="news_btn main_btn">
                    <a href="/">자세히 보기</a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../Footer.vue';
import Slide from '../modules/slide.vue';


export default {
    components: {
        Footer,
        Slide
    },
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";

    .news {
        width: 100%;
        height: 60vh;
        background: #7DB055;
    }


    
</style>
