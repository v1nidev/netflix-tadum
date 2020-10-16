<template>
  <picture class="responsive-image ">
    <source
      v-for="(source, index) in sources"
      :key="index"
      :srcset="source.src"
      :media="source.query"
    >
    <img
      class=""
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      srcset="data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      typeof="foaf:Image"
      @lazyloaded="loaded"
      @load="loaded"
      :alt="alt"
    >
  </picture>
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    loaded (e) {
      let _img = e.currentTarget.src
      this.$emit('imgLoad', _img)
    }
  }
};
</script>
