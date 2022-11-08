<template>
    <div class="section" style="background-color: pink;">
        <div class="shop main">
            <div class="shop_inner main_inner">
                <div class="main_tit">
                    <h3>온라인 명품 쇼핑몰 ‘MEFLEX’</h3>
                </div>
                <div class="main_txt">
                    <p>
                        자사의 인플루언서 풀을 활용한
                        마케팅을 통해 다양한 명품 판매 및
                        커뮤니티 채널 구축
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