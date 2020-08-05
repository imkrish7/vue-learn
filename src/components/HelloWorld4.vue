<template>
  <h1>Hello World4</h1>
</template>
<script>
export default {
  name: "HelloWorld4",
  beforeRouteEnter(to, from, next) {
    console.log("Component Entered 4");
    next((vm) => {
      console.log(vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Component Update 4");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Component Leave 4");
    next();
  },
};
</script>
