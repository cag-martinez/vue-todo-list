<template>
  <div id="app">
    <!-- enveding the header component here -->
    <Header />
    <div id="nav">
    <router-view>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link> ||
    <router-link to="/Landing">Go to Home</router-link> ||
    <router-link to="/Todos">Go to Todos</router-link>
    </router-view>
    </div>
  
    
    <!-- enveding the Input component here -->
    <AddTodo v-on:add-todo="addTodo" />
    <!-- enveding component and using V-bind directive to call on the todos -->
    <Todos v-bind:todos="todos" v-on:delete-todo='deleteTodo' />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Importing Todos component
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import Todos from './components/Todos'
//import Landing from './components/Landing'



export default {
  name: "App",
  components: {
  //Here I am passing the Todos component
  Header,
  Todos,
  AddTodo,
  // Vue,
  // VueRouter
  
  },
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
    }

  },
        methods:{
          deleteTodo(id){
            this.todos = this.todos.filter(todos => todos.id !== id);
          },
          addTodo(newTodo){
            this.todos = [...this.todos, newTodo]
            }
}
}





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
  background: silver;
}

.button {
  display: inline-block;
  border:darkgray;
  padding: 2px;
  /* padding: 7px 20px; */
  background: black;
  color: whitesmoke;
  cursor: pointer;
}
.button:hover{
  background: darkseagreen;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
