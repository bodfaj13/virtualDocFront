import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: 'https://virtualdoc-back.herokuapp.com/api',
    headers: {'x-auth': store.state.token}
  })
}
