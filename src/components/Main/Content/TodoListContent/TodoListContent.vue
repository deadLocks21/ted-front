<template>
  <section>
    <article>
      <h1>Contenu de ma TodoList à afficher ^^</h1>
    </article>
  </section>
</template>

<script>
export default {
  name: "TodoListContent",
};
</script>

<style scoped>
section {
  height: 100%;
  width: 57.5%;
}

article {
  width: 90%;
  /* height: 70%; */
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
}
</style>