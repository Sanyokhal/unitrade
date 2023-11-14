<template>
  <header>
    <div class="header-content">
      <div class="header-left-wrapper">
        <svg width="138" height="56" viewBox="0 0 585 263" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_217_14)">
          <path d="M281.72 78.23H326.64C325.72 90.23 322.95 98.85 316.18 110.84L328.79 117.61C341.1 88.69 359.25 75.15 384.48 75.15C419.25 75.15 439.55 101 439.55 144.99V233.6H394.01V152.99C394.01 127.45 382.63 113.91 360.78 113.91C338.93 113.91 327.24 127.45 327.24 152.99V233.6H281.7V78.23H281.72Z" fill="black"/>
          <path d="M584.59 222.51L546.06 262.58C545.4 263.27 544.23 262.8 544.23 261.84V252.83C544.23 247.15 539.46 242.62 533.78 242.97C532.48 243.04 531.15 243.08 529.79 243.08C518.22 243.08 508.27 240.23 500.13 234.79C483.77 223.9 474.72 202.61 474.72 173.24V79.39H520.26V165.23C520.26 182.68 525.73 194.68 536.06 200.53C539.71 202.59 544.23 199.98 544.23 195.8V183.17C544.23 182.2 545.4 181.74 546.06 182.43L584.59 222.5V222.51Z" fill="black"/>
          <path d="M236.19 78.23V233.61H191.27C192.5 221.92 195.27 213.3 202.04 201L189.12 194.23C177.12 223.15 159.27 236.69 134.04 236.69C100.82 236.69 80.81 213.1 79.09 172.64C79.01 170.75 78.96 168.82 78.96 166.85V150.36C78.96 133.7 73.98 122.03 64.55 115.91C60.42 113.24 54.98 116.16 54.98 121.07V136.71C54.98 138.49 52.9 139.42 51.57 138.26L0 93.09L51.58 47.91C52.91 46.75 54.99 47.69 54.99 49.46V62.33C54.99 68.25 59.95 72.92 65.87 72.61C67.04 72.54 68.22 72.51 69.42 72.51C78.99 72.51 87.46 74.47 94.72 78.23C113.82 88.12 124.5 110.47 124.5 142.35V158.84C124.5 184.38 136.19 198.22 157.73 198.22C179.27 198.22 190.65 184.37 190.65 158.84V78.23H236.19Z" fill="black"/>
          <path d="M79.09 172.64H78.96V166.85C78.96 168.82 79 170.75 79.09 172.64Z" fill="black"/>
          <path d="M497.02 59.74C513.517 59.74 526.89 46.3667 526.89 29.87C526.89 13.3733 513.517 0 497.02 0C480.523 0 467.15 13.3733 467.15 29.87C467.15 46.3667 480.523 59.74 497.02 59.74Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_217_14">
          <rect width="584.59" height="262.9" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <select
            name="dormitoryNumber"
            class="header-left-wrapper select"
            v-model="dormitoryNumber"
            :required="true"
        >
          <option value="1" class="header-left-wrapper select-option" :dormitoryNumber="true">№1</option>
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
  padding: 5px;
  justify-content: space-between;
}

.header-left-wrapper {
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
}

.select {
  cursor: pointer;
  border-radius: $default-border-radius;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  text-align: center;
  font-size: 20px;
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
