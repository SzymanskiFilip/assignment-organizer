<template>
    <div :key="task.id" v-for="task in tasks">
        <Assignment 
        v-if="task.done"
        :task="task"
        />
    </div>
    <h1 v-if="noFinished()">No assignments were finished</h1>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "@vue/runtime-core";
    import Assignment from "../components/Assignment.vue";
    import assignment from "../../types/task";
    
    export default defineComponent({
        name: "Home",
        components: {
            Assignment,
        },
        props: {
            tasks: {
                type: Array as PropType<assignment[]>,
                default: []
            }
        },
        methods: {
            noFinished(){
                let noFinished = true;
                this.tasks.forEach(task => {
                    if(task.done){
                        noFinished = false;
                    }
                })
                return noFinished;
            }
        }
    })
</script>

<style scoped>
    h1 {
      font-family: 'Ubuntu', sans-serif;
    }
</style>