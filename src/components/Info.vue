<template>
  <div class="info">
    <div class="main">
      <div class="decorate">VR</div>
      <div class="text-pri">
          <p>VR全屋装</p>
          <p>所见即所得</p>
      </div>
      <div class="text-sec text-info">
          区别于传统装修公司，我们提供整套的VR全景方案100%还原未来新家
      </div>
      <div class="button">了解更多<img src="static/img/info/array.svg"></div>
    </div>
    <div class="right">
        <div class="circle">
            <img src="static/img/info/array_down.svg">
        </div>
        <div class="text-sec">
            <p>360°旋转</p>
            <p>VR全套方案</p>
            <p>所见即所得</p>
        </div>
    </div>
    <div class="text-bg">01</div>
  </div>
</template>

<style lang="less">
@import '~@/common/less/variables.less';
.info{
    padding-top: 144%;
    position: relative;
    background: url('/static/img/info/vr@3.png');
    background-size: 100% 100%;
    background-clip: border-box;
    overflow: hidden;

    &>div{
        position: absolute;
        top: 0;
        left: 52px;
    }

    .text-pri{
        color: @font-primary-color;
        font-size: @font-primary-size;
        font-weight: bold;

        margin-top: 82px;

        p{
            margin: 10px 0;            
        }
    }
    .text-sec{
        color: @font-secondary-color;
        font-size: @font-secondary-size;

        &.text-info{
            margin-top: 24px;
            width: 75%;
            line-height: 24px;
        }
    }
    .right{
        display: flex;
        position: absolute;
        right: 10%;
        bottom: 25%;
        top: auto;
        left: auto;

        .circle{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: @light-green;
            margin-right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 8px 0 @light-green;

            &:after{
                content: '';
                position: absolute;
                border-radius: 50%;
                border: 1px solid @light-green;

                animation: round 5s infinite;
                
                @keyframes round {
                    0% {
                        width: 0;
                        height: 0;
                        opacity: 0;
                    }
                    50% {
                        width: 80px;
                        height: 80px;
                        opacity: 1;
                    }
                    100% {
                        width: 0;
                        height: 0;
                        opacity: 0;
                    }
                }
            }
        }
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        padding: 0 4px;
        border: 1px solid @border-color;
        width: 100px;
        height: 32px;
        border-radius: 16px;
        font-size: 12px;
        
        img{
            width: 15px;
            margin-left: 5px;
            animation: trans 2s infinite;

            @keyframes trans {
                0% {
                    transform: translateX(5px);
                }
                50% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(5px);
                }
            }
        }
    }
    .text-bg{
        width: 100%;
        color: @bg-font-color;
        font-size: @bg-font-size;
        font-weight: 900;
        opacity: .1;
        text-align: center;
        top: 20px;
    }
    .decorate{
        display: inline;
        position: absolute;
        top: 50px;
        color: #6f727c;
        transform: rotate(-90deg);

        &:before{
            content: '';
            display: inline-block;
            position: relative;
            top: -5px;
            width: 20px;
            border-top: 1px solid #e0e2eb;
        }
    }
}
</style>

