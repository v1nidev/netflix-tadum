<template>
  <div class="Image-box__wrapper columns m-t-48 m-t-32-touch m-b-60-touch is-flex is-centered">
    <div class="Image-box column is-narrow p-0">
      <ResponsiveImage :sources="content.src" :lazyload="false" :alt="content.alt" />
      <ResponsiveImage class="overlay-image" :class="{ 'is-visible': intersectBottom && !intersectTop }" :sources="content.src" :lazyload="false" :alt="content.alt" />
      <div class="Image-box__caption has-text-centered p-y-12">
        <span v-html="content.alt" />
      </div>
    </div>
    <IntersectionObserverElement class="intersect-top" :height="10" @observe="e => intersectTop = e" />
    <IntersectionObserverElement class="intersect-bottom" :height="10" @observe="e => intersectBottom = e" />
  </div>
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
      intersectTop: false,
      intersectBottom: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/overrides";

.Image-box__wrapper {
  position: relative;

  .overlay-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: .4s;
    pointer-events: none;
    filter: blur(2px);

    &.is-visible {
      opacity: 1;
      pointer-events: all;
    }
  }
}

.intersect-top {
  top: -15vh;
}

.intersect-bottom {
  bottom: -10vh;
}


.Image-box {
  border: 3px solid #000;
  border-radius: 25px;
  overflow: hidden;
  position: relative;

  /deep/img {
    vertical-align: bottom;
  }

  &__caption {
    border-top: 3px solid #000;
    background: $gray-light;
  }

  @include touch {
    max-width: 364px;
  }

}

</style>
