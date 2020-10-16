<template>
  <main class="home is-clipped">
    <ResponsiveImage :sources="image.src" :lazyload="false" :alt="image.alt" />
    <LazyImage :src="image2.src" alt="" role="presentation" class="icon-image" />
  </main>
</template>

<script>
import ResponsiveImage from '~/components/shared/ResponsiveImage'
import CardSlider from '~/components/shared/CardSlider'
import baseImage from '~/utils/baseImage'

export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'title',
        description: ''
      }, 
      null, 
      this.$route.path, 
      null
    );
  },

  components: {
    ResponsiveImage,
    // CardSlider,
  },

  data() {
    return {
      image: baseImage([
        {src:'/images/page_1/section_1/mobile.png, /images/page_1/section_1/mobile@2x.png 2x', query: '(max-width: 1023px)'},
        {src:'/images/page_1/section_1/desktop.png, /images/page_1/section_1/desktop@2x.png 2x', query: ''}
      ], 'Alternative text'),

      image2: baseImage('/images/shared/success.svg', 'Success', 'Success'),
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";
@import "~assets/css/overrides";

</style>
