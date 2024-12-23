import { add, format, parseISO } from 'date-fns'

import { CheckboxesType, SortCriteria, TicketType } from '../types/type'

export const stops = (stopsLength: number): string => {
  switch (stopsLength) {
    case 0:
      return 'Прямой рейс'
    case 1:
      return '1 пересадка'
    default:
      return `${stopsLength} пересадки`
  }
}

export const formatPrice = (price: number): string => {
  return `${String(price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} Р`
}

export const formatFligthDuration = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${String(hours).padStart(2, '0')}ч ${String(minutes).padStart(2, '0')}м`
}

export const formatFlightTimeInterval = (isoString: string, minutes: number): string => {
  const date = parseISO(isoString)
  const departureTime = format(date, 'HH:mm')
  const arrivalTime = format(add(date, { minutes }), 'HH:mm')
  return `${departureTime} - ${arrivalTime}`
}

export const sortTickets = (tickets: TicketType[], sortingMethod: SortCriteria): TicketType[] => {
  const result = tickets.map((ticket) => {
    const totalDuration = ticket.segments.reduce((acc, segment) => acc + segment.duration, 0)
    return { ...ticket, totalDuration }
  })

  if (sortingMethod === 'cheap') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortingMethod === 'fast') {
    result.sort((a, b) => a.totalDuration - b.totalDuration)
  } else if (sortingMethod === 'optim') {
    result.sort((a, b) => a.totalDuration + a.price - (b.totalDuration + b.price))
  }

  return result
}

export const filterTickets = (checkboxesState: CheckboxesType, ticket: TicketType): boolean => {
  if (checkboxesState.all) {
    return true
  }
  const stopsCount1 = ticket.segments[0].stops.length
  const stopsCount2 = ticket.segments[1].stops.length
  return (
    (checkboxesState.transfers.direct && (stopsCount1 === 0 || stopsCount2 === 0)) ||
    (checkboxesState.transfers.one && (stopsCount1 === 1 || stopsCount2 === 1)) ||
    (checkboxesState.transfers.two && (stopsCount1 === 2 || stopsCount2 === 2)) ||
    (checkboxesState.transfers.three && (stopsCount1 === 3 || stopsCount2 === 3))
  )
}
