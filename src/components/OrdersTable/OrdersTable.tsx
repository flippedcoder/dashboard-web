import { Order } from '../../screens/UserInfo/UserInfo.State'

const OrdersTable = ({ orders }: { orders: Order[] }) => (
  <div aria-label="orders-table">
    {orders.map((order) => (
      <div key={order.id}>{order.productName}</div>
    ))}
  </div>
)

export default OrdersTable
