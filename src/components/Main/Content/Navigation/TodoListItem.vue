<template>
  <div class="todolist" @click="click">
    <h1>{{ todolist.name }}</h1>
    <ul>
        <TodoItem v-for="index in 3" :task="todolist.tasks[index - 1]" :key="index"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoListItem",
  props: ["todolist"],
  components: {
      TodoItem
  },
  methods: {
      click() {
        this.$store.dispatch("setDisplayed", this.todolist);
      }
  }
};
</script>

<style>
.todolist {
  width: 90%;
  background: white;
  margin-bottom: 1em;
  border-radius: 5px;
  padding: 1em;
  cursor: pointer;
}

.todolist > h1 {
  margin: 0;
}

.todolist > ul {
  margin: 0;
}
</style>