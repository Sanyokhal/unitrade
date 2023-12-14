<script>
export default {
  methods: {
    pushLink(link) {
      this.$router.push(link);
    },
  },
  mounted() {
    window.changeMenuSelect = (value) => {
      this.selected = value;
    };
  },
};
</script>

<template>
  <div class="footer">
    <div
        class="footer-element"
        :class="{ selected: $route.path === '/' }"
        @click="pushLink('/')"
    >
      <img src="@/assets/svg/home.svg" alt=""/>
      <span>Головна</span>
    </div>
    <div
        class="footer-element"
        :class="{ selected: $route.path === '/posts' }"
        @click="pushLink('/posts')"
    >
      <img src="@/assets/svg/browse.svg" alt=""/>
      <span>Оголошення</span>
    </div>
    <div
        class="footer-element"
        :class="{ selected: $route.path === '/info' }"
        @click="pushLink('/info')"
    >
      <img src="@/assets/svg/info.svg" alt=""/>
      <span>Інформація</span>
    </div>
    <div
        class="footer-element"
        :class="{ selected: $route.path === '/works' }"
        @click="pushLink('/works')"
    >
      <img src="@/assets/svg/work.svg" alt=""/>
      <span>Робота</span>
    </div>
    <div
        class="footer-element"
        :class="{ selected: $route.path === '/me' }"
        @click="pushLink('/me')"
    >
      <img src="@/assets/svg/person.svg" alt=""/>
      <span>Акаунт</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main_colors";

.selected {
  transition: all ease-out 0.3s;
  background-color: #b8dedc !important;

  span {
    font-weight: 700;
  }
}

.footer {
  position: fixed;
  height: 50px;
  overflow: hidden;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff;
  left: 0;
  bottom: 0;

  .footer-element {
    transition: background-color ease-out 0.3s, font-weight ease-out 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 2px 0px;
    width: 57px;
    border-radius: 5px;

    img {
      height: 24px;
      width: 24px;
    }

    span {
      font-size: 7px;
      font-weight: 500;
    }
  }

  .footer-element:hover {
    cursor: pointer;
  }
}
</style>