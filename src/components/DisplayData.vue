<template>
    <section id="main">
      <Header />
    </section>
</template>

<style>
#main {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Header from './Header.vue'

export default {
  name: "DisplayData",
  components: {
    Header
  },
};
</script>