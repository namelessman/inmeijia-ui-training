<template>
    <div class="slider" :style="{height:height}">
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="banner in banners" :key="banner">
                <img :src="banner">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui'
export default {
  created () {
    this.height = `${window.innerWidth * 0.5}px`
    this.banners = ['/static/img/banner/banner1@3.png', '/static/img/banner/banner2@3.png']
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
<style lang="less">
.slider{
    img{
        width: 100%;
    }
    .mint-swipe-indicators{
      left: 10%;
      opacity: .8;
    }
}
</style>
