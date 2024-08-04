import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import { Order, OrderStatus, orderStore, updateOrders } from './UserInfo.State'

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

const orderResponseData: Order[] = [
  {
    id: 'db4be77c-cd14-441a-8ae1-35e0c037a842',
    productName: 'Fancy soap',
    status: OrderStatus.Shipped,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 400,
    hasBeenReviewed: true,
  },
]

const userResponseData: UserInfo = {
  name: 'Some Body',
  joinedDate: '10/21/2002',
  recentOrders: 2,
  newProducts: 6,
  nextDeliveryDate: '07/27/2025',
}

const UserInfo = () => {
  const orderSnap = useSnapshot(orderStore)

  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)

  useEffect(() => {
    // Fetch user info and orders from the backend here

    setUserInfo(userResponseData)
    updateOrders(orderResponseData)
  }, [])

  return (
    <Container>
      <div>
        <div>{userInfo.name}</div>
        <div>Search bar</div>
        <div>
          {orderSnap.orders.map((order) => (
            <div key={order.id}>{order.productName}</div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default UserInfo
