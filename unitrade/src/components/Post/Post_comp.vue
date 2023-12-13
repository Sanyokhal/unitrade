<template>
  <div class="post" @click="openPost()">
    <img :src="post.img_url" alt="Фото поста">
    <div class="post-data">
      <div class="text">
        <div class="post-name-icon">
          <span class="post-name">{{ post.name }}</span>
          <img :src="user.avatarUrl" alt="" class="user-profile">
        </div>
        <p class="address">
          Гурт. №4 82/a
        </p>
      </div>
      <div class="tag">
        <span>Техніка</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Post_comp",
  props: {
    post: Object
  },
  computed: {
    ...mapGetters('user', ["user"]),
  },
  methods: {
    openPost() {
      this.$router.push({name: 'post', params: {id: this.post.id}})
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/main_colors";

.post {
  width: calc(100% - 20px);
  border-radius: 10px;
  height: 80px;
  background-color: $bg-secondary;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  transition: all ease-out .3s;
  padding: 10px;

  img {
    max-height: 80px;
    min-height: 75%;
    object-fit: contain;
    height: 80px;
    width: auto;
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

      .post-name-icon {
        text-align: start;
        display: flex;
        flex-direction: row;
        gap: 15px;
        width: 100%;
        flex: 1;
        align-items: center;
        justify-content: space-between;

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
      }

      .address {
        font-size: 10px;
        text-align: left;
      }
    }

  }
  .tag{
    width: 80px;
    display: flex;
    height: 15px;
    background-color: #72DDF7;
    border-radius: 50px;
    line-height: 15px;
    text-align: center;
    span{
      width: 100%;
      font-weight: 400;
      font-size: 10px;
    }
  }

}

</style>