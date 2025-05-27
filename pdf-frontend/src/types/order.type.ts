export interface OrderItem {
  name: string
  quantity: number
  unitPrice: number
}

export interface Order {
  number: string
  date: string
  note: string
  items: OrderItem[]
}
