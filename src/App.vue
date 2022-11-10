<template>
  <Header :scrollDirection="scrollDirection"/>
  <main-video/>
  <intro/>
  <shop/>
  <enter/>
  <ad/>
  <creator/>
  <news/>
<!-- <Footer/> -->

</template>

<script type="module">
import Enter from './components/main/enter.vue';
import Header from "./components/Header.vue";
import Ad from './components/main/ad.vue';
import Intro from './components/main/intro.vue';
import mainVideo from './components/main/mainVideo.vue';
import Shop from './components/main/shop.vue';
import news from './components/main/news.vue';
import creator from './components/main/creator.vue'
// import Footer from './components/Footer.vue';



export default {
  name: 'App',
  components: {
    Header,
    mainVideo,
    Intro,
    Shop,
    Ad,
    Enter,
    news,
    creator
    // Footer,

  },
  data: () => ({ 
  })
  
}
</script>

<style>

</style>
