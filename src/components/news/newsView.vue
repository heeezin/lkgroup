<template>
    <Header/>
    <news-pre/>
</template>
<script>
import Header from '../Header.vue'
import NewsPre from './newsPre.vue'

export default {
    components: {
        Header,
        NewsPre,
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss"
</style>