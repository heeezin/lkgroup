<template>
    <Header/>
    <ad-intro/>
    <ad-list/>
    <ad-link/>
</template>
<script>
import Header from '@/components/Header.vue'
import AdIntro from './adIntro.vue'
import AdList from './adList.vue'
import AdLink from './adLink.vue'
export default {
    components: {
        Header,
        AdIntro,
        AdList,
        AdLink

    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
@import "@/assets/css/ad.scss";
</style>  