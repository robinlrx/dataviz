<template>
  <div class="bar">
    <BarChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import BarChart from '../components/BarChart'

export default {
  components: {
    BarChart
  }
}
</script>

<style lang="scss" scoped>
  .bar{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/img/fond_bar.png'), linear-gradient(to bottom, #FAFAFA, #FCD3D3);
    background-size: cover;
    background-position: center;
    // position: relative;
    // z-index: 0;
    // margin-top: -10vh;
  }
</style>
