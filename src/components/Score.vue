<script setup>
import { ref } from 'vue';

const score = ref(100);
</script>

<template>
    <h1>Score</h1>
    <div v-show="score">
        <p>Your score is {{ score }}</p>
    </div>
    <div v-if="score > 90">
        <p>Your score is {{ score }}, cool score</p>
    </div>
    <div v-else-if="score > 70">
        <p>Your score {{ score }} is average score</p>
    </div>
    <div v-else>
        <p>Your score {{ score }} is below average</p>
    </div>
</template>

<style scoped>
</style>