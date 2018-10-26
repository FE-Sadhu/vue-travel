<template>
    <div class="icons">
      <swiper>
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
  data () {
    return {
      iconList: [{
        id: '0001',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点有很多'
      }, {
        id: '0002',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '海洋馆'
      }, {
        id: '0003',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '游乐场'
      }, {
        id: '0004',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '0005',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '福州必游'
      }, {
        id: '0007',
        iconSrc: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '武夷山'
      }, {
        id: '0008',
        iconSrc: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '打卡圣地'
      }, {
        id: '0009',
        iconSrc: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '打卡圣地'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
