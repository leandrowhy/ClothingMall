import {request,request1} from "../request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page){
  return request1({
    url: '/api/mn/home/data',
    params: {
      type,
      page
    }
  })
}
