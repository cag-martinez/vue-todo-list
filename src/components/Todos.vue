<template>
  <div>
    <!-- v-for will loop through all of my todos. 
    todo can be called anything, the second todos is the name of my array of objects-->
    <div v-bind:key="todos.id" v-for="todos in todos">
      <!-- Passing each todo / binding each individual todo to Item from todos -->
      <Item v-bind:todos="todos" v-on:delete-todos="$emit('delete-todos', todos.id)"/>
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