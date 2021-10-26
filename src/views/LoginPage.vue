<template>
  <ErrorNotification :error="error" :error_name="error_name" />
  <LoginForm @error-login-form="notifyError" />
</template>

<script>
import ErrorNotification from '../components/Login/ErrorNotification.vue'
import LoginForm from '../components/Login/LoginForm.vue'

export default {
  name: "LoginPage",
  data() {
    return {
      error: false,
      error_name: "Erreur",
    };
  },
  methods: {
    notifyError(payload) {
      this.error = true;
      this.error_name = payload.message;
    }
  },
  components: {
    ErrorNotification,
    LoginForm
  }
};
</script>
