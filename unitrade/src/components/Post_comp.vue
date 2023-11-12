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
  methods:{
    openPost(){
      this.$router.push({ name: 'post', params: { id: this.post.id } })
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/main_colors";

.post {
  border: 1px solid rgba(0,0,0,0);
  height: 300px;
  width: 250px;
  min-height: 300px;
  max-height: 300px;
  background-color: $light-main;
  max-width: 252px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 4px 4px 4px $default-shadow-color;
  transition: all ease-out .3s;

  img {
    margin-top: 10px;
    width: 230px;
    height: auto;
    max-height: 200px;
  }

  .post-name {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    height: 30px;
    line-height: 30px;
  }

  .post-price {
    margin-bottom: 10px;
    line-height: 30px;
    width: 230px;
    text-align: end;
  }
}

.post:hover{
  box-shadow: 8px 8px 8px $default-shadow-color;
  transition: all ease-out .3s;
  border: 1px solid $dark-blue-main;
  cursor: pointer;
}
</style>