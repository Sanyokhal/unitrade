<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" class="form-content">
      <h2 class="form-title">Створіть нове оголошення</h2>
      <!-- Заголовок -->
      <div class="input-group">
        <input type="file" id="photo" accept="image/*" class="input-field" />
        <input
          type="text"
          id="title"
          v-model="formData.title"
          placeholder="Назва"
          class="input-field"
        />
        <input
          type="text"
          id="tag"
          v-model="formData.tag"
          placeholder="Тег"
          class="input-field"
        />
      </div>
      <div class="button-group">
        <button type="submit" class="save-button">Зберегти</button>
        <button type="button" class="cancel-button">Скасувати</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        photo: null,
        title: "",
        tag: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Надіслано:", this.formData);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/main_colors";
.form-container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.form-content {
    font-weight: 500;
  width: calc(100vw - 30px);
  background-color: white; /* Білий фон для форми */
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.input-field {
  width: 80%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

input[type="file"]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: $main;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type="file"]::file-selector-button:hover {
  background: $main;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.save-button,
.cancel-button {
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.save-button {
  background-color: $main;
  color: white;
  border: none;
}

.cancel-button {
  background-color: #ccc;
  border: none;
}
.form-title {
  font-size: 18px; /* Змінив розмір заголовку */
  margin-bottom: 10px; /* Додав відступ між заголовком і полями */
  font-weight: 500;
}
</style>
