<script>
import {mapActions, mapGetters} from "vuex";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "@/firebase-config";
import Token from "@/token-usage";

export default {
  name: "Auth_btn",
  methods: {
    ...mapActions("user", ["changeIsLoggedIn", "changeUser"]),
    handleGoogle() {
      const provider = new GoogleAuthProvider();
      //використовуємо функцію авторизації у спливаючому вікні
      signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user; //Дістаємо об'єкт користувача
            const emailDomain = user.email.split("@")[1];
            if (emailDomain !== "student.uzhnu.edu.ua") {
              alert("Неприпустимий домен електронної пошти! Увійдіть за допомогою студентської пошти");
              auth.signOut();
            } else {
              sessionStorage.setItem("fullName", user.displayName); //user.displayName - ім'я акаунту
              sessionStorage.setItem("avatarUrl", user.photoURL); //user.photoURL - аватар акаунту
              sessionStorage.setItem("email", user.email); //user.email - електронна адреса акаунту
              sessionStorage.setItem("isLoggedIn", true);

              this.changeUser({
                avatarUrl: user.photoURL,
                fullName: user.displayName,
                email: user.email,
              });
              this.changeIsLoggedIn(true);

              //Set token to cookie
              Token.setAccessTokenCookie(
                  user.uid,
                  new Date().getTime() + 30 * 60 * 1000
              );

              this.$router.push("/");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
  }
}
</script>

<template>
  <div class="auth-btn" @click="handleGoogle()">
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="display: block"
    >
      <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      ></path>
      <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      ></path>
      <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      ></path>
      <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      ></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
    <span>Авторизуватись</span>
  </div>
</template>

<style scoped lang="scss">
.auth-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  height: 40px;
  width: 90%;
  background-color: #FFFFFF;
  border-radius: 10px;

  span {
    font-size: 11px;
    font-weight: 500;
  }

  svg {
    height: 20px;
    padding: 10px;
  }
}
</style>