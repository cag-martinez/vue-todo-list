<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  //function
  data() {
    //that will return an object of todos
    return {
      todos: [
        {
          id: 1,
          title: "learn javascript",
          completed: false
        },
        {
          id: 2,
          title: "learn vue.js",
          completed: false
        },
        {
          id: 3,
          title: "get a job",
          completed: false
        }
      ]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 00;
  padding: 00;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
</style>
