<template>
    <header 
        :class="{'hidden_header': !showHeader}"
        @mouseover="subInner=true"
        @mouseleave="subInner=false"
    >
        <div class="header_inner">
            <div class="logo">
                <a href="/"><img src="../assets/images/logo.png" alt="logo"></a>
            </div>
            <nav>
                <ul class="nav">
                    <li
                    >
                        <a href="#"
                            @mouseover="navToggle(1)"

                        >ABOUT</a>
                    </li>
                    <li
                    >
                        <a href="#"
                            @mouseover="navToggle(2)"


                        >BUSINESS</a>
                    </li>
                    <li>
                        <a href="#"
                        @mouseover="navToggle(3)"

                        >CREATOR</a></li>
                    <li><a href="#" 
                        @mouseover="navToggle(4)"

                         >NEWS</a></li>
                    <li><a href="#"
                        @mouseover="navToggle(5)"

                         >CONTACT</a></li>
                </ul>
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                <font-awesome-icon icon="fa-solid fa-plus" />
                <font-awesome-icon icon="fa-regular fa-bars" />
            </nav>
        </div>
        <div class="sub_inner"
            v-show="subInner"
        >
            <ul class="subNav" 
                @mouseover="navToggle(1)"
                v-if="navNum === 1 || navOn"

            >
                <li><a href="#">LK PARTNERS INC.</a></li>
                <li><a href="#">HISTORY</a></li>
            </ul>
            <ul class="subNav" 
                @mouseover="navToggle(2)"
                v-if="navNum === 2 || navOn"

            >
                <li><a href="#">MEFLEX</a></li>
                <li><a href="#">ENTERTAINMENT</a></li>
                <li><a href="#">AD/MARKETING</a></li>
            </ul>
        </div>
    </header>
</template>
<script>

const OFFSET = 10

export default {
    data: () => ({
        // gnb1: false,
        // gnb2: false,
        subInner: false,
        showHeader: true,
        lastScrollPosition: 0,
        scrollValue: 0,
        navNum: 1,
        navOn: false,
    }),
    mounted() {
        this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    navToggle(e) {
        this.navOn = !this.navOn;
        if(e) this.navNum = e;
    },
      
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/header.scss";
@import "../assets/css/reset.scss";
</style>