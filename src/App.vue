<script setup>
import Rank from './components/Rank.vue';

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
#rank-table{
    margin: auto;
    width: calc(100% - 80px);
    // height: 100%;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
