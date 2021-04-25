<template id="wrapper">
  <div id="content" class="main">
    <div class="abc">
      <h1>專案介紹</h1>
      <article>
        <p>
          Vue 2 框架下，使用 Fusioncharts 套件，呈現國際主要股價指數，
          未來不定期更新各國年度貨幣匯率、政府國民年金報酬數據等相關題材。
        </p>

        <p>API 來源自政府資料開放平臺:</p>
        <a href="https://data.gov.tw/dataset/130491" target="_blank"
          >年度國際主要股價指數
        </a>

        <a href="https://data.gov.tw/dataset/31899" target="_blank"
          >每月國際主要股價指數
        </a>
        <br />
        <p>
          由於拿到的資料格式是陣列包物件，並且以月份、年份來分類，物件內容的格式如下圖，所以專案中比較多在處理這份
          API
          資料的分類，把同一支股票歸類成一份物件，最後用折線圖呈現單一支股票的歷史走勢。
        </p>
        <p>
          有點可惜的是 API 資料中沒有標普500，可能要再找找其他 API
          來源，或未來學了爬蟲再寫。
        </p>
        <pre class="code-area"><code class="code">
            { 
              "月別": "2020-02", 
              "台灣-加權": "11292", 
              "台灣-上櫃":  "142", 
              "美國-那斯達克": "8567", 
              "美國-道瓊工業": "25409",
              "日本-日經225": "21143", 
              "新加坡-海峽時報": "3011", 
              "南韓-綜合": "1987",
              "倫敦-金融時報": "6581", 
              "中國-上海綜合": "2880", 
              "中國-香港恆生":"26130" 
            }
          </code></pre>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#content {
  width: auto;
  height: 100vh;
  padding: 10px 50px;
  overflow: scroll;

  h1 {
    margin: 20px 0;
  }

  p {
    max-width: 800px;
  }

  a {
    display: block;
  }
  .code-area {
    margin: 20px 0;
    background-color: rgb(243, 243, 243);
    border-radius: 30px;
    max-width: 600px;

    .code {
      background-color: Transparent;
    }
  }
}

@media (min-width: 980px) {
  #content {
    width: 90vw;
    height: 100vh;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
  }
}
</style>