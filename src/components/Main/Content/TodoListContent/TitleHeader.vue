<template>
  <div id="title_header">
    <h1 v-if="!$store.state.edit">
      {{ $store.state.displayed_todolist.name }}
    </h1>
    <input v-else type="text" v-model="$store.state.displayed_todolist.name" />
    <SettingsMenu />
  </div>
</template>

<script>
import SettingsMenu from "./SettingsMenu.vue";

export default {
  name: "TitleHeader",
  components: {
    SettingsMenu,
  },
};
</script>

<style>
#title_header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#title_header > h1,
#title_header > input {
  margin: 1em;
  font-size: 2em;
  font-weight: bold;
}

#title_header > input {
  border: none;
  border-bottom: solid rgba(0, 0, 0, 0.6) 1.5px;
}

@media only screen and (max-device-width: 812px) {
  #title_header > h1 {
    margin-bottom: 0;
  }

  #title_header > input {
    width: 90%;
    margin-bottom: 0;
  }
}
</style>