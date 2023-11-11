<template>
  <section class="user-profile">
    <div class="user-section">
      <div class="user-info">
        <img
          class="avatar"
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        />
        <h3>Галь Олександр</h3>
      </div>
      <div class="user-profile-actions">
        <button class="change-avatar-button">Змінити фото</button>
        <button class="exit-profile-button">Вийти</button>
      </div>
    </div>
    <div class="user-posts">
      <h3 class="title">Ваші оголошення</h3>
      <ul class="user-posts-list">
        <li class="user-posts-item">
          <img
            class="post-image"
            src="https://www.bsmu.edu.ua/wp-content/uploads/2019/03/1653.jpg"
          />
          <h4 class="post-title">Чай</h4>
          <p class="post-price">200грн</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
* {
    box-sizing: border-box;
}
.avatar {
  width: 40px;
  height: 40px;
}

.user-profile {
  width: 100%;
  max-width: 1152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  background: #EDF6F9;
}

.user-profile {
    border-radius: 10px;

}

.user-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #006D77;
  padding: 0 10px;
}

.user-info {
  display: flex;
  align-items: center;

}

.user-info > h3 {
    margin-left: 20px;
}

.user-profile-actions {
}

.change-avatar-button {
    border: 1px solid #006D77;
    border-radius: 10px;
}

.exit-profile-button {
    border: 1px solid #FF0000;
    border-radius: 10px;
}

.user-profile-actions button {
    margin-left: 20px;
}

.title {
    margin: 10px auto;
}

.user-posts {
}

.user-posts-list {
}

.user-posts-item {
}

</style>
