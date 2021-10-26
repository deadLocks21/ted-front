<template>
    <li v-if="task !== undefined">
        <p v-if="!task.completed">{{ task.task }}</p>
        <p v-else class="completed">{{ task.task }}</p>
      </li>
</template>

<script>
export default {
    name: "TodoItem",
    props: ['task']
}
</script>

<style scoped>
p {
    margin: 0;
}

li {
    list-style-type: none;
}

.completed {
    text-decoration:line-through;
}
</style>