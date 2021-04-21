import axios from 'axios'

const baseURL = 'https://apiservice.mol.gov.tw/OdService/rest/datastore'

export const apiHelper = axios.create({
  baseURL
})