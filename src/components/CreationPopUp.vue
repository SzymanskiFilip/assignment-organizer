<template>
    <div class="container">
        <input type="text" placeholder="Assignment" v-model="inputData.name">
        <input type="text" placeholder="Date" v-model="inputData.date">
        <input type="text" placeholder="Subject" v-model="inputData.subject">
        <div class="btn-row">
            <button @click="add">ADD</button>
            <button @click="cancel">CANCEL</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
        name: "CreationPopUp",
        methods: {
            add(){
                this.$emit('add-assignment', this.inputData);
            },
            cancel(){
                this.$emit('cancel-pop-up');
            }
        },
        data() {
            return {
                inputData: {
                    name: '',
                    date: '',
                    subject: '',
                    done: false,
                }
            }
        }
    })
</script>

<style scoped>
    .container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;

    width: 50vw;
    height: 50vh;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .btn-row {
    display: flex;
    gap: 10px;
  }

  .container input {
    border: none;
    border-bottom: 1px solid black;
  }

  .container input:focus{
    outline: none;
  }

  .container button {
    color: white;
    background-color: rgb(118, 214, 142);
    border: none;
    padding: 10px;
    border-radius: 10px;
    transition: 0.3s;
  }

  .container button:hover{
    cursor: pointer;
    box-shadow: 0px 0px 10px rgb(206, 224, 206);
  }

  .container button:nth-child(2){
    background-color: rgb(253, 55, 55);
  }
</style>