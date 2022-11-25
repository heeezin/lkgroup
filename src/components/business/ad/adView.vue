<template>
    <Header/>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <ad-intro/>
        <ad-list/>
        <ad-link/>
    </full-page>
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