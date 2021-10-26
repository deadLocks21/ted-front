<template>
    <div class="todolist">
        <h1>{{ todolist.name }}</h1>
        <ul>
            <li>Task 01</li>
            <li>Task 02</li>
            <li>Task 03</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TodoListItem",
    props: ['todolist'],
}
</script>

<style>
.todolist {
    width: 90%;
    /* height: 8em; */
    background: white;
    margin-bottom: 1em;
    border-radius: 5px;
    padding: 1em;
}

.todolist > h1 {
    margin-top: 0;
}

.todolist > ul {
    margin-bottom: 0;
}
</style>