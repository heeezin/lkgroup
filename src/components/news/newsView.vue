<template>
    <Header/>
    <news-pre/>
    <page-btn/>
</template>
<script>
import PageBtn from '../news/pageBtn.vue'
import Header from '../Header.vue'
import NewsPre from './newsPre.vue'

export default {
    components: {
        Header,
        NewsPre,
        PageBtn,
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss"
</style>