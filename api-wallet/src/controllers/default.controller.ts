/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { GET, route } from 'awilix-express'
import { TestService } from '../services/test.service'

@route('/')
export default class DefaultController {
  constructor(private readonly testService: TestService) {}

  @GET()
  public index(req: Request, res: Response) {
    res.send('Running..')
  }
}
