<template>
    <div class="page">
        <div class="pagePre" v-for="page in list" :key="page.name">
            <router-link :to="page.href" class="pageLink">
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
.page {
    display: flex;
    justify-content: center;
    padding: 50px;
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
        color: var(--text);
        background: var(--point);
    }
    :active {
        color: pink;
    }
}
</style>
