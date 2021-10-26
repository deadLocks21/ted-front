<template>
  <div class="main">
    <div id="delete_dialog">
      <h1>Supprimer</h1>
      <p>Etes-vous sur de vouloir supprimer la todolist {{ $store.state.displayed_todolist.name }} ?</p>
      <div class="choice">
          <button @click="$store.dispatch('setDeleteMode', {message: false})">NON</button>
          <button @click="$store.dispatch('deleteTodoList')">SUPPRIMER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeletePage",
};
</script>

<style scoped>
div.main {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
}

#delete_dialog {
  margin: auto;
  opacity: 1;
  width: 20%;
  background-color: white;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
#delete_dialog > h1 {
    margin: 0;
}

.choice {
    text-align: end;
}

button {
  height: 1.6em;
  border-radius: 5px;
  background-color: #ec3e1e;
  color: white;
  border: none;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 1em;
  margin-left: 1em;
}
</style>