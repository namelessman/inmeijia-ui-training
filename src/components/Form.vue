<template>
  <div class="form" >
      <div class="main">
          <img src="/static/img/form/logo.png">
          <div class="text-pri">现在预约</div>
          <div class="text-sec">免费获得客厅VR全景方案</div>
      </div>
      <form>
          <selector @change="changeCategory" :items="categories"></selector>
          <selector @change="changeCity" :items="cities"></selector>
          <input type="text" placeholder="所在小区" v-model="block">
          <button type="button" @click="submit">立即预约</button>
      </form>
  </div>
</template>

<script>
import Selector from '@/base/selector'
import {Toast} from 'mint-ui'
import {ajax} from '@/common/js/ajax'

export default {
  created () {
    this.categories = ['毛坯房']
    this.cities = ['杭州', '湖州', '宁波', '丽水']
    this.block = ''
  },
  methods: {
      changeCategory (val) {
        this.category = val
      },
      changeCity (val) {
        this.city = val
      },
      submit () {
        if (!this.category || !this.city || this.block.length < 2) {
          Toast('完整填写信息才能体验哦~')
          return
        }
        // cb为回调函数
        function cb (res) {
          if (res && res.code === 0) {
            Toast('您已成功预约')
          }
        }
        let data = {
          category: this.category,
          city: this.city,
          block: this.block
        }
        ajax('post', '/', cb, data)
        // 由于不存在服务器，故回调函数不会执行，此处为了展示效果，将回调函数调用一次
        Toast('您已成功预约')
      }
  },
  components: {
      Selector,
      Toast
  }
}
</script>


<style lang="less">
    @import '~@/common/less/variables.less';

    .form{
        background-color: @bg-color;
        padding-top: 36px;

        .main{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img{
                width: 40%;
                padding-bottom: 28px;
            }
            
            .text-pri{
                color: @font-primary-color;
                font-size: @font-primary-size;
                font-weight: bold;
                font-size: @font-primary-size;
                padding-bottom: 24px;
            }

            .text-sec{
                color: @font-secondary-color;
                font-size: @font-secondary-size;
                padding-bottom: 40px;
            }
        }

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 52px 36px;

            .selector{
              height: 40px;
              margin-bottom: 20px;
            }

            input{
              width: 100%;
              height: 40px;
              color: @font-secondary-color;
              border: none;
              outline: none;
              padding: 0 10px;
              box-sizing: border-box;
              margin-bottom: 20px;
            }

            button{
              width: 100%;
              height: 40px;
              font-size: 14px;
              color: #fff;
              background-color: @light-green;
              border: none;
              outline: none;
            }
        }
    }
</style>

