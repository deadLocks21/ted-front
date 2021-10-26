<template>
  <li @click="complete">
    <span v-if="!task.completed">
      <div class="checkbox"></div>
      {{ task.task }}
    </span>
    <span v-else>
      <div class="checkbox">X</div>
      <p class="completed">{{ task.task }}</p>
    </span>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  methods: {
    complete() {
      this.$store.dispatch("setComplete", {
        id: this.task.id,
        todolist_id: this.task.todolist,
        completed: !this.task.completed,
      });
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

li {
  list-style-type: none;
  font-size: 1.3em;
  cursor: pointer;
}

span {
  display: flex;
  align-items: center;
}

.completed {
  text-decoration: line-through;
}

.checkbox {
  width: 0.8em;
  height: 0.8em;
  margin-right: 0.3em;
  border: solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
</style>