import { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import { orderStore, updateOrders } from './UserInfo.State'

const Container = styled.div`
  background-color: 
  height: 100vh;
  width: 100%;
`

export interface UserInfo {
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
  const orderSnap = useSnapshot(orderStore)

  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)

  const {
    isLoading: ordersIsLoading,
    error: ordersErrors,
    data: orderData,
  } = useQuery({
    queryKey: ['orderData'],
    queryFn: () => axios.get('/v1/orders').then((res) => res.data),
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
    setUserInfo(userData)
    updateOrders(orderData)
  }, [orderData, userData])

  if (userIsLoading) return <CircularProgress />

  if (userErrors || ordersErrors) return 'Something weird happened'

  return (
    <Container>
      <div>
        <div>{userInfo.name}</div>
        <div>Search bar</div>
        {ordersIsLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          orderSnap.orders.map((order) => (
            <div key={order.id}>{order.productName}</div>
          ))
        )}
      </div>
    </Container>
  )
}

export default UserInfo
