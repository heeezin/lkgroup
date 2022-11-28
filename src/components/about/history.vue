<template>
    <Header/>
        <div class="section">
            <Nav-slide/>
        </div>
</template>
<script>
import Header from '../Header.vue'
import NavSlide from '../modules/navSlide.vue'
export default {
    components: {
        Header,
        NavSlide,
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/reset.scss";
@import '@/assets/css/about.scss';
.fp-watermark {
    display: none !important;
}
</style>