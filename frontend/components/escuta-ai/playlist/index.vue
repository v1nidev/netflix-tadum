<template>
  <div class="playlist">
    <h1>
      Segue o<br />
      baile!
    </h1>
    <p>Preparei uma playlist com <br />minhas músicas favoritas.</p>
    <!-- Spotify Embed -->
    <div class="iframe-spotify">
      <iframe
        src="https://open.spotify.com/embed/album/0SG6SKXEwpoQLrrpuD5wDv"
        width="100%"
        height="446px"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
    <footer>
      <p>Ouvir no Spotify</p>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";
@import "~assets/css/overrides";

.playlist {
  width: 90%;
  max-width: 1014px;
  margin: 44px auto 0;
  padding-top: 50px;
  border-radius: 20px;
  background-color: $pink;
  overflow: hidden;
  border: 1.5px solid $black;
  font-family: "Grennete Pro";
  .iframe-spotify {
    border-radius: 20px;
    overflow: hidden;
    margin: 51px auto 15px;
    width: 95%;
    & iframe {
      border-radius: 20px;
      height: 446px;
      width: 100%;
    }
  }
  & h1 {
    font-family: $family-sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 87.5%;
    text-align: center;
    letter-spacing: -0.02em;
    margin-bottom: 27px;
    color: $black;
  }
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.01em;
    color: $black;
  }
  footer {
    background-color: $gray;
    padding: 24px 64px 29px;
    border-top: 1.5px solid $black;
    p {
      color: $black;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
      letter-spacing: -0.01em;
    }
  }
  @include from($tablet) {
    br {
      display: none;
    }
    & h1 {
      font-size: 150px;
      line-height: 90%;
      letter-spacing: -0.01em;
      margin-bottom: 20px;
    }
    & p {
      font-size: 32px;
      line-height: 39px;
    }
  }
}
</style>