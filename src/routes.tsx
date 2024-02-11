import { useRoutes } from 'react-router-dom'
import UserInfo from './screens/UserInfo'

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <UserInfo />,
    },
    {
      path: '/actions',
      element: <div>Actions are here</div>,
    },
  ])

  return routes
}

export default Router
