<template>
  <div class="container">
    <div class="menu">
      <span class="menu-tag">Робота</span>
      <div class="menu-options">
        <input type="text" placeholder="Пошук" v-model="search" class="search-bar">
        <button class="all" :class="{'selected-gender':gender === 'all'}" @click="gender = 'all'"><span>Для всіх</span>
        </button>
        <button class="woman" :class="{'selected-gender':gender === 'woman'}" @click="gender = 'woman'">
          <span>Жінкам</span></button>
        <button class="man" :class="{'selected-gender':gender === 'man'}" @click="gender = 'man'"><span>Чоловікам</span>
        </button>
      </div>
    </div>
    <div class="works_list">
      <Work_comp :work="work" v-for="work in works_list" :key="work.id"/>
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
import debounce from "lodash.debounce";
import {works} from "@/temp_data";
import Work_comp from "@/components/Work_comp.vue";

export default {
  name: "Works_list",
  components: {Work_comp},
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
      works_list: [],
      gender: 'all',
      search: undefined,
      has_next_page: true,
    }
  },
  watch: {
    search() {
      this.debouncedFetch();
    },
    gender() {
      this.fetch();
    },
  },
  mounted() {
    this.debouncedFetch = debounce(() => {
      this.fetch();
    }, 300)
    this.works_list = works;
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
  box-shadow: 0px 0px 10px $default-shadow-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  margin-left: 12.5vw;
  justify-content: space-between;
  margin-top: 40px;
  background: $bg-secondary;
  border-radius: $default-border-radius;
  overflow: hidden;

  .menu {
    width: 100%;
    height: 60px;
    align-items: center;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid $border-default;
    justify-content: space-between;

    .menu-tag {
      font-size: 20px;
      font-weight: bold;
      color: $border-default;
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
        background: $bg-secondary;
        border-bottom: 1px solid $border-default;
        font-weight: bold;
        transition: box-shadow ease-out .3s;
      }

      .search-bar::placeholder {
        transition: all ease-out .3s;
        color: $border-default;
      }

      .search-bar:focus-visible, .search-bar:hover {
        outline: none;
      }

      .search-bar:focus-visible::placeholder {
        padding-left: 50px;
        opacity: 0;
        transition: all ease-out .3s;
      }

      button {
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 2px;
        border: none;
        height: 30px;
        background-color: $main;
        transition: all ease-out .3s;

        span {
          transition: all ease-out .3s;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
        }
      }

      button:hover {
        cursor: pointer;
        background-color: $active;
        transition: all ease-out .3s;
      }

      .selected-gender {
        padding-left: 25px;
        padding-right: 25px;
        transition: all ease-out .3s;
        background-color: $active;

        span {
          font-weight: bold;
          transition: all ease-out .3s;
        }
      }
    }
  }

  .works_list {
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
    border-top: 1px solid $border-default;
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