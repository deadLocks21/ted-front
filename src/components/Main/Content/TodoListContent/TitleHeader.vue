<template>
  <div id="title_header">
    <h1>{{ $store.state.displayed_todolist.name }}</h1>
    <SettingsMenu />
  </div>
</template>

<script>
import SettingsMenu from './SettingsMenu.vue'

export default {
  name: "TitleHeader",
  components: {
      SettingsMenu
  },
};
</script>

<style>
#title_header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#title_header > h1 {
  margin: 0;
  padding: 1em;
  font-size: 2em;
}
</style>