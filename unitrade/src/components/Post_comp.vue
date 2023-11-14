<template>
  <div class="post" @click="openPost()">
    <img :src="post.img_url" alt="Фото поста">
    <span class="post-name">{{ post.name }}</span>
    <span class="post-price"><b>{{ post.price }}₴</b></span>
  </div>
</template>

<script>
export default {
  name: "Post_comp",
  props: {
    post: Object
  },
  methods: {
    openPost() {
      this.$router.push({name: 'post', params: {id: this.post.id}})
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/main_colors";

.post {
  border: 1px solid rgba(0, 0, 0, 0);
  width: calc(17.5vw - 20px);
  height: calc(15vw - 20px);
  background-color: $bg-secondary;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  transition: all ease-out .3s;
  padding: 10px;

  img {
    max-height: 75%;
    min-height: 75%;
    object-fit: contain;
    height: auto;
    width: 100%;
    overflow: hidden;
  }

  .post-name {
    height: 15%;
    width: calc(100% - 10px);
    padding-left: 10px;
    font-weight: 500;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .post-price {
    padding-left: 10px;
    width: calc(100% - 10px);
    height: 10%;
    text-align: left;
  }
}

.post:hover {
  cursor: pointer;
  .post-name {
    text-decoration: underline;
  }
}
</style>