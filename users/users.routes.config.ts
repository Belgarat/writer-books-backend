import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import UsersController from './users.controller';
import UsersMiddleware from "./users.middleware";

export class UsersRoutes extends CommonRoutesConfig {

    private prisma = new PrismaClient();

    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
            .get(UsersController.listUsers)
            .post(UsersController.createUser);

        this.app.param(`userId`, UsersMiddleware.extractUserId);

        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get(UsersController.getUserById)
            .patch(UsersController.updateUser)
            .delete(UsersController.removeUserById);
        return this.app;
    }
}
