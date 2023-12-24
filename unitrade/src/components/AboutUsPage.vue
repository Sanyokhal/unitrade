<script>
export default {
  name: "About"
}
</script>

<template>
  <div class="about">
    <div id="about-us">
      <h2>{{ $t('aboutUs.titles.developers') }}</h2>
      <div class="images">
        <div class="img">
          <img src="../assets/dev_images/sasha.jpg" alt="">
          <span>{{ $t('aboutUs.developers.oleksandr') }}</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/andrij.jpg" alt="">
          <span>{{ $t('aboutUs.developers.andriy') }}</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/viktor.jpg" alt="">
          <span>{{ $t('aboutUs.developers.viktor') }}</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/jarik.jpg" alt="">
          <span>{{ $t('aboutUs.developers.yaroslav') }}</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/lioha.jpg" alt="">
          <span>{{ $t('aboutUs.developers.oleksiy') }}</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/ihor.jpg" alt="">
          <span>{{ $t('aboutUs.developers.ihor') }}</span>
        </div>
      </div>
    </div>
    <div id="contacts">
      <h2>{{ $t('aboutUs.titles.contacts') }}</h2>
      <div class="contacts-list">
        <h3>{{ $t('aboutUs.contacts.communication') }}</h3>
        <a href="#">Google Forms</a>
        <a href="#">Gmail</a>
        <a href="#">Telegram</a>
      </div>
    </div>
    <div id="rules">
      <h2>{{ $t('aboutUs.titles.rules') }}</h2>
      <h4>
        <font-awesome-icon icon="exclamation" beat class="exclamation-danger-start"/>
        {{ $t('aboutUs.rules.title') }}
        <font-awesome-icon icon="exclamation" beat class="exclamation-danger-end"/>
      </h4>
      <ul>
        <li><b>1. </b>{{ $t('aboutUs.rules.1') }}</li>
        <li><b>2. </b>{{ $t('aboutUs.rules.2') }}</li>
        <li><b>3. </b>{{ $t('aboutUs.rules.3') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main_colors';


.about {
    padding-bottom: 60px;
  width: 90vw;
  margin: 20px auto;

  h2 {
    text-align: left;
    border-bottom: 1px solid $text-main;
    margin: 20px 0;
  }

  p {
    width: 80%;
    margin: 0 auto;
  }

  h3 {
    margin-top: 20px;
  }

  #about-us {
    .images {
      width: 100%;
      margin: 20px auto;
      grid-gap: 20px;
      display: grid;
      justify-content: space-evenly;
      grid-template-columns:repeat(auto-fit, 30%);
      grid-template-rows:repeat(auto-fit, auto);

      img {
        width: 100%;
        border-radius: 50%;
        transition: box-shadow ease .3s;
      }

      span {
        transition: font-weight ease .3s;
        font-size: 12px;
      }
      .img:hover {
        span {
          font-weight: bold;
        }

        img {
          box-shadow: 0px 0px 30px $default-shadow-color;
        }
      }
    }
  }

  #contacts {
    .contacts-list {
      gap: 10px;
      margin: 20px 0;
      display: flex;
      flex-direction: column;

      a {
        font-weight: 400;
        text-decoration: none;
        color: $text-main;
        transition: all ease .2s;
      }

      a:hover {
        transition: all ease .2s;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  #rules {
    h3 {
      text-decoration: underline;

      .exclamation-danger-end {
        margin-left: 10px;
        color: $danger-shadow;
      }

      .exclamation-danger-start {
        margin-right: 10px;
        color: $danger-shadow;
      }
    }

    ul {
      margin: 20px 0;

      li {
        font-size: 12px;
        margin: 5px 0;
        list-style: none;
      }
    }

    a {
      color: $text-main;
    }
  }
}
</style>