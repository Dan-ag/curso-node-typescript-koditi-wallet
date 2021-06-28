import { Subscription } from './domain/suscription'

export interface SuscriptionRepository {
  all(): Promise<Subscription[]>
  find(id: number): Promise<Subscription | null>
  findByUserIdAndCode(
    userId: Number,
    code: string
  ): Promise<Subscription | null>
  store(entry: Subscription): Promise<void>
  update(entry: Subscription): Promise<void>
  remove(id: Number): Promise<void>
}
