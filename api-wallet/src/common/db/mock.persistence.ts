export const db = {
  balances: [
    {
      id: 1,
      userId: 1,
      amount: 100
    },
    {
      id: 2,
      userId: 2,
      amount: 100
    },
    {
      id: 3,
      userId: 3,
      amount: 100
    }
  ],
  movements: [],
  subscriptions: [],
  _balanceId: 0,
  _movementId: 0,
  _subscriptionId: 0
}

db._balanceId = db.balances.length
