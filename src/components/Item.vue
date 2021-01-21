<template>
    <div>
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
    background: cadetblue;
    padding: 20px;
    border-bottom: 1px darkblue;
    }

    
</style>