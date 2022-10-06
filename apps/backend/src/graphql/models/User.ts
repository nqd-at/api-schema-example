import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User implements IUser {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  birthdate?: Date;
}
