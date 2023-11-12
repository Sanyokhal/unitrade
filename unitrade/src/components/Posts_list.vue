<template>
  <div class="container">
    <div class="menu">
      <span class="menu-tag">Оголошення</span>
      <div class="menu-options">
        <input type="text" placeholder="Пошук" v-model="search" class="search-bar">
        <select name="" id="" class="product-category" v-model="category">
          <option value="0">Всі</option>
          <option value="1">Меблі</option>
          <option value="2">Одяг</option>
          <option value="3">Їжа</option>
        </select>
        <select class="product-price" v-model="is_free">
          <option value="true">Даром</option>
          <option value="false">Не даром</option>
        </select>
      </div>
    </div>
    <div class="posts_list">
      <Post_comp :post="post" v-for="post in posts" :key="post.id"/>
    </div>
    <div class="page-selector">
      <font-awesome-icon icon="arrow-left" :class="{'hidden-page':page_index == 0}" @click="subPage()"
                         class="page-toggle"/>
      <span>{{ page_index + 1 }}</span>
      <font-awesome-icon icon="arrow-right" :class="{'hidden-page':!has_next_page}" @click="addPage()"
                         class="page-toggle"/>
    </div>
  </div>
</template>

<script>
import Post_comp from "@/components/Post_comp";
import debounce from "lodash.debounce";
import {posts} from "@/temp_data";

export default {
  name: "Posts_list",
  components: {Post_comp},
  methods: {
    fetch() {
      alert("Симуляція fetch запиту");
    },
    subPage() {
      if (this.page_index > 0) {
        this.page_index -= 1;
      }
    },
    addPage() {
      if (this.has_next_page) {
        this.page_index += 1;
      }
    }
  },
  data() {
    return {
      page_index: 0,
      posts: [],
      search: undefined,
      category: 0,
      is_free: false,
      has_next_page: true,
    }
  },
  watch: {
    search() {
      this.debouncedFetch();
    },
    category() {
      this.fetch();
    },
    is_free() {
      this.fetch();
    }
  },
  mounted() {
    this.debouncedFetch = debounce(() => {
      this.fetch();
    }, 300)
    this.posts = posts;
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main_colors";

.hidden-page {
  opacity: 0 !important;
  transition: opacity ease-out .2s;
  cursor: default !important;
}

.page-toggle {
  transition: opacity ease-out .2s;
}

.page-toggle:hover {
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  max-width: 75vw;
  margin-left: 12.5vw;
  justify-content: space-between;
  margin-top: 100px;
  background: $light-main;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .menu {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: 60px;
    align-items: center;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #2c3e50;
    justify-content: space-between;

    .menu-tag {
      font-size: 20px;
      font-weight: bold;
      color: #2c3e50;
      margin-left: 10px;
    }

    .menu-options {
      margin-right: 10px;
      display: flex;
      flex-direction: row;
      gap: 20px;

      .search-bar {
        width: 290px;
        font-family: 'Montserrat', sans-serif;
        max-width: 300px;
        padding-left: 10px;
        border: none;
        background: $light-main;
        border-bottom: 1px solid #2c3e50;
        font-weight: bold;
        transition: box-shadow ease-out .3s;
      }

      .search-bar::placeholder {
        transition: all ease-out .3s;
        color: #2c3e50;
      }

      .search-bar:focus-visible, .search-bar:hover {
        outline: none;
      }

      .search-bar:focus-visible::placeholder {
        padding-left: 50px;
        opacity: 0;
        transition: all ease-out .3s;
      }

      .product-category {
        width: 150px;
        padding-left: 10px;
        font-family: 'Montserrat', sans-serif;
        max-width: 150px;
        font-weight: 500;
        background-color: $light-brown-main;
        border: 1px solid $dark-brown-main;
        border-radius: 4px;
        transition: box-shadow ease-out .3s;
      }

      .product-category:focus-visible {
        outline: none;
      }

      .product-category:hover {
        cursor: pointer;
        transition: box-shadow ease-out .3s;
        box-shadow: 4px 4px 6px $default-shadow-color;
      }

      .product-price {
        font-family: 'Montserrat', sans-serif;
        max-width: 120px;
        padding-left: 10px;
        width: 120px;
        height: 30px;
        line-height: 30px;
        background-color: $light-brown-main;
        border-radius: 4px;
        font-weight: 500;
        text-align: center;
        border: 1px solid $dark-brown-main;
        transition: box-shadow ease-out .3s;
      }

      .product-price:hover {
        cursor: pointer;
        transition: box-shadow ease-out .3s;
        box-shadow: 4px 4px 6px $default-shadow-color;
      }

      .product-price:focus-visible {
        outline: none;
      }
    }
  }

  .posts_list {
    padding-top: 20px;
    max-width: 75vw;
    width: 75vw;
    grid-gap: 20px;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns:repeat(auto-fit, 17.5vw);
    grid-template-rows:repeat(auto-fit, 15vw);
  }

  .page-selector {
    width: 100%;
    display: flex;
    margin-top: 20px;
    border-top: 1px solid #2c3e50;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 10px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>