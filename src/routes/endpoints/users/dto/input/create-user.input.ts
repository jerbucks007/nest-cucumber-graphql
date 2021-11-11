import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {
    
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    address: string;

    @Field(() => Number)
    @IsNotEmpty()
    contactnumber: number;

}