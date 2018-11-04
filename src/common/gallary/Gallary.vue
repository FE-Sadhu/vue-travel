<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide
        v-for="(item, index) of imgs"
        :key="index"
      >
        <img class="gallary-img" :src="item">
      </swiper-slide>
      <!-- <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>  <!--这个是拿来做按钮区的-->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>  左右箭头 这里不需要-->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> 显示滚动条的 这不需要 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background #000
    z-index 99
    .wrapper
      width 100%
      // overflow hidden
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
