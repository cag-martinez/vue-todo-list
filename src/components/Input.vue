<template>
    <div>
        <form>
        <input type="text" name="title" placeholder="add to-do" >
        <input type="submit" value="Submit" class="button" >
        </form>
    </div>
</template>

<script>
export default {
name: "Input"    
}
</script>

<style scoped>
form {
    align-items: flex;
}
</style>