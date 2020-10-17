<template>
  <section class="lattering">
    <div class="title has-text-centered" :style="{maxHeight: height + 'px'}" v-html="lettering" />
    <slot />
  </section>
</template>

<script>
export default {
  props:{
    height:{
      type: Number,
      default: 445
    },
    lettering: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .lattering{
    height: auto;

    .title{
      text-align: center;
      line-height: 74px;
      font-size: 84px;
      color: #000;
      overflow: hidden;
    }
  }
</style>