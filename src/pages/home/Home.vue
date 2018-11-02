<template>
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      //  用axios请求ajax数据
      axios.get('/api/index.json?city=' + this.city)
        .then((result) => {
          this.getHomeInfoSucc(result)
        }).catch((err) => {
          console.log(`请求数据出错: ${err}`)
        })
      // 用fetch请求ajax数据
      // fetch('/api/index.json')
      //   .then(data => data.json())
      //   .then(res => this.getHomeInfoSucc(res))
      //   .catch(err => console.log(`请求数据出错：${err}`))
    },
    getHomeInfoSucc (res) {
      //  使用axios方法传进来的res数据
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city  这个不用了  用vuex实现数据共享
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // 使用fetch方法传进来的res数据
      // if (res.ret && res.data) {
      //   const data = res.data
      //   this.city = data.city
      //   this.swiperList = data.swiperList
      //   this.iconList = data.iconList
      //   this.recommendList = data.recommendList
      //   this.weekendList = data.weekendList
      // }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
