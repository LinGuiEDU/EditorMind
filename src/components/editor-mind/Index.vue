<template>
    <div id="layout"></div>
</template>
<script setup lang="ts">
import EditorMind from "./EditorMind";
import {defineProps, ref, onMounted} from 'vue'

onMounted(() => {
    // 实例化编辑器
    const editorMind = new EditorMind();
})
</script>
<style scoped>
#layout {
    height: 800px;
}
</style>