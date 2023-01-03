<template>
    <div class="row">
        <input type="text" v-model="task.name">
        <input type="text" v-model="task.date">
        <input type="text" v-model="task.subject">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Button from "../components/Button.vue";

    export default defineComponent({
        name: "EditableComponent",
        components: {
            Button,
        },
        props: {
            task: {
                type: Object
            }
        },
        data() {
            return {
                task: this.task,
            }
        },
    })
</script>

<style scoped>
    .row input {
        flex: 1;
    }
    button {
        background-color: #aa00ff;
        border: none;
        margin: 5px;
        border-radius: 5px;
        color: white;
    }

    button:hover{
        cursor: pointer;
    }
</style>

