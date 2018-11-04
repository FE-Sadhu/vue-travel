<template>
    <div>
      <div
        class="item-list"
        v-for="(item, index) of list"
        :key="index"
      >
        <div class="item-title border-bottom">
          <span class="item-title-icons"></span>
          {{item.title}}
        </div>
        <div v-show="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    height .88rem
    line-height .88rem
    padding 0 .4rem
    font-size .32rem
    color #333
    .item-title-icons
      display inline-block
      position relative
      top .05rem
      left .1rem
      width .36rem
      height .36rem
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .item-children
    padding 0 .2rem
</style>
