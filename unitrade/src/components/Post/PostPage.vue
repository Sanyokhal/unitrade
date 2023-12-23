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
        <div style="display: flex" class="down">
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

<style scoped lang="scss">
@import "../../assets/main_colors";
@import "../../assets/main_colors";

/* Global Styles */
.icons {
  display: flex;
  gap: 10px;

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
  width: 100vw;
  height: 90vh;
  margin-top: 10px;
  overflow: hidden;
}

/* Component: .form-container */
/* Component: .form-container */
.form-container {
  background-color: $bg-secondary;
  position: relative;
  max-width: 90%;
  width: 330px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Component: .photo-container */
.photo-container {
  position: relative;
  height: 200px;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Adjusted for better alignment */

  /* Component: .form-header */
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h2 {
      margin: 0;
    }

    button {
      padding: 8px 12px;
      border: none;
      background-color: #3498db;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  p {
    margin: 8px 0;
  }

  img {
    margin-right: 5px;
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
  .down{
    display: flex;
    margin-top: 10px;
    gap:10px;
  }
}
</style>

