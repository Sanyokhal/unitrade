<template>
  <div>
    <router-link to="/auth" target="_blank">YESSS</router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import AuthPage from '@/components/AuthPage.vue'

export default {
  name: 'App',
  components: {
    // AuthPage,
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  margin:0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
