<template>
  <button id="disconnect" @click="disconect">Déconnexion</button>
</template>

<script>
export default {
  name: "DisconnectionButton",
  methods: {
    disconect() {
      this.$store.dispatch('login', false);
    }
  },
  components: {},
};
</script>

<style>
#disconnect {
  height: 2em;
  border-radius: 5px;
  background-color: #ec3e1e;
  color: white;
  border: none;
  font-size: 1.1em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 1em;
  margin-right: 1em;
  cursor: pointer;
}
</style>