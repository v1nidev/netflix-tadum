<template>
  <main class="home is-clipped">
    <div class="container p-x-10-touch p-x-18">
      <nuxt-child />

      <div class="card is-block m-y-10">
        <MisterioFelipeCastanhari :show-body="false" />      
      </div>
    </div>

    <nuxt-link to="/misterio-felipe-castanhari" class="card is-block m-y-10">
      <MisterioFelipeCastanhariHead class="header p-x-20" />
    </nuxt-link>
    <nuxt-link to="/misterio-felipe-castanhari" class="card is-block m-y-10">
      <MisterioFelipeCastanhariHead class="header p-x-20" />
    </nuxt-link>


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

  transition(to, from) {
    // if (!from) {
    //   return 'slide-left'
    // }
    // return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    console.log('to >>', to);
    console.log('from >>', from);
    return false
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";
.card {
  border: 2px solid $black;
  border-radius: 20px;
  overflow: hidden;
  @include from($desktop) {
    border-radius: 20px;
  }
}

/deep/ .head-container {
  padding-bottom: 1px !important;
}
</style>
