/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { classToPlain } from "class-transformer";
import { map } from "rxjs";

@Injectable()
export class transformInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next:CallHandler<any>) {
        return next.handle().pipe(map(data => classToPlain(data)))
    }

}