<template>
  <div class="cnt">
    <Header></Header>
    <p id="p">用户中心</p>
    <KSwiper
      :indicator-dots="indicatorDots"
      :circular="circularFlag"
      :autoplay="autoplay"
      :duration="duration"
      :interval="interval"
    >
      <KSwiperItem v-for="(item,index) in background" :key="index">
        <KView :class="'swiper-item '+ item" />
      </KSwiperItem>
    </KSwiper>
    <KButton class="button" type="primary">KButton</KButton>
    <KButton class="button" type="primary" @click="showToast">toast</KButton>
    <KButton class="button" type="primary" @click="goPage">跳转页面</KButton>
    <KButton class="button" type="primary" @click="goLogin">登录</KButton>
    <Footer></Footer>
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
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      autoplay: false,
      interval: 2000,
      duration: 500,
      circularFlag: true
    }
  },
  created() {
    // window.onload = () => {
    //   if (process.env.isMiniprogram) {
    //     // 小程序
    //     document.documentElement.style.fontSize = `${wx.getSystemInfoSync().screenWidth / 16}px`
    //   } else {
    //     // Web 端
    //     document.documentElement.style.fontSize =
    //     `${document.documentElement.getBoundingClientRect().width / 16}px`
    //   }
    // }
    window.addEventListener('wxload', (query: any) => console.log('page2 wxload', query))
    window.addEventListener('wxshow', () => console.log('page2 wxshow'))
    window.addEventListener('wxready', () => console.log('page2 wxready'))
    window.addEventListener('wxhide', () => console.log('page2 wxhide'))
    window.addEventListener('wxunload', () => console.log('page2 wxunload'))

    console.log(1, window.localStorage)
    console.log(2, document)
    console.log(3, document.getElementById)
  },
  mounted() {
    console.log(4, document.getElementById('p'))
    const pElement = document.getElementById('p')
    pElement.style.backgroundColor = 'red'
    // window.$$extend('window.location', {
    //   testStr: 'I am location',
    //   testFunc() {
    //     return `Hello, ${123}`
    //   },
    // })
  },
  methods: {
    onClickJump() {
      window.location.href = '/home'
    },
    showToast() {
      this.$api.showToast({
        title: '我是toast',
        icon: 'none'
      })
    },
    goPage() {
      if (process.env.isMiniprogram) {
        window.open('/native')
      } else {
        // window.location.href = '/native'
        // this.$router.push('/native')
        console.log(this.$router.options.routes)
        this.$router.push({
          path: '/native'
        })
      }
    },
    goLogin() {
      // this.$router.push({
      //   path: '/user-center/login'
      // })
      if (process.env.isMiniprogram) {
        window.open('/user-center/login')
        // window.location.href = '/user-center/login'
        // this.$api.navigateTo({
        //   url: '/pages/login/index'
        // })
      } else {
        // window.location.href = '/native'
        // this.$router.push('/native')
        console.log(this.$router.options.routes)
        this.$router.push({
          path: '/user-center/login'
        })
      }
    }
  },
})
</script>

<style lang="less">
.swiper-item {
  width: 100%;
  height: 100%;
}
.demo-text-1 {
  background-color: #1AAD19;
}
.demo-text-2 {
  background-color: #2782D7;
}
.demo-text-3 {
  background-color: #F1F1F1;
}
.button {
  margin-top: 0.3rem;
}
</style>
