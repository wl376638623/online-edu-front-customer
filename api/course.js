import request from '@/utils/request'

export default {

  //条件查询分页课程查询
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

    //查询所有分类发方法
    getAllSubject() {
      return request({
        url: '/eduservice/subject/getAllSubject/',
        method: 'get'
      })
    },
    //课程详情方法
  getCourseInfo(id) {
    return request({
      url: '/eduservice/coursefront/getFrontCourseInfo/'+id,
      method: 'get'
    })
  },
  }


