/* eslint-disable no-unused-vars */
export interface SubscriptionCreateDto {
  code: string
  userId: number
  amount: number
  cron: string
}

export interface SubscriptionUpdateDto {
  code: string
  userId: number
  amount: number
  cron: string
}
