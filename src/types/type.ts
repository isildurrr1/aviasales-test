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
