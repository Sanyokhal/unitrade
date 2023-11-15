<script>
export default {
  name: "Complain",
  props: {
    post_img: String,
    post_id: Number,
    post_title: String,
    post_author: String,
  },
  mounted() {
    window.stopScroll(true)
  },
  methods: {
    closeModal() {
      window.stopScroll(false)
      this.$emit('close')
    },
    submit() {
      alert("Симуляція http запиту через AXIOS")
      window.stopScroll(false)
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div class="complain">
    <div class="container">
      <h2>Поскаржитись на допис</h2>
      <div class="post">
        <img :src="post_img" alt="">
        <div class="data">
          <b class="title">{{ post_title }}</b>
          <b class="author">Автор : {{ post_author }}</b>
          <b class="id">ID поста : {{ post_id }}</b>
        </div>
      </div>
      <div class="report-data">
        <div class="row">
          <b>Причина скарги</b>
          <select>
            <option selected>Виберіть причину скарги</option>
            <option>Продаж наркотиків</option>
            <option>Образливий контент</option>
            <option>Інше</option>
          </select>
        </div>
        <textarea style="resize: none"/>
      </div>
      <div class="menu">
        <button @click="submit">
          <font-awesome-icon :icon="['far', 'flag']"/>
          Поскаржитись
        </button>
        <button @click="closeModal">Скасувати</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main_colors";

.complain {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: $default-shadow-color;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: $default-border-radius;
    width: 40%;
    height: 80%;
    background: #D6ECF3;

    h2 {
      margin-top: 10px;
    }

    .post {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      width: 90%;
      max-width: 90%;
      overflow: hidden;
      max-height: 25vh;

      .data {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 10px;

        .title {
          font-size: 22px;
          justify-self: start;
        }
      }

      img {
        object-fit: contain;
        max-height: 25vh;
        height: 25vh;
        border-radius: $default-border-radius;
        width: 50%;
      }
    }

    .report-data {
      width: 100%;
      gap: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .row {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 40px;

        select {
          height: 30px;
          transition: box-shadow ease .2s;
          border-radius: $default-border-radius;
          padding: 0 20px;
          font-weight: 500;
        }

        select:focus-visible, select:hover {
          cursor: pointer;
          transition: box-shadow ease .2s;
          outline: none;
          box-shadow: 0px 0px 5px $default-shadow-color;
        }
      }

      textarea {
        transition: box-shadow ease .2s;
        max-width: 60%;
        width: calc(60% - 20px);
        padding: 10px;
        height: 15vh;
      }

      textarea:focus-visible {
        outline: none;
        transition: box-shadow ease .2s;
        box-shadow: 0px 0px 10px $default-shadow-color;
      }
    }

    .menu {
      border-top: 1px solid $border-default;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 50px;
      justify-content: space-evenly;

      button {
        padding: 0 20px;
        height: 30px;
        border-radius: $default-border-radius;
        color: $background;
        transition: box-shadow ease .2s;
        border: 1px solid black;
        font-weight: bold;
      }

      button:hover {
        cursor: pointer;
        transition: box-shadow ease .2s;
        box-shadow: 0px 0px 5px $default-shadow-color;
      }

      button:first-child {
        background-color: $decline;
        border-color: #793535;
      }

      button:last-child {
        background-color: $accept;
        border-color: #316924;
      }
    }
  }
}
</style>