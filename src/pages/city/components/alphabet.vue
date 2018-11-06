<template>
    <div class="list">
        <div class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick"
        >{{item}}</div>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)//  用定时器进行函数节流的话 ： 如果已经正在做这件事情的时候 我呢 让它延迟16ms之后再去执行
        //  假设在这16ms之间  你又去做了手指的滚动  那么它会把上一次你要做的操作给清除掉（clearTimeout）
        //  然后重新执行你这次要做的事情     （等于以最终的滑动的位置为准 ）
        //  通过这种函数节流方式   会大大减少该函数的执行次数  从而提高网页性能

        //  这里实现一些逻辑   先找到A距离包裹它的顶部的高度  用offsetTop
        // const startY = this.$refs['A'][0].offsetTop  被上面updated钩子优化了
        // console.log(startY)
        //  然后获取移动时手指所在的高度 此高度时针对于客户端的高度 用clientY
        //  handleTouchMove的时候  我们会接收到一个参数e 这是个事件对象 他会有一个touches数组 touches[0]里面就有当前手指的信息
        // const touchY = e.touches[0].clientY - 79
        // console.log(touchY)
        //  然后算我们手指移到的字母在数组中的下标  逻辑是  (touchY - startY)/每个字母的高度  再把结果向下取个整
        // const index = Math.floor((touchY - this.startY) / 20)
        // console.log(index)
        //  最后 把这个下标在letters数组中对应的字母通过$emit change事件发布给父组件就OK了
        // if (index >= 0 && index < this.letters.length) {
        //   this.$emit('change', this.letters[index])
        // }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position: absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
