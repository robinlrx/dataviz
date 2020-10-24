<template>
  <div class="profile">
    <BddiType/>
  </div>
</template>

<script>
// @ is an alias to /src
import BddiType from '../components/BddiType'

export default {
  components: {
    BddiType
  }
}
</script>

<style lang="scss" scoped>
  .profile{
    width: 100%;
    // height: 100vh;
    background-image: linear-gradient(to bottom, #FAFAFA, #FCD3D3);
  }
  h1{
    color: white;
  }
</style>
