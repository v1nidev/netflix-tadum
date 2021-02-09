<template>
  <header class="has-background-green">
    <h3 class="has-text-centered m-b-24 p-t-32 top-title"> 
      OS DOIS LADOS 
    </h3>

    <LetteringBanner 
      class="is-relative banner" 
      :lettering="'Mistérioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'"
    >
      <ResponsiveImage 
        class="banner-sun"
        :sources="images[0].src" 
        :lazyload="false" 
        :alt="images[0].alt" 
      />
      <ResponsiveImage 
        class="banner-planet"
        :sources="images[1].src" 
        :lazyload="false" 
        :alt="images[1].alt" 
      />
      <ResponsiveImage 
        class="banner-portrait"
        :sources="images[2].src" 
        :lazyload="false" 
        :alt="images[2].alt" 
      />
    </LetteringBanner>
    
    <p class="explanation has-text-centered p-x-24">
      Só o que o Felipe Castanhari não explica (ainda) é 2020. Sobre o resto – ciência, história, como sobreviver ao EAD –, vc pode perguntar
    </p>
  </header>
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  name: "Header",
  
  data(){
    return{
      images: [
        baseImage([
          {src:'/images/misterio-felipe-castanhari/star.png, /images/misterio-felipe-castanhari/star@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/planet.png, /images/misterio-felipe-castanhari/planet@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/felipe_1.png, /images/misterio-felipe-castanhari/felipe_1@2x.png 2x'}
        ], 'Alternative text'),
      ],

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";

.top-title{
  color: #000;
  font-family: Netflix Sans;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}

.banner{

  &-sun{
    position: absolute;
    top: 85px;
    right: 5rem;
  }

  &-planet{
    position: absolute;
    top: 150px;
    left: 0.2rem;
  }

  &-portrait{
    position: absolute;
    bottom: 0px;
    right: 0.2rem;
  }
}

.explanation{
  font-family: $family-primary;
  font-size: 17px;
  line-height: 21px;
  margin: 20px auto 30px;
}
</style>