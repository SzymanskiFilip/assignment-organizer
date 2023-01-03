<template>
    <div :key="task.id" v-for="task in tasks">
        <Assignment 
        v-if="!task.done"
        :task="task"
        />
    </div>
    <h1 v-if="noLeft()">No assignments left</h1>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "@vue/runtime-core";
    import assignment from "types/task";
    import Assignment from "../components/Assignment.vue";
    
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
            noLeft(){
                let noLeft = true;
                this.tasks.forEach(task => {
                    if(!task.done){
                        noLeft = false;
                    }
                })
                return noLeft;
            }
        }
    })
</script>

<style scoped>
    h1 {
      font-family: 'Ubuntu', sans-serif;
    }
</style>