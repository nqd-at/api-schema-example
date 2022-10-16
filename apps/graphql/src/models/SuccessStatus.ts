import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SuccessStatus {
  @Field(() => String)
  status: "success" | "error"
}