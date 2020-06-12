<template>
  <div class="container">
    <div class="page">
      <div class="page__bd" style="height: 100%;">
        <div class="weui-tab">
          <div class="weui-tab__panel">
            <slot></slot>
          </div>
          <Tabbar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Tabbar from '@/components/Tabbar.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    Tabbar
  },
  created() {},
  methods: {}
})
</script>

<style lang="less">
</style>
