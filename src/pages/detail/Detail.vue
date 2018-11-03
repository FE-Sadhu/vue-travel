<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  //上面这句没用 只是为了不让VSCODE显红= =
  .content
    height 50rem
</style>
