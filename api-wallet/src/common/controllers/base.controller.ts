import { ApplicationException } from '../exceptions/application.exception'
import { Response } from 'express'

export abstract class BaseController {
  handleException(err: any, res: Response) {
    if (err instanceof ApplicationException) {
      res.status(400)
      res.send()
    } else {
      throw Error(err)
    }
  }
}
