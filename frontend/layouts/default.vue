<template>
  <div class="default">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/partials/Header'
import Footer from '~/partials/Footer'
import gtm from '~/utils/loadGtm.js'

export default {
  components: {
    Header,
    Footer
  },
  watch: {
    $route(to, from) {
      // Clear acitve elements (intersectionObserver) on scroll store when route changes
      if (to.name != from.name) this.$store.dispatch('scroll/clearActiveElements')
    }
  },
  mounted() {

    // // Got to anchor
    const hash = this.$route.hash
    setTimeout(() => {
      if (hash && document.querySelector(hash)) document.querySelector(hash).scrollIntoView()
    }, 300)
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
