<template>
  <div class="cnt">
    <Header></Header>
    <!-- <p id="p">同层渲染</p> -->
    <!-- <KButton class="button" type="primary" @click="goBack">返回</KButton> -->
    <!-- <video :src="src"></video> -->
    <div class="textarea-container">
      <textarea value placeholder-style="color: #ff5257;" placeholder="点击输入..." />
      <!-- <cover-view class="mask"></cover-view> -->
    </div>
    <div class="mask"></div>
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
      src: 'https://media.yitong.com/mp-eqiq/classroom/video/free-video.mp4'
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
.cnt {
  height: 100%;
}
video {
  width: 80%;
  height: 500rpx;
}

.textarea-container {
  margin: 30px !important;
  height: 200px;
}
textarea {
  width: 100%;
  height: 100%;
  display: block;
  margin: 20rpx;
  border-radius: 20rpx;
  height: 500rpx;
  background-color: #f4f4f4;
  padding: 30rpx;
  box-sizing: border-box;
  flex: 1;
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.3;
}
</style>
