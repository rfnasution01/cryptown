export type ResCandlesType = {
  open: string
  hight: string
  low: string
  close: string
  volume: string
  period: string
}

export type ParamsCandlesType = {
  exchange?: string
  interval?: string
  baseId?: string
  quoteId?: string
}
