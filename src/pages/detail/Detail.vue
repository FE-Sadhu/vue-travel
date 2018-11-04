<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <detail-list :list="list"></detail-list>
      <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆连票',
          children: [{
            title: '成人三馆连票 - 某一连锁店'
          }]
        }, {
          title: '成人五馆连票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '军人票'
      }]
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
