import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    userId: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    address: string;

    @Field(() => Number, { nullable: true })
    contactnumber: number;

    @Field({ nullable: true })
    isActive: boolean;
}