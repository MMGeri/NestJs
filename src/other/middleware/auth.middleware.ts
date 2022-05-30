import { Injectable ,NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    async use(req:Request, res:Response, next:NextFunction) {
        //nem implemantaltam mert helyette Guard-ot / JWT-t hasznalok
        //Guard: jobb mint middleware mert tudja mi lesz a next() function ExecutionContext
        //Guard a middlewarek utan es Interceptor elott fut le 
        if (true)
        res.redirect('/login');
        else
        next();
    }
}

