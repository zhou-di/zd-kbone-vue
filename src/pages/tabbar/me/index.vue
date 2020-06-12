<template>
  <div>
    <Layout>
       个人中心
    </Layout>
  </div>
</template>

<script>
import Vue from 'vue'
import Layout from '@/components/Layout.vue'
import 'reduce-loader!./web'

export default Vue.extend({
  name: 'Me',
  components: {
    Layout
  },
  created() {

  },
  methods: {
    onClickJump() {
    },

    onClickOpen() {
    },
  },
})
</script>

<style lang="less">

</style>
