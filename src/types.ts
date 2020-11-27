import { Request, Response } from "express"
import { Redis } from 'ioredis'
export type MyContext = {
    // Express.Sessions is deprecated, 'number' is not working? Will return to this.
    req: Request & { session: any };
    redis: Redis;
    res: Response;
}