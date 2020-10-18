<template>
  <div class="card-song" :style="getSize(false)">
    <div style="background-color: #000">
      <VideoFrame :video-id="video" :style="getSize()" />
    </div>
    <div class="card-body">
      <div>
        <h2>{{ band }}</h2>
        <h2 v-html="music"></h2>
        <i>{{ serie }}</i>
        <em>{{ episode }}</em>
      </div>
    </div>
    <footer>
      <p v-html="content"></p>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    band: String,
    music: String,
    serie: String,
    episode: String,
    video: String,
    content: String,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    getSize(video = true) {
      let style = video
        ? `height: ${this.windowWidth <= 768 ? 260 : 536}px;`
        : "";
      style += `width: ${
        this.windowWidth <= 768 ? `${this.windowWidth * 0.9}px` : "85%"
      }; max-width: 1014px"`;

      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";
@import "~assets/css/overrides";

/deep/.video-frame {
  border-radius: 0 !important;
  padding: 0;
  margin: 0;
  width: 100% !important;
  & iframe {
    width: 100%;
  }
  & .play-btn {
    /* pointer-events: inherit !important; */
    cursor: inherit;
    & svg {
      pointer-events: none !important;
      cursor: pointer;
      & circle {
        fill: #00a651;
      }
    }
  }
}

.card-song {
  font-family: "Grennete Pro";
  margin-right: 10px;
  touch-action: none;
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid $black;
  background-color: $black;
  display: flex;
  flex-direction: column;
  & .card-body {
    background-color: #efe1d3;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 192px;
  }

  & footer {
    padding: 25px 36px;
    background-color: #fff200;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 284px;
    p {
      color: $black;
      font-family: "Grennete Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.005em;
    }
  }
  h2 {
    color: $black;
    font-family: "Grennete Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 35px;
  }
  i {
    font-family: "Grennete Pro";
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.01em;
    margin-top: 6px;
  }
  em {
    font-family: "Grennete Pro";
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.01em;
    margin-top: 2px;
  }
  @include from($tablet) {
    /deep/h2 {
      font-size: 32px;
      line-height: 39px;
      & br {
        display: none !important;
      }
    }
    i {
      font-size: 26px;
      line-height: 35px;
    }
    footer {
      p {
        font-size: 32px;
        line-height: 39px;
      }
    }
  }
}
</style>