<template>
  <div class="work" @click="openWork()">
    <img :src="work.img" alt="Фото поста" />
    <div class="post-data">
      <div class="text">
        <p class="post-name">{{ work.name }}</p>
      </div>
      <div class="post-bottom">
        <div class="tag">
          <span>{{ work.tag }}</span>
        </div>
        <div
          class="buttons"
          v-if="user.role == 'admin'"
        >
          <font-awesome-icon
            :icon="['fas', 'pen']"
            @click.stop="updateWork()"
          />
          <font-awesome-icon
            :icon="['fas', 'trash']"
            @click.stop="deleteWork()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Work_comp",
  props: {
    work: Object,
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("worksDefaultDB", ["deleteItem"]),
    updateWork() {
      this.$router.push({ name: "workEdit", params: { id: this.work.id } });
    },
    openWork() {
      this.$router.push({ name: "work", params: { id: this.work.id } });
    },
    deleteWork() {
      if (confirm("Видалити оголошення ?")) {
        this.deleteItem(this.work.id)
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/main_colors";

.work {
  width: calc(100% - 20px);
  border-radius: 10px;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  transition: all ease-out 0.3s;
  padding: 10px;
  &:hover{
    cursor: pointer;
  }
  img {
    max-height: 80px;
    min-height: 75%;
    object-fit: contain;
    height: 80px;
    width: 135px;
    max-width: 135px;
    overflow: hidden;
  }

  .post-data {
    display: flex;
    min-width: 160px;
    flex-direction: column;
    align-items: start;
    flex: 1;
    height: 100px;
    justify-content: space-evenly;

    .text {
      width: 100%;

      .post-name {
        white-space: nowrap;
        text-align: left;
        overflow-x: hidden;
        width: calc(100% - 20px);
        max-width: calc(100% - 20px - 15px);
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
      }

      img {
        height: 20px;
        width: 20px;
        border-radius: 100%;
      }

      .address {
        font-size: 10px;
        text-align: left;
      }
    }
  }
  .post-bottom {
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .buttons {
      display: flex;
      gap: 15px;
    }
  }
}

.tag {
  width: 80px;
  display: flex;
  height: 15px;
  background-color: #72ddf7;
  border-radius: 50px;
  line-height: 15px;
  text-align: center;

  span {
    width: 100%;
    font-weight: 400;
    font-size: 10px;
  }
}
</style>