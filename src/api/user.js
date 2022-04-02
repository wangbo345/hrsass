import request from '@/utils/request'
export function login(data) {
  return request({
    url:"/api/sys/login",
    method:'POST',
    data
  })
}
/**
 *  获取用户的基本资料
 *
 * **/
export function getUserInfo() {
  return request({
    url: '/api/sys/profile',
    method: 'post'
  })
}

/** *
 *
 * 获取用户的基本信息  现在写它 完全是为了显示头像
 * **/
export function getUserDetailById(id) {
  return request({
    url: `/api/sys/user/${id}`
  })
}

