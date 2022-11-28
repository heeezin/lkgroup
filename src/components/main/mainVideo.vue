<template>

    <div class="section" v-if="showHeader">
      <video controls autoplay loop muted id="player">
          <source src="http://me-flex.co.kr/newlk/meflex_YongSiu.mp4">
      </video>
      <!-- <div class="playBtn">
        <button v-on:click="unmute()"></button>
      </div> -->
    </div>
</template>
<script>

 window.onload = function(){
      const elm = document.querySelectorAll('.section');
      const elmCount = elm.length;
      elm.forEach(function(item, index){
        item.addEventListener('mousewheel', function(event){
          event.preventDefault();
          let delta = 0;

          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;

          let moveTop = window.scrollY;
          let elmSelector = elm[index];

          // wheel down : move to next section
          if (delta < 0){
            if (elmSelector !== elmCount-1){
              try{
                moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
              }catch(e){}
            }
          }
          
          // wheel up : move to previous section
          else{
            if (elmSelector !== 0){
              try{
                moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
              }catch(e){}
            }
          }

          const body = document.querySelector('html');
          window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
        });
      });
    }
    export default {
      components: {
      },
      data: () =>({
        player : true,
        showHeader: true,
        mainVideo: true,
        // mVideo: `http://lkpartnersinc.co.kr/img/video/mefelx_video01.mp4`,
        // video: `http://me-flex.co.kr/newlk/meflex_YongSiu.mp4`
      }),
      methods:{
        unmute() {
          player.muted = !player.muted;
        },
      },
      mounted() {
        // if(window.innerWidth < 768) {
        //   this.mainVideo = false;
        // } 
      }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/css/reset.scss";

body{
    margin: 0;
    padding: 0;
}
.section {
  font-size: 32px; 
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

  }
  .playBtn {
    position: absolute;
    width: 50px;
    bottom: 10%;
    right: 10%;
    button {
      background: url('../../assets/images/playbtn.png') no-repeat center #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
video {
  width: 100%;
}
@media (max-width: $mobile) {
  // video {
  //   background: url("http://me-flex.co.kr/newlk/meflex_YongSiu.mp4");
  //   position: absolute;
  //   width: 100%;
  //   height: 100vh;
  //   z-index: 100;
  //   object-fit: cover;
  // }
}
</style>
