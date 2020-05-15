import {request} from "../request"

export function getDateil(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
