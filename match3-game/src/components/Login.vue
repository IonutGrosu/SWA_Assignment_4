<script lang="ts">
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
    async login() {
      const res = await fetch("http://localhost:9090/login", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "post",
        body: JSON.stringify(this.credentials),
      })
        .then((response) => (response.ok ? response : Promise.reject(response)))
        .then((res) => res.json())
        .catch((error) => {
          console.log(error);
        });

      console.log(res);
    },
  },
  mounted() {},
};
</script>
<template>
  <input type="text" v-model="credentials.username" />
  <input type="text" v-model="credentials.password" />
  <button @click="login">Login</button>
</template>
