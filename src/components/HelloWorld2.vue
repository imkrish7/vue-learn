<template>
  <h1>Hello World2!</h1>
</template>
<script>
export default {
  name: "HelloWorld2",

  beforeRouteEnter(to, from, next) {
    console.log("Component Entered 2");
    next((vm) => {
      console.log(vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Component Update 2");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Component Leave 2");
    next();
  },
};
</script>
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
