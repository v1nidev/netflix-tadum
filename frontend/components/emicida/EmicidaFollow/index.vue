<template>
  <section class="carousel">
    <h3 class="has-text-centered carousel__subtitle m-b-12-touch is-hidden-desktop" v-html="content.title" />
    <div class="scroll-x">
      <h3 class="has-text-centered carousel__subtitle p-y-8 m-b-12-touch is-hidden-touch" v-html="content.title" />
      <div class="follow-holder m-x-a">
        <div v-for="(card, index) in content.cards" :key="index">
          <div class="generic-card">
            <ResponsiveImage :sources="card.image.src" :lazyload="false" />
            <p class="has-text-centered-mobile m-l-12-touch m-l-24" v-html="card.description" />
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

.scroll-x {
  @include until($desktop) {
    overflow-x: scroll;
  }

  .follow-holder {
    display: flex;
    width: calc(390px + 580px);

    @include desktop {
      max-width: 1011px;
      width: 100%;
      margin: 0 auto;
    }

    .generic-card {
      width: auto;
      background: $gray-light;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      display: flex;
      overflow: hidden;
      padding: 20px;

      p {
        line-height: 21px;
      }
   
      @include desktop {
        border-top: 1px dashed #000;
      }

      @include touch {
        height: 232px;

        /deep/img {
          width: 138px;
          max-width: unset
        }

        p {
          width: 100%;
        }
      }

      @include desktop {
        /deep/img {
          width: 147px;
          max-width: unset
        }
      }

    }
    
    > div {
      display: flex;

      &:not(:last-child) .generic-card {
        border-right: 2px dashed #000;
      }

      &:first-child .generic-card {
        border-radius: 20px 0 0 20px;
        @include desktop {
          border-radius: 0 0 0 20px;
        }
        border-left: 2px solid #000;
        margin-left: 30px;
      }

      &:last-child .generic-card {
        border-radius: 0 20px 20px 0;
        @include desktop {
          border-radius: 0 0 20px 0;
        }
        border-right: 2px solid #000;
        margin-right: 30px;

        @include touch {
          p {
            margin: 0 19px !important;
          }
        }
      }
    }

    @include until($desktop) {
      > div:first-child {
        width: 390px;
      }

      > div:last-child {
        width: 580px;
      }
    }

    @include desktop {
      > div {
        width: 100% !important;
        
        .generic-card {
          margin: 0 !important;
        }
      }
    }
  }
}


.carousel{
  width: 100%;
  padding: 0px !important;
  margin-top: 50px;

  .carousel__subtitle{
    font-weight: normal;
    font-size: 32px;
    line-height: 39px;
    color: #000;

    @include desktop {
      max-width: 1011px;
      margin: 0 auto;
      background: $gray-light;
      border-left: 2px solid #000;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      border-radius: 20px 20px 0 0;
    }
  }
}

</style>