import { SuscriptionRepository } from '../../subscription.repository'
import connector from '../../../../common/db/myslq.persistence'
import { Subscription } from '../../domain/suscription'

export class SuscriptionMysqlRepository implements SuscriptionRepository {
  public async all(): Promise<Subscription[]> {
    const [rows] = await connector.execute(
      'SELECT * FROM wallet_subscription ORDER BY id DESC'
    )

    return rows as Subscription[]
  }

  public async find(id: number): Promise<Subscription | null> {
    const [rows]: any[] = await connector.execute(
      'SELECT * FROM wallet_subscription WHERE id = ?',
      [id]
    )

    if (rows.length) {
      return rows[0] as Subscription
    }

    return null
  }

  public async findByUserIdAndCode(
    userId: Number,
    code: string
  ): Promise<Subscription | null> {
    const [rows]: any[] = await connector.execute(
      'SELECT * FROM wallet_subscription WHERE user_id = ? AND code = ?',
      [userId, code]
    )

    if (rows.length) {
      return rows[0] as Subscription
    }

    return null
  }

  public async store(entry: Subscription): Promise<void> {
    const now = new Date()

    await connector.execute(
      'INSERT INTO wallet_subscription(user_id, code, amount, cron, created_at) VALUES(?, ?, ?, ?, ?)',
      [entry.userId, entry.code, entry.amount, entry.cron, now]
    )
  }

  public async update(entry: Subscription): Promise<void> {
    const now = new Date()

    await connector.execute(
      'UPDATE wallet_subscription SET user_id = ?, code = ?, amount = ?, cron = ?, updated_at = ? WHERE id = ?',
      [entry.userId, entry.code, entry.amount, entry.cron, now, entry.id]
    )
  }

  public async remove(id: Number): Promise<void> {
    await connector.execute('DELETE FROM wallet_subscription WHERE id = ?', [
      id
    ])
  }
}
