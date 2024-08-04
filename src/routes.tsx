import { createBrowserRouter } from 'react-router-dom'
import UserInfo from './screens/UserInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserInfo />,
  },
  {
    path: '/actions',
    element: <div>Actions go burr</div>,
  },
])

export default router
