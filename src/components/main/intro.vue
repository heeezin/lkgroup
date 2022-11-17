<template>
    <div class="section">
        <div class="imageColor"></div>
        <div class="intro main">
            <div class="intro_inner main_inner">
                <div class="main_tit txtBox">
                    <h3>WE ARE LK PARTNERS INC.</h3>
                </div> 
                <div class="main_txt txtBox">
                    <p>
                        엘케이파트너스아이엔씨는
                        4차산업혁명 시대에 발 맞춰
                        블록체인 기반으로 유명 작가와
                        아티스트, 셀럽들간의 협력을
                        통하여 실물 미술 작품 및 NFT를
                        발행하고 마켓플레이스를
                        운영하여 블록체인과 엔터테인먼트
                        사업을 트렌디하게 하나로 묶어
                        새로운 시장과 생태계를 만들어가는
                        회사입니다.
                    </p>
                </div>
                <div class="intro_btn main_btn txtBox">
                    <a href="/">자세히 보기</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gsap from "gsap";

export default {
    mounted() {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".txtBox",
                start: "center center",
                end: "bottom top",
                opacity: 0,
                delay: 0.5,
                transition: 0.5,
                scrub: true,
                pin: false
            }
        })
        .from(".txtBox", {y: innerHeight * 1.5})
            
        // gsap.to(".txtBox", {
        //     delay: 0.1,
        //     transition: 0.2,
        //     y: -50,
        //     stagger: 0.1,
        //     ease: "power1",
        //     trigger: ".txtBox",
        //     scrub: 1
        // })
    }
    
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";

.section {
    background: url("../../assets/images/intro.png") no-repeat center / cover;
    position: relative;
    z-index: 1;
    .imageColor {
        background-color: rgba(0,0,0,0.7);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}
</style>
