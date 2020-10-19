<template>
  <section class="Hero section has-text-centered p-b-0">
    <h1 class="Hero__title">
      <span class="is-size-10 is-font-netflix" v-html="content.upperTitle" /><br>
      <span class="is-size-2 is-size-3-touch is-font-agipo" v-html="content.title" />
    </h1>
    <ResponsiveImage :sources="content.image.src" :lazyload="false" :alt="content.image.alt" />
    <p class="is-size-9 Hero__caption p-y-32 p-y-0-touch" v-html="content.caption" />
    <div class="separator" />
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
}
</script>

<style scoped lang="scss">
@import "~assets/css/overrides";

.Hero {
  &__title {
    line-height: 1.25;

    span.is-font-agipo {
      display: block;
      margin: 12px 0;
      line-height: 87.5%;
      letter-spacing: -0.03em;
    }
  }

  &__caption {
    @include touch {
      max-width: 665px;
      margin: 0 auto;
    }
    @include desktop {
      font-size: 32px;
    }
  }

}

.separator {
  @include desktop { 
    height: 1px;
    border-top: 1px dashed #000;
    width: 100%;
    max-width: 1011px;
    margin: 0 auto;
  }
}

.is-font-agipo {
  font-family: $family-sans-serif;
}

.is-font-netflix {
  font-family: 'Netflix Sans';
}
</style>
