<template>
    <div>
        <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Home Page" sub-title="A Sub title"/>

        <div class="toolbar section">
            <div class="title">Toolbar</div>
            <div class="buttons">
                <a-button class="item" type="default">Primary Button</a-button>
                <a-button class="item" type="primary">Secondary Button</a-button>
            </div>
        </div>

        <div class="section" >
            Section 1
        </div>

        <div class="section">
            Section 2
        </div>

        <div class="section">
            <a href="https://www.antdv.com/docs/vue/introduce/">AntDesign VueJs Home Page</a>
        </div>

    </div>
</template>
<script>
    import api from '../lib/api'
    export default {
        components: {

        },
        data () {
          return {

          }
      },
      mounted() {
        console.log("api", api)
      },
      computed: {

      },
      methods: {

      }
    }
</script>
<style lang="scss" scoped>

</style>
