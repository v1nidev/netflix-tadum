<template>
  <main class="home is-clipped">
    <div class="card-container p-x-10-touch p-x-18" :class="{'expand': $route.path == '/misterio-felipe-castanhari'}">
      <div class="card is-block m-y-10 has-background-green">
        <nuxt-link to="/misterio-felipe-castanhari">
          <MisterioFelipeCastanhariHead class="header container p-x-20" />
          <!-- <MisterioFelipeCastanhari :show-body="false" /> -->
        </nuxt-link>
        <nuxt-child keep-alive :show-head="false" />
      </div>
    </div>











    <!-- <nuxt-link to="/misterio-felipe-castanhari" class="card is-block m-y-10">
      <MisterioFelipeCastanhariHead class="header p-x-20" />
    </nuxt-link>
    <nuxt-link to="/misterio-felipe-castanhari" class="card is-block m-y-10">
      <MisterioFelipeCastanhariHead class="header p-x-20" />
    </nuxt-link> -->


    <!-- ref -->
    HOME
    <br>
    <nuxt-link to="/internal-page">
      go to "internal page"
    </nuxt-link>
    <br>
    <nuxt-link to="/internal-page/nested-page">
      go to "nexted internal page"
    </nuxt-link>
    <br>
    <nuxt-link to="/reference">
      go to "reference"
    </nuxt-link>
    <br>
    <nuxt-link to="/misterio-felipe-castanhari">
      go to "misterio-felipe-castanhari"
    </nuxt-link>
    <br>
    <!-- <NavCard to="/other">
      go to "other page"
    </NavCard> -->
    <!-- <LazyInternalPage /> -->
  </main>
</template>

<script>
export default {
  layout: 'no_float_buttons',

  head () {
    return this.$createHeadFunction(
      {
        title: 'HOME',
        description: 'home desc'
      },
      null, 
      this.$route.path, 
      null
    );
  },

  // transition: {
  //   name: 'home',
  //   mode: 'out-in',
  //   duration: 2000,
  //   beforeEnter(el, a) {
  //     console.log('before leave');
  //     console.log(el);
  //     return true
  //   }
  // },

  transition(to, from, a) {
    // if (!from) {
    //   return 'slide-left'
    // }
    // return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    console.log('from >>', from);
    console.log('to >>', to);

    // if (!from) {
    //   return 'fullscreen'
    // }
    if (from && from.path.length && from.path !== to.path) {
      // return 'fullscreen'
      if (to.matched[1]) {
        console.log(to.matched[1].instances.default.$el);
      }
      
    }

    return false
  },

  // beforeRouteLeave(to, from, next) {
  //   // if (to.name === "product-id") {
  //   //   this.displayProductModal(to);
  //   // } else {
  //   //   next();
  //   // }
  //   console.log('from >>', from);
  //   console.log('to >>', to);
  //   next(false)
  // },
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";

.card-container {
  margin: 0 auto;
  width: 1011px;
  transition: width 300ms ease;
  &.expand {
    width: 100%;
  }
}

.card {
  border: 2px solid $black;
  border-radius: 20px;
  overflow: hidden;
  @include from($desktop) {
    border-radius: 20px;
  }
}

/deep/ .head-container, /deep/ .header {
  padding-bottom: 1px !important;
}

.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
