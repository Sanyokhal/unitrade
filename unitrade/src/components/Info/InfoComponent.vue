<template>
  <div class="custom-alert">
    <div class="left-part">
      <h4>
        <span v-if="user.role == 'admin'">№{{ attention.dormitory }}</span>
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
    <div class="buttons" v-if="user.role == 'admin'">
      <font-awesome-icon :icon="['fas', 'pen']" @click.stop="updateInfo()" />
      <font-awesome-icon :icon="['fas', 'trash']" @click.stop="deleteInfo()" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "InfoComponent",
  props: {
    attention: Object,
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("informationDefaultDB", ["deleteItem"]),
    updateInfo() {
      this.$router.push({
        name: "infoEdit",
        params: { id: this.attention.id },
      });
    },
    deleteInfo() {
      if (confirm("Видалити інформацію ?")) {
        this.deleteItem(this.attention.id)
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

<style lang="scss" scoped>
@import "../../assets/main_colors";
.custom-alert {
  border-radius: 10px;
  width: calc(100% - 20px);
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
.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>