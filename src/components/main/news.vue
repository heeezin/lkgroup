<template>
    <div class="section">
        <div class="news">
            <div class="news_inner">
                <div class="sec_tit news_tit">
                    <h3>NEWS</h3>
                </div>
                <slide/>
                <more-btn/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../Footer.vue';
import MoreBtn from '../modules/moreBtn.vue';
import Slide from '../modules/slide.vue';


export default {
    components: {
        Footer,
        Slide,
        MoreBtn
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
