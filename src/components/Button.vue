<template>
    <button 
    @click.prevent="goToPath()"
    v-bind:style="{backgroundColor: this.bgColor}"
    >
    {{buttonTitle}}</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"


    export default defineComponent({
        data(){
            return{
                
            }
        },
        props: {
            pathToNavigate: {
                type: String,
                default: "/"
            },
            buttonTitle: {
                type: String,
                default: "Button"
            },
            bgColor: {
                type: String,
                default: "white"
            }
        },
        methods: {
            goToPath(){
                this.$router.push(this.pathToNavigate)
            }
        }
    })
</script>

<style scoped>
    button{
        color: white;
        padding: 0.4rem;
        border-radius: 3px;
        border: none;
        transition: 0.3s;
    }

    button:hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px rgb(197, 189, 189);
    }
</style>