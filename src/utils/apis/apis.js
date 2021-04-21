import { apiHelper } from '../helpers.js'

export default {
  //每月國際主要股價指數 MMSPI
  getMonthlyMajorStockPriceIndex() {
    return apiHelper.get(`/A17030000J-000050-V8Q`)
  }
}