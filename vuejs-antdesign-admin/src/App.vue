<template>
  <div id="app">
    <a-layout >
      <a-layout-sider  style="height: 100%;" >
        <div class="logo" />
        <a-menu @select="menuSelect" mode="inline" v-model="selected" style="height: 100%;" >
          <a-menu-item key="home">
            <a-icon type="home" />
            <span>Home</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
        <a-layout-content >
          <router-view></router-view>
        </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  import "./styles/styles.scss"
  export default {
    components: { },
    data() {
      return {
        selected: ["home"]
      }
    },
    mounted() {
      this.selected = [this.$router.currentRoute.name]
    },
    methods: {
      menuSelect(item) {
        this.$router.push({name: item.key});
      }
    },

  }
</script>
<style lang="scss" scoped >
  #app {
    height: 100%;
  }
  .ant-layout {
    height: 100%;
    background-color: white;
  }
  .ant-layout-content {
    padding: 20px;
  }
</style>


