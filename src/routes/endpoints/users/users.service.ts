import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/input/create-user.input";
import { User } from './models/users.model';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from "./dto/input/update-user.input";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { DeleteUserInput } from "./dto/input/delete-user.input";

@Injectable()
export class UsersService {

    private users: User [] = [];

    public getUser(getUserArgs: GetUserArgs) : User {
        return this.users.find(user => user.userId === getUserArgs.userId)
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        if(getUsersArgs.userId.length > 0)
            return getUsersArgs.userId.map(userId => this.getUser({ userId }));
        return this.users;
    }

    public createUser(createUserData: CreateUserInput) : User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData,
            isActive: true
        }
        this.users.push(user);
        return user;
    }

    public updateUser(updateUserData: UpdateUserInput) : User {
        let user = this.users.find(user => user.userId === updateUserData.userId)
        Object.assign(user, updateUserData);
        return user;
    }

    public deleteUser(deleteUserData: DeleteUserInput) : User {
        const userIndex = this.users.findIndex(user => user.userId == deleteUserData.userId)
        const user = this.users[userIndex];
        if(userIndex > 0){
            this.users.splice(userIndex);
        }
        return user;
    }

}