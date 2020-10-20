<template>
  <div class="knowledge-container" style="margin: auto;">
    <article class="box-container has-background-pink">
      <section>
        <header class="section-header-text-in-a-box">
          {{ knowledgeInfo.headerText }}
        </header>
      </section>
      <section class="section-container" v-for="(card, i) in knowledgeInfo.knowledgeList" :key="i">
        <header class="section-text-in-a-box" v-html="card.text" />
      </section>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    knowledgeInfo: {
      type: Object,
      required: true
    }
  },
};
</script>

<style  lang="scss" scoped>
@import "~assets/css/overrides";

.box-container {
  margin: 50px 0 0;
  color: black;
  border: 1.5px solid black;
  border-radius: 20px;

  & .section-container {
    border-top: 1.5px dashed black;
    border-bottom: 1.5px dashed black;
    padding: 20px;

    &:last-child {
      border-bottom: none;
    }
  }

  & .section-header-text-in-a-box {
    padding: 20px;
    margin: auto;
    font-family: Agipo;
    font-weight: 700;
    font-size: 80px;
    line-height: 87.5%;
    letter-spacing: -0.02em;
    max-width: 650px;

    @media (min-width: $tablet) {
      padding: 25px auto 0;
    }
  }

  & .section-text-in-a-box {
    font-size: 17px;
    font-family: Grennete Pro;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.01em;
  }
}
</style>