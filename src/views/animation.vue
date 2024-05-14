<script>
import lottie from 'lottie-web'; // 引入 lottie-web

export default {
  mounted() {
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      const animationWindow = this.$refs.animationWindow;
      
      // 創建 Lottie 動畫
      const anim = lottie.loadAnimation({
        container: animationWindow, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets.codepen.io/35984/space+knot.json'
      });
      
      // 使用 ScrubLottieTimeline
      // 注意：ScrubsLottieTimeline 是一個全局函數，你不需要將它引入到 Vue 組件中
      ScrubLottieTimeline(anim);
    }
  }
};
</script>


<template>
<div ref="animationWindow"></div>
</template>


<style>

</style>