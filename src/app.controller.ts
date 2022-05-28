import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import {Request} from 'express';
// import { Param } from '@nestjs/common';

@Controller('/')  //nest g controller smth
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  
  @Get()
  // @Redirect(url,statuscode)
  getHello(): string {
    //todo return all questions and answers
    //todo check for filters in query
    return this.appService.getHello(); 
  }
  
  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }
  
  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }
  
}

//encoding type?

//Standard
//Using this built-in method, when a request handler returns
//a JavaScript object or array, it will automatically be serialized to JSON. 

//In order to take advantage of express typings (as in the request: Request parameter example above), install @types/express package.

/*egyéb decoratorok amik hasznosak lehetnek:
@Req()
@Next()
@Session()
@Param()
@Body()
@Query()
res.redirect()
*/