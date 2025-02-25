<script setup>
    import { ref } from "vue";
    import Counter from "./Counter.vue";
    import CounterStateless from "./CounterStateless.vue";

    const counter = ref(0);
</script>

<template>
    <h1>First Counter</h1>
    <Counter name="Bintang" initial-count="10"/>
    <h1>Second Counter</h1>
    <Counter name="Dimas" initial-count="20"/>
    <h1>First Counter Stateless</h1>
    <CounterStateless name="Bintang" :counter="counter"/>
    <h1>Second Counter Stateless</h1>
    <CounterStateless name="Dimas" :counter="counter"/>
    <button @click="counter++">Increment Counter</button>
</template>

<style scoped>

</style>