<template>
  <div id="login">
    <LoginInput type="text" name="login" v-model="login"
      >Nom d'utilisateur</LoginInput
    >
    <LoginInput type="password" name="password" v-model="password"
      >Mot de passe</LoginInput
    >
    <SubmitButton :login="login" :password="password" :error_method="error" />
  </div>
</template>

<script>
import LoginInput from "./LoginInput.vue";
import SubmitButton from "./SubmitButton.vue";

export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    error(code) {
      let error_message;

      switch (code) {
        case 1:
          error_message = "Nom d'utilisateur vide.";
          break;
        case 2:
          error_message = "Mot de passe vide.";
          break;
        case 3:
          error_message =
            "Une erreur est survenue lors du traitement de la requete, encore désolé.";
          break;
        case 4:
          error_message = "Nom d'utilisateur ou mot de passe incorrect.";
          break;
        default:
          error_message = "Une erreur inconnue est survenue.";
          break;
      }

      this.$emit("error-login-form", { message: error_message });
    },
  },
  components: {
    LoginInput,
    SubmitButton,
  },
};
</script>

<style>
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  background-color: white;
  padding: 1em;
  border-radius: 5px;
}

#login > input,
#login > button {
  height: 2em;
  border-radius: 4px;
}

@media only screen and (max-device-width: 812px) {
  #login {
    width: 70%;
  }
}
</style>