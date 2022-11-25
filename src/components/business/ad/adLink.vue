<template>
    <div class="section">
        <div class="colorBg">
            <div class="adBgWrap">
                <div class="adBg"></div>
            </div>
            <div class="secInner">
                <div class="introLeft">
                    <span>AD/MARKETING</span>
                    <h4>제품 브랜딩 / 마케팅</h4>
                    <p>
                        전반적인 브랜딩을 함께하며 브랜드 로고 디자인, 제품 패키지 디자인 등을진행하였습니다.
                    </p>
                </div>
                <div class="introRight">
                    <h4>What We Do</h4>
                    <p>
                        - 로고 디자인 - 제품 패키지 디자인 - 광고 영상 기획 및 제작 - 온라인 광고 집행
                    </p>
                    <div class="btnWrap">
                        <div class="main_btn"
                            data-sal="slide-up"
                            data-sal-delay="700"    
                        >
                            <a href="/">종로부띠끄 바로가기</a>
                            </div>
                    </div>
                </div>

            </div> 
        </div>
    </div>
</template>
<script>
import sal from "sal.js";

export default {
    mounted() {
        sal()
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
@import "@/assets/css/ad.scss";

.section {
    background: var(--bg);
    .main_btn {
                    width: 80%;
                    font-size: 1.3rem;
                }
                .adBgWrap{
                    .adBg {
                background: url('@/assets/images/Group 18.png')  center center /cover no-repeat;
                    }
                }
                .btnWrap {
                    padding-top: 30%;
                }
                
}
</style>