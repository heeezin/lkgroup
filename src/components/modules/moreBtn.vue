<template>
    <div class="main_btn"
        data-sal="slide-up"
        data-sal-delay="700"    
    >
        <a href="/">자세히 보기</a>
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
.main_btn {
    z-index: 1000;
    margin: 2vw auto;
    width: 200px;
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
</style>