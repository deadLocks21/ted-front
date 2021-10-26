<template>
  <!-- <Login v-if="!$store.state.connected" /> -->
  <!-- <DisplayData v-if="$store.state.connected" /> -->
  <Login v-if="$store.state.connected" />
  <DisplayData v-if="!$store.state.connected" />
</template>

<style lang="less">
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
import DisplayData from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    Login,
    DisplayData,
  },
};
</script>
