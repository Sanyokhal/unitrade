<script>
import Auth_btn from "@/components/Auth_btn.vue";
import Token from '@/token-usage.js';

export default {
  name: "Main_Page",
  components: {Auth_btn},
  data() {
    return {
      // TODO: Записувати, а потім діставати з кукі гуртожиток за замовчуванням
      selected_dormitory: localStorage.getItem("defaultDormitory"),
    }
  },
  methods: {},
  computed: {
    isLoggedIn() {
      return Token.getAccessTokenFromCookie();
    },
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
  watch: {
    selected_dormitory(newValue) {
      localStorage.setItem("defaultDormitory",newValue)
    }
  },
  created () {
    if(!localStorage.getItem("defaultDormitory")){
      localStorage.setItem("defaultDormitory",4)
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
      <Auth_btn/>
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
    <div class="disclaimer about-us">
      <p>Про нас</p>
      <span>Трохи про нас та цей проект</span>
    </div>
    <div class="disclaimer rules">
      <p>Правила</p>
      <span>Правила користування платформою</span>
    </div>
    <div class="disclaimer guide">
      <p>Посібник</p>
      <span>Невеликий посібник по платформі</span>
    </div>
  </div>
</template>
<!--TODO Добавити розділ "Про нас", "Правила", "Зв'язок з розробниками"-->
<style scoped lang="scss">
.disclaimer {
  text-align: left;
  width: calc(100% - 30px);
  border-radius: 15px;
  padding: 15px;
  
  p {
    font-weight: 500;
    font-size: 12px;
  }
  
  span {
    font-size: 10px;
  }
}

.about-us {
  background: rgb(246, 234, 230);
  background: linear-gradient(120deg, rgba(246, 234, 230, 1) 0%, rgba(255, 221, 210, 1) 100%);
}

.rules {
  background: rgb(255, 221, 210);
  background: linear-gradient(120deg, rgba(255, 221, 210, 1) 0%, rgba(241, 185, 165, 1) 100%);
}

.guide {
  background: rgb(241, 185, 165);
  background: linear-gradient(120deg, rgba(241, 185, 165, 1) 0%, rgba(226, 149, 120, 1) 100%);
}

.dorm-1 {
  background: url('../assets/dormitory_img/dormitory-1.jpg');
}

.dorm-2 {
  background: url('../assets/dormitory_img/dormitory-2.jpg');
}

.dorm-3 {
  background: url('../assets/dormitory_img/dormitory-3.jpg');
}

.dorm-4 {
  background: url('../assets/dormitory_img/dormitory-4.jpg');
}

.dorm-5 {
  background: url('../assets/dormitory_img/dormitory-5.jpg');
}

.main-page-container {
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  height: calc(100vh - 67px);
  min-height: calc(100vh - 67px);

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

  }

  .dormitory-selector {
    width: 90vw;
    background-size: cover;
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