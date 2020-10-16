<template>
  <main class="home">
    Test
  </main>
</template>

<script>

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

}

</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";
@import "~assets/css/overrides";

.home{
  overflow: hidden;
}

</style>
