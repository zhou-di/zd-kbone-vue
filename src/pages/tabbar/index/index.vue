<template>
  <div>
    <!-- <Layout> -->
      <KView class="extra_class">kboneui</KView>
      <KButton type="primary" @click.stop="handleShowToast" >Toast</KButton>
      <button type="primary">123</button>
    <!-- </Layout> -->
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

    onClickOpen() {
    },
  },
})
</script>

<style lang="less">

</style>
