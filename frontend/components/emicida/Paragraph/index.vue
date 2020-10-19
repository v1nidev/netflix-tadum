<template>
  <p 
    class="paragraph-holder"
    :class="content.classes"
    v-html="content.text"
  />
</template>

<script>

export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
@import "~assets/css/overrides";

.paragraph-holder {
  width: 100%;
  max-width: 665px;
  margin: 0 auto;
  letter-spacing: -0.005em;

  &.indent {
    @include desktop {
      padding-left: 50px;
    }
  }
}

</style>
