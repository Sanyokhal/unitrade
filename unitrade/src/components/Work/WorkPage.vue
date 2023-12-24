<template>
  <div class="mobile-form-container" v-if="work_data">
    <div class="form-container">
      <div class="photo-container">
        <img :src="work_data.img" alt="Photo" class="photo"/>
      </div>
      <div class="form-content">
        <p class="header-text">{{ work_data.name }}</p>
        <p class="description">{{ work_data.description }}</p>
        <p class="payment">{{$t('work.salary')}}: <b>{{ work_data.salary }}₴</b></p>
        <div style="display: flex" class="down">
          <div class="category">{{ work_data.tag }}</div>
          <button @click="report()" class="report">
            <font-awesome-icon :icon="['far', 'flag']" class="report-icon"/>
            <span>Поскаржитись</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "WorkPage",
  data() {
    return {
      work_data: {},
    };
  },
  computed: {
    workId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions("works", ["loadListById"]),
    report() {
      alert(`На допис з Id ${this.workId} поскаржено`);
    },
    copyToClipboard(value) {
      navigator.clipboard.writeText(value);
      alert("Номер скопійовано");
    },
  },
  async created() {
    this.loadListById(this.$route.params.id)
        .then((list) => {
          this.work_data = list[0];
          this.isLoaded = true;
        })
        .catch(() => {
          console.log("something wrong");
        });
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/main_colors";
@import "../../assets/main_colors";

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
  margin-top: 10px;
  margin-bottom: 60px;
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

  .payment, .description {
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
</style>
