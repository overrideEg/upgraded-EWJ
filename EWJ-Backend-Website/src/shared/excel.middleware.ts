import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Localized } from './localized';

@Injectable()
export class ExcelMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    let body = req.body as any;

    if (!Array.isArray(body)) {
      if (body.name_en) {
        body['name'] = new Localized()
        body['name']['en'] = body.name_en
        body['name']['ar'] = body.name_ar ? body.name_ar : body.name_en

      }
      if (body.description_en) {
        body['description'] = new Localized()
        body['description']['en'] = body.description_en;
        body['description']['ar'] = body.description_ar ? body.description_ar : body.description_en

      }

      if (body.title_en) {
        body['title'] = new Localized()
        body['title']['en'] = body.title_en;
        body['title']['ar'] = body.title_ar ? body.title_ar : body.title_en
      }
    } else {
      body.forEach(item=>{
        if (item.name_en) {
          item['name'] = new Localized()
          item['name']['en'] = item.name_en
          item['name']['ar'] = item.name_ar ? item.name_ar : item.name_en
  
        }
        if (item.description_en) {
          item['description'] = new Localized()
          item['description']['en'] = item.description_en;
          item['description']['ar'] = item.description_ar ? item.description_ar : item.description_en
  
        }
  
        if (item.title_en) {
          item['title'] = new Localized()
          item['title']['en'] = item.title_en;
          item['title']['ar'] = item.title_ar ? item.title_ar : item.title_en
        }
      })
    }



    next();
  }
}
