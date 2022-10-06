import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AddTodoInput } from "../models/AddTodoInput";
import { GetTodoInput } from "../models/GetTodosInput";
import { PaginationInput } from "../models/PaginationInput";
import { Todo } from "../models/Todo";
import { TodoSortInput } from "../models/TodoSortInput";

@Resolver(() => Todo)
export class TodoResolver {
  @Query(() => [Todo])
  public getTodo(
    @Arg("payload") payload: GetTodoInput,
    @Arg("pagination") pagination: PaginationInput,
    @Arg("sorting") sorting: TodoSortInput
  ) {
    return [];
  }

  @Mutation(() => Todo)
  public addTodo(@Arg("payload") payload: AddTodoInput) {}
}
