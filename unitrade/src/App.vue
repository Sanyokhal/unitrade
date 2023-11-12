<template>
  <div>
    <button @click="changeIsLoggedIn" class="temporary">
      auth: {{ JSON.stringify($store.getters.isLoggedIn) }}
    </button>
    <Header v-if="isLoggedIn"/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import Header from "./components/UpperMenu.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    changeIsLoggedIn() {
      this.$store.commit('changeIsLoggedIn');

      this.isLoggedIn ? this.$router.push('/') : this.$router.push('/auth');
    }
  }
};
</script>

<style lang="scss">
@import "assets/main_colors";

.temporary {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #83c5be;
}

* {
  margin: 0;
  padding: 0;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    transition: background-color ease-out .3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    transition: background-color ease-out .3s;
  }
}

body {
  background-color: $light-blue-main;
}
</style>
