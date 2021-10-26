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
  beforeMount() {
    this.$store.dispatch("setTodoLists", [
      {
        id: 1,
        name: "My fisrt todolist",
        user: 1,
        tasks: [
          {
            id: 1,
            task: "My first task",
            completed: false,
            todolist: 1,
          },
          {
            id: 2,
            task: "My second completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 3,
            task: "My third task",
            completed: false,
            todolist: 1,
          },
          {
            id: 4,
            task: "My forth completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 5,
            task: "My five task",
            completed: false,
            todolist: 1,
          },
        ],
      },
      {
        id: 2,
        name: "My second todolist",
        user: 1,
        tasks: [
          {
            id: 1,
            task: "My first task",
            completed: false,
            todolist: 1,
          },
          {
            id: 2,
            task: "My second completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 3,
            task: "My third task",
            completed: false,
            todolist: 1,
          },
          {
            id: 4,
            task: "My forth completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 5,
            task: "My five task",
            completed: false,
            todolist: 1,
          },
        ],
      },
      {
        id: 3,
        name: "My thrid todolist",
        user: 1,
        tasks: [
          {
            id: 1,
            task: "My first task",
            completed: false,
            todolist: 1,
          },
          {
            id: 2,
            task: "My second completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 3,
            task: "My third task",
            completed: false,
            todolist: 1,
          },
        ],
      },
      {
        id: 4,
        name: "My 4 todolist",
        user: 1,
        tasks: [],
      },
      {
        id: 5,
        name: "My 5 todolist",
        user: 1,
        tasks: [
          {
            id: 1,
            task: "My first task",
            completed: false,
            todolist: 1,
          },
          {
            id: 2,
            task: "My second completed task",
            completed: true,
            todolist: 1,
          },
        ],
      },
      {
        id: 6,
        name: "My 6 todolist",
        user: 1,
        tasks: [
          {
            id: 1,
            task: "My first task",
            completed: false,
            todolist: 1,
          },
          {
            id: 2,
            task: "My second completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 3,
            task: "My third task",
            completed: false,
            todolist: 1,
          },
        ],
      },
      {
        id: 7,
        name: "My 7 todolist",
        user: 1,
        tasks: [
          {
            id: 1,
            task: "My first task",
            completed: false,
            todolist: 1,
          },
          {
            id: 2,
            task: "My second completed task",
            completed: true,
            todolist: 1,
          },
          {
            id: 3,
            task: "My third task",
            completed: false,
            todolist: 1,
          },
        ],
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