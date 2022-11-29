<template>
    <div class="section">
        <div class="secInner">
                <div class="enterTit">
                    <span>MEFLEX ENTERTAINMENT<br>ACTOR LINE UP</span>
                </div>
                <div class="enterActor" v-for="item in items">
                    <img :src="item.image" />
                </div>
            </div>
            <div class="btnWrap">
                <div class="main_btn"
                    data-sal="slide-up"
                    data-sal-delay="700"    
                >
                    <a href="http://meflexent.co.kr/" target="_blank">MELFEX ENT 바로가기</a>
                </div>
            </div>
        </div>
</template>
<script>
import sal from "sal.js";

export default {
    data() {
        return {
            items: [
                {
                    image: require('@/assets/images/actor1.jpg')
                },
                {
                    image: require('@/assets/images/actor2.jpg')
                },
                {
                    image: require('@/assets/images/actor3.jpg')
                },
                {
                    image: require('@/assets/images/actor4.jpg')
                },
                {
                    image: require('@/assets/images/actor5.jpg')
                },
                {
                    image: require('@/assets/images/actor6.jpg')
                },
                {
                    image: require('@/assets/images/actor7.jpg')
                },
                {
                    image: require('@/assets/images/actor8.jpg')
                },
                {
                    image: require('@/assets/images/actor9.jpg')
                },
                {
                    image: require('@/assets/images/actor10.jpg')
                },
                {
                    image: require('@/assets/images/actor11.jpg')
                },
                {
                    image: require('@/assets/images/actor12.jpg')
                },
                {
                    image: require('@/assets/images/actor13.jpg')
                },
                {
                    image: require('@/assets/images/actor14.jpg')
                }
            ]
        }
    },
    mounted() {
        sal()
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/main.scss';
@import '@/assets/css/enter.scss';

.section {
    .secInner {
        overflow: hidden;
        display: block;
    }
}
</style>