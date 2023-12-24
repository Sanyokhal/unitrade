<script>
export default {
  name: "Info",
  computed: {
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
  data() {
    return {
      selected_dormitory: localStorage.getItem("defaultDormitory"),
      dormitory_workers: [
        {
          name: "Кепич Василь Георгійович",
          phone: "+3803122643467",
          position: "Директор студмістечка",
        },
        {
          name: "НЕКАЧАЙЛО Валерій Вікторович",
          phone: "+3803122643467",
          position: "Заступник директора студмістечка",
        },
        {
          name: "БУРДЮХ Іван Іванович",
          phone: "+3803122643467",
          position: "Заступник директора по експлуатації",
        },
        {
          name: "БІЛЕЙ Світлана Петрівна",
          phone: "+3803122643467",
          position: "Комендант",
        },
        {
          name: "ТАНЦЮРА Галина Григорівна",
          phone: "+3803122643467",
          position: "Хтось",
        }
      ]
    }
  }
}
</script>
<!--TODO Переробити так, щоб дані витягувались з бази данних і рендерились через v-for-->
<!--TODO * в майбутньому це буде в адмін панелі -->
<template>
  <div class="info-page">
    <div class="about-page">
      <h4>{{ $t('info.about.title') }}</h4>
      <p>{{ $t('info.about.text') }}</p>
    </div>
    <div class="dormitory-selector" :class="selector_bg">
      <span>{{$t('global.select')}}</span>
      <select v-model="selected_dormitory">
        <option value="1">{{$t('global.dormitory')}} №1</option>
        <option value="2">{{$t('global.dormitory')}} №2</option>
        <option value="3">{{$t('global.dormitory')}} №3</option>
        <option value="4">{{$t('global.dormitory')}} №4</option>
        <option value="5">{{$t('global.dormitory')}} №5</option>
      </select>
    </div>
    <div class="custom-alert">
      <div class="left-part">
        <h4>Увага</h4>
        <p>Через ремонтні роботи над системою водопостачання, вода в гуртожитку відсутня</p>
      </div>
      <div class="right-part">
        <span class="material-symbols-outlined">exclamation</span>
      </div>
    </div>
    <div class="posts-spacer"></div>
    <div class="data" v-for="worker in dormitory_workers" :key="worker.id">
      <h4>{{ worker.position }}</h4>
      <p>{{ worker.name }}</p>
      <p>{{ worker.phone }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.posts-spacer {
  width: calc(100vw - 30px);
  height: 1px;
  margin: 15px 0;
  background-color: #006d77;
}

.data {
  margin-bottom: 15px;
  text-align: left;
  width: calc(100vw - 50px);
  padding: 10px;
  border-radius: 10px;
  background-color: #F6EAE6;

  h4 {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 10px;
  }
}

.custom-alert {
  border-radius: 10px;
  width: calc(100vw - 50px);
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #FFDDD2;

  .left-part {
    text-align: left;

    h4 {
      margin-bottom: 10px;
      font-size: 14px;
    }

    p {
      font-size: 10px;
    }
  }

  .right-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 32px;
    }
  }
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

.dormitory-selector {
  width: 90vw;
  background-size: cover;
  margin: 15px 0px;
  aspect-ratio: 1.3/1;
  //height: calc(90vw / 130 * 100);
  //min-height: calc(90vw / 130 * 100);
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

.info-page {
  padding-bottom: 50px;
  width: 100vw;
  margin-bottom: 15px;
  margin-top: 10px;
  background-color: #B8DEDC;
  min-height: calc(100vh - 67px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .about-page {
    margin-top: 15px;
    border-radius: 10px;
    background-color: #F6EAE6;
    padding: 10px;
    text-align: left;
    width: calc(100vw - 50px);

    h4 {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    p {
      font-size: 10px;
    }
  }
}
</style>