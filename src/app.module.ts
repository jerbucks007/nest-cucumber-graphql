import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestController } from './routes/endpoints/rest/rest.controller';
import { EmployeeService } from './routes/endpoints/rest/rest.service';

import { GraphQLModule } from '@nestjs/graphql';

import { UsersModule } from './routes/endpoints/users/users.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      //debug: false,
      //playground: false,
      autoSchemaFile: true
    }),
    UsersModule
  ],
  controllers: [AppController, RestController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
