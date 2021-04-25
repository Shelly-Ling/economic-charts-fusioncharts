//STEP 4: Render the chart
<template>
  <div>
    <div id="btns-wrapper">
      <v-row>
        <v-btn
          v-for="btn in btnList"
          :key="btn.id"
          :data-id="btn.id"
          @click.prevent="switchChart(btn)"
          id="btn"
          depressed
        >
          {{ btn.nameInMandarin }}
        </v-btn>
      </v-row>
    </div>
    <div id="chart" v-if="!isLoading">
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
      isLoading: true,

      type: "Line",
      renderAt: "chart-container",
      width: "90%",
      height: "400",
      dataFormat: "json",
      dataSource: {},
      chartData: [],
      value: 1,
      btnList: [],

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
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true

        const response = await apiList.getAnnualMajorStockPriceIndex()
        const data = response.data.result.records
        console.log('data', data)
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

        //歸類 API 資料
        this.classify(this.dataFromAPI)
        this.isLoading = false


      } catch (error) {
        this.isLoading = false

        alert('取得資料失敗，請稍後再試，或通知站主。')
        console.log('error', error)
      }
    },
    classify(data) {
      data.forEach(element => {
        const keyword = element.stockName

        switch (keyword) {
          case "年度":
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
      // console.log('台灣上櫃', this.Taiwan_TWO)
      // console.log('加權指數', this.Taiwan_TSE)
      // console.log('中國-香港恆生', this.HK_HSI)
      this.fillData()
      this.renderSwitchButtons()

    },
    fillData() {

      const stockTitle = this.Taiwan_TWO[0].stockName
      // console.log('stockTitle', stockTitle)

      let preChartData = []

      this.Taiwan_TWO.forEach(element => {
        preChartData.push(element.data)
      })

      this.chartData = preChartData

      this.dataSource = {
        chart: {
          formatNumberScale: "0",
          showValues: "1",
          caption: `${stockTitle} 年度指數`,
          subcaption: "西元 1998 年至今",
          xaxisname: "年份",
          yaxisname: "指數",
          // numbersuffix: "K",
          theme: "fusion"
        },
        data: this.chartData
      }
    },
    switchChart(target) {
      console.log('target>>', target)

      const title = target.nameInMandarin

      let preChartData = []

      target.data.forEach(element => {
        preChartData.push(element.data)
      })

      this.chartData = preChartData

      this.dataSource = {
        chart: {
          formatNumberScale: "0",
          showValues: "1",
          caption: `${title} 年度指數`,
          subcaption: "西元 1998 年至今",
          xaxisname: "年份",
          yaxisname: "指數",
          // numbersuffix: "K",
          theme: "fusion"
        },
        data: this.chartData
      }
    },
    renderSwitchButtons() {
      const stockNameData = [
        {
          id: 1,
          nameInEngilsh: 'Taiwan_TSE',
          nameInMandarin: this.Taiwan_TSE[0].stockName,
          data: this.Taiwan_TSE
        },
        {
          id: 2,
          nameInEngilsh: 'Taiwan_TWO',
          nameInMandarin: this.Taiwan_TWO[0].stockName,
          data: this.Taiwan_TWO

        },
        {
          id: 3,
          nameInEngilsh: 'USA_NASDAQ',
          nameInMandarin: this.USA_NASDAQ[0].stockName,
          data: this.USA_NASDAQ
        },
        {
          id: 4,
          nameInEngilsh: 'USA_DJI',
          nameInMandarin: this.USA_DJI[0].stockName,
          data: this.USA_DJI

        },
        {
          nameInEngilsh: 'Japan_N225',
          nameInMandarin: this.Japan_N225[0].stockName,
          data: this.Japan_N225

        },
        {
          id: 5,
          nameInEngilsh: 'Singapore_STI',
          nameInMandarin: this.Singapore_STI[0].stockName,
          data: this.Singapore_STI

        },
        {
          id: 6,
          nameInEngilsh: 'SouthKorea_KS11',
          nameInMandarin: this.SouthKorea_KS11[0].stockName,
          data: this.SouthKorea_KS11

        },
        {
          id: 7,
          nameInEngilsh: 'England_FTSE',
          nameInMandarin: this.England_FTSE[0].stockName,
          data: this.England_FTSE

        },
        {
          id: 8,
          nameInEngilsh: 'China_SH',
          nameInMandarin: this.China_SH[0].stockName,
          data: this.China_SH

        },
        {
          id: 9,
          nameInEngilsh: 'HK_HSI',
          nameInMandarin: this.HK_HSI[0].stockName,
          data: this.HK_HSI

        },
      ]

      this.btnList = stockNameData
      console.log('this.btnList', this.btnList)
    }
  }
}

</script>

<style lang="scss" scoped>
#btns-wrapper {
  margin: 0 auto;
  width: 80%;
  padding: 30px;
  display: flex;
  margin-bottom: 10px;

  #btn {
    margin: 10px;
  }
}

#chart-container {
  text-align: center;
}
</style>