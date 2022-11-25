<template>
<div class="section" style="background:#946060">
        <div class="creator">
            <div class="creator_inner">
                <div class="sec_tit creator_tit">
                    <h3>CREATOR</h3>
                </div>
                <cover-slide/>
                <div class="btnWrap">
                    <div class="main_btn"
                        data-sal="slide-up"
                        data-sal-delay="700"    
                    >
                        <a href="/">자세히 보기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CoverSlide from '../modules/coverSlide.vue';
import moreBtn from '../modules/moreBtn.vue';

export default {
    components: {
        moreBtn,
        CoverSlide,
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";
.creator {}
.creator_inner {
}
.sec_tit {
    z-index: 100;
    position: absolute;
    h3 {
        font-size: 2.2rem;
        color: var(--text);
    }
}
.main_btn {
    position: absolute;
    z-index: 100;
    bottom: 0;
}
</style>