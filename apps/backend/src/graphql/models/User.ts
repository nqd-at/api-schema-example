import { Field, ObjectType, Int, Directive } from "type-graphql";
import { UserType } from "../../models/UserType";

@ObjectType()
export class User implements UserType {
  @Field(() => Int)
  id: number;

  @Field()
  @Directive('@constraint(format: "email")')
  email: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  status?: "Happy" | "Sad";
}
