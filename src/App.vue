<template>
  <div id="app">
    <slider></slider>
    <info></info>
    <m-form></m-form>
  </div>
</template>

<script>
  import Slider from '@/components/Slider'
  import Info from '@/components/Info'
  import MForm from '@/components/Form'
  import {ajax} from '@/common/js/ajax'
  export default {
    created () {
      // 分享只作为展示，wx为微信sdk，此处未安装
      function share (res) {
        if (res.code === 0) {
          wx.config({
            debug: false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonce,
            signature: res.data.signature,
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
          })
          wx.onMenuShareAppMessage({
            title: '',
            desc: '',
            link: '',
            imgUrl: ''
          })
          wx.onMenuShareTimeline({
            title: '',
            link: '',
            imgUrl: ''
          })
        }
      }
      ajax('get', '/share', share)
    },
    components: {
      Slider,
      Info,
      MForm
    }
  }
</script>

<style lang="less">
body{
  margin: 0;
}
</style>
