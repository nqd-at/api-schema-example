import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Todo implements ITodo {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  completed: boolean;

  @Field()
  createdDate: Date;

  @Field()
  dueDate?: Date;
}
