import { Suspense, useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { Order } from './UserInfo.State'
import { userResponseData } from '../../mocks/users'
import { orderResponseData } from '../../mocks/orders'
import OrderForm from '../../elements/Forms'
import Header from '../../components/Header'
import OrdersTable from '../../components/OrdersTable'
import datadogLogger from '../../utils/loggers/datadog'

// Uncomment this and delete the OrdersTable import to see how lazy rendering work
// const OrdersTable = lazy(() =>
//   delayForDemo(import('../../components/OrdersTable'))
// )

// function delayForDemo(
//   promise: Promise<typeof import('../../components/OrdersTable')>
// ) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 4000)
//   }).then(() => promise)
// }

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

const TableLoadingSkeleton = styled.div`
  border: 20px solid #808080;
  height: 110px;
  width: 110px;
`

const UserInfo = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [userInfo, setUserInfo] = useState<UserInfoData>(initialUserInfo)

  const { showBoundary } = useErrorBoundary()

  const { error: ordersErrors, data: orderData } = useQuery({
    // data stays in cache for 1 hour (in milliseconds) and is garbage collected afterwards
    gcTime: 3600000,
    // data is refetched after 1 hour (in milliseconds)
    refetchInterval: 3600000,
    // data becomes stale after 30 minutes (in milliseconds)
    staleTime: 1800000,
    queryKey: ['orderData'],
    queryFn: () =>
      axios.get('https://fakestoreapi.com/products').then((res) => res.data),
  })

  const {
    isLoading: userIsLoading,
    error: userErrors,
    data: userData,
  } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      axios.get('https://fakestoreapi.com/users').then((res) => res.data),
  })

  useEffect(() => {
    setUserInfo(userResponseData)
    setOrders(orderResponseData)
  }, [orderData, userData])

  const onSubmitProductSearch = (searchText: string) => {
    console.log('Search text', searchText)
    datadogLogger.info(`Search text: ${searchText}`)
  }

  if (userIsLoading)
    return <CircularProgress data-testid="user-loading-circle" />

  if (userErrors || ordersErrors) showBoundary(userErrors || ordersErrors)

  return (
    <Container component="section">
      <Suspense
        fallback={
          <CircularProgress
            color="secondary"
            size={100}
            data-testid="orders-loading-circle"
          />
        }
      >
        <Header
          userName={userInfo.name}
          joinedDate={userInfo.joinedDate}
          onSubmitSearch={onSubmitProductSearch}
        />
      </Suspense>
      <OrderForm />
      <Suspense
        fallback={<TableLoadingSkeleton data-testid="orders-loading-circle" />}
      >
        <OrdersTable orders={orders} />
      </Suspense>
    </Container>
  )
}

export default UserInfo
