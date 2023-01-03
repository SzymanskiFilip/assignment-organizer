<template>
  <div class="container">
    <div class="button-row">
      <Button buttonTitle="Home" bgColor="#00c853"/>
      <Button pathToNavigate="/done" buttonTitle="Done" bgColor="#2962ff"/>
      <Button pathToNavigate="/editor" buttonTitle="Editor" bgColor="black"/>
      <button class="add" @click="addPopUp">Add</button>
    </div>
    <router-view :tasks="assignments"/>
    <creation-pop-up v-if="creationPopUp" @cancel-pop-up="cancelPopUp" @add-assignment="addAssignment($event)"/>
  </div>
  
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import assignment from "types/task";
import Button from "./components/Button.vue";
import CreationPopUp from "./components/CreationPopUp.vue";

  export default defineComponent({
    name: 'App',
    components: {
      Button,
      CreationPopUp
    },
    data(){
      return {
        assignments: [
          {
            id: 1,
            name: "Math p. 200",
            date: "12.01.2022",
            subject: "MATH",
            done: false,
          },
          {
            id: 2,
            name: "English Text",
            date: "17.01.2022",
            subject: "ENG",
            done: false,
          },
        ],
        creationPopUp: false,
      }
    },
    methods: {
      addPopUp(){
        console.log("TEST")
        this.creationPopUp = true;
      },
      cancelPopUp(){
        this.creationPopUp = false;
      },
      addAssignment(newAssignment: assignment){
        this.assignments.push(newAssignment);
        this.creationPopUp = false;
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

    width: 50vw;
    height: 50vh;
    padding: 1rem;
    border: 1px solid black;
  }

  .button-row{
    display: flex;
    gap: 10px;
  }

  .add{
    background-color: #00c853;
    color: white;
    padding: 0.4rem;
    border-radius: 3px;
    border: none;
    transition: 0.3s;
  }

  .add:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgb(197, 189, 189);
  } 

</style>