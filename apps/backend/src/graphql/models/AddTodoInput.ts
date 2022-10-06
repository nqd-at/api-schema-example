import { Field, InputType } from "type-graphql";

@InputType()
export class AddTodoInput {
  @Field()
  name: string;

  @Field({ defaultValue: new Date() })
  createdDate: Date;
}
