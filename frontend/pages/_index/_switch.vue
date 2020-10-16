<template>
  <component v-if="component" :is="component" />
</template>

<script>
export default {
  computed: {
    component() {
      // return () => import(`~/components/internal-page/index.vue`);
      return () => import(`~/components${this.$route.path}/index.vue`);
    }
  },
}
</script>