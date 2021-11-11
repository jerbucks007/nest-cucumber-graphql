import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver.graphql';
import { UsersService } from './users.service';

@Module({
    providers: [UsersResolver, UsersService]
})
export class UsersModule {}