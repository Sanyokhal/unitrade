<template>
  <div class="container">
    <div class="menu">
      <select>
        <option value="" disabled selected>№ гуртожитку</option>
        <option value="1">Гуртожиток №1</option>
        <option value="2">Гуртожиток №2</option>
        <option value="3">Гуртожиток №3</option>
        <option value="4">Гуртожиток №4</option>
        <option value="5">Гуртожиток №5</option>
      </select>
      <select>
        <option value="" disabled selected>Категорія</option>
        <option value="1">Рандомна №1</option>
        <option value="2">Рандомна №2</option>
        <option value="3">Рандомна №3</option>
        <option value="4">Рандомна №4</option>
        <option value="5">Рандомна №5</option>
      </select>
    </div>
    <div class="posts-spacer"></div>
    <div class="posts_list">
      <Post_comp :post="post" v-for="post in postsList" :key="post.id"/>
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
import Post_comp from "@/components/Post/Post_comp.vue";
import debounce from "lodash.debounce";
import {mapGetters} from "vuex";


export default {
  name: "Posts_list",
  components: {Post_comp},
  computed: {
    ...mapGetters('posts', ['posts']),
    postsList(){ return this.posts.slice(this.page_index*10,(this.page_index+1)*10)},
    has_next_page(){ return this.posts.slice((this.page_index+1)*10,(this.page_index+2)*10).length!=0},
  },
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
      search: undefined,
      category: 0,
      is_free: false,
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
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/main_colors";

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
  background-color: $bg-green;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10px;
  overflow: hidden;
  justify-content: space-between;

  .menu {
    width: calc(100vw - 30px);
    height: 25px;
    margin: 15px 0;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    select{
      outline: none;
      flex: 1;
      font-size: 11px;
      font-weight: 400;
      height: 25px;
      border-radius: 3px;
      border:none;
      padding-left: 10px;
    }
  }

  .posts-spacer{
    width:calc(100vw - 30px);
    height: 1px;
    background-color: #006D77;
  }

  .posts_list {
    gap: 15px;
    padding-top: 20px;
    width: calc(100vw - 30px);
    display: flex;
    flex-direction: column;
  }

  .page-selector {
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    margin-top: 20px;
    border-top: 1px solid $border-default;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    height: 40px;
    gap: 10px;
    font-weight: 500;
  }
}
</style>