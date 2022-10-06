import { Field, InputType } from "type-graphql";

@InputType()
export class PaginationInput {
  @Field()
  limit: number
  
  @Field({ defaultValue: 0 })
  offset: number
}