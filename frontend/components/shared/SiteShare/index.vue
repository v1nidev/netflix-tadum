<template>
  <div class="site-share is-flex">
    <IOE @observe="onObserve" :height="10" />
    <h2 ref="title" class="title-share is-size-3 m-b-32 is-alpha-70 has-text-weight-bold">
      COMPARTILHE
    </h2>
    <div class="share-buttons is-flex">
      <div class="social m-l-12 m-r-12" @mouseenter="onOver" @mouseleave="onOut" @click.prevent="share('fb')">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="circle" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#DE3039" />
          <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M26.6788 31H23.8723V23.5H22V20.9153L23.8723 20.9144L23.8695 19.3919C23.8695 17.283 24.4401 16 26.9204 16H28.9855V18.5852H27.695C26.7289 18.5852 26.6826 18.9466 26.6826 19.6206L26.6788 20.9144H29L28.7266 23.4991L26.6807 23.5L26.6788 31Z" fill="white" />
        </svg>
      </div>
      <div class="social m-l-12 m-r-12" @mouseenter="onOver" @mouseleave="onOut" @click.prevent="share('tw')">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="circle" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#DE3039" />
          <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M35 18.6575C34.3747 18.9386 33.7027 19.1286 32.9967 19.2142C33.717 18.7765 34.2701 18.0842 34.5304 17.2589C33.8567 17.6638 33.1098 17.9577 32.3156 18.1165C31.6797 17.4296 30.7728 17 29.7698 17C27.8435 17 26.2822 18.5827 26.2822 20.5342C26.2822 20.8114 26.3125 21.0811 26.3725 21.3401C23.4735 21.192 20.9038 19.7854 19.1836 17.6471C18.8835 18.1693 18.7113 18.7765 18.7113 19.4241C18.7113 20.6505 19.3271 21.732 20.2626 22.3656C19.691 22.3473 19.1533 22.1885 18.6832 21.9236C18.6827 21.9382 18.6827 21.9532 18.6827 21.9678C18.6827 23.6802 19.8849 25.109 21.4808 25.4336C21.188 25.5143 20.8799 25.5574 20.5617 25.5574C20.337 25.5574 20.1186 25.5353 19.9056 25.4944C20.3492 26.8984 21.6375 27.9202 23.1638 27.9487C21.97 28.8967 20.4661 29.4614 18.8319 29.4614C18.5504 29.4614 18.2731 29.4453 18 29.4119C19.5433 30.4148 21.3766 31 23.346 31C29.7619 31 33.2697 25.6145 33.2697 20.9444C33.2697 20.791 33.2665 20.6386 33.2596 20.4868C33.9412 19.9888 34.5325 19.366 35 18.6575Z" fill="white" />
        </svg>
      </div>
      <div class="social m-l-12 m-r-12" @mouseenter="onOver" @mouseleave="onOut" @click.prevent="share('lk')">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="circle" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#DE3039" />
          <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M24.2106 22.8741C24.2106 21.5692 24.1684 20.4782 24.1258 19.5365H26.9106L27.0592 20.9921H27.1225C27.5439 20.3066 28.578 19.3017 30.3081 19.3017C32.4175 19.3017 34 20.7349 34 23.8163V30H30.7933V24.2014C30.7933 22.8537 30.3283 21.9334 29.1681 21.9334C28.2827 21.9334 27.7558 22.5537 27.5233 23.1527C27.4384 23.3666 27.4173 23.6661 27.4173 23.9661V30H24.2106V22.8741ZM19.0848 29.9991H22.2916V19.5365H19.0848V29.9991ZM22.3966 16.6263C22.3966 17.5247 21.7422 18.252 20.6664 18.252C19.6539 18.252 19 17.5247 19 16.6263C19 15.7064 19.6759 15 20.7091 15C21.7422 15 22.3755 15.7064 22.3966 16.6263Z" fill="white" />
        </svg>
      </div>
      <div class="social m-l-12 m-r-12" @mouseenter="onOver" @mouseleave="onOut" @click.prevent="share('in')">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="circle" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#DE3039" />
          <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M28.2906 23.5C28.2906 21.9583 27.0409 20.7095 25.4996 20.7095C23.9589 20.7095 22.7092 21.9583 22.7092 23.5C22.7092 25.0417 23.9589 26.2905 25.4996 26.2905C27.0409 26.2905 28.2906 25.0417 28.2906 23.5V23.5ZM31.8024 18.8955C31.8024 19.1266 31.614 19.3141 31.3839 19.3141H30.129C29.8989 19.3141 29.7104 19.1256 29.7104 18.8955V17.6397C29.7104 17.4086 29.8998 17.2206 30.129 17.2206H31.3839C31.6149 17.2206 31.8024 17.4091 31.8024 17.6397V18.8955ZM30.6554 16H20.3439C19.0492 16 17.9996 17.05 17.9996 18.3442V20.8834H21.797C22.6173 19.7238 23.9701 18.9653 25.4996 18.9653C27.0296 18.9653 28.382 19.7238 29.2028 20.8834H32.9996V18.3442C32.9996 17.05 31.9501 16 30.6554 16V16ZM30.0348 23.5C30.0348 26.005 28.0037 28.0347 25.4996 28.0347C22.9951 28.0347 20.9649 26.005 20.9649 23.5C20.9649 23.2014 20.9945 22.9103 21.0503 22.6281H17.9996V28.6558C17.9996 29.95 19.0482 31 20.3439 31H30.6554C31.9501 31 32.9996 29.9509 32.9996 28.6558V22.6281H29.9504C30.0053 22.9103 30.0348 23.2014 30.0348 23.5V23.5Z" fill="white" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import IOE from '~/components/shared/IntersectionObserverElement'
import { TweenMax, Power3, Back } from 'gsap'

export default {
  components:{
    IOE
  },

  data(){
    return{
      a_title: null,
      shown: false
    }
  },

  mounted() {
    const { title } = this.$refs

    this.a_title = new SplitText( title, {type: 'chars'})

    TweenMax.set(this.a_title.chars, {x: 30, alpha: 0})
    TweenMax.set('.site-share .circle', {scale: 0, transformOrigin: '50% 50%'})
    TweenMax.set('.site-share .icon', {y: 50})
  },

  methods:{
    onObserve(e){
      if(e && !this.shown){
        this.shown = true
        TweenMax.killTweensOf(this.a_title.chars)
        TweenMax.killTweensOf('.site-share .circle')
        TweenMax.killTweensOf('.site-share .icon')
  
        TweenMax.set(this.a_title.chars, {x: 30, alpha: 0})
        TweenMax.set('.site-share .circle', {scale: 0})
        TweenMax.set('.site-share .icon', {y: 50})
  
        TweenMax.staggerTo(this.a_title.chars, .5, {x: 0, alpha: 1, ease: Power3.easeOut}, .05)
        TweenMax.staggerTo('.site-share .circle', .7, {scale: 1, ease: Power3.easeOut}, .3)
        TweenMax.staggerTo('.site-share .icon', 1, {y: 0, ease: Back.easeOut, delay: .3}, .3)
      }
    },

    onOver(e){
      TweenMax.to(e.target, .3, {scale: 1.1, ease: Back.easeOut})
      TweenMax.to(e.target.querySelector('.icon'), .3, {y: -50, ease: Power3.easeOut})
      TweenMax.to(e.target.querySelector('.icon'), .5, {startAt:{y: 50}, y: 0, ease: Back.easeOut, delay: .3})
    },

    onOut(e){
      TweenMax.to(e.target, .3, {scale: 1, ease: Back.easeOut})
      TweenMax.to(e.target.querySelector('.icon'), .3, {y: 0, ease: Back.easeOut, delay: .3})
    },

    share(type){
      let desc = document.querySelector("meta[name='description']").getAttribute('content') || 'Almap Weekly News'
      switch (type) {
      case 'fb':
        window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURI(window.location.href)+'&text=' + desc, '_blank')
        break;
      case 'tw':
        window.open('https://twitter.com/share?url='+encodeURI(window.location.href)+'&text=' + desc, '_blank')
        break;
      case 'lk':
        window.open('https://www.linkedin.com/shareArticle?mini=true&url='+encodeURI(window.location.href)+'&title=' + desc, '_blank')
        break;

      case 'in':
        window.open('https://www.instagram.com/almapbbdo/', '_blank')
        break;
          
      default:
        break;
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~assets/css/buefy";

.site-share{
  justify-content: space-between;

  @include until($desktop){
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
.share-buttons{
  justify-content: center;
}
.social{
  cursor: pointer;
}
</style>
