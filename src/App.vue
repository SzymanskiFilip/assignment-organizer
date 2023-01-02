<template>
  <div class="container">
    <div class="button-row">
      <Button buttonTitle="Home" bgColor="#00c853"/>
      <Button pathToNavigate="/editor" buttonTitle="Editor" bgColor="black"/>
    </div>
    <router-view/>
  </div>
  
</template>
<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
import Button from "./components/Button.vue";

  export default {
    name: 'App',
    components: {
      Button
    },
    data(){
      return {
        assignments: [],
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