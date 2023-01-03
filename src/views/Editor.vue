<template>
    <div :key="task.id" v-for="task in tasks">
        <EditableAssignment :task="task" @updated="update"/>
    </div>
    <h1 v-if="noLeft()">No assignments left</h1>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "@vue/runtime-core";
    import EditableAssignment from "../components/EditableAssignment.vue";
    import assignment from "types/task";
    
    export default defineComponent({
        name: "Editor",
        components: {
            EditableAssignment
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
            },
        }
    })
</script>

<style scoped>
    h1 {
      font-family: 'Ubuntu', sans-serif;
    }
</style>