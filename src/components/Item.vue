<template>
  <!-- Adding a conditional to bind a class and cross off the todo item that has been completed -->
  <div class="todo-item" v-bind:class="{'is-complete':todos.completed}">
    <p>
      <!-- adding a check box with a change event using the v-on directive 
      and calling it markComplete-->
      <input type="checkbox" v-on:change="markComplete" />
      {{todos.title}}
      <button @click="$emit('delete-todo', todos.id)" class="delete"> Delete </button>
    </p>
  </div>
</template>

<script>
// added a method to called markComplete to cross of the completed items
export default {
  name: "Item",
  props: ["todos"],
  methods:{
      markComplete(){
      this.todos.completed = !this.todos.completed
          }
      }
};
</script>

<style scoped>
.todo-item {
  background: rgb(135, 150, 150);
  padding: 20px;
  border-bottom: 1px rgb(88, 196, 114);
}

.is-complete {
  text-decoration: line-through crimson;
}

.delete{
    background-color: rgba(220, 20, 60, 0.564);
    float: right;
    }
</style>