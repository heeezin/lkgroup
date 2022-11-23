<template>
    <div class="section">
        <div class="secInner">
            <div class="enterTit">
                <span>MEFLEX ENTERTAINMENT<br>ACTOR LINE UP</span>
            </div>
            <div class="enterActor" v-for="item in items">
                <img :src="item.images" />
            </div>
            <div class="main_btn"
                data-sal="slide-up"
                data-sal-delay="700"    
            >
                <a href="/">MELFEX ENT 바로가기</a>
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
                    images: '@/assets/images/intro.png'
                },
                {
                    images: '@/assets/images/enter2.png'
                },
                {
                    images: '@/assets/images/enter3.png'
                },
                {
                    images: '@/assets/images/enter.png'
                },
                {
                    images: '@/assets/images/enter2.png'
                },
                {
                    images: '@/assets/images/enter3.png'
                },
                {
                    images: '@/assets/images/enter.png'
                },
                {
                    images: '@/assets/images/enter2.png'
                },
                {
                    images: '@/assets/images/enter3.png'
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

.main_btn {
    width: 340px;
}
</style>