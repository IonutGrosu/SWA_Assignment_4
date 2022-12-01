<script lang="ts">
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
    async register() {
      const res = await fetch("http://localhost:9090/users", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "post",
        body: JSON.stringify(this.credentials),
      })
        .then((response) => (response.ok ? response : Promise.reject(response)))
        .then((res) => {
          console.log(res.json);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>
<template>
  <input type="text" v-model="credentials.username" />
  <input type="text" v-model="credentials.password" />
  <button @click="register">Register</button>
  {{ responseField }}
</template>
