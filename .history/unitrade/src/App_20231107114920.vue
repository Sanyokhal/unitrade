<template>
  <auth-page></auth-page>
</template>

<script>
import AuthPage from '@/components/AuthPage.vue'

export default {
  name: 'App',
  components: {
    AuthPage,
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
  margin-top: 60px;
}
</style>
