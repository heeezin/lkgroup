<template>
    <Header/>
    <enter-intro/>
    <enter-intro-2/>
    <actor/>
</template>
<script>
import Header from '@/components/Header.vue'
import EnterIntro from './enterIntro.vue'
import EnterIntro2 from './enterIntro2.vue'
import Actor from './actor.vue'
export default {
    components : {
        EnterIntro,
        Header,
        EnterIntro2,
        Actor
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/main.scss';
@import '@/assets/css/enter.scss';
</style>