<template>
  <header>
    <div class="header-content">
      <div class="header-left-wrapper">
        <img class="header-left-wrapper logo" src="" alt="Логотип"/>
        <select
            name="dormitoryNumber"
            class="header-left-wrapper select"
            v-model="dormitoryNumber"
            :required="true"
        >
          <option
              value="1"
              class="header-left-wrapper select-option"
              :dormitoryNumber="true"
          >
            №1
          </option>
          <option value="2" class="header-left-wrapper select-option">№2</option>
          <option value="3" class="header-left-wrapper select-option">№3</option>
          <option value="4" class="header-left-wrapper select-option">№4</option>
          <option value="5" class="header-left-wrapper select-option">№5</option>
        </select>
      </div>
      <div class="header-right-wrapper">
        <ul class="header-right-wrapper toggle">
          <li
              class="header-right-wrapper toggle-li"
              @click="toggle = 'adversitement'"
              :class="{
              'header-right-wrapper toggle-li-active': toggle == 'adversitement',
            }"
          >
            <router-link to="/" class="toggle-li"> Оголошення</router-link>
          </li>
          |
          <li
              class="header-right-wrapper toggle-li"
              @click="toggle = 'job'"
              :class="{
              'header-right-wrapper toggle-li-active': toggle == 'job',
            }"
          >
            <router-link to="/works" class="toggle-li"> Робота</router-link>
          </li>
        </ul>
        <button class="header-right-wrapper add-button"><font-awesome-icon icon="plus" /></button>
        <router-link to="/me" style="text-decoration: none">
          <button class="header-right-wrapper profile-button">
            Профіль
            <img
                :src="user.avatarUrl"
                alt="Avatar"
                class="header-right-wrapper profile-button-img"
            />
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      dormitoryNumber: 1,
      toggle: "advertisement",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  watch: {
    dormitoryNumber() {
      console.log(this.dormitoryNumber);
    },
  },
  mounted() {
    this.toggle = "adversitement";
  },
};
</script>

<style lang="scss">
@import "@/assets/main_colors.scss";

body {
  background-color: $bg-secondary;
}

header {
  max-width: 100%;
  width: 100%;
  max-height: 80px;
  background-color: $bg-menu;
  justify-content: space-between;
  border-radius: 0 0 $default-border-radius $default-border-radius;
}

.header-content {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  // justify-content: center; 
  padding: 5px;
  justify-content: space-between;
}

.header-left-wrapper {
  gap: 25px;
  display: flex;
  align-items: center;
  background-color: $bg-secondary;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
}

.select {
  cursor: pointer;
  // padding: 1vh;
  border-radius: $default-border-radius;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  text-align: center;
  font-weight: 700;
  background-color: $main;
  height: 50px;
  width: 50px;
  font-family: "Montserrat", sans-serif;
}

.select:focus-visible {
  outline: none;
}

.select-option {
  padding: auto;
}

.header-right-wrapper {
  display: flex;
  gap: 25px;
  font-size: 24px;
  align-items: center;
}

.toggle {
  display: flex;
  align-items: center;
  list-style: none;
}

.toggle-li {
  font-size: 16px;
  transition: font-weight ease .2s;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.toggle-li-active {
  font-weight: 700;
  transition: font-weight ease .2s;
}

.add-button {
  cursor: pointer;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  height: 50px;
  width: 50px;
  background-color: $main;
  border: none;
  border-radius: $default-border-radius;
}

.profile-button {
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  height: 50px;
  gap: 25px;
  border-radius: $default-border-radius;
  background-color: $main;
  border: none;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
}

.profile-button-img {
  font-size: 15px;
  height: 40px;
  width: 40px;
  border-radius: $default-border-radius;
}
</style>
