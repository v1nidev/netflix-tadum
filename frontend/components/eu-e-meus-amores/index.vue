<template>
  <main class="eu-e-meus-amores is-clipped p-l-16 p-r-16">
    <h1 class="title p-t-48">
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
        <header class="section-header-text entry">
          Quando a gente divide o tempo entre crush e migues, 24horas parece pouco, né? Mas bora lá que esse problema é do tipo “vira essa boca pra cá”. Se organizar direitinho, isso só acontece nas séries e filmes.
        </header>
      </section>
    </article>

    <div class="container">
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
    margin-top: 40px;
    padding: 0 !important;

    @media (min-width: $desktop) {
      & > div {
        margin: auto;
        max-width: 667px;
      }
    }
  }

  & /deep/.box-container {
    border-radius: 20px;
    & img {
      border-radius: 20px;
      border: 1.2px solid black;
      width: 100%;

      @media (min-width: $desktop) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
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
    font-size: 80px;
    font-family: Agipo;
    font-weight: bold;
    line-height: 70px;
    letter-spacing: -0.01em;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;

    @media (min-width: $desktop) {
      font-size: 150px;
      line-height: 83.5%;
      letter-spacing: -0.03em;
    }
  }

  & .section-container {
    margin: auto;

    @media (min-width: $desktop) {
      & /deep/ img {
        display: block;
      }
    }

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

        &.entry {
          margin: 0 0 100px;
          padding: 35px 190px;
          background-color: $pink;
          border: 1.5px solid black;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
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
