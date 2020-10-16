<template>
  <main class="home is-clipped">
    <div class="container has-background-pink">
      <p class="has-text-purple">
        HOME
      </p>
    </div>
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
