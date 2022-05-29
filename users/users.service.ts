import {Prisma, PrismaClient} from "@prisma/client";

class UsersService {

    private prisma = new PrismaClient();

    public async list() {
        return this.prisma.users.findMany();
    }

    public async getById(userId: number) {
        return await this.prisma.users.findUnique({
            where: {id: Number(userId)},
        });
    }

    public async createUser(userData: Prisma.usersCreateArgs) {
        return  await this.prisma.users.create({
            data: userData,
        })
    }

    public async updateUser(userId: number, userData: Prisma.usersUpdateArgs) {
        return  await this.prisma.users.update({
            where: {id: Number(userId)},
            data: userData
        })
    }

    public async deleteUserById(userId: number) {
        return  await this.prisma.users.delete({
            where: {
                id: Number(userId),
            },
        })
    }
}
export default new UsersService();
