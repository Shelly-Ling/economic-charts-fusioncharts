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
      //台灣 加權指數
      Taiwan_TSE: [],
      //台灣上櫃 櫃檯指數(TWO)
      Taiwan_TWO: [],
      //納斯達克
      USA_NASDAQ: [],
      //道瓊
      USA_DJI: [],
      //日經 225
      Japan_N225: [],
      //新加坡海峽時報
      Singapore_STI: [],
      //南韓-綜合
      SouthKorea_KS11: [],
      //倫敦-金融時報 英國FTSE100指數
      England_FTSE: [],
      //中國-上海綜合 上海A股指數
      China_SH: [],
      //香港恆生
      HK_HSI: [],
    }
  },
  created() {
    this.fetchData()
    // this.restructureData()
    // this.fillData()
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
              stockName: labelList[i],
              data: {
                label: "",
                value: ""
              }
            }
            preData.data.label = chartData[0]
            preData.data.value = chartData[i]
            newData.push(preData)
          }

        })
        this.dataFromAPI = newData
        // console.log('this.dataFromAPI', this.dataFromAPI)

        //歸類 API 資料
        this.classify(this.dataFromAPI)


      } catch (error) {

        alert('取得資料失敗，請稍後再試，或通知站主。')
        console.log('error', error)

      }

    },
    classify(data) {
      data.forEach(element => {
        const keyword = element.stockName

        switch (keyword) {
          case "月別":
            break
          case "台灣-加權":
            this.Taiwan_TSE.push(element)
            break
          case "台灣-上櫃":
            this.Taiwan_TWO.push(element)
            break
          case "美國-那斯達克":
            this.USA_NASDAQ.push(element)
            break
          case "美國-道瓊工業":
            this.USA_DJI.push(element)
            break
          case "日本-日經225":
            this.Japan_N225.push(element)
            break
          case "新加坡-海峽時報":
            this.Singapore_STI.push(element)
            break
          case "南韓-綜合":
            this.SouthKorea_KS11.push(element)
            break
          case "倫敦-金融時報":
            this.England_FTSE.push(element)
            break
          case "中國-上海綜合":
            this.China_SH.push(element)
            break
          case "中國-香港恆生":
            this.HK_HSI.push(element)
            break
        }
      })

      console.log('台灣上櫃', this.Taiwan_TWO)
      // console.log('加權指數', this.Taiwan_TSE)
      // console.log('中國-香港恆生', this.HK_HSI)
      this.fillData()
    },
    fillData() {

      const stockTitle = this.Taiwan_TWO[0].stockName
      console.log('stockTitle', stockTitle)

      let preChartData = []

      this.Taiwan_TWO.forEach(element => {
        preChartData.push(element.data)
      })

      this.chartData = preChartData

      this.dataSource = {
        chart: {
          showValues: "1",
          caption: `${stockTitle} 每月指數`,
          subcaption: "最近 12 個月數據",
          xaxisname: "月份",
          yaxisname: "指數",
          // numbersuffix: "K",
          theme: "fusion"
        },
        data: this.chartData
      }
    }
  }
}

</script>

