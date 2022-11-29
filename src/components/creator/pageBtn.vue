<template>
    <div class="pageBtn">
        <div class="page">
            <div class="pagePre" v-for="page in list" :key="page.name" :class="{active: list == ''}">
                <router-link :to="page.href" :class="{active:isActive}">
                    <span>{{page.name}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data()  {
        return {
            list: [
                {
                    name:'1',
                    href: '/creator'
                },
                {
                    name:'2',
                    href: '/creator/2'
                }
            ]
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.pageBtn { 
    width: 100%;
    height: 100%;
}
.page {
    padding-top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    .pagePre {
        margin-right: 20px;
    }
    a {
        display: inline-block;
    }
    span {
        padding: 5px 15px;
        font-size: 2rem;
        font-weight: 700;
        color: var(--point);
        background: #D9D9D9;
    }
    .router-link-active {
        span {
            background: var(--point);
            color: var(--text);
        }
    }
}
</style>
