export type TransferKeysType = 'direct' | 'one' | 'two' | 'three'

export interface TransfersType {
  direct: boolean
  one: boolean
  two: boolean
  three: boolean
}

export interface CheckboxesType {
  all: boolean
  transfers: TransfersType
}

export interface ToggleTransferActionType {
  checkState: boolean
  transfer: TransferKeysType
}

export type SortCriteria = 'cheap' | 'fast'

export interface SortType {
  ticketSortingMethod: SortCriteria
}

export interface Ticket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}

export interface TicketsType {
  searchId: undefined | string
  list: Ticket[]
  loading: boolean
  error: null | string
}

export interface TicketsResponseType {
  tickets: Ticket[]
  stop: boolean
}

export interface SeacrhIdResponseType {
  searchId: string
}
