<template>
<div class="section" style="background:#946060">
        <div class="creator">
            <div class="creator_inner">
                <div class="sec_tit creator_tit">
                    <h3>CREATOR</h3>
                </div>
                <cover-slide/>
                <more-btn/>
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
.creator_inner {
    position: relative;
}
.sec_tit {
    padding: 5vw 5vw 1vw;
    z-index: -1;
}
</style>