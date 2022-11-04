<template>
    <header>
        <div class="header_inner"
            @mouseleave="[( gnb1= false ), ( gnb2=false )]"
        >
            <div class="logo">LK PARTNERS</div>
            <nav>
                <ul class="nav">
                    <li>
                        <a href="#"
                            @mouseover="( gnb1 = true)"
                            @click = "( gnb1 = true )"
                        >ABOUT</a>
                        <ul class="subNav" v-show="gnb1">
                            <li><a href="#">LK PARTNERS INC.</a></li>
                            <li><a href="#">HISTORY</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"
                            @mouseover="( gnb2 = true)"
                            @click = "( gnb2 = true )"
                        >BUSINESS</a>
                        <ul class="subNav" v-show="gnb2">
                            <li><a href="#">MEFLEX</a></li>
                            <li><a href="#">ENTERTAINMENT</a></li>
                            <li><a href="#">AD/MARKETING</a></li>
                        </ul>
                    </li>
                    <li><a href="#">CREATOR</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    data: () => ({
        gnb1: false,
        gnb2: false,
    })
}
</script>
<style lang="scss" scoped>
@import "../assets/css/header.scss";
@import "../assets/css/reset.scss";
</style>