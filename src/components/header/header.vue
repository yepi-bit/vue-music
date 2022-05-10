<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Mr王 Music</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style lang="scss" scoped>
  /*@import '../../assets/scss/index';*/
  .header {
    height: 44px;
    text-align: center;
    color: #ffcd32;
    font-size: 0;
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      background-image: url("./logo@2x.png");
     //  @include bg-image('logo');
      background-size: 30px 32px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: 18px;
    }
    .mine {
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine {
        display: block;
        padding: 12px;
        font-size: 22px;
        color: #ffcd32;
      }
    }
  }
</style>
