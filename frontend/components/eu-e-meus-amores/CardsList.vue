<template>
  <div>
    <article class="box-container has-background-pink" v-for="(card, i) in cardsList" :key="i">
      <section class="section-container">
        <VideoFrame
          :video-id="card.videoId"
        />
        <header class="section-header-text-in-a-box">
          {{ card.headerText }}
        </header>
        <footer class="section-footer-text" v-html="card.footerText" />
      </section>
    </article>
  </div>
</template>

<script>
import VideoFrame from "~/components/shared/VideoFrame"

export default {
  components: {
    VideoFrame
  },
  props: {
    cardsList: {
      type: Array,
      required: true
    }
  },
  mounted(){
    console.log(this.$props.cardsList)
  }
};
</script>

<style  lang="scss" scoped>
@import "~assets/css/overrides";

.box-container {
  border: 1.2px solid black;
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: $size-5 - 5;
  }

  & .video-frame {
    height: 272px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    & /deep/.play-btn {
      svg > circle {
        fill: $pink;
      }
    }

    @media (min-width: $tablet) {
      height: 400px;
    }

    @media (min-width: $desktop) {
      height: 600px;
    }
  }

  & .section-header-text-in-a-box {
    margin: ($size-7 + 5) ($size-7 + 10) 0;
    font-size: 32px;
    font-family: Grennete Pro;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: -0.01em;
    max-width: 650px;
    @media (min-width: $tablet) {
      margin: ($size-7 + 5) auto 0;
    }
  }

& .section-footer-text {
    padding: $size-7 + 5 2.625rem;
    font-size: 17px;
    font-family: Grennete Pro;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.01em;
  }
}
</style>