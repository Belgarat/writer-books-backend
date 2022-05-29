"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const client_1 = require("@prisma/client");
const users_controller_1 = __importDefault(require("./users.controller"));
const users_middleware_1 = __importDefault(require("./users.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
        this.prisma = new client_1.PrismaClient();
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get(users_controller_1.default.listUsers)
            .post(users_controller_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app.route(`/users/:userId`)
            .all(users_middleware_1.default.validateUserExists)
            .get(users_controller_1.default.getUserById)
            .patch(users_controller_1.default.updateUser)
            .delete(users_controller_1.default.removeUserById);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBRWxFLDJDQUFzRDtBQUN0RCwwRUFBaUQ7QUFDakQsMEVBQWlEO0FBRWpELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUkvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFIdEIsV0FBTSxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO0lBSXBDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25CLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFNBQVMsQ0FBQzthQUM5QixJQUFJLENBQUMsMEJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUMzQixHQUFHLENBQUMsMEJBQWUsQ0FBQyxrQkFBa0IsQ0FBQzthQUN2QyxHQUFHLENBQUMsMEJBQWUsQ0FBQyxXQUFXLENBQUM7YUFDaEMsS0FBSyxDQUFDLDBCQUFlLENBQUMsVUFBVSxDQUFDO2FBQ2pDLE1BQU0sQ0FBQywwQkFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF0QkQsa0NBc0JDIn0=