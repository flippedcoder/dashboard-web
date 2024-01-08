import { proxy } from 'valtio'

export enum OrderStatus {
  Pending = 'pending',
  Shipped = 'shipped',
  OutOfStock = 'out_of_stock',
}

export interface Order {
  id: string
  productName: string
  status: OrderStatus
  orderedDate: string
  deliveryDate: string
  totalAmount: number
  hasBeenReviewed: boolean
}

export const orderStore = proxy<{
  filter: OrderStatus | undefined
  orders: Order[]
}>({
  filter: undefined,
  orders: [],
})

export const updateOrders = (updatedOrders: Order[]) => {
  orderStore.orders = updatedOrders
}

export const changeFilter = (newFilter: OrderStatus) => {
  orderStore.filter = newFilter
}
