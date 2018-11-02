<template>
    <div>
      <div class="search">
          <input
            class="search-input"
            type="text"
            placeholder="输入城市名或拼音"
            v-model="keyword"
          >
      </div>
      <div
        class="search-content"
        ref="search"
        v-show="keyword"
      >
        <ul>
          <li
            v-for="item of list"
            :key="item.id"
            class="search-item border-bottom"
            v-show="item"
            @click="handleCityClick(item.name)"
          >{{item.name}}</li>
          <li
           class="search-item border-bottom"
           v-show="hasNoData"
          >
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
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
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 1)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      padding 0 0.1rem
      text-align center
      border-radius .06rem
      color #666   //input框中输入文字的颜色
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    right 0
    left 0
    background #eee
    z-index 1
    .search-item
      height .62rem
      line-height .62rem
      padding-left .2rem
      color #666
</style>
