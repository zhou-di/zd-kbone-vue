<template>
  <div class="movable">
    <!-- <Header></Header> -->
      <KButton class="button" type="primary" @click="login">登录</KButton>
      <div class="move" ref="div" @touchstart="down" @touchmove="move" @touchend="end">
        <p>x:{{ positionX }}</p>
        <p>y:{{ positionY }}</p>
      </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default Vue.extend({
  name: 'List',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      positionX: 0,
      positionY: 0,
    }
  },
  created() {
    console.log(1, this.$route)
    // this.$api.showModal({
    //   title: '提示',
    //   content: 'JSON.stringify(this.$route)'
    // })
    window.addEventListener('wxload', (query: any) => {
      console.log('login wxload', query)
      // this.$api.showModal({
      //   title: '提示',
      //   content: JSON.stringify(query)
      // })
    })
    window.addEventListener('wxshow', () => console.log('login wxshow'))
    window.addEventListener('wxready', () => console.log('login wxready'))
    window.addEventListener('wxhide', () => console.log('login wxhide'))
    window.addEventListener('wxunload', () => console.log('login wxunload'))
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(2, to, from, next)
  // },
  methods: {
    login() {
      return this.$api.login().then((result) => {
        console.log(result)
        this.$api.showToast({
          title: '登录成功'
        })
      })
    },
    /* 阻止移动端屏幕默认滑动 */
    default() {
      this.$refs.div.addEventListener(
        'touchmove',
        (event) => {
          event.preventDefault()
        },
        { passive: false }
      )
    },
    getThisNode() {
      const odiv = this.$refs.div
      // console.log(this.positionX, this.positionY)
      if (this.positionX <= 0) {
        this.positionX = 0
      } else if (this.positionX >= this.innerWidth) {
        this.positionX = this.innerWidth
      } else {
        this.positionX = this.positionX
      }
      if (this.positionY <= 0) {
        this.positionY = 0
      } else if (this.positionY >= this.innerHeight) {
        this.positionY = this.innerHeight
      } else {
        this.positionY = this.positionY
      }
      // if (this.positionX <= 20) {
      //   this.positionX = 20
      // } else if (this.positionX >= this.innerWidth - 20) {
      //   this.positionX = this.innerWidth - 20
      // } else {
      //   this.positionX = this.positionX
      // }
      // if (this.positionY <= 20) {
      //   this.positionY = 20
      // } else if (this.positionY >= this.innerHeight - 20) {
      //   this.positionY = this.innerHeight - 20
      // } else {
      //   this.positionY = this.positionY
      // }
      odiv.style.left = `${this.positionX - 20}px`
      odiv.style.top = `${this.positionY - 20}px`
    },
    // 光标按下
    down(e) {
      this.default()
      this.innerHeight = e.view.innerHeight
      this.innerWidth = e.view.innerWidth
      this.positionX = e.changedTouches[0].pageX
      this.positionY = e.changedTouches[0].pageY
    },
    // 光标移动
    move(e) {
      this.getThisNode()
      this.default()
      this.positionX = e.changedTouches[0].pageX
      this.positionY = e.changedTouches[0].pageY
      this.getThisNode()
    },
    // 光标抬起
    end() {
      // console.log('end')
    }
  },
})
</script>

<style lang="less">
.movable {
  width: 100%;
  height: 100%;
  position: relative;
}
.button {
  margin: 0;
}
.move {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  left: 0;
  top: 100px;
}
</style>
