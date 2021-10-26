<template>
  <li @click="this.$store.dispatch('addNewTask');">
    <span>
      <div class="add">+</div>
      Ajouter une tâche
    </span>
  </li>
</template>

<script>
export default {
  name: "AddNewTask",
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

.add {
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