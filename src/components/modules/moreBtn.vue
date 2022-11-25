<template>
    <div class="btnWrap">
        <div class="main_btn"
            data-sal="slide-up"
            data-sal-delay="700"    
        >
            <a href="/">자세히 보기</a>
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
@import '@/assets/css/reset.scss';
.main_btn {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    margin: 2vw auto;
    width: 220px;
    background: var(--point);
    border-radius: 15px;
    font-size: 1.5rem;
    text-align: center;
    a {
        color: #fff;
        font-weight: 700;
        display: block;
        padding: 1vw;
    }
}
@media (max-width: $mobile){
    p {font-size: 1.5rem;}
    .main_btn {
        margin: 5vw auto;
        width: 200px;
        a {
        padding: 2vw;
        }
    }
}
@media (max-width: $Smobile){
    p {font-size: 1.2rem;}
    h3 {font-size: 1.7rem;}
    .main_btn {
        width: 180px;
        font-size: 1.3rem;
        bottom: 4%;
        left: 27%;
    }
}
</style>