<template>

    <div class="section">
        <div class="news">
            <div class="news_inner">
                <div class="sec_tit news_tit">
                    <h3>NEWS</h3>
                </div>
                <slide/>
                <div class="btnWrap">
                    <div class="main_btn"
                        data-sal="slide-up"
                        data-sal-delay="700"    
                    >
                        <router-link to="/news">자세히 보기</router-link>
                    </div>
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
        Slide,
    },
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";
    
    .news {
        width: 100%;
        height: 55vh;
        background: var(--bg);
    }
    .main_btn {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    margin: 2vw auto;
    width: 220px;
    background: var(--point);
    border-radius: 15px;
    font-size: 1.5rem;
    text-align: center;
    a {
        color: #fff;
        font-weight: 700;
        display: block;
        padding: 1vw;
    }
}
.sec_tit {
    h3 {font-size: 2.2rem;}
}
@media (max-width: $mobile){
    p {font-size: 1.5rem;}
    .main_btn {
        margin: 7% auto;
        width: 200px;
        a {
        padding: 2vw;
        }
    }
}
@media (max-width: $Smobile){
    p {font-size: 1.2rem;}
    h3 {font-size: 1.7rem;}
    .main_btn {
        width: 180px;
        font-size: 1.3rem;
        position: absolute;
        bottom: 45%;
        left: 27%;
    }
}

    
</style>
