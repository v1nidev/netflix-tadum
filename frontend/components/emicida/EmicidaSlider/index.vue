<template>
  <CardSlider :queries="slider_config" class="m-b-50 columns is-mobile is-flex is-centered">
    <div v-for="(card, index) in content" :key="index" class="column is-narrow slider-item p-12">
      <div class="generic-card">
        <ResponsiveImage :sources="card.image.src" :lazyload="false" />
        <span v-html="card.caption" />
      </div>
    </div>
  </CardSlider>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
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
            wrapAround: false,
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

<style scoped lang="scss">
@import "~assets/css/overrides";

@include mobile {
  .card-slider {
    display: block !important;
  }

  .slider-item {
    width: 356px;
    flex-basis: unset;
    flex-shrink: unset;
    flex-grow: unset;
  }

}

.generic-card {
  display: flex;
  flex-direction: column;
}


</style>
