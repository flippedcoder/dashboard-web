import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Order } from './UserInfo.State'
import Header from '../../components/Header'
import { userResponseData } from '../../mocks/users'
import { orderResponseData } from '../../mocks/orders'
import OrderForm from '../../elements/Forms'

export interface UserInfoData {
  name: string
  joinedDate: string
  recentOrders: number
  newProducts: number
  nextDeliveryDate: string
}

const initialUserInfo = {
  name: '',
  joinedDate: '',
  recentOrders: 0,
  newProducts: 0,
  nextDeliveryDate: '',
}

const UserInfo = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [userInfo, setUserInfo] = useState<UserInfoData>(initialUserInfo)

  const { showBoundary } = useErrorBoundary()

  const {
    isLoading: ordersIsLoading,
    error: ordersErrors,
    data: orderData,
  } = useQuery({
    queryKey: ['orderData'],
    queryFn: () =>
      axios.get(`${import.meta.env.API_URL}/v1/orders`).then((res) => res.data),
  })

  const {
    isLoading: userIsLoading,
    error: userErrors,
    data: userData,
  } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      axios.get(`${import.meta.env.API_URL}/v1/users`).then((res) => res.data),
  })

  useEffect(() => {
    setUserInfo(userResponseData)
    setOrders(orderResponseData)
  }, [orderData, userData])

  const onSubmitProductSearch = (searchText: string) => {
    console.log('Search text', searchText)
  }

  if (userIsLoading)
    return <CircularProgress data-testid="user-loading-circle" />

  if (userErrors || ordersErrors) showBoundary(userErrors || ordersErrors)

  return (
    <Container component="section">
      <Header
        userName={userInfo.name}
        joinedDate={userInfo.joinedDate}
        onSubmitSearch={onSubmitProductSearch}
      />
      <OrderForm />
      <div aria-label="orders-table">
        {ordersIsLoading ? (
          <CircularProgress
            color="secondary"
            data-testid="orders-loading-circle"
          />
        ) : (
          orders.map((order) => <div key={order.id}>{order.productName}</div>)
        )}
      </div>
    </Container>
  )
}

export default UserInfo
