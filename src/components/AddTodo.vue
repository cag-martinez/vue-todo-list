<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model='title' name="title" placeholder="add to-do" />
      <input type="submit" value="Submit" class="button" />
    </form>
  </div>
</template>

<script>
// Importing NPM pakage uuid
import uuid from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        // Calling on uuid package
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      // sending data to the parent
      this.$emit("add-todo", newTodo);

      this.title="";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
</style>