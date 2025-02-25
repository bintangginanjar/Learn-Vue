<script setup>
    const items = [{
        id: 1,
        text: 'Learn Vue 3',
        done: true
    },{
        id: 2,
        text: 'Learn Vue Router',
        done: false
    },{
        id: 3,
        text: 'Learn Vuex',
        done: true
    },{
        id: 4,
        text: 'Learn Vue Directive',
        done: true
    }]
</script>

<template>
    <h1>To Do List</h1>
    <div v-for="item in items">
        <ul v-bind:key="item.id" v-if="!item.done">
            <li v-for="(value, key) in item" v-bind:key="key">                
                {{ key }} : {{ value }}                
            </li>
        </ul>
    </div>
    <div v-for="n in 10">
        <h1>{{ n }}</h1>
    </div>
</template>

<style scoped>

</style>