<template>
  <main class="eu-e-meus-amores is-clipped p-l-16 p-r-16">
    <div class="container">
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="description has-text-pink">
        {{ description }}
      </h2>
      
      <article class="box-container">
        <section class="section-container">
          <ResponsiveImage
            :sources="looseCard.imageSet.src"
            :lazyload="false"
            :alt="looseCard.imageSet.alt"
          />
          <header class="section-header-text">
            Quando a gente divide o tempo entre crush e migues, 24horas parece pouco, né? Mas bora lá que esse problema é do tipo “vira essa boca pra cá”. Se organizar direitinho, isso só acontece nas séries e filmes.
          </header>
        </section>
      </article>

      <CardsList :cardsList="cardsList" />

      <Share text-class="share-text" button-class="share-button" />
    </div>
  </main>
</template>

<script>
import { title, description, looseCard, cardsList } from "./constants";

import baseImage from "~/utils/baseImage";
import ResponsiveImage from "~/components/shared/ResponsiveImage";
import CardsList from "~/components/eu-e-meus-amores/CardsList";

export default {
  head() {
    return this.$createHeadFunction(
      {
        title: title,
        description: description,
      },
      null,
      this.$route.path,
      null
    );
  },

  // optional component declarations
  components: {
    ResponsiveImage,
    CardsList
  },

  data() {
    return {
      title,
      description,
      looseCard,
      cardsList,
      // all options: https://flickity.metafizzy.co/options.html
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";

.eu-e-meus-amores {
  text-align: center;
  color: black;

  & .container {
    margin-top: $size-5 + 4;
  }

  & /deep/.box-container {
    border-radius: $size-7;
    & img {
      border-radius: $size-7;
      border: 1.2px solid black;
    }
  }

  & .title {
    font-size: 14px;
    font-family: Netflix Sans;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  & .description {
    margin-bottom: 2rem;
    font-size: $size-3 + 10;
    font-family: Agipo;
    font-weight: bold;
    line-height: 70px;
    letter-spacing: -0.01em;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
  }

  & .section-container {
    max-width: 1000px;
    margin: auto;
    & .section-header-text {
      margin: ($size-7 + 5) ($size-8 - 6) $size-5;
      font-size: 17px;
      font-family: Grennete Pro;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.01em;

      @media (min-width: $tablet) {
        margin: ($size-7 + 5) auto $size-5;
      }

      @media (min-width: $desktop) {
        padding: 0  $size-5;
      }
    }
  }

  /deep/.share-text {
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    font-weight: 600;
  }

  /deep/.button.share-button {
    background-color: transparent;
    color: $black;
    border: 2px solid black;
    &:hover {
      color: $pink;
    }
  }

  .scroll-top-btn {
    background: $black;
    border-color: $pink;;
  }

  .scroll-top-btn .icon{
    stroke: $pink;
  }
}
</style>
