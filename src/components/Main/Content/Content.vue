<template>
  <div class="row">
    <Navigation />
    <TodoListContent />
  </div>
</template>

<script>
import Navigation from "./Navigation/Navigation.vue";
import TodoListContent from "./TodoListContent/TodoListContent.vue";

export default {
  name: "Content",
  components: {
    Navigation,
    TodoListContent,
  },
};
</script>

<style scoped>
.row {
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-device-width: 812px) {
  .row {
    flex-direction: column;
  }
}
</style>