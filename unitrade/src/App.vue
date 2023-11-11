<template>
  <Posts_list/>
</template>

<script>

import Posts_list from "@/components/Posts_list";

export default {
  name: 'App',
  components: {Posts_list},
}
</script>

<style lang="scss">
@import "assets/main_colors";
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #83C5BE;
}
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: $light-blue-main ;
}
</style>
