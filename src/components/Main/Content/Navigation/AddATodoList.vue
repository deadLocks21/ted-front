<template>
  <div class="todolist" @click="addATodo"><h1>Ajouter une todolist</h1></div>
</template>

<script>
export default {
  name: "AddATodoList",
  methods: {
    addATodo() {
      this.$store.dispatch("addNewTodolist");
    },
  },
};
</script>