import { http, HttpResponse } from 'msw'
import { userResponseData } from './users'
import { orderResponseData } from './orders'

export const handlers = [
  http.get(`${import.meta.env.API_URL}/v1/users`, () => {
    return HttpResponse.json(userResponseData)
  }),
  http.get(`${import.meta.env.API_URL}/v1/orders`, () => {
    return HttpResponse.json(orderResponseData)
  }),
]
