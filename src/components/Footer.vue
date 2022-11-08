<template>
    <footer id="footer" class="section">
        <div class="foot_inner">
            <div class="foot_contact">
                <h4>CONTACT</h4>
                <form action="">
                    <fieldset>
                        <div class="mail_form">
                            <input type="text" placeholder="NAME">
                        </div>
                        <div class="mail_form">
                            <input type="text" placeholder="MAIL">
                        </div>
                        <textarea name="MESSAGE" id="message" cols="50" rows="10" placeholder="MESSAGE"></textarea>
                        <div class="mail_submit">
                            <button 
                                class="submit main_btn" type="button" onclick="location.href = 'mailto:gmlwls0425107@gmail.com' "
                            >
                                SUBMIT
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="foot_info">
                <h4>CONNECT WITH US</h4>
                <div class="sns">
                    <a href="/" target="_blank"></a>
                    <a href="/" target="_blank"></a>
                    <a href="/" target="_blank"></a>
                </div>
                <div class="info">
                    <span>상호 : (주)엘케이파트너스아이엔씨</span>
                    <span>대표 : 이종훈</span>
                    <span>사업자등록번호 : 858-88-01309</span>
                    <span>전화 : 1600-3607</span>
                    <address class="address">주소 : 04075 서울특별시 마포구 토정로 127 (상수동)</address>
                    <span>개인정보관리책임자 : 김현식</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

</script>
<style lang="scss" scoped>
@import "../assets/css/footer.scss";
@import "../assets/css/reset.scss";
</style>