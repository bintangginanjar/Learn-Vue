<script setup>
import { onBeforeMount, onMounted, onUpdated, reactive, ref, useTemplateRef } from 'vue';

const notes = reactive([]);
const note = ref("");
const noteInput = useTemplateRef("noteInput");
const noteList = useTemplateRef("noteList");

function addNote() {
    notes.push(note.value);
    note.value = "";
    noteInput.value.focus();
    console.log(noteList.value)
    
    if (noteList.value) {
        noteList.value.forEach((li) => {
            console.log(li.textContent);
        })
    }
    
}

onBeforeMount(() =>{
    console.log(`on before mount`);
});

onMounted(() => {
    console.log(`on mounted`);
    noteInput.value.focus();
})

onUpdated(() => {
    console.log(`on updated`);
})
</script>

<template>
<h1>Create Note</h1>
<div>
    <input ref="noteInput" type="text" v-model="note" placeholder="Write your notes here">&nbsp;
    <button @click="addNote">Add Note</button>
</div>
<h1>Notes List</h1>
<ul>
    <li v-for="note in notes" ref="noteList">
        {{ note }}
    </li>
</ul>
</template>

<style scoped>
</style>