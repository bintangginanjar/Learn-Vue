<script setup>
    const {counter, name} = defineProps(["counter", "name"]);
    const emits = defineEmits(["click"]);
</script>

<template>
    <h1>Counter {{ name }} : {{ counter }}</h1>
    <button @click="emits('click')">Increment</button>
</template>

<style>
</style>