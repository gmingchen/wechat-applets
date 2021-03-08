const { service } = require('../../utils/request')

export function demo (params) {
  return service({
    url: '/loafer/captcha.jpg',
    method: 'GET',
    data: params
  })
}