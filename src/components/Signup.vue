<template >
  <div class="wrapper">
    <form class="form" @submit.prevent>
      <h1>Signup</h1>
      <section class="inputWrapper">
        <input class="input" type="text" v-model="email" />
      </section>
      <section class="inputWrapper">
        <input class="input" type="password" v-model="password" />
      </section>
      <section class="btnWrapper">
        <button class="btn">Signup</button>
      </section>
    </form>
    <div class="option">
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
}
.inputWrapper {
  width: 100%;
  margin: 0.8rem 0rem;
}

h1 {
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
}
.input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  border: none;
  box-shadow: 0px 2px 0px 0px #ccc;
}

.btnWrapper {
  display: flex;
  justify-content: flex-start;
}

.btn {
  border: none;
  padding: 0.9rem;
  background-color: #54b983;
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
  box-shadow: 0px 0px 4px 2px #ccc;
}
.option {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0rem;
}

.option p {
  font-size: 1rem;
}
</style>