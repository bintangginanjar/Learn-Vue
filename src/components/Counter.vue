<script setup>
    import { nextTick, ref } from 'vue';

    console.log('Counter component loaded');
    //let count = ref(0);

    const props = defineProps(["name", "initialCount"]);    

    let counter = ref({
        count: Number(props.initialCount),
        name: "Bintang"
    });

    async function increment() {        
        console.log('Count increased');
        //count.value++
        counter.value = {
            name : counter.value.name,
            count : counter.value.count + 1
        };

        await nextTick();

        console.log("Increment count after nexttick")
        //document.getElementById('count').innerText = `Counter : ${count}`;
    }
</script>

<template>
    <div>
        <h2 id="count">Counter : {{ counter.count }}</h2>
        <h2 id="count">Name : {{ props.name }}</h2>
        <button v-on:click="increment">Add Up</button>        
    </div>
</template>