Запитання:
1) як зробити, щоб в якийсь з select->option був за замовчуванням


<template>
  <header>
    <div class="header-left-wrapper">
      <img class="header-left-wrapper logo" src="" alt="Логотип" />
      <select
        name="dormitoryNumber"
        class="header-left-wrapper select"
        v-model="dormitoryNumber"
      >
        <option value="1" class="header-left-wrapper select-option">№1</option>
        <option value="2" class="header-left-wrapper select-option">№2</option>
        <option value="3" class="header-left-wrapper select-option">№3</option>
        <option value="4" class="header-left-wrapper select-option">№4</option>
        <option value="5" class="header-left-wrapper select-option">№5</option>
      </select>
    </div>
    <div class="header-right-wrapper">
      <ul class="header-right-wrapper toggle">
        <li
          class="header-right-wrapper toggle-li"
          @click="toggle = 'adversitement'"
          :class="{
            'header-right-wrapper toggle-li-active': toggle == 'adversitement',
          }"
        >
          Оголошення
        </li> |
        <li
          class="header-right-wrapper toggle-li"
          @click="toggle = 'job'"
          :class="{
            'header-right-wrapper toggle-li-active': toggle == 'job',
          }"
        >
          Робота
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dormitoryNumber: null,
      toggle: "advertisement",
    };
  },
  mounted () {
    this.toggle = "adversitement";
  },
};
</script>

<style lang="scss">
header {
  position: fixed;
  left: 10vw;
  width: 80vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edf6f9;
}
.toggle{
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 40px;
  color: #7F9799;
  font-size: 14px;
}
.toggle-li{
  color: black;
  cursor: pointer;
}
.toggle-li-active {
  font-weight: 800;
  box-shadow: 0 0 5px black;
}
</style>