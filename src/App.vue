<template>
  <Login v-if="!$store.state.connected" />
  <MainPage v-if="$store.state.connected" />
  <!-- <Login v-if="$store.state.connected" /> -->
  <!-- <MainPage v-if="!$store.state.connected" /> -->
  <DeletePage v-if="$store.state.delete" />
</template>

<style>
html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f3f0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
</style>

<script>
import Login from "./views/LoginPage.vue";
import MainPage from "./views/MainPage.vue";
import DeletePage from "./views/DeletePage.vue";

export default {
  name: "App",
  components: {
    Login,
    MainPage,
    DeletePage,
  },
};
</script>
