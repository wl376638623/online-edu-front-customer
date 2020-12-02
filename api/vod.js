import request from '@/utils/request'

export default {

  getPlayAuth(vid) {
    return request({
      url: `/eduvod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  },
  getPlayInfo(vid) {
    return request({
      url: `/eduvod/video/getPlayInfo/${vid}`,
      method: 'get'
    })
  }

}
