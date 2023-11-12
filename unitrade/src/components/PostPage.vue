<script>
import {posts} from "@/temp_data";

export default {
  name: "PostPage",
  data() {
    return {
      post_data: {},
      user_data: {},
    }
  },
  methods: {
    report() {
      alert(`На допис з Id ${this.postId} поскаржено`);
    },
    copyToClipboard(value) {
      navigator.clipboard.writeText(value)
      alert("Номер скопійовано")
    }
  },
  computed: {
    postId() {
      return this.$route.params.id
    },
  },
  mounted() {
    this.post_data = posts.filter((post) => post.id == this.postId)
    this.post_data = this.post_data[0]
    this.user_data = this.post_data.user_data
  }
}
</script>

<template>
  <div class="post-wrapper">
    <div class="upper-part">
      <div class="img-section">

        <img :src="post_data.img_url" alt="">
      </div>
      <div class="seller-data">
        <div class="post-data">
          <b class="post-title"> {{ post_data.name }}</b>
          <b class="post-dormitory">{{ user_data.dormitory }}</b>
        </div>
        <div class="social-links">
          <span>Контакти</span>
          <a :href="user_data.telegram">Telegram</a>
          <a :href="user_data.instagram">Instagram</a>
          <a @click="copyToClipboard(user_data.phone)">Телефон</a>
        </div>
        <b class="post-creation-time">Опубліковано : {{ post_data.creation_date }}</b>
      </div>
    </div>
    <div class="lower-part">
      <h2>Опис</h2>
      <p class="description">{{ post_data.description }}</p>
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
  max-height: calc(100vh - 10vh - 50px);
  height: calc(100vh - 10vh - 50px);
  width: 80vw;
  margin-left: 10vw;
  margin-top: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  .upper-part {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    height: 50vh;

    .img-section {
      background: $light-main;
      width: 70%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        height: 80%;
        max-width: 80%;
        max-height: 80%;
      }
    }

    .seller-data {
      background: $light-main;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: calc(100% - 20px - 70%);
      border-radius: 10px;

      .post-data {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        b {
          line-height: 30px;
        }

        b:first-child {
          font-size: 24px;
        }
      }

      .social-links {
        background: $light-brown-main;
        width: 60%;
        height: 40%;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 4px 4px 4px $default-shadow-color;
        margin-top: 20px;
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
          border-bottom: 2px solid $light-brown-main;
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

      .post-creation-time {
        margin-bottom: 10px;
      }
    }
  }

  .lower-part {
    background: $light-main;
    max-width: 100%;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100vh - 50vh - 150px);
    align-items: start;

    .description {
      font-size: 18px;
      font-weight: 500;
    }

    .report {
      background: $light-main;
      color: $danger-color;
      transition: box-shadow ease-out .3s;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding-left: 10px;
      padding-right: 10px;
      height: 40px;
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