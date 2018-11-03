<template>
  <div>
    <div class="banner" @click="handleClickBanner">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1809/cc/cc238b335afb8479a3.water.jpg_600x330_977d2d43.jpg">
        <div class="banner-info">
            <div class="banner-title">福州动物园(AAAA景区)</div>
            <div class="banner-number">
              <span class="iconfont banner-icon">&#xe796;</span>
              39
            </div>
        </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1804/1c/1c8caab40c99cf96a3.water.jpg_r_800x800_a69425c9.jpg', 'http://img1.qunarzz.com/sight/p0/1611/38/38b3f1f03d56b977a3.water.jpg_r_800x800_3d6aa6e9.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleClickBanner () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    oveflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        padding 0 .4rem
        margin-top .14rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.8)
        font-size .24rem
        .banner-icon
          font-size  .24rem
</style>
