<script>
import {works} from "@/temp_data";

export default {
  name: "WorkPage",
  data() {
    return {
      work_data: {},
      user_data: {},
    }
  },
  methods: {
    report() {
      alert(`На допис з Id ${this.workId} поскаржено`);
    },
    copyToClipboard(value) {
      navigator.clipboard.writeText(value)
      alert("Номер скопійовано")
    }
  },
  computed: {
    workId() {
      return this.$route.params.id
    },
  },
  mounted() {
    this.work_data = works.filter((work) => work.id == this.workId)
    this.work_data = this.work_data[0]
    this.user_data = this.work_data.user_data
  }
}
</script>

<template>
  <div class="post-wrapper">
    <div class="upper-part">
      <div class="img-section">
        <font-awesome-icon icon="arrow-left" class="img-toggle"/>
        <img :src="work_data.img_url" alt="">
        <font-awesome-icon icon="arrow-right" class="img-toggle"/>
      </div>
      <div class="seller-data">
        <div class="post-data">
          <p class="post-creation-time">Опубліковано : {{ work_data.creation_date }}</p>
          <h2 class="post-title"> {{ work_data.name }}</h2>
          <h2 class="post-price">{{ work_data.salary }} грн</h2>
        </div>
        <div class="social-links">
          <a :href="user_data.telegram">Telegram</a>
          <a :href="user_data.instagram">Instagram</a>
          <a @click="copyToClipboard(user_data.phone)">+38{{ user_data.phone }}</a>
        </div>
      </div>
    </div>
    <div class="lower-part">
      <div class="post-tag">
        <span>{{ work_data.tag }}</span>
      </div>
      <h3>Опис</h3>
      <p class="description">{{ work_data.description }}</p>
      <button @click="report()" class="report">
        <font-awesome-icon :icon="['far', 'flag']"/>
        <span>Поскаржитись</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main_colors";

.post-wrapper {
  max-height: calc(100vh - 120px);
  height: calc(100vh - 120px);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 30px;
  width: 80vw;
  margin-left: 10vw;
  background-color: $light-main;
  display: flex;
  flex-direction: column;

  .upper-part {
    max-width: 100%;
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60%;

    .img-section {
      width: 70%;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      justify-content: center;

      .img-toggle {
        height: 30px;
      }

      .img-toggle:hover {
        cursor: pointer;
      }

      img {
        height: 80%;
        max-width: 80%;
        max-height: 80%;
      }
    }

    .seller-data {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 30%;

      .post-data {
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 100%;

        .post-title {
          margin-bottom: 20px;
          font-weight: 600;
        }

        .post-creation-time {
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .post-price {
          font-weight: 500;
        }

      }

      .social-links {
        background: $new-design-dull-blue;
        width: 70%;
        margin-top: 10px;
        padding: 20px 0px 20px 0px;
        align-items: center;
        justify-content: center;
        border-radius: $default-border-radius;
        display: flex;
        flex-direction: column;

        span {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        a {
          font-size: 16px;
          font-weight: bold;
          color: #2c3e50;
          line-height: 25px;
          text-decoration: none;
          transition: all ease-out .3s;
          border-bottom: 2px solid $new-design-dull-blue;
        }

        a:hover {
          transition: all ease-out .3s;
          border-bottom: 2px solid #2c3e50;
          font-size: 18px;
        }

        a:last-child:hover {
          cursor: pointer;
        }
      }
    }
  }

  .lower-part {
    max-width: 100%;
    padding: 10px;
    display: flex;
    height: 40%;
    justify-content: space-between;
    flex-direction: column;
    align-items: start;

    .post-tag {
      margin-left: 20px;
      height: 30px;
      background-color: $new-design-dull-blue;
      border-radius: $default-border-radius;
      line-height: 30px;
      padding: 0px 20px 0px 20px;

      span {
        font-weight: 500;
      }
    }

    h3 {
      margin-left: 20px;
    }

    .description {
      font-size: 18px;
      font-weight: 500;
      text-align: start;
      padding-left: 20px;
      padding-right: 20px;
    }

    .report {
      background: $danger-color;
      color: $light-main;
      transition: box-shadow ease-out .3s;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 20px;
      height: 40px;
      margin-left: 20px;
      line-height: 40px;
      border: 2px solid $danger-color;
      border-radius: 5px;

      .fa-flag {
        height: 15px;
      }

      span {
        font-size: 14px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
      }
    }

    .report:hover {
      transition: box-shadow ease-out .3s;
      cursor: pointer;
      box-shadow: 0px 0px 10px $danger-shadow;
    }
  }
}
</style>