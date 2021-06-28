import { db } from '../../../../common/db/mock.persistence'
import { Balance } from '../../domain/balance'
import { BalanceRepository } from '../../balance.repository'

export class BalanceMockRepository implements BalanceRepository {
  public async find(id: number): Promise<Balance | null> {
    const table = db.balances as Balance[]
    const result = table.find((x) => x.id === id)

    if (result) {
      return Object.assign({ ...result })
    }

    return null
  }

  public async findByUserId(userId: number): Promise<Balance | null> {
    const table = db.balances as Balance[]
    const result = table.find((x) => x.userId === userId)

    if (result) {
      return Object.assign({ ...result })
    }

    return null
  }

  public async all(): Promise<Balance[]> {
    const table = db.balances as Balance[]
    return Object.assign([...table])
  }

  public async store(entry: Balance): Promise<void> {
    const table = db.balances as Balance[]
    const now = new Date()

    // set id value
    db._balanceId++

    table.push({
      id: db._balanceId,
      amount: entry.amount,
      userId: entry.userId,
      createdAt: now,
      updatedAt: null
    } as Balance)
  }

  public async update(entry: Balance): Promise<void> {
    const table = db.balances as Balance[]
    const now = new Date()

    const originalEntry = table.find((x) => x.id === entry.id)

    if (originalEntry) {
      originalEntry.userId = entry.userId
      originalEntry.amount = entry.amount
      originalEntry.updatedAt = now
    }
  }

  public async remove(id: number): Promise<void> {
    let table = db.balances as Balance[]

    table = table.filter((x) => x.id !== id)
  }
}
