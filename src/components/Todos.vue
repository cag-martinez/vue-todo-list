<template>
  <div>
    <!-- v-for will loop through all of my todos. 
    todo can be called anything, the second todos is the name of my array of objects-->
    <div v-bind:key="todos.id" v-for="todos in todos">
      <!-- using this h3 element I am pasing the title of the todos to render on the screen -->
      <Item />
    </div>
  </div>
</template>

<script>
//Importing the Item component
import Item from './Item.vue'

//Must add the component here also
export default {
  name: "Todos",
  components: {Item},
  props: ["todos"]
};
</script>
<style scoped>
</style>