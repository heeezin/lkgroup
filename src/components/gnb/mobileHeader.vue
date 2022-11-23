<template>
    <div class="mbMenuBox" v-if="mbMenuAll">
        <ul class="mbMenuList">
            <li>
                <a  href="#"
                    @click="subTab=1"
                    v-bind:class="[subTab === 1 ? subMenu:'']"
                >ABOUT</a>
                <ul class="mbSub" v-if="subTab === 1">
                    <li><router-link to="/lkpartners">LK PARTNERS INC.</router-link></li>
                    <li><router-link to="/history">HISTORY</router-link></li>
                </ul>
            </li>
            <li>
                <a  href="#"
                    @click="subTab=2"
                    v-bind:class="[subTab === 2 ? subMenu:'']">BUSINESS</a>
                <ul class="mbSub" v-if="subTab === 2">
                    <li><router-link to="/meflex">MEFLEX</router-link></li>
                    <li><router-link to="/blockchain">BLOCKCHAIN/NFT</router-link></li>
                    <li><router-link to="/entertainment">ENTERTAINMENT</router-link></li>
                    <li><a href="#">AD/MARKETING</a></li>
                </ul>
            </li>
            <li>
                <router-link to="/creator">CREATOR</router-link>
            </li>
            <li>
                <router-link to="/news">NEWS</router-link>
            </li>
            <li>
                <router-link to="/contact">CONTACT</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        mbMenuAll: Boolean,
        showSub: Function,
    },
    data: () => ({
        subMenu: false,
        subTab: false,
        mbMenuAll: false,
    }),
    methods: {
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/header.scss";
</style>