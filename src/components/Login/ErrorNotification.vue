<template>
  <div v-if="error" id="error">
    <p>{{ error_name }}</p>
  </div>
</template>

<script>
export default {
  name: "ErrorNotification",
  props: ["error_name", "error"],
};
</script>

<style>
#error {
  border: solid #ec3e1e 0.1em !important;
  background-color: rgba(236, 62, 30, 0.6);
  width: 20%;
  padding-right: 1em;
  padding-left: 1em;
  border-radius: 5px;
  margin-bottom: 1em;
}

#error > p {
  text-align: center;
  color: white;
  font-size: 0.9em;
}

@media only screen and (max-device-width: 812px) {
  #error {
    width: 70%;
  }
}
</style>