<template>
    <div class="section">
        <div class="secInner">
                <div class="enterTit">
                    <span>MEFLEX ENTERTAINMENT<br>ACTOR LINE UP</span>
                </div>
                <div class="enterActor" v-for="item in items">
                    <img :src="item.img" />
                </div>
            </div>
            <div class="main_btn"
                data-sal="slide-up"
                data-sal-delay="700"    
            >
                <a href="/">MELFEX ENT 바로가기</a>
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
                    img: "@/assets/images/ad.png"
                },
                {
                    img: '@/assets/images/enter2.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter.png'
                },
                {
                    img: '@/assets/images/enter2.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter.png'
                },
                {
                    img: '@/assets/images/enter2.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter3.png'
                },
                {
                    img: '@/assets/images/enter3.png'
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
        padding: 120px 30px;
        overflow: hidden;
        display: block;
    }
}
</style>