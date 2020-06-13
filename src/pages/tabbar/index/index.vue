<template>
  <div>
    <Layout>
      <KView class="extra_class">kboneui</KView>
      <KButton type="primary" @click.stop="handleShowToast" >Toast</KButton>
      <KButton type="primary" @click.stop="goPage1" >跳转page1</KButton>
      <a href="/#/page1">跳转page1</a>
    </Layout>
  </div>
</template>

<script>
import Vue from 'vue'
import Layout from '@/components/Layout.vue'
import 'reduce-loader!./web'

export default Vue.extend({
  name: 'Index',
  components: {
    Layout
  },
  created() {

  },
  methods: {
    handleShowToast() {
      this.$api.showToast({
        title: '加载成功'
      })
    },

    goPage1() {
      console.log(window)
      // console.log(window)
      // console.log(window)
      window.location.href = '/#/page1'
    },
  },
})
</script>

<style lang="less">

</style>
