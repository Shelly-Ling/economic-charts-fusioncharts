<template>
  <div id="main">
    <Navbar />
    <v-app id="app">
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import Navbar from './components/Navbar.vue'

Vue.use(VueFusionCharts, FusionCharts, FusionTheme);


export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
#main {
  display: flex;
}
</style>

