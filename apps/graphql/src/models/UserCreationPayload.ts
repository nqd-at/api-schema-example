import { IsEmail } from "class-validator";
import { Directive, Field, InputType } from "type-graphql";
import { UserCreationParams } from "../services/UserService";

@InputType()
export class UserCreationPayload implements UserCreationParams {
  @Field()
  @IsEmail()
  email: string;

  @Directive("@constraint(minLength: 5)")
  @Field()
  name: string;

  @Field(() => [String])
  phoneNumbers: string[];
}
