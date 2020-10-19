<template>
  <component v-if="component" :is="component">
    <!-- <br> -->
  </component>  
</template>

<script>
export default {
  computed: {
    component() {
      const pathWithoutSlash = this.$route.path.replace(/^\/+|\/+$/g, '')
      
      if (pathWithoutSlash.length) {
        return () => import(`~/components/${pathWithoutSlash}/index.vue`)
      } else {
        return false
      }
    }
  },

  mounted() {
    console.log(`~/components/${this.$route.path.replace(/^\/+|\/+$/g, '')}/index.vue`);
  }
}
</script>