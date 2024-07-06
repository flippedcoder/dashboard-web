import { Suspense, useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import styled from 'styled-components'
import { orderStore, userStore } from './UserInfo.State'
import OrderForm from '../../components/Forms'
import Header from '../../components/Header'
import OrdersTable from '../../components/OrdersTable'
import datadogLogger from '../../utils/loggers/datadog'
import useUserInfo from './useUserInfo'

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

const TableLoadingSkeleton = styled.div`
  border: 20px solid #808080;
  height: 110px;
  width: 110px;
`

const UserInfo = () => {
  const {
    orderData,
    ordersAreLoading,
    ordersErrors,
    userData,
    userIsLoading,
    userErrors,
  } = useUserInfo()
  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    orderStore.orders = orderData
  }, [orderData])

  useEffect(() => {
    userStore.user = userData
  }, [userData])

  if (userIsLoading || ordersAreLoading)
    return <CircularProgress data-testid="user-loading-circle" />

  if (userErrors || ordersErrors) showBoundary(userErrors || ordersErrors)

  const onSubmitProductSearch = (searchText: string) => {
    console.log('Search text', searchText)
    datadogLogger.info(`Search text: ${searchText}`)
  }

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
          userName={userStore.user.name}
          joinedDate={userStore.user.joinedDate}
          onSubmitSearch={onSubmitProductSearch}
        />
      </Suspense>
      <OrderForm />
      <Suspense
        fallback={<TableLoadingSkeleton data-testid="orders-loading-circle" />}
      >
        <OrdersTable orders={orderStore.orders} />
      </Suspense>
    </Container>
  )
}

export default UserInfo
