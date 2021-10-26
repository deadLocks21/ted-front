<template>
  <header id="app_header">
    <WelcomeMessage />
    <DisconnectionButton />
  </header>
</template>

<style>
header {
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import WelcomeMessage from './WelcomeMessage.vue'
import DisconnectionButton from './DisconnectionButton.vue'

export default {
  name: "Header",
  components: {
      WelcomeMessage,
      DisconnectionButton,
  },
};
</script>