<template>
  <div class="weui-tabbar" check-reduce>
    <div
      v-for="( item, index ) in list"
      :key="index"
      class="weui-tabbar__item"
      :class="{ 'weui-bar__item_on': item.index === currentIndex }"
      @click.stop="handleClick(item)"
    >
      <div style="display: inline-block; position: relative;">
        <img src="@/images/icon_tabbar.png" alt class="weui-tabbar__icon" />
        <span
          v-if="item.num > 0"
          class="weui-badge"
          style="position: absolute; top: -2px; right: -13px;"
        >8</span>
        <span v-if="item.dot" class="weui-badge weui-badge_dot"></span>
      </div>
      <p class="weui-tabbar__label">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Tabbar',
  components: {},
  data() {
    return {
      currentIndex: 0,
      list: [
        {
          pagePath: '/index',
          text: '首页',
          iconPath: '@/images/icon_tabbar.png',
          selectedIconPath: '@/images/icon_tabbar.png',
          index: 0,
          dot: false,
          num: 9
        },
        {
          pagePath: '/me',
          text: '个人中心',
          iconPath: '@/images/icon_tabbar.png',
          selectedIconPath: '@/images/icon_tabbar.png',
          index: 1,
          dot: true,
          num: -1
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route)
    const path = this.$route.path
    switch (path) {
      case '/index' || '/':
        this.currentIndex = 0
        break
      case '/me':
        this.currentIndex = 1
        break
      default:
        break
    }
  },
  created() {},
  methods: {
    handleClick(row) {
      const {
        index,
        pagePath
      } = row
      this.currentIndex = index
      // this.$router.push(pagePath)
      window.location.href = `/#${pagePath}`
    }
  }
})
</script>

<style lang="less">
.weui-badge_dot {
  position: absolute;
  top: 0;
  right: -6px;
}
</style>
