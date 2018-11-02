<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper"
                  v-for="item of hot"
                  :key="item.id"
                  @click="handleCityClick(item.name)"
                >
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div
          class="area"
          v-for="(item, key) of cities"
          :key="key"
          :ref="key"
        >
            <div class="title border-topbottom">{{key}}</div>
            <ul class="item-list">
                <li class="item border-bottom"
                  v-for="innerItem of item"
                  :key="innerItem.id"
                  @click="handleCityClick(innerItem.name)"
                >{{innerItem.name}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeC2', city)  用mapMutations API代替
      this.changeC2(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeC2'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      height .5rem
      line-height .5rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        height .54rem
        line-height .54rem
        color #666
        padding-left .2rem
</style>
