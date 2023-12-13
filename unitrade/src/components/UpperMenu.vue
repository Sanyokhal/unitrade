<template>
  <header>
    <div class="header-content">
      <img src="@/assets/svg/logo_orange.svg" alt="">
      <input type="text" placeholder="Пошук">
    </div>
    <div class="spacer"></div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      value1: '',
      dormitoryNumber: 1,
      toggle: "advertisement",
    };
  },
  computed: {
    ...mapGetters('user', ["user"]),
  },
  watch: {
    dormitoryNumber() {
      console.log(this.dormitoryNumber);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/main_colors.scss";

body {
  background-color: $bg-secondary;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;

  .header-content {
    height: 50px;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      height: 35px;
      width: auto;
    }

    input {
      border: none;
      background-color: #FFFFFF;
      width: 50vw;
      height: 30px;
      padding-left: 20px;
      font-size: 11px;
      border-radius: 40px;
      color: #000000;
    }

    input:focus-visible::placeholder {
      padding-left: 20px;
      opacity: 0;
      transition: all ease-out .3s;
    }

    input:focus-visible {
      outline: none;
    }

    input::placeholder {
      color: #000000;
      transition: padding-left ease-out .3s, opacity ease-out .3s;
      font-weight: 500;
    }
  }
}

</style>
