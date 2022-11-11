<template>
    <header 
        :class="{'hidden_header': !showHeader}"
        @mouseleave="subInner=false"
    >
        <div class="header_inner">
            <div class="logo">
                <a href="/"><img src="../assets/images/logo.png" alt="logo"></a>
            </div>
            <nav v-if="pcNav">
                <ul class="nav">
                    <li
                    >
                        <a href="#"
                            @mouseover="activetab=1, subInner=true" v-bind:class="[activetab === 1 ? 'active' : '']"

                        >ABOUT</a>
                    </li>
                    <li
                    >
                        <a href="#"
                        @mouseover="activetab=2, subInner=true" v-bind:class="[activetab === 2 ? 'active' : '']"


                        >BUSINESS</a>
                    </li>
                    <li>
                        <a href="#"
                        @mouseover="subInner=false"


                        >CREATOR</a></li>
                    <li><a href="#" @mouseover="subInner=false">NEWS</a></li>
                    <li><a href="#" @mouseover="subInner=false">CONTACT</a></li>
                </ul>
            </nav>
            <!-- mobile menu -->
            <div class="mbMenu" v-if="mbMenuBtn">
                <div class="mbOpen" 
                    v-if="!mbMenuAll"
                    @click="showSub(true)"
                    >
                    <a><i class="fa-solid fa-bars mbIcon"></i></a>
                </div>
                <div class="mbClose" 
                    v-if="mbMenuAll"
                    @click="showSub(false)"
                >
                    <a><i class="fa-solid fa-xmark mbIcon"></i></a>
                </div>
            </div>
            <!-- //mobile menu -->
        </div>
        <div class="sub_inner"
            v-show="subInner"
        >
            <ul class="subNav aboutSub" 
            v-if="activetab === 1" 


            >
                <li><a href="#">LK PARTNERS INC.</a></li>
                <li><a href="#">HISTORY</a></li>
            </ul>
            <ul class="subNav businessSub" 
            v-if="activetab === 2" 

            >
                <li><a href="#">MEFLEX</a></li>
                <li><a href="#">ENTERTAINMENT</a></li>
                <li><a href="#">AD/MARKETING</a></li>
            </ul>
        </div>
        <mobile-header
            :mbMenuAll="mbMenuAll"
            :subMenu="subMenu"
        />
    </header>
</template>
<script>
import mobileHeader from './gnb/mobileHeader.vue'
const OFFSET = 10

export default {
  components: { mobileHeader },
    el: 'header',
    data: () => ({
        // gnb1: false,
        // gnb2: false,
        subInner: false,
        showHeader: true,
        lastScrollPosition: 0,
        scrollValue: 0,
        navNum: 1,
        navOn: false,
        activetab: 1,
        mbMenuAll: false,
        mbMenuBtn: true,
        pcNav: false
    }),
    mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)

    if(window.innerWidth > 1025) {
        this.mbMenuBtn = !this.mbMenuBtn;
        this.pcNav = !this.pcNav;
    } 
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
    
    // submenu 
    showSub() {
        this.mbMenuAll = !this.mbMenuAll;
    }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/header.scss";
@import "../assets/css/reset.scss";
</style>