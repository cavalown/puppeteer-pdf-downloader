import mockOrderData from '../assets/data/order.json'
import type { Order } from '../types/order.type'

export function fetchOrder(): Promise<Order> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failRate = 0.3 // 30% 機率失敗
      if (Math.random() < failRate) {
        reject(new Error('模擬API資料截取失敗'))
      } else {
        resolve(mockOrderData as Order)
      }
    }, 1000) // 模擬延遲
  })
}
