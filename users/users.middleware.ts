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

    async validateUserExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.getById(req.body.id);
        if (user) {
            next();
        } else {
            res.status(404).send({
                error: `User ${req.params.userId} not found`,
            });
        }
    }
}

export default new UsersMiddleware();
