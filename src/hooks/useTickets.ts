import { useEffect } from 'react'

import { fetchSearchId, fetchTickets } from '../store/ticketsSlice'

import { useAppDispatch, useAppSelector } from './hooks'

const useTickets = () => {
  const dispatch = useAppDispatch()
  const searchId = useAppSelector((state) => state.tickets.searchId)
  const loading = useAppSelector((state) => state.tickets.loading)
  const loadedTickets = useAppSelector((state) => state.tickets.list.length)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearchId())
    }

    fetchData()
  }, [dispatch])

  useEffect(() => {
    const fetchTicketsData = async () => {
      if (searchId) {
        await dispatch(fetchTickets())
      }
    }

    fetchTicketsData()
  }, [dispatch, searchId])

  return { loading, progress: (loadedTickets / 11000) * 100 }
}

export default useTickets
