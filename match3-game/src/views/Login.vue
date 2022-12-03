<script lang="ts">
import { Credentials } from "../model/Models";
import { login } from "../services/authService";
export default {
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async handleLogin() {
      login(this.credentials as Credentials)
        .then((response) => (response.ok ? response : Promise.reject(response)))
        .then((res) => {
          console.log(res.json);
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.status === 403) console.log("Wrong credentials");
        });
    },
  },
  mounted() {},
};
</script>
<template>
  <input type="text" v-model="credentials.username" />
  <input type="text" v-model="credentials.password" />
  <button @click="handleLogin">Login</button>
</template>
