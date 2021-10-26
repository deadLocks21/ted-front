<template>
  <section id="main">
    <Header />
    <Content />
  </section>
</template>

<style>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding-bottom: 1em;
}
</style>

<script>
import Header from "../components/Main/Header/Header.vue";
import Content from "../components/Main/Content/Content.vue";

export default {
  name: "MainPage",
  beforeMount() {
    this.$store.dispatch("setTodoList", [
      {
        id: 1,
        name: "My fisrt todolist",
        user: 1,
      },
      {
        id: 3,
        name: "My thrid todolist",
        user: 1,
      },
    ]);
    // TODO Load data
  },
  components: {
    Header,
    Content,
  },
};
</script>