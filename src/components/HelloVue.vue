<script setup>
console.info("Hello Vue");

const hello = "<h1>Hello Vue</h1>"
const classHello = "hello";
const classHelloGold = "helloGold";
const id = "hello";
const buttonDisabled = true;
const data = {
    id: "hello",
    class: "hello"
}

function helloFunction() {
    return "Hello vue from function"
}
</script>

<template>
    <h1 :id v-bind:class="classHello">{{ hello }}</h1>
    <div :class="helloGold" v-html="hello"></div>
    <button :disabled="buttonDisabled">
        This is Button
    </button>
    <h2 v-bind="data">{{ hello }}</h2>
    <div :class="data.class" v-html="hello"></div>
    <h1 v-bind:data>{{ hello.toUpperCase() }}</h1>
    <h2>{{ 100 * 200 }}</h2>
    <div :class="classHelloGold">
        <h3>{{ helloFunction() }}</h3>
    </div>
</template>

<style scoped>
.hello {
    color: blue;
}
.helloGold {
    color: gold;
}
</style>