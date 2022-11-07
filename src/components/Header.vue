<template>
    <header 
        @mouseleave="[( gnb1= false ), ( gnb2=false )]"
    >
        <div class="header_inner">
            <div class="logo">
                <a href="/">LK PARTNERS</a>
            </div>
            <nav>
                <ul class="nav">
                    <li 
                        @mouseleave="( gnb1= false )"
                    >
                        <a href="#"
                            @mouseover="( gnb1 = true)"
                        >ABOUT</a>
                    </li>
                    <li
                        @mouseleave="( gnb2= false )"
                    >
                        <a href="#"
                            @mouseover="( gnb2 = true )"
                        >BUSINESS</a>
                    </li>
                    <li><a href="#">CREATOR</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                <font-awesome-icon icon="fa-solid fa-plus" />
                <font-awesome-icon icon="fa-regular fa-bars" />
            </nav>
        </div>
        <div class="sub_inner">
            <ul class="subNav" v-show="gnb1">
                <li><a href="#">LK PARTNERS INC.</a></li>
                <li><a href="#">HISTORY</a></li>
            </ul>
            <ul class="subNav" v-show="gnb2">
                <li><a href="#">MEFLEX</a></li>
                <li><a href="#">ENTERTAINMENT</a></li>
                <li><a href="#">AD/MARKETING</a></li>
            </ul>
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