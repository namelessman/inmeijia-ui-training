<template>
  <div class="selector">
      <div class="cover">{{value.length>0?value:'请选择'}}</div>
      <select v-model="value" @change="change">
          <option value="" disabled>请选择</option>
          <option v-for="item in items" :key="`option-${item}`" :value="item">{{item}}</option>
      </select>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data () {
        return {
            value: ''
        }
    },
    props: {
        items: {
            type: Array,
            default: []
        }
    },
    methods: {
        change () {
            if (!this.value) {
                Toast('请选择')
                return
            }
            this.$emit('change', this.value)
        }
    }
}
</script>

<style lang="less">
    @import '~@/common/less/variables.less';
    .selector{
        position: relative;
        width: 100%;
        height: 100%;

        .cover{
            position: absolute;
            width: 100%;
            height: 100%;
            color: @font-secondary-color;
            background-color: #fff;
            display: flex;
            padding-left: 10px;
            box-sizing: border-box;
            align-items: center;

            &::before,&::after{
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-5px);
                width: 8px;
                border-top: 2px solid @bg-font-color;
            }
            &::before{
                right: 15px;
                transform: rotate(45deg);
            }
            &::after{
                right: 9px;
                transform: rotate(-45deg);
            }
        }

        select{
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: 1;
        }
    }

</style>
