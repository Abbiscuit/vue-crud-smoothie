<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}
</style>

