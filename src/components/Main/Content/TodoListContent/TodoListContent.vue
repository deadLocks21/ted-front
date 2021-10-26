<template>
  <section>
    <TitleHeader />
    <ul>
      <TaskItem v-for="item in $store.state.displayed_todolist.tasks" :key="item" :task="item" @task-complete="setComplete" />
      <AddNewTask v-if="$store.state.edit" />
    </ul>
  </section>
</template>

<script>
import TaskItem from './TaskItem.vue'
import AddNewTask from './AddNewTask.vue'
import TitleHeader from './TitleHeader.vue'

export default {
  name: "TodoListContent",
  components: {
    TaskItem,
    AddNewTask,
    TitleHeader
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

ul {
  width: 90%;
  margin-bottom: 2em;
  overflow-y: scroll;
  scrollbar-color: rgba(0, 0, 0, 0.6) #fff;
}

ul::-webkit-scrollbar {
  width: 8px;
}

ul::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
}
</style>