import Vue from 'vue';
import Vuex from 'vuex';
import { store } from '../store'
import { mapGetters, mapActions } from 'vuex'
// MyPlugin.install = function (Vue, options) {
//   // 3. inject some component options
//   Vue.mixin({
//     mounted () {
//       console.log('BLA MIXIN');
//     }
//   })
// }

// Vue.use(DetectBrowser)

// var myMixin = {
//   // store,
//   created() {
//     this.hello()
//     // console.log('window: ', window);
//     // https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769
//     var isIE = /*@cc_on!@*/false || !!document.documentMode;
//     // console.log('this: ', ...mapGetters());
//     // store.dispatch('changeIeDetection', isIE)
//     console.log('IE: ', isIE);
//   },
//   methods: {
//     hello() {
//       // this.$store.dispatch('changeIeDetection', true)
//     },
//     ...mapActions('changeIeDetection', true),
//   }
// }

// // define a component that uses this mixin
// var Component = Vue.extend({
//   mixins: [myMixin]
// })

// var component = new Component()

// Vue.mixin({
//   created() {
//     var myOption = this.$options.myOption
//     if (myOption) {
//       console.log(myOption)
//     }
//   }
// })

// new Vue({
//   myOption: 'hello!'
// })

export default ({ app }) => {
  // console.log('app: ', app);
  // console.log('window: ', window);
  let isIE = /*@cc_on!@*/false || !!document.documentMode;
  // app.store.dispatch('changeIeDetection', true)
}