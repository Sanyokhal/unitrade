<template>
  <div class="container">
    <div class="menu">
      <select v-model="dormitoryNumber">
        <option value="1">{{$t('global.dormitory')}} №1</option>
        <option value="2">{{$t('global.dormitory')}} №2</option>
        <option value="3">{{$t('global.dormitory')}} №3</option>
        <option value="4">{{$t('global.dormitory')}} №4</option>
        <option value="5">{{$t('global.dormitory')}} №5</option>
      </select>
    </div>
    <div class="posts-spacer"></div>
    <div class="posts_list">
      <Post_comp :post="post" v-for="post in list" :key="post.id" />
    </div>
  </div>
</template>

<script>
import Post_comp from "@/components/Post/Post_comp.vue";
// import debounce from "lodash.debounce";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts_list",
  components: { Post_comp },
  computed: {
    ...mapGetters("posts", ["list"]),
  },
  methods: {
    ...mapActions("posts", ["loadListByDormitory"]),
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
    },
  },
  data() {
    return {
      page_index: 0,
      search: undefined,
      category: 0,
      is_free: false,
      isLoaded: false,
      dormitoryNumber: localStorage.getItem("defaultDormitory"),
    };
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
    },
    async dormitoryNumber(newValue) {
      localStorage.setItem("defaultDormitory", newValue);
      this.isLoaded = false;
      await this.loadListByDormitory(newValue);
      this.isLoaded = true;
    },
  },
  async created() {
    if (!localStorage.getItem("defaultDormitory")) {
      localStorage.setItem("defaultDormitory", 4);
    }
    await this.loadListByDormitory(this.dormitoryNumber);
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/main_colors";

.hidden-page {
  opacity: 0 !important;
  transition: opacity ease-out 0.2s;
  cursor: default !important;
}

.page-toggle {
  transition: opacity ease-out 0.2s;
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
    select {
      outline: none;
      flex: 1;
      font-size: 11px;
      font-weight: 400;
      height: 25px;
      border-radius: 3px;
      border: none;
      padding-left: 10px;
    }
  }

  .posts-spacer {
    width: calc(100vw - 30px);
    height: 1px;
    background-color: #006d77;
  }

  .posts_list {
    gap: 15px;
    min-height: calc(
      100vh - 75px - 68px
    ); // $2 це селектор $3 це верхнє меню + 1px (1px height spacer)
    padding-top: 20px;
    width: calc(100vw - 30px);
    display: flex;
    padding-bottom: 60px;
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