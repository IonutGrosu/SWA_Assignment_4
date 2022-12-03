<script lang="ts">
import { register } from "../services/authService";
import { Credentials } from "../model/Models";

export default {
  data() {
    return {
      responseField: "",
      credentials: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async handleRegister() {
      register(this.credentials as Credentials)
        .then((response) => (response.ok ? response : Promise.reject(response)))
        .then((res) => {
          console.log(res.json);
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.status === 400) console.log("Username already exists");
        });
    },
  },
  mounted() {},
};
</script>
<template>
  <input type="text" v-model="credentials.username" />
  <input type="text" v-model="credentials.password" />
  <button @click="handleRegister">Register</button>
  {{ responseField }}
</template>
