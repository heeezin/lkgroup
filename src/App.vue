<template>
  <Header :scrollDirection="scrollDirection"/>
  <main-video/>
  <intro/>
  <shop/>
  <enter/>
  <ad/>
  <Footer/>
</template>

<script>
import Enter from './components/main/enter.vue';
import Header from "./components/Header.vue";
import Ad from './components/main/ad.vue';
import Intro from './components/main/intro.vue';
import mainVideo from './components/main/mainVideo.vue';
import Shop from './components/main/shop.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    mainVideo,
    Intro,
    Shop,
    Ad,
    Enter,
    Footer,
  },
  data: () => ({ 
  })
  
}
</script>

<style>

</style>
