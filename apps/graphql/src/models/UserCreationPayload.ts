import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { UserCreationParams } from "../services/UserService";

@InputType()
export class UserCreationPayload implements UserCreationParams {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  name: string;

  @Field(() => [String])
  phoneNumbers: string[];
}
