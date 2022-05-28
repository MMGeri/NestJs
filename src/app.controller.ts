import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';

@Controller(/*questions TODO*/)  //nest g controller smth
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(/*smth*/)
  getHello(/*@Req() request: Request*/): string {
    return this.appService.getHello(); 
  }
}
//Standard
//Using this built-in method, when a request handler returns
//a JavaScript object or array, it will automatically be serialized to JSON. 

//In order to take advantage of express typings (as in the request: Request parameter example above), install @types/express package.

/*egyéb decoratorok amik hasznosak lehetnek:
@Next()
@Session()
@Param()
@Body()
@Query()
*/