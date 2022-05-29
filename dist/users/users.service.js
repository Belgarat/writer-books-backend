"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class UsersService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.users.findMany();
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.users.findUnique({
                where: { id: Number(userId) },
            });
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.users.create({
                data: userData,
            });
        });
    }
    updateUser(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.users.update({
                where: { id: Number(userId) },
                data: userData
            });
        });
    }
    deleteUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.users.delete({
                where: {
                    id: Number(userId),
                },
            });
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0Q7QUFFcEQsTUFBTSxZQUFZO0lBQWxCO1FBRVksV0FBTSxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO0lBZ0N4QyxDQUFDO0lBOUJnQixJQUFJOztZQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE1BQWM7O1lBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLEtBQUssRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUM7YUFDOUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLFFBQWdDOztZQUNwRCxPQUFRLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxJQUFJLEVBQUUsUUFBUTthQUNqQixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsTUFBYyxFQUFFLFFBQWdDOztZQUNwRSxPQUFRLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxLQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDO2dCQUMzQixJQUFJLEVBQUUsUUFBUTthQUNqQixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFFWSxjQUFjLENBQUMsTUFBYzs7WUFDdEMsT0FBUSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsS0FBSyxFQUFFO29CQUNILEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNyQjthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBQ0Qsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9