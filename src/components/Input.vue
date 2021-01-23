<template>
  <div>
    <form @submit.prevent="$input">
      <input type="text" v-model="title" name="title" placeholder="add to-do" />
      <input type="submit" value="Submit" class="button" />
    </form>
  </div>
</template>

<script>
// Importing NPM pakage uuid
import uuid from "uuid";

export default {
  name: "Input",
  data() {
    return {
      title: ""
    }
  },
  methods: {
    Input() {
      const todos = {
        // Calling on uuid package
        id: uuid(),
        title: this.title,
        completed: false
      }
      // sending data to the parent
      this.$emit("add-todo", todos);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
</style>