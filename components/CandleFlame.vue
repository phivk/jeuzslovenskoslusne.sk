<template>
  <div class="candle" :data-day="day" v-bind:style="{transform: 'scale(0.4) translateY(' + (100 - waxPercentage) +'%)'}">
    <div class="flame" v-bind:style="{
      animation: 'move ' + moveTime + 's infinite, move-left ' + moveTime + 's infinite',
      height: '150px'
    }">
      <div class="shadows"></div>
      <div class="top" v-bind:style="{animation: 'flame-up ' + flameUpTime + 's infinite, blink .1s infinite'}"></div>
      <div class="middle"></div>
      <div class="bottom"></div>
    </div>
    <div class="wick"></div>
    <div class="wax" v-bind:style="{height: waxPercentage + '%'}"></div>
  </div>
</template>

<script>
export default {
  props: ['day', 'moveTime', 'flameUpTime', 'waxPercentage']
}
</script>

<style lang="scss">
$candle-scale: 0.4;
$flame-height: 150px;
$wick-height: 50px;
$orange: #ff6a00;
$orange-yellow: #ff9224;
$dark: #2c2b39;
$blue-dark: #30537d;
$blue-light: #76daff;
$yellow: #fbf348;
$yellow-grey: #58523a;

.candle{
  transform: scale($candle-scale);
  width: 34px;
  margin: 10% auto 0 auto;
  position: relative;
  height: 400px;
  align-self: flex-end;
}
.wick{
  position: absolute;
  width: 18%;
  height: $wick-height;
  background: #23161a;
  top: $flame-height - 0.8*$wick-height;
  left: 50%;
  transform: translateX(-50%) skewX(2deg);
  border-radius: 10%;
  box-shadow: 0 0 6% 0px black;
  &:before{
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    height: 20%;
    box-shadow: 
      0 -14px 10px 8px white, 
      0 -10px 10px 8px rgba(255,215,0,0.7), //gold
      0 -3px 10px 8px rgba(255,106,0,0.7),  //orange
      0 6px 3px 4px black;
  }
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    bottom:0;
    width: 0px;
    height: 0px;
    box-shadow: 
      0 5px 2px 3px gold,
      0 20px 2px 14px gold,
      0 -6px 4px 5px rgba(98, 33, 27, 0.8),  //dark orange
      0 0px 1px 4px rgba(255, 106, 0, 0.7),  //orange
      0 0px 3px 4px $orange,
      0 5px 3px 4px gold;
  }
}
.flame{
  width: 50%;
  height: $flame-height;
  margin: 0px auto;
  position: relative;
  animation: move 3s infinite, move-left 3s infinite;
  transform-origin: 50% 90%;
  .top{
    width: 105%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: white; 
    border-top-left-radius: 500%;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 500%;
    border-bottom-right-radius: 50px;
    transform: skewY(-10deg);
    box-shadow: 
      0 0px 0px 3px white,
      0 -20px 1px 4px white, 
      0 -25px 2px 3px gold, 
      0 -30px 5px 4px $orange,  //top
      0 0px 150px 10px $orange, //global
      0 -10px 2px 4px white,
      0 -5px 3px 3px white;
    animation: flame-up 4s infinite, blink .1s infinite;
  }
  .shadows{
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 40%;
    border-radius: 50%;
    box-shadow: 
      0 5px 20px 15px gold, 
      0 0px 100px 20px $orange,
      0 15px 50px 15px $orange,
      5px 30px 5px 13px $orange,
      5px 50px 5px 13px $orange,
      0 75px 50px 30px black;
    animation: blink .1s infinite;
  }
  .bottom{
    transform: scale(0.9);
    position: absolute;
    bottom: 4%;
    left: 50%;
    width: 1px;
    height: 5%;
    border-radius: 1%;
    background: $dark;
    box-shadow: 
      0 6px 10px 12px rgba(60, 76, 125, 0.3), //dark blue
      0 0px 4px 8px $dark,
      0 -12px 10px 8px rgba(255,106,0, 0.5),  //orange
      0 5px 7px 12px $dark,
      0 -3px 10px 12px $dark,
      5px -10px 10px 5px red, 
      0 -15px 10px 10px gold, 
      5px -25px 10px 5px gold,
      0 2px 5px 10px $blue-dark,
      0 -2px 2px 14px $blue-light,
      0 2px 10px 12px $blue-light;
  }
}
.wax{
  position: relative;
  top: 4%;
  width: 100%;
  height: 100%;
  background: $orange-yellow;
  background: -moz-linear-gradient(top, $orange-yellow 0px, $orange-yellow 20px, $yellow-grey 50px); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, $orange-yellow 0px, $orange-yellow 20px, $yellow-grey 50px); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, $orange-yellow 0px, $orange-yellow 20px, $yellow-grey 50px); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9224', endColorstr='#58523a',GradientType=0 ); /* IE6-9 */
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 
    inset 0 7px 12px -2px $yellow, 
    inset 0 9px 57px -3px rgba(255,0,0,0.4), 
    inset 0 -5px 8px 2px black,
    0 0 3px 0px $orange;
}

@keyframes move{
  0%{ transform: skewX(2deg) skewY(5deg)}
  50%{ transform: skewX(-2deg) skewY(-0deg)}
  100%{ transform: skewX(2deg) skewY(5deg)}
}
@keyframes move-left{
  50%{transform: skewX(3deg);}
}
@keyframes flame-up{
  50% { 
    transform: scaleY(1.1);
    transform-origin: bottom;
  }
}
@keyframes blink{
  50% {opacity: 0.9;}
}
</style>
