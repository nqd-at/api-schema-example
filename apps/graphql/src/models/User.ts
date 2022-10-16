import { IsEmail } from "class-validator";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  status?: "Happy" | "Sad";

  @Field(() => [String])
  phoneNumbers: string[];
}
