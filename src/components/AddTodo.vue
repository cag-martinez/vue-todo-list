<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" placeholder="add to-do" />
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
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        // Calling on uuid package
        id: uuid.v4(),
        title: this.title,
        completed: false
      };
      // sending data to the parent
      this.$emit("add-todo", newTodo);

      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  padding: 2.05px;
  
}
input [type="text"] {
  /* flex: 2; */
  padding: 5px;
}

input [type="submit"] {
  flex: 2;
  padding-left: 5px;
  border: 5px;
}
</style>