<template>
  <div v-if="login_error" id="error">
    <p>{{ error_name }}</p>
  </div>
  <div id="login">
    <p>Nom d'utilisateur</p>
    <input type="text" name="login" v-model="login" />
    <br />
    <p>Mot de passe</p>
    <input type="password" name="password" v-model="password" />
    <br />
    <button @click="connect">Connexion</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      login_error: false,
      error_name: "Erreur",
    };
  },
  methods: {
    async connect() {
      this.login_error = false;

      if (this.password == "") {
        this.error_name = "Mot de passe vide.";
        this.login_error = true;
      }

      if (this.login == "") {
        this.error_name = "Nom d'utilisateur vide.";
        this.login_error = true;
      }

      if (this.login_error == false) {
        let response = await fetch(
          "https://timothe.hofmann.fr/ted-api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `login=${this.login}&password=${this.password}`,
          }
        );

        let data = await response.json();

        this.login_error = true;
        switch (data.code) {
          case 0:
            this.error_name =
              "Une erreur est survenue lors du traitement de la requete, encore désolé.";
            break;
          case 1:
            this.error_name = "Nom d'utilisateur ou mot de passe incorrect.";
            break;
          case 2:
            this.login_error = false;
            this.$store.dispatch('login', true);
            break;
        }
      }
    },
  },
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

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background-color: white;
  padding: 1em;
  border-radius: 5px;
}

#login > p {
  margin-bottom: 0.2em;
  font-size: 1.1em;
  text-align: left;
  width: 100%;
}

#login > p:first-of-type {
  margin-top: 0;
}

#login > input,
#login > button {
  height: 2em;
  border-radius: 4px;
}

#login > input {
  border: solid black 0.1em;
  width: 100%;
}

#login > input:hover {
  border: solid black 0.12em;
  background-color: #eeeeee;
}

#login > button {
  background-color: #ec3e1e;
  color: white;
  width: 70%;
  border: none;
  font-size: 1.1em;
  margin-top: 1em;
}
</style>
