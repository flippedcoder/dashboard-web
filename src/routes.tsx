import { createBrowserRouter } from 'react-router-dom'
import UserInfoContainer from './screens/UserInfo/UserInfo.Container'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserInfoContainer />,
  },
  {
    path: '/actions',
    element: <div>Actions go burr</div>,
  },
])

export default router
