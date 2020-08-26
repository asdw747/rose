import axios from 'axios'

exports.list = function() {
  return axios.get('/user/list')
}
