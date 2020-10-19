<template>
  <div id="app">
    <Home/>
    <div id="nav">
      <router-link to="/">Bar</router-link>
      <router-link to="/soiree">Soiree</router-link>
      <router-link to="/profiletype">BDDI type</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from './views/Home'

export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
  *, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body{
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    text-align: initial;
    height: 10vh;

    a {
      font-weight: bold;
      color: #2c3e50;
      margin-left: 10px;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  h1{
    margin: 0;
  }
</style>
