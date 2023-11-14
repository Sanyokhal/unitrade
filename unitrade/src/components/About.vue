<script>
export default {
  name: "About"
}
</script>

<template>
  <div class="about">
    <div id="about-us">
      <h2>Про нас</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Massa tincidunt dui ut ornare lectus.
        Dictum at tempor commodo ullamcorper a lacus vestibulum. Id neque aliquam vestibulum morbi blandit cursus risus
        at ultrices. Lectus mauris ultrices eros in cursus turpis. Porttitor massa id neque aliquam. Amet consectetur
        adipiscing elit pellentesque. Urna id volutpat lacus laoreet non curabitur. Morbi blandit cursus risus at
        ultrices mi tempus. Sit amet est placerat in egestas erat. Donec et odio pellentesque diam volutpat commodo sed
        egestas egestas.</p>
      <h3>Розробники</h3>
      <div class="images">
        <div class="img">
          <img src="../assets/dev_images/sasha.jpg" alt="">
          <span>Олександр (2 курс)</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/andrij.jpg" alt="">
          <span>Андрій (2 курс)</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/viktor.jpg" alt="">
          <span>Віктор (2 курс)</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/jarik.jpg" alt="">
          <span>Ярослав (2 курс)</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/lioha.jpg" alt="">
          <span>Олексій (3 курс)</span>
        </div>
        <div class="img">
          <img src="../assets/dev_images/ihor.jpg" alt="">
          <span>Ігор (3 курс)</span>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Massa tincidunt dui ut ornare lectus.
        Dictum at tempor commodo ullamcorper a lacus vestibulum. Id neque aliquam vestibulum morbi blandit cursus risus
        at ultrices. Lectus mauris ultrices eros in cursus turpis. Porttitor massa id neque aliquam. Amet consectetur
        adipiscing elit pellentesque. Urna id volutpat lacus laoreet non curabitur. Morbi blandit cursus risus at
        ultrices mi tempus. Sit amet est placerat in egestas erat. Donec et odio pellentesque diam volutpat commodo sed
        egestas egestas.</p>
    </div>
    <div id="contacts">
      <h2>Контакти</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Massa tincidunt dui ut ornare lectus.
        Dictum at tempor commodo ullamcorper a lacus vestibulum. Id neque aliquam vestibulum morbi blandit cursus risus
        at ultrices. Lectus mauris ultrices eros in cursus turpis. Porttitor massa id neque aliquam. Amet consectetur
        adipiscing elit pellentesque. Urna id volutpat lacus laoreet non curabitur. Morbi blandit cursus risus at
        ultrices mi tempus. Sit amet est placerat in egestas erat. Donec et odio pellentesque diam volutpat commodo sed
        egestas egestas.</p>
      <div class="contacts-list">
        <h3>Зв'язатись з нами</h3>
        <a href="#">Google Forms</a>
        <a href="#">Gmail</a>
        <a href="#">Telegram</a>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Massa tincidunt dui ut ornare lectus.
        Dictum at tempor commodo ullamcorper a lacus vestibulum. Id neque aliquam vestibulum morbi blandit cursus risus
        at ultrices. Lectus mauris ultrices eros in cursus turpis. Porttitor massa id neque aliquam. Amet consectetur
        adipiscing elit pellentesque. Urna id volutpat lacus laoreet non curabitur. Morbi blandit cursus risus at
        ultrices mi tempus. Sit amet est placerat in egestas erat. Donec et odio pellentesque diam volutpat commodo sed
        egestas egestas.</p>
    </div>
    <div id="rules">
      <h2>Правила</h2>
      <h3>
        <font-awesome-icon icon="exclamation" beat class="exclamation-danger-start"/>
        Недотримання правил користування платформи призведе до блокування акаунту та видалення оголошень
        <font-awesome-icon icon="exclamation" beat class="exclamation-danger-end"/>
      </h3>
      <ul>
        <li><b>1. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>2. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>3. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>4. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>5. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>6. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>7. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>8. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>9. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
        <li><b>10. </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
      </ul>
      <h4>Для оскарження блокування заповніть <a href="#">Google Forms</a></h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main_colors';


.about {
  width: 80vw;
  margin: 40px auto;

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
      width: 70%;
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