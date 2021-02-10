import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  logger = new Logger()
  use(req: Request, res: Response, next: Function) {
    this.logger.log(`request to: "${req.url}" with Method: "${req.method}" from: "${req.ip}" hostName : "${req.hostname}"`)
    next();
  }
}
