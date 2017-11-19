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
  export default {
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
