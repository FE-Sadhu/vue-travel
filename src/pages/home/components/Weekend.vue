<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                  <img :src="item.imgSrc" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgSrc: 'http://img1.qunarzz.com/sight/source/1509/b5/07bc81fc254ed6.jpg_r_640x214_8879c815.jpg',
        title: '土楼不能说的秘密',
        desc: '一座座神秘的建筑，一段段传奇的历史'
      }, {
        id: '0002',
        imgSrc: 'http://img1.qunarzz.com/sight/source/1509/69/3f535648c26681.jpg_r_640x214_146b5b8e.jpg',
        title: '秋意浓，来厦门',
        desc: '这里的秋，多了一点柔情'
      }, {
        id: '0003',
        imgSrc: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg',
        title: '厦门必游TOP10',
        desc: '来厦门感受一把小资情调'
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
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      font-size .28rem
      color #212121
      ellipsis()
    .item-desc
      line-height .4rem
      font-size .24rem
      color #616161
      ellipsis()
</style>
