<template>
    <Header/>
    <div class="contact">
        <div class="cont_inner">
            <map-api/>
            <div class="address">
                <span>오시는길</span>
                <address>
                    04075 서울특별시 마포구 토정로 127 (상수동)<br>
                    6호선 상수역 3번출구 500M 이내
                </address>
            </div>
            <div class="contForm">
                <div class="sec_tit creator_tit">
                    <h3>CONTACT</h3>
                </div>
                <form action="">
                    <fieldset>
                        <div class="nameMail mail_form">
                            <div class="name">
                                <span>NAME</span>
                                <input type="text">
                            </div>
                            <div class="mail">
                                <span>MAIL</span>
                                <input type="text">
                            </div>
                        </div>
                        <div class="ms mail_form">
                            <span>MESSAGE</span>
                            <textarea name="MESSAGE" id="message" cols="50" rows="10"></textarea>
                        </div>
                        <div class="mail_submit">
                            <button 
                                class="submit" type="button" onclick="location.href = 'mailto:gmlwls0425107@gmail.com' "
                            >
                                SUBMIT
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../Header.vue';
import mapApi from './mapApi.vue';

export default {
    components: {
        mapApi,
        Header
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/reset.scss";

.contact {
    background: var(--bg);
    color: var(--text);
    
    .cont_inner {
        padding: 80px 30px;
        .address {
            padding: 5% 0 10%;
            span {
                font-size: 1.5rem;
                font-weight: 700;
            }
        }
        .contForm {
            form {
                display: flex;
                align-items: center;
                justify-content: center;
                .nameMail {
                    display: flex;
                    justify-content: space-between;
                }
            }
            h3 {
            color: var(--text);
            font-size: 3rem;
            text-align: center;
            }
            .mail_form {
                input {
                    width: 25vw;
                    height: 40px;
                    background-color: #D9D9D9;
                }
                span {
                    display: block;
                    font-size: 1.2rem;
                }
                textarea {
                    width: 100%;
                }
                .name {
                    width: 100%;
                    margin-right: 1vw;
                }
            }
            .ms {
                margin: 1vw 0;
                #message {
                    background-color: #D9D9D9;
                }
            }
            .mail_submit {
                    margin: 0 auto;
                    width: 280px;
                    background: var(--point);
                    border-radius: 15px;
                    text-align: center;
                    display: block;
                .submit {
                    font-weight: 700;
                    padding: 1vw;
                    font-size: 1.5rem;
                    color: var(--text);
                }
            }  
        }
    }
}
@media (max-width: $mobile) {
    .contact .cont_inner .contForm .mail_form input{width: 40vw;}
}
</style>