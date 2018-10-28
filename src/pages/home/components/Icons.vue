<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img  class="icon-img-content" :src="item.iconSrc">
            </div>
            <p class="icon-content">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div class="icon">
            <div class="icon-img">
              <img  class="icon-img-content" src="">
            </div>
            <p class="icon-content">热门景点</p>
          </div>
        </swiper-slide> -->
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)//  创建页码 page   在第8张图 也就是 index为7之前 page值都为 0 在第9张图 page值为1
        if (!pages[page]) {
          pages[page] = []//  当pages[0] 没有内容时  就创建一个数组 此时[[]] 当pages[1]无内容时 再为它建个空数组 此时 [[...], []]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl'

  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    margin-top .2rem
    .icon
      position relative
      float left
      overflow hidden
      width 25%
      height 0
      padding-bottom 23%
      box-sizing border-box
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-content
        position absolute
        left 0
        right 0
        bottom 0
        height .30rem
        line-height .30rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
