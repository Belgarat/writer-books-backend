import express from 'express';
import userService from './users.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class UsersMiddleware {
    async extractUserId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.userId;
        next();
    }
}

export default new UsersMiddleware();
