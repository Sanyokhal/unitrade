<template>
  <div class="form-container">
    <form class="form-content" @submit="submitForm()" >
      <h2 class="form-title">{{ $t('work.create') }}</h2>
      <div class="input-group">
        <input
          type="file"
          id="photo"
          @change="encodeImageFileAsURL"
          accept="image/*"
          class="input-field"
          required
        />
        <input
          type="text"
          id="title"
          v-model="formData.name"
          :placeholder="$t('form.name')"
          class="input-field"
          required
        />
        <input
          type="text"
          id="tag"
          v-model="formData.tag"
          :placeholder="$t('form.tag')"
          class="input-field"
          required
        />
        <input
          type="text"
          id="salary"
          v-model="formData.salary"
          :placeholder="$t('form.salary')"
          class="input-field"
          required
        />
        <textarea
          style="resize: none"
          v-model="formData.description"
          :placeholder="$t('form.description')"
          class="input-field"
          required
        ></textarea>
      </div>
      <div class="button-group">
        <button type="submit" class="save-button" @click="createWork()">
          {{ $t('form.submit') }}
        </button>
        <button
          type="button"
          class="cancel-button"
          @click="this.$router.push('/me')"
        >
          {{$t('form.cancel')}}
        </button>
      </div>
    </form>
  </div>
</template>
  
  <script>
import { serverTimestamp } from "firebase/firestore/lite";
import Token from "@/token-usage";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        img: "",
        name: "",
        tag: "",
        salary: "",
        creatorId: Token.getAccessTokenFromCookie(),
        creationDate: serverTimestamp(),
      },
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("works", ["addItem"]),
    ...mapActions("user", ["loadUser"]),
    submitForm() {
      console.log("Надіслано:", this.formData);
    },
    encodeImageFileAsURL(event) {
      var file = event.target.files[0];

      if (file) {
        var reader = new FileReader();

        reader.onloadend = () => {
          this.formData.img = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        console.error("No file selected.");
      }
    },

    createWork() {
      this.addItem(this.formData);
      this.$router.push("/me");
    },
  },
  async mounted() {
    await this.loadUser();
  },
};
</script>
  
  <style scoped lang="scss">
@import "../../assets/main_colors";
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: calc(95vw - 30px);
  max-width: 600px; /* Set a maximum width for the form */
  border-radius: 15px;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  background-color: #ffffff;

  .form-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .form-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .input-field {
        padding: 10px;
        border-radius: 15px;
        border: none;
        outline: none;
        background-color: #d3dfe3;
        font-size: 12px;
        font-weight: 500;
        flex: 1;

        &::placeholder {
          transition: padding-left ease-out 0.2s, opacity ease-out 0.2s;
        }

        &:focus-visible::placeholder {
          padding-left: 20px;
          opacity: 0;
          transition: padding-left ease-out 0.2s, opacity ease-out 0.2s;
        }
      }
    }

    .button-group {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      button {
        border-radius: 15px;
        padding: 10px 20px;
        font-size: 12px;
        font-weight: 600;
        outline: none;
      }

      .save-button {
        background-color: #006d77;
        color: #ffffff;
        border: 1px solid #006d77;
      }

      .cancel-button {
        background: none;
        border: 1px solid #5c6669;
        color: #5c6669;
      }
    }
  }
}

input[type="file"]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: $dark_blue_main;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type="file"]::file-selector-button:hover {
  background: $dark_blue_main;
}
</style>
  