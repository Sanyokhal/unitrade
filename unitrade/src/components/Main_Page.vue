<script>
import Auth_btn from "@/components/Auth_btn.vue";
import Token from "@/token-usage.js";

export default {
  name: "Main_Page",
  components: {Auth_btn},
  data() {
    return {
      selected_dormitory: localStorage.getItem("defaultDormitory"),
    };
  },
  methods: {},
  computed: {
    isLoggedIn() {
      return Token.getAccessTokenFromCookie();
    },
    selector_bg() {
      if (this.selected_dormitory == 1) {
        return "dorm-1";
      } else if (this.selected_dormitory == 2) {
        return "dorm-2";
      } else if (this.selected_dormitory == 3) {
        return "dorm-3";
      } else if (this.selected_dormitory == 4) {
        return "dorm-4";
      } else {
        return "dorm-5";
      }
    },
  },
  watch: {
    selected_dormitory(newValue) {
      localStorage.setItem("defaultDormitory", newValue);
    },
  },
};
</script>
<template>
  <div class="main-page-container">
    <div class="login-notification" v-if="!isLoggedIn">
      <div class="text-part">
        <h4>{{ $t('main.titles.greeting') }}</h4>
        <p>{{ $t('main.text.greeting') }}</p>
      </div>
      <Auth_btn/>
    </div>
    <div class="dormitory-selector" :class="selector_bg">
      <span>{{ $t('main.titles.search') }}</span>
      <select v-model="selected_dormitory">
        <option value="1">{{ $t('global.dormitory') }} №1</option>
        <option value="2">{{ $t('global.dormitory') }} №2</option>
        <option value="3">{{ $t('global.dormitory') }} №3</option>
        <option value="4">{{ $t('global.dormitory') }} №4</option>
        <option value="5">{{ $t('global.dormitory') }} №5</option>
      </select>
    </div>
    <div class="spacer"></div>
    <div class="iframe-container">
      <iframe v-if="selected_dormitory == 1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3092066038507!2d22.27880627688167!3d48.62306481723768!2m3!1f0!2f0!3f0!3m2!
    1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184de3d6b1fd%3A0x49937b7cbd2981f5!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMQ!5e0!3m2!1suk!2sua!4v1703448480255!5m2!1suk!2sua"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe v-else-if="selected_dormitory == 2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3385398761197!2d22.277629092631823!3d48.62250344328752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b3723d569f%3A0xa2d6e1893b65d28!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMg!5e0!3m2!1suk!2sua!4v1703448758353!5m2!1suk!2sua"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe v-else-if="selected_dormitory == 3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.31155798193!2d22.280855176881676!3d48.62301981724079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184dbf050b95%3A0xa3415e1465987a48!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMw!5e0!3m2!1suk!2sua!4v1703448526952!5m2!1suk!2sua"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe v-else-if="selected_dormitory == 4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10546.788975405578!2d22.28502516225587!3d48.634775
    32607448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739183a652310df%3A0x2fb944ceb4390e52!2z0JPRg9GA0YLQvtC2
    0LjRgtC-0Log4oSWNCDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448226217!5m2!1suk!2sua" style="border:0;"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe v-else src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5638161608163!2d22.283532976882242!3d48.63732831623741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
    .1!3m3!1m2!1s0x4739183414f6cb71%3A0xa0171da6518a8d6b!2z0JPRg9GA0YLQvtC20LjRgtC-0Log4oSWNSDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448402075!5m2!1suk!2sua"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="disclaimer about-us" @click="this.$router.push('/about-us')">
      <p>{{ $t('main.titles.aboutUs') }}</p>
      <span>{{ $t('main.text.aboutUs') }}</span>
    </div>
    <div class="disclaimer rules" @click="this.$router.push('/rules')">
      <p>{{ $t('main.titles.rules') }}</p>
      <span>{{ $t('main.text.rules') }}</span>
    </div>
    <div class="space"></div>
  </div>
</template>
<style scoped lang="scss">

.disclaimer {
  text-align: left;
  width: calc(100% - 30px);
  border-radius: 15px;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }

  p {
    font-weight: 500;
    font-size: 12px;
  }

  span {
    font-size: 10px;
  }
}

.iframe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 30px);
  border-radius: 15px;
  padding: 15px;
  background-color: #ffffff;
  aspect-ratio: 1.3/1;

  iframe {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
  }
}

.about-us {
  background: rgb(246, 234, 230);
  background: linear-gradient(
          120deg,
          rgba(246, 234, 230, 1) 0%,
          rgba(255, 221, 210, 1) 100%
  );
}

.rules {
  background: rgb(255, 221, 210);
  background: linear-gradient(
          120deg,
          rgba(255, 221, 210, 1) 0%,
          rgba(241, 185, 165, 1) 100%
  );
}
.dorm-1 {
  background: url("../assets/dormitory_img/dormitory-1.jpg");
}

.dorm-2 {
  background: url("../assets/dormitory_img/dormitory-2.jpg");
}

.dorm-3 {
  background: url("../assets/dormitory_img/dormitory-3.jpg");
}

.dorm-4 {
  background: url("../assets/dormitory_img/dormitory-4.jpg");
}

.dorm-5 {
  background: url("../assets/dormitory_img/dormitory-5.jpg");
}

.main-page-container {
  width: 90vw;
  transition: all ease-out .4s;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  min-height: calc(100vh - 67px);

  .login-notification {
    width: 100%;
    text-align: left;
    background-color: #b8dedc;
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
    width: 100%;
    background-size: cover;
    margin-top: 15px;
    aspect-ratio: 1.3/1;
    border-radius: 15px;
    transition: background ease-out 0.3s;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    span {
      font-weight: 700;
      font-size: 14px;
      margin-top: 15px;
      margin-left: 15px;
      color: #ffffff;
    }

    select {
      height: 20px;
      background: transparent;
      font-weight: 500;
      font-size: 10px;
      outline: none;
      border: none;
      color: #ffffff;
      margin-left: 15px;
      &:hover{
        cursor: pointer;
      }
    }

    option {
      color: #2c3e50;
      font-weight: bold;
    }
  }
}

.space {
  padding-bottom: 60px;
}

@media (min-width: 1000px) {
  .main-page-container {
    width: 60vw;
    max-width: 60vw;
    margin-left: 20vw;
    transition: all ease-out .4s;

    .dormitory-selector {
      aspect-ratio: 1/.5;
    }

    .iframe-container {
      aspect-ratio: 1/.5;
    }
  }
}
</style>