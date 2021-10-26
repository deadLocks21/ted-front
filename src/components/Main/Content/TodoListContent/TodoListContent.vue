<template>
  <section>
    <h1>{{ $store.state.displayed_todolist.name }}</h1>
    <ul>
      <TaskItem v-for="item in $store.state.displayed_todolist.tasks" :key="item" :task="item" @task-complete="setComplete" />
      <AddNewTask />
    </ul>
  </section>
</template>

<script>
import TaskItem from './TaskItem.vue'
import AddNewTask from './AddNewTask.vue'

export default {
  name: "TodoListContent",
  components: {
    TaskItem,
    AddNewTask
  },
  methods: {
    setComplete(payload) {
      console.log(payload)
    }
  }
};
</script>

<style scoped>
section {
  height: 90%;
  width: 57.5%;
  background-color: white;
  margin-right: 1em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

h1 {
  margin: 0;
  padding: 1em;
  font-size: 2em;
}

ul {
  width: 90%;
  margin-bottom: 2em;
  overflow-y: scroll;
  scrollbar-color: rgba(0, 0, 0, 0.6) #f6f3f0;
}

ul::-webkit-scrollbar {
  width: 8px;
}

ul::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
}
</style>