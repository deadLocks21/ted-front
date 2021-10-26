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
  overflow: hidden;
}
</style>

<script>
import Header from "../components/Main/Header/Header.vue";
import Content from "../components/Main/Content/Content.vue";

export default {
  name: "MainPage",
  beforeCreate() {
    fetch("/ted-api/todolists", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let todolists = data.todolists;
        todolists.forEach((element) => {element.tasks = []});
        this.$store.dispatch("setTodoLists", todolists);

        todolists.forEach((element) => {
          fetch(`/ted-api/tasks/listByTodolist/${element.id}`, {
            method: "GET",
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              data.tasks.forEach((element) => {
                this.$store.dispatch("addTask", element);
              });
            });
        });
      });
  },
  components: {
    Header,
    Content,
  },
};
</script>