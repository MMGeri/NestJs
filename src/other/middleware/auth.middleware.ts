import { Injectable ,NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    async use(req:Request, res:Response, next:NextFunction) {
        //TODO: make it work
        if (true)
        res.redirect('/login');
        else
        next();
    }
}

//TODO: JWT -re majd kicserelni