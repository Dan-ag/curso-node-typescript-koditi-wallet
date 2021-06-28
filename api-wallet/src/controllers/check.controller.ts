/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { GET, route } from 'awilix-express'
import { TestService } from '../services/test.service'

@route('/check')
export default class CheckController {
  constructor(private readonly testService: TestService) {}

  @GET()
  public index(req: Request, res: Response) {
    res.send({
      NODE_ENV: process.env.NODE_ENV,
      APP_ENV: process.env.APP_ENV
    })
  }

  @route('/test')
  @GET()
  public test(req: Request, res: Response) {
    res.send(this.testService.get())
  }
}
