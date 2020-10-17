<template>
  <section class="share has-text-centered">
    <p class="text is-size-8 has-text-weight-medium" :class="textClass">
      COMPARTILHA PRO MUNDÃO
    </p>
    <div class="button-list is-flex m-t-18">
      <button 
        v-for="button in buttons" 
        class="button m-4 is-medium"
        :class="buttonClass"
        :key="button.label"
        v-html="button.label"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    textClass: String,
    buttonClass: String
  },

  data() {
    return {
      buttons: [
        {
          label: 'Stories'
        },
        {
          label: 'Facebook'
        },
        {
          label: 'Twitter'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";
.share {
  padding: 124px 0;
}
.text {
  font-family: 'Netflix Sans';
  color: $black;
}
.button-list {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @include from($tablet) {
    flex-direction: row;
  }
}
</style>