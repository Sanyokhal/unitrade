<template>
  <div class="mobile-form-container">
    <div class="form-container">
      <div class="photo-container">
        <img
          src="https://showdream.org/uploads/posts/2023-04/medium/1681668390_morgan-frmen-vimagaye-zaboroniti-termn-afroamerikanec.jpg"
          alt="Photo"
          class="photo"
        />
      </div>
      <div class="form-content">
        <div class="form-header">
          <h2 class="header-text">Оголошення</h2>
        </div>
        <p class="name">Галь Олександр Віталійович</p>
        <p class="address">Гурт. №4 82/a</p>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/sf-ultralight/25/telegram.png"
          alt="telegram"
          class="telegram-icon"
        />
        <div class="complain-btn" @click="report">Поскаржитися</div>
        <div class="category">Посуд</div>
      </div>
    </div>
  </div>
</template>

<script>
import Complain from "@/components/Complain.vue";
import { mapActions } from 'vuex';

export default {
  name: "PostPage",
  components: {Complain},
  data() {
    return {
      post_data: {},
      // user_data: {},
      complain_status: false,
      isLoaded: false,
    }
  },
  computed:{
    // ...mapGetters('posts',['list']),
    postId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("posts", ["loadListById"]),
    report() {
      this.complain_status = true;
    },
    copyToClipboard(value) {
      navigator.clipboard.writeText(value)
      alert("Номер скопійовано")
    },
  },
  created() {
    this.loadListById(this.$route.params.id)
      .then((list) => {
        this.post_data = list[0];
        this.isLoaded = true;
      })
      .catch(() => {
        console.log("something wrong");
      });
    // this.user_data = this.post_data.user_data
  },
};
</script>

<style>
.mobile-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  position: relative;
  max-width: 90%;
  width: 330px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px; /* Додано відступ для центрування форми */
}

.photo-container {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
}

.photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-content {
  padding: 20px;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.form-header h2 {
  margin: 0;
}

.form-header button {
  padding: 8px 12px;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.form-content p {
  margin: 8px 0;
}

.form-content img {
  margin-right: 5px;
}
.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.header-text {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.telegram-icon {
  margin-top: 10px;
}

.complain-btn {
  cursor: pointer;
  width: 110px;
  height: 15px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  padding: 8px 12px;
  text-align: center;
  margin-top: 10px;
  float: right; /* Переміщення кнопки вправо */
}

.category {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 10px;
}

.name {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin: 8px 0;
}

.address {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin: 8px 0;
}

/* Решта стилів залишається такою ж, як і раніше */
</style>

