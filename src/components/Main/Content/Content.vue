<template>
  <div class="row">
    <nav>
      <Navigation />
    </nav>
    <article>
      <TodoListContent />
    </article>
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
  flex: 1 1 auto;
  display: flex;
  justify-content: space-around;
}

nav {
  width: 37.5%;
}

article {
  width: 57.5%;
}
</style>