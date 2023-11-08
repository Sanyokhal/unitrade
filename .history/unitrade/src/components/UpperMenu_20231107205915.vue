<template>
  <header>
    <div class="header-left-wrapper">
      <img class="header-left-wrapper-logo" src="" alt="Логотип" />
      <select
        name="dormitoryNumber"
        class="header-left-wrapper-select"
        v-model="dormitoryNumber"
      >
        <option value="1" class="header-left-wrapper-select-option">№1</option>
        <option value="2" class="header-left-wrapper-select-option">№2</option>
        <option value="3" class="header-left-wrapper-select-option">№3</option>
        <option value="4" class="header-left-wrapper-select-option">№4</option>
        <option value="5" class="header-left-wrapper-select-option">№5</option>
      </select>
    </div>
    <div class="header-right-wrapper">
      <div class="header-right-wrapper-toggle">
        <span
            @click="toggle='adversitement'"
          class="header-right-wrapper-toggle-button"
          :class="{
            'header-right-wrapper-toggle-button-active': toggle == 'adversitement',
          }"
        >
          Оголошення
        </span> | 
        <span
        id="jobButton"
        @click="toggle='job'"
        class="header-right-wrapper-toggle-button"
        :class="{
            'header-right-wrapper-toggle-button-active': toggle == 'job',
          }">Робота</span>
      </div>
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
  watch: {
    toggle(newValue) {
        console.log(newValue);
    }
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
.header-right-wrapper-toggle-button {
    text-decoration: none;
    color: black;
    border: none;
    cursor: pointer;
}
.header-right-wrapper-toggle-button-active{
    padding: 0 20px;
    font-weight:800;
}
</style>