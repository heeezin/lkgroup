<template>
    <div class="page">
        <div class="pagePre" v-for="page in list" :key="page.name" :class="{active: list == ''}">
            <router-link :to="page.href" :class="{active:isActive}">
                <span>{{page.name}}</span>
            </router-link>
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
                    href: '/news'
                },
                {
                    name:'2',
                    href: '/news/2'
                }
            ]
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: center;
    .pagePre {
        margin-right: 20px;
    }
    a {
        display: inline-block;
    }
    span {
        display: block;
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
