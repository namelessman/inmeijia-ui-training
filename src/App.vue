<template>
  <div id="app">
    <slider></slider>
    <info></info>
  </div>
</template>

<script>
  import Slider from '@/components/Slider'
  import Info from '@/components/Info'
  export default {
    components: {
      Slider,
      Info
    }
  }
</script>

<style lang="less">
body{
  margin: 0;
}
</style>
