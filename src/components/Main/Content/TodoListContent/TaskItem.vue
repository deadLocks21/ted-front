<template>
  <div>
    <li @click="complete" v-if="!$store.state.edit">
      <span v-if="!task.completed">
        <div class="checkbox"></div>
        {{ task.task }}
      </span>
      <span v-else>
        <div class="checkbox">X</div>
        <p class="completed">{{ task.task }}</p>
      </span>
    </li>
    <li v-else>
      <span>
        <ion-icon name="trash" @click="delete_task"></ion-icon>
        <input type="text" v-model="task_edit.task" />
      </span>
    </li>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  data() {
    return {
      task_edit: {},
    };
  },
  created() {
    this.task_edit = this.task;
  },
  methods: {
    complete() {
      this.$store.dispatch("setComplete", {
        id: this.task.id,
        completed: !this.task.completed,
      });
    },
    delete_task() {
      this.$store.dispatch("deleteTask", {id: this.task.id});
    }
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
  margin-bottom: 0.6em;
}

ion-icon {
  width: 1.3em;
  height: 1.3em;
}

input {
  font-size: 1.3em;
  width: 90%;
  border: none;
  border-bottom: solid rgba(0, 0, 0, 0.6) 1.5px;
  margin-left: 0.5em;
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