import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Todo implements ITodo {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ defaultValue: false })
  completed: boolean;

  @Field()
  createdDate: Date;
}
