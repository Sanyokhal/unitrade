<script>
import {mapActions} from "vuex";
import data from '../dormitory_data.json'

export default {
  name: "Info",
  computed: {
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
      let dorm = data.filter((dorm) => parseInt(this.selected_dormitory) === dorm.dormitory_num)[0]
      this.dormitory_data = dorm.workers;
    },
  },
  methods: {
    ...mapActions("information", ["loadListByDormitory"]),
  },
  created() {
    if (!localStorage.getItem("defaultDormitory")) {
      localStorage.setItem("defaultDormitory", 4);
    }
    this.loadListByDormitory(this.selected_dormitory)
        .then((list) => {
          this.attentionList = list;
        })
        .catch(() => {
          console.log("some error");
        });
    let dorm = data.filter((dorm) => parseInt(localStorage.getItem("defaultDormitory")) === dorm.dormitory_num)[0]
    this.dormitory_data = dorm.workers;
  },
  data() {
    return {
      dormitory_data: [],
      attentionList: [],
      selected_dormitory: localStorage.getItem("defaultDormitory"),
    };
  },
};
</script>
<!--TODO Переробити так, щоб дані витягувались з бази данних і рендерились через v-for-->
<!--TODO * в майбутньому це буде в адмін панелі -->
<template>
  <div class="info-page">
    <div class="about-page">
      <h4>{{ $t("info.about.title") }}</h4>
      <p>{{ $t("info.about.text") }}</p>
    </div>
    <div class="dormitory-selector" :class="selector_bg">
      <span>{{ $t("global.select") }}</span>
      <select v-model="selected_dormitory">
        <option value="1">{{ $t("global.dormitory") }} №1</option>
        <option value="2">{{ $t("global.dormitory") }} №2</option>
        <option value="3">{{ $t("global.dormitory") }} №3</option>
        <option value="4">{{ $t("global.dormitory") }} №4</option>
        <option value="5">{{ $t("global.dormitory") }} №5</option>
      </select>
    </div>

    <div class="alert-holder">
      <div
          class="custom-alert"
          v-for="attention in attentionList"
          :key="attention.id"
      >
        <div class="left-part">
          <h4>
            {{ attention.title }}
            <span>{{
                new Date(attention.creationDate.toMillis()).toLocaleDateString()
              }}</span>
          </h4>
          <p>{{ attention.content }}</p>
        </div>
        <div class="right-part">
          <font-awesome-icon
              icon="exclamation"
              beat
              class="exclamation-danger-end"
          />
        </div>
      </div>
    </div>
    <div class="posts-spacer"></div>
    <div class="data" v-for="worker in dormitory_data" :key="worker.id">
      <h4>{{ worker.position }}</h4>
      <p>{{ worker.fullName }}</p>
      <p>{{ worker.num }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alert-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

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
  background-color: #f6eae6;

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
  background-color: #ffddd2;
  justify-content: space-between;

  .left-part {
    text-align: left;
    flex: 1;

    h4 {
      margin-bottom: 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;

      span {
        font-size: 11px;
      }
    }

    p {
      font-size: 10px;
    }
  }

  .right-part {
    width: 10%;
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

.dormitory-selector {
  width: 90vw;
  background-size: cover;
  margin: 15px 0px;
  aspect-ratio: 1.3/1;
  //height: calc(90vw / 130 * 100);
  //min-height: calc(90vw / 130 * 100);
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
  background-color: #b8dedc;
  min-height: calc(100vh - 67px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .about-page {
    margin-top: 15px;
    border-radius: 10px;
    background-color: #f6eae6;
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