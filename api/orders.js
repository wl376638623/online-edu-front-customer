import request from '@/utils/request'
export default {
  //生成订单接口
  createOrders(courseId) {
    return request ({
      url:'/eduorder/order/createOrder/'+courseId,
      method:'post'
    })
  },
  //根据订单id查询订单信息
  getOrdersInfo(id){
    return request({
      url: '/eduorder/order/getOrderInfo/' + id,
      method: 'get'
    })
  }
}
