<template>
  <div class="container">
    <div class="works-spacer"></div>
    <div class="works_list">
      <Work_comp :work="work" v-for="work in getItemsList" :key="work.id"/>
    </div>
    <!--    <div class="page-selector">-->
    <!-- <font-awesome-icon icon="arrow-left" :class="{'hidden-page':page_index == 0}" @click="subPage()"
                       class="page-toggle"/>
    <span>{{ page_index + 1 }}</span>
    <font-awesome-icon icon="arrow-right" :class="{'hidden-page':!has_next_page}" @click="addPage()"
                       class="page-toggle"/> -->
    <!--    </div>-->
  </div>
</template>
<!--TODO Зробити min-height для списку-->
<script>
import debounce from "lodash.debounce";
import {mapGetters, mapActions} from "vuex";
import Work_comp from "@/components/Work/Work_comp.vue";

export default {
  name: "Works_list",
  components: {Work_comp},
  computed: {
    ...mapGetters('worksDefaultDB', ['getItemsList']),
    // worksList(){ return this.list.slice(this.page_index*10,(this.page_index+1)*10)},
    // has_next_page(){ return this.list.slice((this.page_index+1)*10,(this.page_index+2)*10).length!=0},
  },
  methods: {
    ...mapActions("worksDefaultDB", ["loadList"]),
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
      gender: 'all',
      search: undefined,
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
    }, 500)
    this.loadList()
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/main_colors";

.works-spacer {
  width: calc(100vw - 30px);
  height: 1px;
  background-color: #006D77;
}

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

    select {
      width: calc(100% - 10px);
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

  .works_list {
    gap: 15px;
    padding-top: 20px;
    min-height: calc(100vh - 75px - 68px); // $2 це селектор $3 це верхнє меню + 1px (1px height spacer)
    width: calc(100vw - 30px);
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
  }

  .page-selector {
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    margin-top: 20px;
    border-top: 1px solid $border-default;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>