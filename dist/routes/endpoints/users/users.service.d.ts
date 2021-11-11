import { CreateUserInput } from "./dto/input/create-user.input";
import { User } from './models/users.model';
import { UpdateUserInput } from "./dto/input/update-user.input";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { DeleteUserInput } from "./dto/input/delete-user.input";
export declare class UsersService {
    private users;
    getUser(getUserArgs: GetUserArgs): User;
    getUsers(getUsersArgs: GetUsersArgs): User[];
    createUser(createUserData: CreateUserInput): User;
    updateUser(updateUserData: UpdateUserInput): User;
    deleteUser(deleteUserData: DeleteUserInput): User;
}
