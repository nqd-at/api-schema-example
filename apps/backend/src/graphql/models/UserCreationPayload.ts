import { Directive, Field, InputType } from "type-graphql";
import { UserCreationPayloadType } from "../../models/UserCreationPayload";

@InputType()
export class UserCreationPayload implements UserCreationPayloadType {
  @Directive('@constraint(format: "email", minLength: 1)')
  @Field(() => String)
  email: string;

  @Directive("@constraint(minLength: 1)")
  @Field()
  name: string;
}
