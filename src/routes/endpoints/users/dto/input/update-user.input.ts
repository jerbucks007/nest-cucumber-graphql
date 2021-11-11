import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    
    @Field()
    @IsNotEmpty()
    userId: string

    @Field({ nullable: true })
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    address?: string;

    @Field({ nullable: true })
    @IsOptional()
    contactnumber?: number;

    @Field({ nullable: true })
    @IsOptional()
    isActive?: boolean;

}