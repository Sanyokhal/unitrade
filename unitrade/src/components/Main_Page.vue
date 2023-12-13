<script>
import {mapGetters} from "vuex";

export default {
  name: "Main_Page",
  data() {
    return {
      selected_dormitory: 1,
    }
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
    selector_bg() {
      if (this.selected_dormitory == 1) {
        return "dorm-1"
      } else if (this.selected_dormitory == 2) {
        return "dorm-2"
      } else if (this.selected_dormitory == 3) {
        return "dorm-3"
      } else if (this.selected_dormitory == 4) {
        return "dorm-4"
      } else {
        return "dorm-5"
      }
    }
  },
}
</script>
<template>
  <div class="main-page-container">
    <div class="login-notification" v-if="!isLoggedIn">
      <div class="text-part">
        <h4>Вітаю</h4>
        <p>Увійди в Uni та використовуй всі можливості!</p>
      </div>
      <div class="auth-btn">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="display: block"
        >
          <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
        <span @click="this.$router.push('/auth')">Авторизуватись</span>
      </div>
    </div>
    <div class="dormitory-selector" :class="selector_bg">
      <span>Шукати</span>
      <select v-model="selected_dormitory">
        <option value="1">Гуртожиток №1</option>
        <option value="2">Гуртожиток №2</option>
        <option value="3">Гуртожиток №3</option>
        <option value="4">Гуртожиток №4</option>
        <option value="5">Гуртожиток №5</option>
      </select>
    </div>
    <div class="spacer"></div>

  </div>
</template>

<style scoped lang="scss">
.spacer {
  margin-top: 10px;
  margin-bottom: 10px;
}

.dorm-1 {
  background: url('../assets/dev_images/andrij.jpg');
}

.dorm-2 {
  background: url('../assets/dev_images/sasha.jpg');
}

.dorm-3 {
  background: url('../assets/dev_images/viktor.jpg');
}

.dorm-4 {
  background: url('../assets/dev_images/jarik.jpg');
}

.dorm-5 {
  background: url('../assets/dev_images/lioha.jpg');
}


.main-page-container {
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .login-notification {
    width: 100%;
    text-align: left;
    background-color: #B8DEDC;
    border-radius: 15px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .text-part {
      width: 90%;

      h4 {
        font-size: 14px;
        font-weight: 500;
      }

      p {
        font-size: 11px;
      }
    }

    .auth-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      height: 40px;
      width: 90%;
      background-color: #FFFFFF;
      border-radius: 10px;

      span {
        font-size: 11px;
        font-weight: 500;
      }

      svg {
        height: 20px;
        padding: 10px;
      }
    }
  }

  .dormitory-selector {
    width: 90vw;
    margin-top: 15px;
    aspect-ratio: 1.3/1;
    border-radius: 15px;
    transition: background ease-out .3s;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    span {
      font-weight: 700;
      font-size: 14px;
      margin-top: 15px;
      margin-left: 15px;
      color: #FFFFFF;
    }

    select {
      height: 20px;
      background: transparent;
      font-weight: 500;
      font-size: 10px;
      outline: none;
      border: none;
      color: #FFFFFF;
      margin-left: 15px;
    }

    option {
      color: #2c3e50;
      font-weight: bold;
    }
  }
}
</style>