<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgSrc" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgSrc: 'http://img1.qunarzz.com/sight/p0/1809/cc/cc238b335afb8479a3.water.jpg_250x250_12bc1f4a.jpg',
        title: '福州动物园世界',
        desc: '浪漫福州首站，浪漫主题的动物园世界'
      }, {
        id: '0002',
        imgSrc: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
        title: '鼓浪屿',
        desc: '浪漫福州首站，浪漫主题的动物园世界'
      }, {
        id: '0003',
        imgSrc: 'http://img1.qunarzz.com/sight/p0/1711/4f/4fba5e793fe8ef5ca3.img.jpg_250x250_856d43db.jpg',
        title: '厦门园林植物园',
        desc: '浪漫福州首站，浪漫主题的动物园世界'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .title
    height .8rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item
    display flex
    width 100%
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1//  自动撑满右边的区域了
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 0.2rem
        border-radius .06rem
        color #fff
</style>
