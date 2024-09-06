<script setup>
import { onMounted } from 'vue';
import Rank from './components/Rank.vue';

onMounted(() => {
    document.documentElement.lang = 'zh';
});

</script>

<template>
    <div id="container" lang="zh">
        <Rank id="rank-table"></Rank>
    </div>
</template>

<style scoped lang="scss">
#container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
}

#rank-table {
    margin: auto;
    width: calc(100% - 80px);
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
