<template>
  <div>
    <Header v-if="isLoggedIn"/>
    <RouterView></RouterView>
    <Footer v-if="isLoggedIn"/>
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
    ...mapGetters('user',['isLoggedIn'])
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
  margin: 0;
  padding: 0;
  background-color: $background;
}

button, textarea,select{
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

body {
  overflow-x: hidden;
  background-color: $background;
}
</style>
