<script setup>
import { computed, reactive, ref } from 'vue';

const person = reactive({
    firstName : "",
    lastName : ""
})

function sayHello() {
    person.firstName = document.getElementById('firstname').value;
    person.lastName = document.getElementById('lastname').value;
}

const fullName = computed((oldName) => {
    console.log(`Change oldname ${oldName}`);
    return `${person.firstName} ${person.lastName}`;
})

const counter = ref(0);

function increment() {
    console.log("Increment called");
    counter.value++;
}

function changeFirstName(event) {
    person.firstName = event.target.value;
    //person.firstName = document.getElementById('firstname').value;
}

function changeLastName(event) {
    person.lastName = event.target.value
    //person.lastName = document.getElementById('lastname').value;
}

</script>

<template>
    <form>
        <div>
            <button v-on:click="counter++">Increment</button><br>
            <h1>{{ counter }}</h1>
        </div>
        <div>        
            <input placeholder="First name" type="text" id="firstname" @input="changeFirstName"><br>
            <input placeholder="Last name" type="text" id="lastname" @input="changeLastName"><br>
            <button v-on:click.prevent="sayHello">Say Hello</button>
        </div>
    </form>    
    <!--<h1>Hello {{ person.firstName }} {{ person.lastName }}</h1>-->
    <h1>Hello {{ fullName }}</h1>
</template>

<style scoped>
</style>