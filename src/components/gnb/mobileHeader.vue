<template>
    <div class="mbMenuBox" v-if="mbMenuAll">
        <ul class="mbMenuList">
            <li>
                <a  href="#"
                    @click="subTab=1"
                    v-bind:class="[subTab === 1 ? subMenu:'']"
                >ABOUT</a>
                <ul class="mbSub" v-if="subTab === 1">
                    <li><a href="#">LK PARTNERS INC.</a></li>
                    <li><a href="#">HISTORY</a></li>
                </ul>
            </li>
            <li>
                <a  href="#"
                    @click="subTab=2"
                    v-bind:class="[subTab === 2 ? subMenu:'']">BUSINESS</a>
                <ul class="mbSub" v-if="subTab === 2">
                    <li><a href="#">MEFLEX</a></li>
                    <li><a href="#">ENTERTAINMENT</a></li>
                    <li><a href="#">AD/MARKETING</a></li>
                </ul>
            </li>
            <li>
                <a href="/">CREATOR</a>
            </li>
            <li>
                <a href="/">NEWS</a>
            </li>
            <li>
                <a href="/">CONTACT</a>
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
.mbMenuBox {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: var(--point);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    li {
        padding: 5% 0;
    }
    a {
        color: var(--text);
        font-size: 2rem;
        padding: 1vw;
        display: block;
    }
    .mbSub {
        li > a {
            font-size: 1rem;
        }
    }
}
</style>