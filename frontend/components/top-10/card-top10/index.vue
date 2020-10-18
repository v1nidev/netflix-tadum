<template>
  <div class="card-top10">
    <header>
      <h5>{{ name }}</h5>
    </header>
    <div class="intro">
      <p>{{ profile }}</p>
      <p v-html="from" />
    </div>
    <div class="topList">
      <table>
        <tr v-for="(item, index) in list" :key="item">
          <td>{{ index + 1 }}</td>
          <td>{{ item }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    profile: String,
    from: String,
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";
.card-top10 {
  border-radius: 20px;
  overflow: hidden;
  background-color: $gray-light;
  margin-right: 16px;
  width: 90%;
  & header {
    background-color: $black;
    padding: 9px 0;
    text-align: center;
    & h5 {
      color: $gray-light;
      font-family: "Grennete Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
    }
  }
  & .intro {
    padding: 6px 0;
    font-family: "Grennete Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.01em;
    color: $black;
  }
  & table {
    width: 100%;
    tr {
      td {
        font-family: "Grennete Pro";
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.01em;
        border: 1px solid $black;
        padding-top: 6px;
        padding-bottom: 9px;
        &:first-child {
          text-align: center;
          border-left: 0px;
          border-right: 0px;
          padding-left: 5px;
          padding-right: 5px;
        }
        &:last-child {
          padding-left: 14px;
          border-right: 0px;
        }
      }
      &:last-child {
        & td {
          border-bottom: 0px;
        }
      }
    }
  }
  @include from($tablet) {
    width: 65%;
  }
}
</style>
