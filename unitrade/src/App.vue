<template>
  <div>
    <Header/>
    <RouterView></RouterView>
    <Footer/>
  </div>
</template>

<script>
// import Token from "@/token-usage.js";
import Header from "./components/UpperMenu.vue";
import Footer from "@/components/Footer.vue";

import {mapGetters} from 'vuex';

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    Footer,
    Header,
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn'])
  },
  mounted() {
    window.stopScroll = (value) => {
      let val = '';
      if (!value) {
        val = "auto";
      } else {
        val = "hidden";
      }
      document.body.style.overflowY = val;
    }
  },
  // methods: {
  //   changeIsLoggedIn() {
  //     this.$store.commit('changeIsLoggedIn');

  //     this.isLoggedIn ? this.$router.push('/') : this.$router.push('/auth');
  //   }
  // }
};
</script>

<style lang="scss">
@import "assets/main_colors";

.stop-scroll {
  overflow-y: hidden !important;
}

body {
  overflow-x: hidden;
}

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
  color: $border-default;
  background-color: $background;
}

button, textarea, select {
  font-family: "Montserrat", sans-serif;
}

input::placeholder, input {
  font-family: "Montserrat", sans-serif;
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

.spacer {
  margin-top: 5px;
  height: 2px;
  width: 90vw;
  border-radius: 5px;
  background-color: #B8DEDC;
}

body {
  max-width: 100vw;
  width: 100vw;
  overflow-x: hidden !important;
  background-color: $background;
}

html {
  position: relative;
  min-height: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
