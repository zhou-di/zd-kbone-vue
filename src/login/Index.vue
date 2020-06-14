<template>
  <div class="cnt">
    <Header></Header>
      <KButton class="button" type="primary" @click="login">登录</KButton>
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
  },
})
</script>

<style lang="less">
.cnt {
  margin-top: 20px;
}
</style>
