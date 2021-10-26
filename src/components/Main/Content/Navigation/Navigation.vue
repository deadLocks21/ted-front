<template>
  <nav>
    <TodoListItem
      v-for="item in $store.state.todolists"
      :key="item"
      :todolist="item"
    />
  </nav>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "Navigation",
  components: {
    TodoListItem,
  },
};
</script>

<style scoped>
nav {
  width: 37.5%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: none;
  scrollbar-color: rgba(0, 0, 0, 0.6) #f6f3f0;
}

nav::-webkit-scrollbar {
  width: 8px;
}

nav::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
}
</style>