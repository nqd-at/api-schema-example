import { Field, InputType, registerEnumType } from "type-graphql";
import { ISortInput, SortDirection } from "../../interfaces/ISortInput";

registerEnumType(SortDirection, {
  name: "SortDirection",
});

@InputType()
export class TodoSortInput implements ISortInput<ITodo> {
  @Field(() => String)
  sortBy: keyof ITodo;

  @Field(() => SortDirection, { nullable: true })
  sortDirection: SortDirection = SortDirection.Ascending;
}
