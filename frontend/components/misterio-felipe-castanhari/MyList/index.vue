<template>
  <section class="carousel">
    <h3 class="has-text-centered subtitle"> 
      Minha lista →
    </h3>
    <div class="scroll-x">
      <div class="white-box is-flex m-x-a">
        <div class="card is-flex" v-for="(card, i) in cards" :key="i">
          <ResponsiveImage class="card-image" :sources="card.img.src" :lazyload="false" :alt="card.img.alt" v-if="card.img" />
          <div class="is-column">
            <h4 class="card-title m-t-8" v-html="card.title" />
            <p class="card-description" v-html="card.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";

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

  .scroll-x{
    @include until($widescreen){
      overflow-x: scroll;
      width: 100%;
    }

    .white-box{
      /* min-height: 230px; */
      height: auto;
      width: 1170px;
      background-color: #FCF1E5;
      border: 2px solid #000;
      border-radius: 20px;

      @include until($widescreen){
        margin: 0px 20px !important;

      }

      .card{
        color: #000;
        justify-content: center;
        padding: 20px;

        &:first-child{
          border-radius: 20px 0px 0px 20px;
        }

        &:last-child{
          border-radius: 0px 20px 20px 0px;
        }

        &:not(:last-child){
          border-right: 2px dotted #000;
        }

        .card-image{

          /deep/img{
            max-width: none;
            border-radius: 10px;
            margin-right: 20px;
          }
        }

        .card-title{
          white-space: nowrap;
          font-style: italic;
          font-weight: normal;
          font-size: 32px;
          line-height: 39px;
        }

        .card-description{
          font-size: 17px;
          line-height: 21px;
        }
      }
    }
  }
}

</style>
