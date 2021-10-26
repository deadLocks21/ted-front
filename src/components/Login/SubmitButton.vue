<template>
  <button @click="connect">Connexion</button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: ['login', 'password', 'error_method'],
  methods: {
    async connect() {
      let error = false;

      if (this.password == "") {
        this.error_method(2);
        error = true;
      }

      if (this.login == "") {
        this.error_method(1);
        error = true;
      }

      if (!error) {
        try {
          let response = await fetch("/ted-api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `login=${this.login}&password=${this.password}`,
          });

          let data = await response.json();

          error = true;
          switch (data.code) {
            case 0:
              this.error_method(3);
              break;
            case 1:
              this.error_method(4);
              break;
            case 2:
              error = false;
              this.$store.dispatch("login", true);
              break;
          }
        } catch (try_error) {
          this.error_method(3);
        }
      }
    },
  },
};
</script>

<style>
#login > button {
  background-color: #ec3e1e;
  color: white;
  width: 70%;
  border: none;
  font-size: 1.1em;
  margin-top: 1em;
}
</style>