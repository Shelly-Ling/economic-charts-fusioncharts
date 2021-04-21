//STEP 4: Render the chart
<template>
  <div id="chart">
    <div id="chart-container">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataformat="dataFormat"
        :dataSource="dataSource"
      >
      </fusioncharts>
    </div>
  </div>
</template>


// STEP 1: to include the dependencies
<script>
import Vue from 'vue';
import Column2D from 'fusioncharts/fusioncharts.charts';
// import stockData from './datas/stock.js'
import apiList from '../utils/apis/apis.js'


Vue.use(Column2D);

export default {
  name: 'chart',
  data() {
    return {
      "type": "column3d",
      "renderAt": "chart-container",
      "width": "1000",
      "height": "350",
      "dataFormat": "json",
      dataSource: {},
      chartData: []
    }
  },
  mounted() {
    this.fetchData()
    this.restructureData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiList.getMonthlyMajorStockPriceIndex()
        const data = response.data.result.records[0]
        this.apiData = data

        console.log('this.apiData', this.apiData)

        // console.log('chartData', chartData)
        console.log('dataSource', this.dataSource)

        this.dataSource = {
          chart: {
            caption: "Countries With Most Oil Reserves [2017-18]",
            subcaption: "In MMbbl = One Million barrels",
            xaxisname: "Country",
            yaxisname: "Reserves (MMbbl)",
            numbersuffix: "K",
            theme: "fusion"
          },
          data: this.chartData
        }

        // const labelList = Object.keys(data)
        // const chartData = Object.values(data)
        // const chartName = Object.values(data)[0]

        // this.apiLabelName = chartName

        // this.apiLabels = labelList.splice(1, labelList.length)
        // this.apiChartData = chartData.splice(1, chartData.length)

        // this.fillData()

      } catch (error) {

        alert('取得資料失敗，請稍後再試，或通知站主。')
        console.log('error', error)

      }

    },
    restructureData() {
      this.chartData = [
        {
          label: "陳",
          value: "290"
        },
        {
          label: "Saudi",
          value: "260"
        },
        {
          label: "Canada",
          value: "180"
        },
        {
          label: "Iran",
          value: "140"
        },
        {
          label: "Russia",
          value: "115"
        },
        {
          label: "UAE",
          value: "100"
        },
        {
          label: "US",
          value: "30"
        },
        {
          label: "China",
          value: "30"
        }
      ];
    },
    fillData() {

    }
  }
}

</script>

