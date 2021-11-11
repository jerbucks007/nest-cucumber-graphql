import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/users.model";
import { UsersService } from "./users.service";
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(getUserArgs: GetUserArgs): User;
    getUsers(getUsersArgs: GetUsersArgs): User[];
    createUser(createUserData: CreateUserInput): User;
    updateUser(updateUserData: UpdateUserInput): User;
    deleteUser(deleteUserData: DeleteUserInput): User;
}
