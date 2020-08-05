<template>
  <h1>Hello World3</h1>
</template>
<script>
export default {
  name: "HelloWorld3",
  beforeRouteEnter(to, from, next) {
    console.log("Component Entered 3");
    next((vm) => {
      console.log(vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Component Update 3");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Component Leave 3");
    next();
  },
};
</script>
