import { add, format, parseISO } from 'date-fns'

import { SortCriteria, TicketType } from '../types/type'

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
  let result = tickets
  if (sortingMethod === 'cheap') {
    result = tickets.sort((a, b) => a.price - b.price)
  } else if (sortingMethod === 'fast') {
    result = tickets.sort((a, b) => {
      const totalDurationA = a.segments[0].duration + a.segments[1].duration
      const totalDurationB = b.segments[0].duration + b.segments[1].duration
      return totalDurationA - totalDurationB
    })
  } else if (sortingMethod === 'optim') {
    result = tickets.sort((a, b) => {
      const totalOptA = a.segments[0].duration + a.segments[1].duration + a.price
      const totalOptB = b.segments[0].duration + b.segments[1].duration + b.price
      return totalOptA - totalOptB
    })
  }
  return result
}
