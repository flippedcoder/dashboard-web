import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function useUserInfo() {
  const {
    isLoading: ordersAreLoading,
    error: ordersErrors,
    data: orderData,
  } = useQuery({
    // data stays in cache for 1 hour (in milliseconds) and is garbage collected afterwards
    gcTime: 3600000,
    // data is refetched after 1 hour (in milliseconds)
    refetchInterval: 3600000,
    // data becomes stale after 30 minutes (in milliseconds)
    staleTime: 1800000,
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
  return {
    ordersAreLoading,
    ordersErrors,
    orderData,
    userIsLoading,
    userErrors,
    userData,
  }
}

export default useUserInfo
