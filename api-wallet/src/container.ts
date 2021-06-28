import { asClass, createContainer } from 'awilix'
import { Application } from 'express'
import { scopePerRequest } from 'awilix-express'

// Services
import { TestService } from './services/test.service'

// Repositories
import { SuscriptionMysqlRepository } from './services/repositories/impl/mysql/suscriptionMysql.repository'
import { SubscriptionService } from './services/subcription.service'
import { MovementMySQLRepository } from './services/repositories/impl/mysql/movementMysql.repository';
import { BalanceMysqlRepository } from './services/repositories/impl/mysql/balanceMysql.repository';
import { MovementService } from './services/movement.service';

export default (app: Application) => {
  const container = createContainer({
    injectionMode: 'CLASSIC'
  })

  container.register({
    // Repositories
    subscriptionRepository: asClass(SuscriptionMysqlRepository).scoped(),
    movementRepository: asClass(MovementMySQLRepository).scoped(),
    balanceRepository: asClass(BalanceMysqlRepository).scoped(),

    // Services
    subscriptionService: asClass(SubscriptionService).scoped(),
    movementService: asClass(MovementService).scoped(),
    testService: asClass(TestService).scoped()
  })

  app.use(scopePerRequest(container))
}
