<script setup>
import { onWatcherCleanup, ref, watch, watchEffect } from 'vue';
import ProductDetail from './ProductDetail.vue';

const productId = ref("food");
const items = ref(null);

watchEffect(async() => {
    onWatcherCleanup(() => {
        console.log("Clean up");
    })

    console.log(`call watch callback`);
    const response = await fetch(`/${productId.value}.json`);
    items.value = await response.json();
})

/*
watch(productId, async(newVal, oldVal) => {
    console.log(`call watch callback`);
    //const response = await fetch(`/${newVal}.json`);
    //items.value = await response.json();
    
    if (newVal) {
        const response = await fetch(`/${newVal}.json`)
        items.value = await response.json()
    } else {
        items.value = null;
    }
    
},{
    immediate: true
})
*/
</script>

<template>
<label for="productId">
    Product ID :
    <select v-model="productId">        
        <option value="food">Food</option>
        <option value="drink">Drink</option>
        <option value="meal">Meal</option>
    </select>
</label>
<template v-if="items">
    <h1>Product</h1>
    <div v-for="item in items">
        <ProductDetail :id="item.id" :name="item.name" :price="item.price"/>
        <!--
        <p>Id : {{ item.id }}</p>
        <p>Name : {{ item.name }}</p>
        <p>Price : {{ item.price }}</p>
        -->
    </div>    
</template>
</template>

<style scoped>

</style>