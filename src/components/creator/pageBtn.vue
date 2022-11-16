<template>
    <div class="page">
        <div class="pagePre">
            <router-link @click="pageShow()" to="/creator"><span v-bind:style="pageColor">1</span></router-link>
        </div>
        <div class="pageNext">
            <router-link @click="pageShow()" to="/creator/2"><span v-bind:style="pageColor2">2</span></router-link>
        </div>
    </div>
</template>
<script>

export default {
    data()  {
        return {
            pageColor: {}
        }
    },
    methods: {
        pageShow() {
            this.pageColor.color = "red";
            this.pageColor2.color = "gray";
        }
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
}
</style>
