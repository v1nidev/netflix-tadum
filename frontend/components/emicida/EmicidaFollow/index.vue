<template>
  <section class="carousel">
    <h3 class="has-text-centered subtitle" v-html="content.title" />
    <!-- <CardSlider :queries="slider_config" class="card-box m-b-50 columns is-mobile is-flex is-centered">
      <div v-for="(card, index) in content.cards" :key="index" class="column is-narrow slider-item p-12">
        <div class="generic-card">
          <ResponsiveImage :sources="card.image.src" :lazyload="false" />
          <p class="has-text-centered-mobile m-x-8" v-html="card.description" />
        </div>
      </div>
    </CardSlider> -->

    <div class="scroll-x">
      <div class="follow-holder m-x-a">
        <div v-for="(card, index) in content.cards" :key="index">
          <div class="generic-card">
            <ResponsiveImage :sources="card.image.src" :lazyload="false" />
            <p class="has-text-centered-mobile m-x-8" v-html="card.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      slider_config: [
        {
          max_width: 768, // apply config above 1025px
          config: {
            imagesLoaded: false,
            cellAlign: 'left',
            contain: true,
            draggable: true, 
            freeScroll: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";

// @include until($tablet) {
//   .card-slider {
//     display: block !important;
//   }

//   .slider-item {
//     flex-shrink: unset;
//   }

//   /deep/.flickity-slider {
//     width: 100%;

//     .slider-item {
//       &:first-child {
//         width: 390px;
//       }

//       &:last-child {
//         width: 580px;
//       }
//     }
//   }

//   .slider-item {
//     padding: 0 !important;
//     width: 100%;

//     .generic-card {
//       width: auto;
//       background: $gray-light;
//       border-top: 2px solid #000;
//       border-bottom: 2px solid #000;
//       display: flex;
//       overflow: hidden;
//       height: 232px;
//       padding: 20px;

//       /deep/img {
//         width: 138px;
//         max-width: unset
//       }

//       p {
//         width: 100%;
//       }

//     }
    
//     &:not(:last-child) .generic-card {
//       border-right: 2px dashed #000;
//     }

//     &:first-child .generic-card {
//       border-left: 2px solid #000;
//       border-radius: 20px 0 0 20px;
//       margin-left: 30px;
//     }

//     &:last-child .generic-card {
//       border-right: 2px solid #000;
//       border-radius: 0 20px 20px 0;
//       margin-right: 30px;
//     }
//   }
// }


.scroll-x {
  overflow-x: scroll;

  .follow-holder {
    display: flex;
    width: calc(390px + 580px);

    .generic-card {
      width: auto;
      background: $gray-light;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      display: flex;
      overflow: hidden;
      height: 232px;
      padding: 20px;

      /deep/img {
        width: 138px;
        max-width: unset
      }

      p {
        width: 100%;
      }

    }
    
    > div {
      display: flex;

      &:not(:last-child) .generic-card {
        border-right: 2px dashed #000;
      }

      &:first-child .generic-card {
        border-left: 2px solid #000;
        border-radius: 20px 0 0 20px;
        margin-left: 30px;
      }

      &:last-child .generic-card {
        border-right: 2px solid #000;
        border-radius: 0 20px 20px 0;
        margin-right: 30px;
      }
    }

    > div:first-child {
      width: 390px;
    }

    > div:last-child {
      width: 580px;
    }
  }
}


.carousel{
  width: 100%;
  padding: 0px !important;
  margin-top: 50px;

  .subtitle{
    font-weight: normal;
    font-size: 32px;
    line-height: 39px;
    color: #000;
  }
}

</style>