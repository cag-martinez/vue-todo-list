<template>
    <div>
        <!-- v-for will loop through all of my todos. 
        todo can be called anything, the second todos is the name of my array of objects -->
        <div v-bind:key="todos.id" v-for="todos in todos">
            <h3> {{ todos.title }} </h3>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Todos',
    props:['todos']    
}
</script>
<style scoped>

</style>