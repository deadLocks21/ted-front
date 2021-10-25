<template>
  <header id="app_header">
    <WelcomeMessage />
    <DisconnectionButton />
  </header>
</template>

<style>
#app_header {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import WelcomeMessage from '../views/WelcomeMessage.vue'
import DisconnectionButton from './DisconnectionButton.vue'

export default {
  name: "Header",
  components: {
      WelcomeMessage,
      DisconnectionButton,
  },
};
</script>