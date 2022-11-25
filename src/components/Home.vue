<template>
    <Header :scrollDirection="scrollDirection"/>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <main-video/>
        <intro/>
        <shop/>
        <enter/>
        <ad/>
        <creator/>
        <news/>
    </full-page>
</template>
  
<script type="module">
    import Enter from './main/enter.vue';
    import Header from "./Header.vue";
    import Ad from './main/ad.vue';
    import Intro from './main/intro.vue';
    import mainVideo from './main/mainVideo.vue';
    import Shop from './main/shop.vue';
    import news from './main/news.vue';
    import creator from './main/creator.vue'
    
    
    
    export default {
        components: {
        Header,
        mainVideo,
        Intro,
        Shop,
        Ad,
        Enter,
        news,
        creator,
    
        },
        data: () => ({ 
        }),
        methods: {
        }
        
    }
    </script>
    
    <style>
    @import "@/assets/css/reset.scss";
    @import "@/assets/css/main.scss";
    </style>
    