"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    getUser(getUserArgs) {
        return this.users.find(user => user.userId === getUserArgs.userId);
    }
    getUsers(getUsersArgs) {
        if (getUsersArgs.userId.length > 0)
            return getUsersArgs.userId.map(userId => this.getUser({ userId }));
        return this.users;
    }
    createUser(createUserData) {
        const user = Object.assign(Object.assign({ userId: (0, uuid_1.v4)() }, createUserData), { isActive: true });
        this.users.push(user);
        return user;
    }
    updateUser(updateUserData) {
        let user = this.users.find(user => user.userId === updateUserData.userId);
        Object.assign(user, updateUserData);
        return user;
    }
    deleteUser(deleteUserData) {
        const userIndex = this.users.findIndex(user => user.userId == deleteUserData.userId);
        const user = this.users[userIndex];
        if (userIndex > 0) {
            this.users.splice(userIndex);
        }
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map