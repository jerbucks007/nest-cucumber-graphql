import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/users.model";
import { UsersService } from "./users.service";

// GraphQL
@Resolver(() => User)
export class UsersResolver {

    constructor(private readonly usersService: UsersService) {}

    // add async await if you are connected to the database
    @Query(() => User, { name: 'user', nullable: true })
    getUser( @Args() getUserArgs: GetUserArgs ): User {
        return this.usersService.getUser(getUserArgs);
    }

    @Query(() => [User], { name: 'users', nullable: 'items' })
    getUsers( @Args() getUsersArgs: GetUsersArgs ) : User[] {
        return this.usersService.getUsers(getUsersArgs);
    }

    @Mutation(() => User)
    createUser( @Args('createUserData') createUserData: CreateUserInput ): User {
        return this.usersService.createUser(createUserData);
    }

    @Mutation(() => User)
    updateUser( @Args('updateUserData') updateUserData: UpdateUserInput ) : User {
        return this.usersService.updateUser(updateUserData);
    }

    @Mutation(() => User)
    deleteUser( @Args('deleteUserData') deleteUserData: DeleteUserInput) : User {
        return this.usersService.deleteUser(deleteUserData);
    }

}