<script>
export default {
  name: "RulesPage",
};
</script>

<template>
  <div class="rules">
    <h2>{{ $t("aboutUs.titles.rules") }}</h2>
    <h4>
      <font-awesome-icon
        icon="exclamation"
        beat
        class="exclamation-danger-start"
      />
      {{ $t("rules.title") }}
      <font-awesome-icon
        icon="exclamation"
        beat
        class="exclamation-danger-end"
      />
    </h4>
    <ul>
      <li><b>1. </b>{{ $t("rules.1") }}</li>
      <li><b>2. </b>{{ $t("rules.2") }}</li>
      <li><b>3. </b>{{ $t("rules.3") }}</li>
      <li><b>4. </b>{{ $t("rules.4") }}</li>
      <li><b>5. </b>{{ $t("rules.5") }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

@import '../../assets/main_colors';
.rules {
  padding-bottom: 60px;
  width: 90vw;
  margin: 20px auto;
  h2 {
    text-align: left;
    border-bottom: 1px solid $text-main;
    margin: 20px 0;
  }
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
}
</style>