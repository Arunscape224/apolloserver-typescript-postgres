import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express"

export type MyContext = {
    em: EntityManager<IDatabaseDriver<Connection>>;
    // Express.Sessions is deprecated, 'number' is not working? Will return to this.
    req: Request & { session: any };
    res: Response;
} 