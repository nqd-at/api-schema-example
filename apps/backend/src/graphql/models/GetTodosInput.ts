import { Field, InputType } from "type-graphql";

@InputType()
export class GetTodoInput {
  @Field()
  userId: string;
}
