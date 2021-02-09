<template>
  <main class="escuta-ai">
    <div>
      <section class="container">
        <h4>DU K7</h4>
        <h1>Escuta aí</h1>
        <ResponsiveImage
          class="tape"
          :sources="tape.src"
          :lazyload="true"
          :alt="tape.alt"
        />
        <h2>
          (... e depois segue o baile <br />
          com a nossa playlist)
        </h2>
      </section>
      <section class="m-t-60 m-b-60 slide-wrapper">
        <CardSlider :queries="slider_config" class="m-b-50 p-l-10 p-r-10">
          <CardSong
            v-for="tapeItem in tapes"
            :key="tapeItem.band"
            :band="tapeItem.band"
            :music="tapeItem.music"
            :serie="tapeItem.serie"
            :episode="tapeItem.episode"
            :video="tapeItem.video"
            :content="tapeItem.content"
          />
        </CardSlider>
      </section>
      <Playlist />
      <!-- Share used at the bottom of the page -->
      <Share text-class="has-text-black" button-class="share-button" />
    </div>
  </main>
</template>

<script>
import baseImage from "~/utils/baseImage";
// optional imports
// import ResponsiveImage from '~/components/shared/ResponsiveImage'
// import CardSlider from '~/components/shared/CardSlider'
import CardSong from "./card-song";
import Playlist from "./playlist";

export default {
  head() {
    return this.$createHeadFunction(
      {
        title: "Almanaque Tudum - Escuta aí",
        description: "Escuta aí",
      },
      null,
      this.$route.path,
      null
    );
  },
  components: {
    CardSong,
    Playlist,
  },
  data() {
    return {
      tape: baseImage(
        [
          {
            src: "/images/escuta-ai/tape.png, /images/escuta-ai/tape@2x.png 2x",
            query: "(max-width: 767px)",
          },
          {
            src:
              "/images/escuta-ai/tape-desk.png, /images/escuta-ai/tape-desk@2x.png 2x",
            query: "",
          },
        ],
        "MixTape Escuta aí"
      ),
      tapes: [
        {
          band: "The Clash",
          music: "“Should I stay or<br>Should I Go”",
          serie: "Stranger Things",
          episode: "T1:EP.2",
          video: "6w-GX_NUVNY",
          cover: baseImage(
            [
              {
                src: "/images/escuta-ai/cover-mobile.jpg",
                query: "(max-width: 767px)",
              },
              {
                src: "/images/escuta-ai/cover-desktop.jpg",
                query: "",
              },
            ],
            "“Should I stay or Should I Go”"
          ),
          content:
            "“Vai mudar sua vida.” <br>Foi assim que o Jonathan apresentou The Clash pro seu irmãozinho, Will. E tem gente do calibre de Wes Anderson e Martin Scorsese que concorda plenamente com ele.",
        },
        {
          band: "Limahl",
          music: "“Never Ending Story”",
          serie: "Stranger Things",
          episode: "T3:EP.8",
          video: "9_LoWFgYaUI",
          cover: baseImage(
            [
              {
                src: "/images/escuta-ai/cover-mobile.jpg",
                query: "(max-width: 767px)",
              },
              {
                src: "/images/escuta-ai/cover-desktop.jpg",
                query: "",
              },
            ],
            "“Never Ending Story”"
          ),
          content:
            "Em 1984, um ano antes de Dustin e Suzi salvarem o mundo AND serem a coisa mais fofa de todos os tempos, esse hit embalava as aventuras do filme História Sem Fim.",
        },
        {
          band: "The Cure",
          music: "“Loversong”",
          serie: "Atypical",
          episode: "T2:EP.10",
          video: "hXCKLJGLENs",
          cover: baseImage(
            [
              {
                src: "/images/escuta-ai/cover-mobile.jpg",
                query: "(max-width: 767px)",
              },
              {
                src: "/images/escuta-ai/cover-desktop.jpg",
                query: "",
              },
            ],
            "“Loversong”"
          ),
          content:
            "Robert Smith, criador do The Cure e de um inconfundível estilo que envolve mto rímel e batom vermelho, soa ainda melhor quando está rodando em vinil, como no quarto de Casey.",
        },
      ],

      // all options: https://flickity.metafizzy.co/options.html
      slider_config: [
        {
          max_width: 1024, // apply config above 1025px
          config: {
            imagesLoaded: false,
            cellAlign: "left",
            contain: true,
            initialIndex: 0,
            draggable: true,
            freeScroll: false,
            prevNextButtons: false,
            pageDots: true,
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
            pageDots: true,
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
.scroll-top-btn {
  background: #00a651;
  border-color: $black;
}
.scroll-top-btn .icon {
  stroke: $black;
}
</style>

<style lang="scss" scoped>
@import "~assets/css/overrides";

/deep/.share-button {
  background-color: #efe1d3;
  &:hover {
    color: #00a651;
  }
}

/deep/.flickity-page-dots .dot.is-selected {
  background: #000;
}

.escuta-ai {
  background-color: #00a651;
  text-align: center;
  padding-top: 40px;
  & .container {
    padding: 0 !important;
  }
  & h4 {
    font-family: "Netflix Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 35px;
    color: $black;
  }
  & h1 {
    color: $black;
    font-family: $family-sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 87.5%;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  & h2 {
    font-family: "Grennete Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 35px;
    letter-spacing: -0.01em;
    margin: 20px 0 72px;
  }
  @include from(768px) {
    .slide-wrapper {
      padding-left: 5%;
    }
  }
  @include from(1014px) {
    .slide-wrapper {
      padding-left: calc((100% - 1014px) / 2);
    }
  }
  @include from($tablet) {
    & h1 {
      font-size: 150px;
      line-height: 90%;
    }
    & h2 {
      font-size: 32px;
      line-height: 39px;
      margin: 20px 0 72px;
    }
    & h4 {
      margin-bottom: 68px;
    }
  }
}
</style>
