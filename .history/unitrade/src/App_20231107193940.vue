<template>
  <div>
    <upper-menu/>
  </div>
</template>

<script>
import UpperMenu from './components/UpperMenu.vue'
export default {
  name: 'App',
  components: {
    UpperMenu,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
