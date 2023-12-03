<script>
export default {}
</script>

<template>
  <footer>
    <div class="footer-content">
      <span class="made-by">Зроблено студентами СА</span>
      <div class="links">
        <router-link to="/about#about-us">Про нас</router-link>
        <router-link to="/about#contacts">Контакти</router-link>
        <router-link to="/about#rules">Правила</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">

@import "@/assets/main_colors";

.footer-content {
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 50px;
  align-items: center;
  background-color: $bg-menu;
  justify-content: space-between;
  max-width: 100vw;
  padding-left: 5vw;
  padding-right: 5vw;

  .made-by {
    font-weight: 500;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 20px;

    a {
      text-decoration: none;
      color: $text-main;
      font-weight: 500;
      transition: all ease .2s;
    }

    a:hover {
      cursor: pointer;
      text-decoration: underline;
      font-weight: bold;
      transition: all ease .2s;
    }
  }
}
</style>