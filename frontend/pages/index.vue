<template>
  <main class="home is-clipped">
    <p class="has-text-purple">
      HOME
    </p>
  </main>
</template>

<script>
export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'home',
        description: 'home desc'
      },
      null, 
      this.$route.path, 
      null
    );
  },
}
</script>

<style lang="scss">
</style>
