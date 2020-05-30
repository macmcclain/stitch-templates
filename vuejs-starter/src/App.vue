<template>
  <div id="app">
    <div>
      <h1>Stitch Framework - Vuejs Starter!</h1>
      <div class="menu">
        <router-link :to="{ path: '/'}">Home</router-link>
        <router-link :to="{ path: 'page1'}">Page 1</router-link>
        <router-link :to="{ path: 'page2'}">Page 2</router-link>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: { },
    data() {
      return { }
    },
    methods: { }
  }
</script>
<style lang="scss" >
  #app {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 20px;
  }
  .menu {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    a {
      margin: 10px;
    }
  }
  .view {
    text-align: center;
  }
</style>


