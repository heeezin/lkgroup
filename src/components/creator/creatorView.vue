<template>
    <Header/>
    <creator-pro-1/>
    <page-btn/>
</template>
<script>
import Header from '../Header.vue';
import CreatorPro1 from './creatorPro1.vue';
import PageBtn from './pageBtn.vue';

export default {
    components: { Header, CreatorPro1, PageBtn, },
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss"
</style>