<template>
  <div class="mobile-form-container" v-if="post_data">
    <div class="form-container">
      <div class="photo-container">
        <img :src="post_data.img" alt="Photo" class="photo" />
      </div>
      <div class="form-content">
        <div class="form-header">
          <h2 class="header-text">{{ post_data.name }}</h2>
        </div>
        <p class="name">{{ post_data.creator.fullName }}</p>
        <p class="address">
          Гурт. {{ post_data.dormitory }} {{ post_data.creator.room }}
        </p>
        <div class="icons">
          <a :href="post_data.creator.instagram"
            ><font-awesome-icon class="icon" :icon="['fab', 'instagram']"
          /></a>
          <a :href="post_data.creator.telegram"
            ><font-awesome-icon class="icon" :icon="['fab', 'telegram']"
          /></a>
          <a @click="copyToClipboard(post_data.creator.email)"
            ><font-awesome-icon class="icon" :icon="['far', 'envelope']"
          /></a>
          <a @click="copyToClipboard(post_data.creator.phone)"
            ><font-awesome-icon class="icon" :icon="['fas', 'phone']"
          /></a>
        </div>
        <div style="display: flex">
          <div class="category">{{ post_data.tag }}</div>
          <button @click="report()" class="report">
            <font-awesome-icon :icon="['far', 'flag']" class="report-icon" />
            <span>Поскаржитись</span>
          </button>
        </div>
      </div>
      <Complain
        @close="complain_status = false"
        v-if="complain_status"
        :post_id="post_data.id"
        :post_img="post_data.img_url"
        :post_title="post_data.name"
        :post_author="post_data.creator"
      />
    </div>
  </div>
</template>

<script>
import Complain from "@/components/Complain.vue";
import { mapActions } from "vuex";

export default {
  name: "PostPage",
  components: { Complain },
  data() {
    return {
      post_data: false,
      // user_data: {},
      complain_status: false,
      isLoaded: false,
    };
  },
  computed: {
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
      navigator.clipboard.writeText(value);
      alert("Номер скопійовано");
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

<style lang="scss">
@import "../../assets/main_colors";
.report {
  background: $danger-color;
  color: $bg-secondary;
  transition: box-shadow ease-out 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
  height: 20px;
  border: 2px solid $danger-color;
  border-radius: 5px;
  .report-icon{
    height: 15px;
    width: 15px;
  }
}
.icons {
  display: flex;
  gap: 10px;
}
.icon {
  color: black;
  width: 20px;
  height: 20px;
}
.mobile-form-container {
  background-color: $bg-green;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height:90vh;
  margin-top: 10px;
  overflow: hidden;
  justify-content: space-between;
}


.form-container {
  background-color:$bg-secondary;
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
  width: 90%;
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

