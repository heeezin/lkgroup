<template>
  <Header/>
  <main-video/>
</template>

<script>
import Header from "./components/Header.vue";
import mainVideo from './components/main/mainVideo.vue';

export default {
  name: 'App',
  components: {
    Header,
    mainVideo
  }
}
</script>

<style>

</style>
