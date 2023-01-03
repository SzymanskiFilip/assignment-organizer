<template>
  <div class="container">
    <div class="button-row">
      <Button buttonTitle="Home" bgColor="#00c853"/>
      <Button pathToNavigate="/done" buttonTitle="Done" bgColor="#2962ff"/>
      <Button pathToNavigate="/editor" buttonTitle="Editor" bgColor="black"/>
    </div>
    <router-view :tasks="assignments"/>
  </div>
  
</template>
<script lang="ts">
import Button from "./components/Button.vue";

  export default {
    name: 'App',
    components: {
      Button
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
      }
    }
  }
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

</style>