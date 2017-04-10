<template>
  <div id="app">
    <page-nav></page-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import pagenav from './components/page-nav'

  export default {
    name: 'app',
    components: {
      'page-nav': pagenav
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
