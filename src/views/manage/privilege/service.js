import axios from 'axios'

exports.list = function() {
  return axios.get('/privilege/list')
}
