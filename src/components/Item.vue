<template>
<!-- Adding a conditional to bind a class and cross off the todo item that has been completed -->
    <div class="todo-item" v-bind:class="{'is-complete':todos.completed}">
        <p>{{todos.title}}</p>
    </div>    
</template>

<script>
export default {
    name: 'Item',
    props: ["todos"]
}
</script>

<style scoped>
.todo-item{
    background: rgb(135, 150, 150);
    padding: 20px;
    border-bottom: 1px rgb(88, 196, 114);
    }

.is-complete{
text-decoration: line-through crimson;

}
</style>