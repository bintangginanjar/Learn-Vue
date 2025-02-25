<script setup>
import { reactive } from 'vue';


const contact = reactive({
    name: "",
    email: "",
    age: 0,
    type: "regular",
    complain: false,
    message: ""
})
</script>

<template>
<h1>Contact Us</h1>
<form>
    <div>
        <label for="name">Name : 
            <input type="text" id="name" v-model="contact.name">
        </label>        
    </div><br>
    <div>
        <label for="email">Email :
            <input type="text" id="email" v-model="contact.email">
        </label>        
    </div><br>
    <div>
        <label for="age">Age :
            <input type="number" id="age" v-model="contact.age">
        </label>
    </div><br>
    <div>
        <label for="type">Type :
            <select type="number" id="type" v-model="contact.type">
                <option value="regular">Regular</option>
                <option value="vip">VIP</option>
            </select>        
        </label>
    </div><br>
    <div>
        <label for="complain">Complain :
            <input type="checkbox" id="complain" v-model="contact.complain">
        </label>
    </div><br>
    <div>
        <label for="message">Message :
            <textarea id="message" v-model="contact.message"></textarea>
        </label>
    </div>        
</form>
<h1>Preview</h1>
<div>
    <p>Name : {{ contact.name }}</p>
    <p>Email : {{ contact.email }}</p>
    <p>Age : {{ contact.age }}</p>
    <p>Type : {{ contact.type }}</p>
    <p>Complain : {{ contact.complain }}</p>
    <p>Message : {{ contact.message }}</p>
</div>
</template>