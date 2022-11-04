<template>
  <Header/>
  <main-slide/>
</template>

<script>
import Header from "./components/Header.vue";
import MainSlide from './components/main/mainSlide.vue';

export default {
  name: 'App',
  components: {
    Header,
    MainSlide
  }
}
</script>

<style>

</style>
