<template>
  <nav>
    <TodoListItem
      v-for="item in $store.state.todolists"
      :key="item"
      :todolist="item"
    />
    <AddATodoList />
  </nav>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import AddATodoList from "./AddATodoList.vue";

export default {
  name: "Navigation",
  components: {
    TodoListItem,
    AddATodoList,
  },
};
</script>

<style scoped>
nav {
  width: 37.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  scrollbar-color: rgba(0, 0, 0, 0.6) #f6f3f0;
}

nav::-webkit-scrollbar {
  width: 8px;
}

nav::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
}

@media only screen and (min-device-width: 811px) {
  nav {
    height: 90%;
  }
}

@media only screen and (max-device-width: 812px) {
  nav {
    width: 90%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-left: 1em;
  }
}
</style>