<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'

import GameControl from './game/GameControl'

let socre: Ref<number> = ref(0)
  
onMounted(() => {
  new GameControl()
})

</script>

<template>
  <div id="main">
    <div class="stage">
      <div id="snake">
        <div id="head"></div>
      </div>
      <div id="food">
      </div>
    </div>

    <div class="score-plane">
      <div id="">
        score: <span id="score">{{ socre }}</span>
      </div>
      <div id="">
        level: <span id="level">1</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="less">
@bgColor: #b7d4a8;
@snakeColor: black;
#main{
  width: 360px;
  height: 420px;
  background-color: @bgColor;
  border: 10px solid black;
  border-radius: 40px;

  .stage{
    width: 304px;
    height: 304px;
    border: 2px solid black;
    margin: 20px auto;
    position: relative;

    #snake{
      &>div{
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
        position: absolute;
        background-color: @snakeColor;
      }
      ::v-deep(.bodies){
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
        position: absolute;
        background-color: @snakeColor;
      }
    }

    #food{
      width: 10px;
      height: 10px;
      border: 1px solid #fff;
      position: absolute;
      background-color: red;
      left: 100px;
      animation-name: example;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
  .score-plane{
    display: flex;
    justify-content: space-around;
    color: black;
    font-size: 30px;
    font-weight: bold;
  }
  
}

@keyframes example {
  0% {opacity: 1}
  50% {opacity: .2;}
  100% {opacity: 1;}
}
</style>
