<template>
  <div>
      <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
      >
      </detail-banner>
      <detail-header></detail-header>
      <detail-list :list="list"></detail-list>
      <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      lastId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(res => this.handleGetDataSucc(res))
        .catch(err => console.log('出错啦:' + err))
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  //上面这句没用 只是为了不让VSCODE显红= =
  .content
    height 50rem
</style>
