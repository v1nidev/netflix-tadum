<template>
  <main class="emicida is-clipped">
    <EmicidaHero :content="content.hero" />

    <section>
      <Paragraph :content="content.quote" class="p-t-12" />
    </section>

    <section class="Section-one section p-b-12 p-t-12 p-t-24-touch">
      <Paragraph 
        v-for="(p, index) in content.section1.textContents"
        :key="index"
        :content="p"
      />
      <div class="Image-box__wrapper columns m-t-48 m-t-32-touch m-b-60-touch is-flex is-centered">
        <div class="Image-box column is-narrow p-0">
          <ResponsiveImage :sources="content.section1.image.src" :lazyload="false" :alt="content.section1.image.alt" />
          <div class="Image-box__caption has-text-centered p-y-12">
            <span v-html="content.section1.image.alt" />
          </div>
        </div>
      </div>
    </section>

    <section class="Section-two section p-t-0-touch p-b-32 p-b-24-touch">
      <Paragraph 
        v-for="(p, index) in content.section2.textContents"
        :key="index"
        :content="p"
      />
      <EmicidaSlider class="Emicida-slider p-t-32 p-b-32" :content="content.section2.cards" />
    </section>

    <section class="Video-section section p-t-0">
      <Paragraph
        v-for="(p, index) in content.videoSection.textContents"
        :key="index"
        :content="p"
        :class="{'b-t-dashed p-t-12': index === 0}"
      />
      <div class="container m-y-60 m-t-0-touch m-b-32-touch">
        <VideoFrame :video-id="content.videoSection.videoId" />
      </div>
      <Paragraph
        v-for="(p, index) in content.videoSection.textContents2"
        :key="index"
        :content="p"
        :class="{'b-t-dashed p-t-12': index === 0}"
      />
    </section>

    <EmicidaFollow :content="content.follow" />

    <footer class="section m-b-24">
      <h4 class="has-text-centered is-font-netflix is-uppercase" v-html="content.footer.title" />
      <div class="Footer-social columns is-flex is-centered m-t-8">
        <div v-for="(s, index) in content.footer.social" :key="index" class="m-x-4 p-0 m-y-4 column is-narrow has-text-centered">
          <AppLink 
            class="button p-x-12"
            target="_blank"
            :to="s.href"
            v-html="s.label"
          />
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import content from './constants'

export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'Emicida',
        description: 'home desc'
      },
      null, 
      this.$route.path, 
      null
    );
  },

  data() {
    return {
      content
    }
  }

}
</script>

<style lang="scss">
@import "~assets/css/overrides";

body {
  background-color: $yellow;
}

.Quote {
  @include desktop {
    font-size: 32px;
    letter-spacing: -0.01em;
  }
}

.b-t-dashed {
  border-top: 1px dashed #000;

  &-desktop {
    @include desktop {
      border-top: 1px dashed #000;
    }
  }

  &-touch {
    @include touch {
      border-top: 1px dashed #000;
    }
  }
}

.Image-box {
  border: 3px solid #000;
  border-radius: 25px;
  overflow: hidden;

  /deep/img {
    vertical-align: bottom;
  }

  &__caption {
    border-top: 3px solid #000;
    background: $gray-light;
  }

  @include touch {
    max-width: 364px;
  }

}

.Section-one {
  display: flex;
  flex-direction: column;

  @include touch {
    > p { order: 3; }
    > .Image-box__wrapper { order: 2; }
    > p:first-child { order: 1; }
  }
}

.Section-two {
  @include touch {
    display: flex;
    flex-direction: column;

    > .Emicida-slider {
      order: 1;
    }

    > p {
      order: 2;
    }
  }
}

.paragraph-holder.is-size-7-touch {
  @include touch {
    line-height: 26px;
  }
}

// FONT
main.emicida {
  font-family: $family-serif;
}

.is-font-agipo {
  font-family: $family-sans-serif;
}

.is-font-netflix {
  font-family: 'Netflix Sans';
}

.scroll-top-btn {
  background: $yellow;
}


.Video-section {
  .container {
    padding: 0 !important;
  }

  .video-frame {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    width: 100%;
    max-width: 1011px;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;    
    }
  
  } 
}

.Footer-social {
  @include mobile {
    flex-direction: column;
  }

  .is-narrow {
    flex: none !important;
  }
}
</style>
