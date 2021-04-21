<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

Vue.use(VueFusionCharts, FusionCharts, FusionTheme);


export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="scss" scoped>
</style>

