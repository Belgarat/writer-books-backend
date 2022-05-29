// we import express to add types to the request/response objects from our controller functions
import express from 'express';

// we use debug with a custom context as described in Part 1
import debug from 'debug';
import UsersService from "./users.service";
import {Prisma, PrismaClient} from "@prisma/client";

const log: debug.IDebugger = debug('app:users-controller');
class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await UsersService.list();
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await UsersService.getById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = await UsersService.createUser(req.body);
        res.status(201).send({ id: user.id });
    }

    async updateUser(req: express.Request, res: express.Response) {
        const userId = req.body.id;
        delete req.body.id;
        const result = await UsersService.updateUser(userId, req.body);
        res.status(200).json(result);
    }

    async removeUserById(req: express.Request, res: express.Response) {
        log(await UsersService.deleteUserById(req.body.id));
        res.status(204).send();
    }
}

export default new UsersController();
