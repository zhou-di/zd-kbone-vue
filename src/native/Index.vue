<template>
  <div class="cnt">
    <Header></Header>
    <p id="p">同层渲染</p>
    <KButton class="button" type="primary" @click="goBack">返回</KButton>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default Vue.extend({
  name: 'Native',
  components: {
    Header,
    Footer
  },
  data() {
    return {

    }
  },
  created() {
    window.addEventListener('wxload', (query: any) => console.log('page2 wxload', query))
    window.addEventListener('wxshow', () => console.log('page2 wxshow'))
    window.addEventListener('wxready', () => console.log('page2 wxready'))
    window.addEventListener('wxhide', () => console.log('page2 wxhide'))
    window.addEventListener('wxunload', () => console.log('page2 wxunload'))
  },
  mounted() {
    // ...
  },
  methods: {
    goBack() {
      window.history.back()
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
