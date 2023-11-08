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
        <button id="announcementButton">Оголошення</button>
        <button id="jobButton">Робота</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dormitoryNumber: null,
    };
  },
};
</script>

<style lang="scss" scoped>
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
#jobButton {
    display: none;
}
button {
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
}
.active-toggle{
    background-color: #3498db;
}
</style>