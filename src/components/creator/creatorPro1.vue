<template>
    <Header/>
    <div class="section">
        <div class="main_inner">
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 정규수</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat2.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 방은진</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat3.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 서진원</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat4.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 박지아</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat5.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 주석태</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat6.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 김현진</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat7.png" alt="">
                </div>
                <!-- <div class="profTxt">
                    <a href=""><p>texttexttexttexttexttext</p></a>
                    <a href=""><p>배우 한은선</p></a>
                </div> -->
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat8.png" alt="">
                </div>
                <div class="profSns">
                    <a href="https://www.instagram.com/jihogivenchy/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div class="profile">
                <div class="profImg">
                    <img src="@/assets/images/creat9.png" alt="">
                </div>
                <div class="profSns">
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        <page-btn/>
        </div>
    </div>
    
    </template>
    <script>
    import Header from "@/components/Header.vue"
    import PageBtn from './pageBtn.vue'
    
    export default {
        components: {
            Header,
            PageBtn
        }
    }
    </script>
    <style lang="scss" scoped>
    @import "@/assets/css/main.scss";
    @import "@/assets/css/creator.scss";
    </style>