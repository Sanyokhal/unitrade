<template>
  <div class="mobile-form-container" v-if="post_data">
    <div class="form-container">
      <div class="photo-container">
        <img :src="post_data.img" alt="Photo" class="photo"/>
      </div>
      <div class="form-content">
        <p class="header-text">{{ post_data.name }}</p>
        <p class="name">{{ post_data.creator.fullName }}</p>
        <p class="address">
          {{ $t('global.dormitory') }}: {{ post_data.dormitory }} {{ post_data.creator.room }}
        </p>
        <div class="icons">
          <a :href="post_data.creator.instagram"
          >
            <font-awesome-icon class="icon" :icon="['fab', 'instagram']"
            />
          </a>
          <a :href="post_data.creator.telegram"
          >
            <font-awesome-icon class="icon" :icon="['fab', 'telegram']"
            />
          </a>
          <a @click="copyToClipboard(post_data.creator.email, 'email')"
          >
            <font-awesome-icon class="icon" :icon="['far', 'envelope']"
            />
          </a>
          <a @click="copyToClipboard(post_data.creator.phone, 'phone')"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'phone']"
            />
          </a>
        </div>
        <div style="display: flex" class="down">
          <div class="category">{{ post_data.tag }}</div>
          <button @click="report()" class="report">
            <font-awesome-icon :icon="['far', 'flag']" class="report-icon"/>
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
import {mapActions} from "vuex";

export default {
  name: "PostPage",
  components: {Complain},
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
    copyToClipboard(value, type) {
      let text = "Номер скопійовано";
      if (type == 'email') {
        text = "Пошту скопійовано"
      }
      navigator.clipboard.writeText(value);
      alert(text);
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

<style scoped lang="scss">
@import "../../assets/main_colors";
@import "../../assets/main_colors";

/* Global Styles */
.icons {
  display: flex;
  gap: 10px;
  padding: 5px 0px;

  .icon {
    color: black;
    width: 20px;
    height: 20px;
  }
}

/* Component: .report */
.report {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px; /* Adjusted padding */
  border: 2px solid $danger-color;
  border-radius: 5px;
  background: $danger-color;
  color: $bg-secondary;
  transition: box-shadow ease-out 0.3s;

  .report-icon {
    height: 15px;
    width: 15px;
  }
}

/* Component: .mobile-form-container */
.mobile-form-container {
  background-color: $bg-green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  min-height: calc(100vh - 68px - 50px);
  margin-top: 10px;
  overflow: hidden;
}

/* Component: .form-container */
.form-container {
  transition: all ease-out .4s;
  background-color: $bg-secondary;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: calc(90% - 30px);
  padding: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Component: .photo-container */
.photo-container {
  position: relative;
  height: 200px;
  max-height: 200px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 5px;

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Component: .form-content */
.form-content {
  text-align: left;
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Adjusted for better alignment */

  .header-text {
    font-size: 16px;
    font-weight: 500;
  }

  .name, .address {
    font-size: 12px;
  }

  .down {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .complain-btn {
      cursor: pointer;
      width: 110px;
      height: 30px; /* Adjusted height for better display */
      background-color: #3498db;
      color: white;
      border-radius: 5px;
      padding: 8px 12px;
      text-align: center;
      margin-top: 10px;
      float: right;
    }

    .category {
      border-radius: 50px;
      font-size: 12px;
      padding: 5px 10px;
      background-color: #72ddf7;
    }
  }
}
@media (min-width: 1000px) {
  .form-container{
    width: 50vw;
    max-width: 50vw;
    transition: all ease-out .4s;
  }
}
</style>

