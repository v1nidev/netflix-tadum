<template>
  <main class="eu-e-vc">
    <div class="container">
      <h4>EU E VC, VC E EU...</h4>
      <h1>SDV é <br />quase amor!</h1>
      <section class="image1">
        <ResponsiveImage
          :sources="rtMini.src"
          :lazyload="false"
          :alt="image.alt"
          class="rt float-img"
        />
        <ResponsiveImage
          :sources="selfie.src"
          :lazyload="false"
          :alt="image.alt"
          class="selfie float-img"
        />
        <!-- resize the page -->
        <div>
          <ResponsiveImage
            :sources="image.src"
            :lazyload="false"
            :alt="image.alt"
          />
        </div>
      </section>
      <p>
        Quem nunca postou foto, vídeo, deu um like ou aquela stalkeadinha básica
        no crush? Nas séries e nos filmes, é assim tb, olha só!
      </p>
      <hr />
      <h2>
        Clicou, <br />
        tá namorando
      </h2>
      <section class="image2 image-sub">
        <ResponsiveImage
          :sources="img2StarLeft.src"
          :lazyload="false"
          :alt="image.alt"
          class="star-left float-img"
        />
        <ResponsiveImage
          :sources="img2StarRight.src"
          :lazyload="false"
          :alt="image.alt"
          class="star-right float-img"
        />
        <ResponsiveImage
          :sources="ele.src"
          :lazyload="false"
          :alt="image.alt"
          class="ele float-img"
        />
        <!-- resize the page -->
        <div class="box-image">
          <ResponsiveImage
            :sources="image2.src"
            :lazyload="false"
            :alt="image2.alt"
          />
          <p>
            Ia tudo bem com o namoro a distância até que Elle resolveu stalkear
            o boy
          </p>
        </div>
      </section>
      <p>
        Beijo, chamego, amasso y otras cositas más são ótimos. Mas, qdo a gte
        quer saber se o lance é pra valer, tem q ter o atestado das redes
        sociais, né? Hum… será q precisa mesmo? Em A Barraca do Beijo 2, em vez
        de gastar tempo fazendo e postando selfies, Elle e Noah decidiram
        aproveitar cada segundo das férias antes de voltarem pra dinâmica de
        namoro à distância: ela no fim do ensino médio, em Los Angeles, ele na
        Universidade de Harvard, em Boston. O resultado: qdo as aulas voltaram,
        todo mundo tava achando q eles tinham terminado. Tudo pq os dois não
        estavam postando nas redes sociais cada detalhe da relação. E não é q
        essa desconfiança dos amigos acabou criando uma crise entre os dois?
        Tensa, Elle começou a stalkear o boy e, bom, acabou vendo o q não
        queria. Nossa, nunca vi isso acontecer na vida real…
      </p>
      <hr />
      <ResponsiveImage
        :sources="rt.src"
        :lazyload="false"
        :alt="rt.alt"
        class="rt-image"
      />
      <section class="ele-viu">
        <h3>Ele viu!</h3>
        <p>
          Que atire o primeiro celular quem nunca deu um like ou postou alguma
          coisa só pra chamar atenção do crush. No episódio 3 da primeira
          temporada de Eu Nunca..., a Devi até mobilizou as amigas pra fazer um
          vídeo e postar no TikTok só pra ver se o Paxton visualizava.
        </p>
        <div class="image3">
          <ResponsiveImage
            :sources="img3StarRight.src"
            :lazyload="false"
            :alt="image.alt"
            class="star-right float-img"
          />
          <ResponsiveImage
            :sources="singleStar.src"
            :lazyload="false"
            :alt="image.alt"
            class="single-star-right float-img"
          />
          <ResponsiveImage
            :sources="singleStar.src"
            :lazyload="false"
            :alt="image.alt"
            class="single-star-left float-img"
          />
          <div class="box-image">
            <ResponsiveImage
              :sources="image3.src"
              :lazyload="false"
              :alt="image3.alt"
            />
          </div>
        </div>
      </section>
      <hr />
      <h2>O amor tá offline</h2>
      <section class="image4 image-sub">
        <ResponsiveImage
          :sources="img4StarRight.src"
          :lazyload="false"
          :alt="image.alt"
          class="star float-img"
        />
        <!-- resize the page -->
        <div class="box-image">
          <ResponsiveImage
            :sources="image4.src"
            :lazyload="false"
            :alt="image4.alt"
          />
          <p>
            Ser influencer dá trabalho, mas levar um pé na bunda em plena live
            já é too much
          </p>
        </div>
      </section>
      <p>
        Sabe qdo alguém posta tanta, mas tanta foto com o boy que a gte até
        desconfia? Pois é, selfie demais pode ser amor de menos. Qdo a gte tá in
        love de vdd, esquece até das redes, né? Foi isso aí q rolou com a Ana,
        de Modo Avião, vivida pela Larissa Manoela. No filme, ela é uma
        influenciadora q namora outro influenciador. O cara termina com ela
        durante uma live. Maior bafo. Mas é tudo armação, jogada de marketing
        dos agentes dela. Só que ela não sabia. Mas, aí, ela vai para o interior
        fazer um detox de redes e… SPOILER: o amor offline vence no final dessa
        história.
      </p>
      <hr />
      <h2>Colo meu ouvido <br />num radinho</h2>
      <section class="video-dustin image-sub">
        <ResponsiveImage
          :sources="videoStar.src"
          :lazyload="false"
          :alt="image.alt"
          class="star float-img"
        />
        <div>
          <VideoFrame video-id="9_LoWFgYaUI" />
          <p>
            Na década de 1980, os namoros ainda não eram na internet, mas já
            rolava cobrança
          </p>
        </div>
      </section>
      <hr />
      <p>
        Não culpe só a internet. Mesmo quando tudo ainda era mato e rede servia
        só pra pendurar na varanda ou pescar peixe, os relacionamentos já
        precisavam de aprovação social. Que o diga o Dustin, de Stranger Things.
        Na terceira temporada, ele conta pros amigos q começou a namorar a Suzie
        durante o acampamento de ciências onde tinha passado as férias de verão.
        O boy volta todo in love, mas a galera desconfia. Afinal, ninguém
        conhece e nem sabe nada sobre a moça. Pra piorar, o Cérebro, aparato
        tecnológico que o Dustin criou pra se comunicar por rádio com sua amada,
        q morava em outro estado, não funcionou. O pessoal só acreditou q a
        menina não era fake news qdo – ALERTA PARA SPOILER – ela literalmente
        salvou o mundo graças à invenção do casal. Um dueto maravilho so de
        Never ending story pelo radinho… Vem cantar junto!
      </p>
      <hr />
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

export default {
  head() {
    return this.$createHeadFunction(
      {
        title: "Almanaque Tudum - Eu e vc, vc e eu...",
        description: "Referencia de como usar componentes e classes",
      },
      null,
      this.$route.path,
      null
    );
  },
  data() {
    return {
      image: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image1-mobile.jpg",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image1-desktop.jpg",
            query: "",
          },
        ],
        "Crush"
      ),
      image2: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image2-mobile.jpg",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image2-desktop.jpg",
            query: "",
          },
        ],
        "Clicou, tá namorando"
      ),
      image3: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image3-mobile.jpg",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image3-desktop.jpg",
            query: "",
          },
        ],
        "Ele viu!"
      ),
      image4: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image4-mobile.jpg",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image4-desktop.jpg",
            query: "",
          },
        ],
        "O amor tá offline"
      ),
      rt: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/rt-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/rt-desktop.png",
            query: "",
          },
        ],
        "RT"
      ),
      img2StarLeft: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image2-star-left-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image2-star-left-desktop.png",
            query: "",
          },
        ],
        "Star"
      ),
      img2StarRight: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image2-star-right-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image2-star-right-desktop.png",
            query: "",
          },
        ],
        "Star"
      ),
      ele: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/ele-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/ele-desktop.png",
            query: "",
          },
        ],
        "Ele"
      ),
      rtMini: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/rt-mini-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/rt-mini-desktop.png",
            query: "",
          },
        ],
        "RT"
      ),
      selfie: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/selfie-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/selfie-desktop.png",
            query: "",
          },
        ],
        "Selfie"
      ),
      img3StarRight: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image3-star-right-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image3-star-right-desktop.png",
            query: "",
          },
        ],
        "Star"
      ),
      img4StarRight: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/image4-star-right-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/image4-star-right-desktop.png",
            query: "",
          },
        ],
        "Star"
      ),
      singleStar: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/single-star-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/single-star-desktop.png",
            query: "",
          },
        ],
        "Star"
      ),
      videoStar: baseImage(
        [
          {
            src: "/images/eu-e-vc-vc-e-eu/video-star-mobile.png",
            query: "(max-width: 767px)",
          },
          {
            src: "/images/eu-e-vc-vc-e-eu/video-star-desktop.png",
            query: "",
          },
        ],
        "Star"
      ),
    };
  },
};
</script>

<style lang="scss">
@import "~assets/css/overrides";

// Scroll to top customization
.scroll-top-btn {
  background: $gray;
  border-color: $black;
}
.scroll-top-btn .icon {
  stroke: $black;
}
</style>

<style lang="scss" scoped>
@import "~assets/css/overrides";

/deep/.button.share-button {
  background-color: $gray-light;
  color: $black;

  &:hover {
    color: $gray;
  }
}

/deep/.video-frame {
  border-radius: 0px !important;
  video {
    display: block !important;
  }
}

/deep/.responsive-image {
  text-align: center;
  & img {
    display: block;
    width: 100%;
  }
  &.float-img {
    position: absolute;
    width: auto !important;
    z-index: 2;
    & img {
      width: 100% !important;
    }
  }
  &.rt-image {
    & img {
      display: inline-block;
      text-align: center;
      max-width: 500px !important;
    }
  }
}

section {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

@mixin image-box($radius-box) {
  $unit: unquote("px");
  position: relative;
  overflow: hidden;
  border: 1.2px solid $black;
  box-sizing: border-box;
  border-radius: #{$radius-box}$unit;
  box-shadow: 0px 0px 0px 8px black inset;
}

.image-sub {
  position: relative;
  & > div {
    @include image-box(20);
  }
  & > img {
    position: absolute;
    display: block;
  }

  & p {
    background-color: $yellow;
    padding: 9px 14px;
  }

  @include from(768px) {
    & p {
      padding: 32px 24px;
    }
  }
}

.eu-e-vc {
  background-color: $gray;
  text-align: center;
  padding-top: 40px;
  h4 {
    font-family: "Netflix Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $black;
    margin-bottom: 30px;
  }
  h1 {
    font-family: $family-sans-serif;
    display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 59px;
    letter-spacing: -0.03em;
    background-color: $white;
    padding: 32px 8px;
    border: 1.2px solid $black;
    border-radius: 50px;
    position: relative;
    width: 100%;
    &:before {
      content: "1";
      color: $black;
      font-family: $family-sans-serif;
      width: 50px;
      height: 50px;
      background-color: $red;
      border: 1px solid $black;
      vertical-align: middle;
      position: absolute;
      text-align: center;
      letter-spacing: 0;
      line-height: 52px;
      border-radius: 50%;
      font-size: 42px;
      right: 12px;
      top: -20px;
    }
    @include from(400px) {
      padding: 42px 11px;
      font-size: 77px;
    }
    @include from(426px) {
      width: auto;
    }
    @include from($tablet) {
      padding: 62px 51px;
      font-size: 90px;
      br {
        display: none;
      }
    }
  }
  p {
    font-family: "Grennete Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.01em;
    color: $black;
    @include from(768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  hr {
    margin: 35px 0;
    padding: 0;
    border: 0;
    border-top: 1.5px dashed $black;
    background-color: transparent;
    height: 0px;
  }
  h2 {
    font-family: "Grennete Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: -0.02em;
    color: $black;
    margin-bottom: 31px;
    @include from($tablet) {
      br {
        display: none;
      }
    }
  }
  & .image1 {
    margin-top: 21px;
    margin-bottom: 34px;
    position: relative;
    & > div {
      @include image-box(50);
    }

    & .rt,
    & .selfie {
      position: absolute;
      transform: scale(0.85);
      transform-origin: center;
    }
    & .rt {
      left: 2%;
      transform: scale(0.85) translateY(-65%);
      top: 0;
    }
    & .selfie {
      right: 5%;
      bottom: -20px;
      transform: scale(0.8);
    }
    @include from(400px) {
      & .rt {
        transform: scale(1) translateY(-65%);
      }
      & .selfie {
        transform: scale(1);
      }
    }
    @include from($tablet) {
      & .rt {
        transform: scale(1) translateY(-45%);
        left: 1%;
      }
    }
  }
  & .image2 {
    margin-bottom: 31px;
    position: relative;
    & .star-left {
      left: 0;
      transform: translateY(-20%);
    }
    & .ele {
      right: 1%;
      transform: translateY(-34%);
    }
    & .star-right {
      right: -12px;
      bottom: 6px;
    }
  }
  & .ele-viu {
    background-color: $white;
    border-radius: 20px;
    border: 1.2px solid $black;
    padding: 34px 5% 19px;
    & h3 {
      font-family: $family-sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 80px;
      line-height: 87.5%;
      letter-spacing: -0.02em;
      color: $black;
      margin-bottom: 19px;
      @include from(768px) {
        font-size: 90px;
      }
    }
    p {
      font-family: "Grennete Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.005em;
      color: $black;
      margin-bottom: 29px;
    }
    margin-top: 51px;
    & .image3 {
      position: relative;
      & > div {
        @include image-box(20);
      }
      & .star-right {
        top: -1%;
        right: 0;
      }
      & .single-star-right {
        bottom: 20%;
        right: 26%;
      }
      & .single-star-left {
        top: 10%;
        left: 1%;
      }
    }
  }
  & .image4 {
    margin-bottom: 31px;
    & .star {
      width: 90% !important;
      top: -14%;
      left: 6%;
    }
  }
  & .video-dustin {
    & p {
      margin-top: -7px;
    }
    & .star {
      width: 98% !important;
      left: 0;
      top: -18%;
      pointer-events: none;
    }
    @include from(375px) {
      & .star {
        top: -24%;
      }
    }
    @include from(1024px) {
      & .star {
        top: -14%;
      }
    }
    & /deep/.video-frame {
      height: 194px;
      width: 100%;
      & video,
      & iframe {
        width: 100%;
      }
      @include from(400px) {
        height: 260px;
      }
      @include from(768px) {
        height: 420px;
      }
      @include from(1000px) {
        height: 520px;
      }
    }
  }
}
</style>
