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
    window.addEventListener('wxload', (query: any) => console.log('page2 wxload', query))
    window.addEventListener('wxshow', () => console.log('page2 wxshow'))
    window.addEventListener('wxready', () => console.log('page2 wxready'))
    window.addEventListener('wxhide', () => console.log('page2 wxhide'))
    window.addEventListener('wxunload', () => console.log('page2 wxunload'))
  },
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
