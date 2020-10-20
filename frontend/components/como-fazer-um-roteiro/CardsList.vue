<template>
  <div class="cards-container" style="margin: auto;">
    <article class="box-container has-background-pink" v-for="(card, i) in cardsList" :key="i">
      <section class="section-container">
        <ResponsiveImage
          :sources="card.imageSet.src"
          :lazyload="true"
          :alt="card.imageSet.alt"
        />
        <header class="section-header-text-in-a-box" v-html="card.headerText" />
        <footer class="section-footer-text" v-html="card.footerText" />
      </section>
    </article>
  </div>
</template>

<script>
import ResponsiveImage from "~/components/shared/ResponsiveImage"

export default {
  components: {
    ResponsiveImage
  },
  props: {
    cardsList: {
      type: Array,
      required: true
    }
  },
};
</script>

<style  lang="scss" scoped>
@import "~assets/css/overrides";

.box-container {
  padding-top: 20px;
  color: black;

  @media (min-width: $desktop) {
    padding-top: 0;
  }

  &:before {
    display: block;
    margin: 0 0 20px;
    background: #808080;
    border-top: 1.5px dashed black;
    content: '';
  }

  &:not(:last-child) {
    margin-bottom: 60px;

    @media (min-width: $desktop) {
      margin-bottom: 40px;
    }
  }

  & .section-header-text-in-a-box {
    padding: 20px 25px 0;
    margin: auto;
    font-size: 32px;
    font-family: Grennete Pro;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: -0.01em;
    max-width: 650px;
    text-transform: uppercase;
    @media (min-width: $tablet) {
      padding: 25px 0;
    }
  }

  & .section-footer-text {
    padding: 20px 0;
    text-align: left;
    font-size: 17px;
    font-family: Grennete Pro;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.01em;
    &:last-child {
      padding-bottom: 0;
    }
  }

  & /deep/.cards-container {
    &:last-child {
      background-color: violet;
      & .section-footer-text {
        padding: 20px 0 2.625rem;
      }
    }
  }
}
</style>