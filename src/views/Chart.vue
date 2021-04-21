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
      "type": "Line",
      "renderAt": "chart-container",
      "width": "1000",
      "height": "350",
      "dataFormat": "json",
      dataSource: {},
      chartData: [],
      dataFromAPI: [],
    }
  },
  created() {
    this.fetchData()
    this.restructureData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiList.getMonthlyMajorStockPriceIndex()
        const data = response.data.result.records

        let newData = []

        data.forEach(element => {
          const labelList = Object.keys(element)
          const chartData = Object.values(element)

          for (let i in labelList) {
            let preData = {
              month: chartData[0],
              label: "",
              value: ""
            }
            preData.label = labelList[i]
            preData.value = chartData[i]
            newData.push(preData)
          }

        })
        this.dataFromAPI = newData
        console.log('this.dataFromAPI', this.dataFromAPI)

        this.classify(this.dataFromAPI)

        this.dataSource = {
          chart: {
            caption: "每月國際主要股價指數",
            subcaption: "最近 12 個月數據",
            xaxisname: "月份",
            yaxisname: "股價指數",
            // numbersuffix: "K",
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
    classify(data) {
      data.forEach(element => {
        const keyword = element.label

        switch (keyword) {
          case "月別":
            break
          case "台灣-加權":

          case "台灣-上櫃":

            break
          case "美國-那斯達克":
          case "美國-道瓊工業":
          case "日本-日經225":
          case "新加坡-海峽時報":
          case "南韓-綜合":
          case "倫敦-金融時報":
          case "中國-上海綜合":
          case "中國-香港恆生":

        }
      })


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

