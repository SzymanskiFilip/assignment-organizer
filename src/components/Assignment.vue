<template>
    <div class="row">
        <h1>{{task.name}}</h1>
        <h1>{{task.date}}</h1>
        <h1>{{task.subject}}</h1>
        <input type="checkbox" v-model="task.done" />
    </div>
</template>

<script lang="ts">
    export default {
        name: "Assignment",
        props: {
           task: {
            type: Object
           }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');
    .row{
        margin-top: 10px;
        display: flex;
        border: 1px solid black;
        justify-content: space-e;
        font-family: 'Ubuntu', sans-serif;
    }

    .row h1 {
        flex: 1;
        text-align: center;
        border-right: 1px solid black;
        padding: 5px;
        margin: 0;
    }

    .row input {
        width: 20px;
        margin: 10px;
    }
</style>