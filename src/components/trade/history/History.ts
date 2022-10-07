export enum Trend {
  rise,
  fall
}

export interface HistoryItemProps {
  date: string
  price: number
  trend: Trend
  // 交易序列号
  serialNumber: string
}
