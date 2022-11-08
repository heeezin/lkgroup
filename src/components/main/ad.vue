<template>
    <div class="section" style="background-color: gray;">
        <div class="shop main">
            <div class="shop_inner main_inner">
                <div class="main_tit">
                    <h3>광고 / 마케팅</h3>
                </div>
                <div class="main_txt">
                    <p>
                        영상·미디어 컨텐츠 기획 및 제작
                        광고영상, SNS 컨텐츠
                        제작 및 운영
                    </p>
                </div>
                <div class="shop_btn main_btn">
                    <a href="/">자세히 보기</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: flex-end;
    height: 50vw;
    .main_inner {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        width: 50%;
        color: #fff;
        padding: 20vw 5vw;
        .main_tit{
        }
        .main_txt{
            padding: 2vw 0;
        }
        .main_btn {
            width: 200px;
            background: var(--point);
            border-radius: 10px;
            font-size: 1.5rem;
            text-align: center;
            a {
                color: #fff;
                font-weight: 700;
                display: block;
                padding: 1vw;
            }
        }
    }
}
</style>