<template>
  <main class="como-fazer-um-roteiro is-clipped">
    <div class="container">
      <article class="box-container has-background-black">
        <section class="section-container">
          <h1 class="title has-text-pink">
            {{ entryArticle.headerText }}
          </h1>
          <h2 class="description has-text-pink">
            {{ entryArticle.description }}
          </h2>
          <ResponsiveImage
            :sources="entryArticle.imageSet.src"
            :lazyload="false"
            :alt="entryArticle.imageSet.alt"
          />
          <header class="section-header-text entry">
            {{ entryArticle.footerText }}
          </header>
        </section>
        <section class="section-container has-background-pink m-0-a">
          <header class="section-header-text entry has-text-black loose">
            {{ entryArticle.looseText }}
          </header>
        </section>
      </article>

      <CardsList :cardsList="cardsList" />

      <KnowledgeList :knowledgeInfo="forUrKnowledge" />

      <Share text-class="share-text" button-class="share-button" />
    </div>
  </main>
</template>

<script>
import { title, entryArticle, cardsList, forUrKnowledge } from "./constants";

import baseImage from "~/utils/baseImage";
import ResponsiveImage from "~/components/shared/ResponsiveImage";
import CardsList from "~/components/como-fazer-um-roteiro/CardsList";
import KnowledgeList from "~/components/como-fazer-um-roteiro/KnowledgeList";

export default {
  head() {
    return this.$createHeadFunction(
      {
        title: title,
        description: entryArticle.description,
      },
      null,
      this.$route.path,
      null
    );
  },

  components: {
    ResponsiveImage,
    CardsList,
    KnowledgeList
  },

  data() {
    return {
      entryArticle,
      cardsList,
      forUrKnowledge,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";

.como-fazer-um-roteiro {
  text-align: center;
  color: black;
  background-color: $pink;

  & .container {
    padding: 0 !important;
    color: $pink;
  }

  & /deep/.box-container {
    & picture {
      & img {
        border-radius: $size-7;
        border: 1.2px solid black;
        max-width: 95%;
      }
    }
  }

  & .title {
    padding-top: 40px;
    margin-bottom: 1rem;
    font-size: 14px;
    font-family: Netflix Sans;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  & .description {
    margin-bottom: 1rem;
    font-size:80px;
    font-family: Agipo;
    font-weight: 700;
    line-height: 87.5%;
    letter-spacing: -0.02em;
  }

  & .section-container {
    margin: auto;
    & .section-header-text {
      padding: 25px 8px $size-5;
      font-size: 17px;
      font-family: Grennete Pro;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.01em;

      &.entry {
        padding: 40px 30px;
        font-weight: 400;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.01em
      }

      &.loose {
        max-width: 750px;
        padding-bottom: 20px;
      }

      @media (min-width: $tablet) {
        margin: 25px auto $size-5;
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
    background-color: $gray-light;
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
