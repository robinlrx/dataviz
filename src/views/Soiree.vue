<template>
  <div class="soiree">
    <SoireeChart/>
  </div>
</template>

<script>
import SoireeChart from '../components/SoireeChart'

export default {
  components: {
    SoireeChart
  }
}
</script>

<style lang="scss" scoped>
  .soiree{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/img/fond_soiree.png'), linear-gradient(to bottom, #FAFAFA, #FCD3D3);
    background-size: cover;
    background-position: center;
    // position: relative;
    // z-index: 0;
    // margin-top: -10vh;
  }
</style>
