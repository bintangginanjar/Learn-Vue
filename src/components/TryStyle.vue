<script setup>
import { ref } from 'vue';

const array = ["red", "bold"];

const red = ref(false);
const bold = ref(false);

const styleRed = {
    color : "red"
}

const styleBold = {
    textTransform : "uppercase",
    fontWeight : "bold"
}

function toggleRed() {    
    red.value = !red.value;
    console.log(`Red value : `, red.value);
}

function toggleBold() {    
    bold.value = !bold.value;
    console.log(`Bold value : `, bold.value);
}
</script>

<template>
    <h1 :class="{red: red, bold: bold}">Style</h1>
    <h1 :class="array">Style</h1>
    <button v-on:click="toggleRed">Red</button>
    <button v-on:click="toggleBold">Bold</button>

    <h1 :style="styleRed">Style Red</h1>
    <h1 :style="[styleBold, styleRed]">Style Bold & Red</h1>
</template>

<style scoped>
.red {
    color: red;
}

.bold {
    text-transform: uppercase;
    font-weight: bold;
}
</style>