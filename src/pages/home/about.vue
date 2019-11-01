<template>
  <div class="about">
    <img src="../../assets/images/about-bg.png" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'about',
  mounted () {
    this.utils.windowClose()
  }
}
</script>
<style scoped lang="less">
  img {
    width: 100%;
  }
</style>
