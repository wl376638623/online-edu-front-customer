import request from '@/utils/request'

export default {

  //分页讲师查询
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post',
    })
  },

    //根据token值获取用户信息
    getLoginUserInfo() {
      return request({
        url: `/educenter/member/getMemberInfo`,
        method: 'get'
      })
    }
  }


