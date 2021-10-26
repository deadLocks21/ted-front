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

<style scoped>
@media only screen and (max-device-width: 812px) {
  .todolist > h1 {
    text-align: center;
    margin-right: 1em;
  }
}
</style>