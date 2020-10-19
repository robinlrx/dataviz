<template>
  <div class="home">
    <HelloWorld msg="Wsh les bg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 90vh;
  }
</style>
