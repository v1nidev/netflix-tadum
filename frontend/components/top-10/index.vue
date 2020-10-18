<template>
  <main class="top10">
    <div class="">
      <h4>TOP 10</h4>
      <h1>Minha <br />Lista</h1>
      <p>
        Eu sei que é muuuita opção pra assistir e às vezes fica difícil
        escolher. Então, como boa miga, sabe o que eu fiz? Chamei essa turma
        incrível pra dividir com a gente sua listinha mágica. Se liga!
      </p>
      <section class="lists">
        <CardSlider :queries="slider_config">
          <CardTop
            v-for="person in people"
            :key="person.name"
            v-bind="person"
          />
        </CardSlider>
      </section>
      <a href="#" class="download">
        <p>Baixar lista ↓</p>
      </a>
      <!-- Share used at the bottom of the page -->
      <Share text-class="has-text-black" button-class="share-button" />
    </div>
  </main>
</template>

<script>
import CardTop from "./card-top10";
import { people } from "./data";

export default {
  head() {
    return this.$createHeadFunction(
      {
        title: "Almanaque Tudum - Top 10",
        description: "Top 10",
      },
      null,
      this.$route.path,
      null
    );
  },

  // optional component declarations
  components: {
    CardTop,
  },

  data() {
    return {
      people,
      // all options: https://flickity.metafizzy.co/options.html
      slider_config: [
        {
          max_width: 1024, // apply config above 1025px
          config: {
            imagesLoaded: false,
            cellAlign: "left",
            contain: true,
            draggable: true,
            freeScroll: false,
            initialIndex: 0,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            arrowShape:
              "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15,
          },
        },
        {
          max_width: 9999, // apply config to all sizes, except to <1024
          config: {
            imagesLoaded: false,
            cellAlign: "center",
            initialIndex: 0,
            contain: true,
            draggable: true,
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            arrowShape:
              "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~assets/css/overrides";

// Scroll to top customization
.scroll-top-btn {
  background: $red;
  border-color: $black;
}
.scroll-top-btn .icon {
  stroke: $black;
}
</style>

<style lang="scss" scoped>
@import "~assets/css/overrides";

.top10 {
  padding: 40px 5% 0;
  background-color: $red;
  .download {
    display: flex;
    align-items: center;
    vertical-align: middle;
    border-radius: 100px;
    width: 162px;
    margin: 31px auto 0;
    height: 46px;
    filter: drop-shadow(3px 4px 0px #000000);
    border: 1.5px solid $black;
    background-color: $red;
    justify-content: center;
    &:hover {
      filter: drop-shadow(1px 2px 0px #000000);
    }
    & p {
      font-family: "Grennete Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.012em;
      margin: 0;
    }
  }
  .lists {
    max-width: 1024px;
    margin: 0 auto;
  }
  h4 {
    font-family: "Netflix Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 31px;
  }
  h1 {
    font-family: $family-sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 91%;
    text-align: center;
    letter-spacing: -0.01em;
    margin-bottom: 31px;
  }
  p {
    font-family: "Grennete Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.01em;
    margin-bottom: 31px;
  }
  @include from($tablet) {
    h1 {
      font-size: 110px;
      line-height: 91%;
      & br {
        display: none;
      }
    }
    p {
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.01em;
      margin-bottom: 62px;
      padding: 0 10%;
    }
  }
}
/deep/.share-button {
  background-color: $gray-light;
  color: $black;
  border-color: $black;
  &:hover {
    color: $red;
  }
}
</style>
