<template>
  <div id="app">
    <Home/>
    <div id="nav">
      <h2>DataAlcool</h2>
      <div class="onglets" id="tobottom">
        <router-link to="/">Au bar</router-link>
        <router-link to="/soiree">Chez tes potes</router-link>
        <router-link to="/profiletype">Profile type d'un BDDI</router-link>
      </div>
    </div>
    <!-- <transition name="fade"> -->
     <router-view class="view"></router-view>
    <!-- </transition> -->
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
  @font-face {
    font-family: 'monokill';
    src: url('./assets/fonts/monokill.woff2') format('woff2'),
         url('./assets/fonts/monokill.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Brandon Grotesque';
    src: url('./assets/fonts/BrandonGrotesque-Regular.woff2') format('woff2'),
        url('./assets/fonts/BrandonGrotesque-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
  font-family: 'fontello';
  src: url('/assets/fonts/fontello.woff2') format('woff2'),
       url('./assets/fonts/fontello.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
.icon-brevage:before { content: '\e800'; } /* '' */
.icon-budget:before { content: '\e801'; } /* '' */
.icon-cbverre:before { content: '\e802'; } /* '' */
.icon-heure:before { content: '\e803'; } /* '' */
.icon-manger:before { content: '\e804'; } /* '' */
.icon-sortir:before { content: '\e805'; } /* '' */
.icon-souvenir:before { content: '\e806'; } /* '' */
.icon-chez_toi:before { content: '\e807'; } /* '' */
.icon-dormir:before { content: '\e808'; } /* '' */
.icon-ramener:before { content: '\e809'; } /* '' */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    // top: 10vh;
    z-index: 2;
    // border: solid red;

    .onglets{
      margin-left: auto;
      background-color: transparent;
    }

    a {
      font-weight: bold;
      color:  #0E34E5;
      margin-left: 10px;
      text-decoration: none;
      border: solid 3px #0E34E5;
      padding: 5px 15px;
      border-radius: 10px;

      &.router-link-exact-active {
        color: white;
        background-color: #0E34E5;
      }
    }
  }
  h1, h2{
    margin: 0;
  }
  h2{
    color: #0E34E5;
    font-family: 'monokill';
    font-size: 3rem;
  }

  .view{
    // position: relative;
    // top: -10vh;
    margin-top: -10vh;
    // border: solid yellow;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
