import {
  BodyParams,
  Controller,
  Get,
  PathParams,
  Post,
  Patch,
} from "@tsed/common";
import {Returns} from '@tsed/schema'
import { getSpec, SpecTypes } from "@tsed/schema";
import { AddTodoPayload } from "../models/AddTodoPayload";
import { Todo } from "../models/Todo";

@Controller("/todos")
export class TodoController {
  @Get("/.schema")
  getSchema() {
    return getSpec(TodoController, { specType: SpecTypes.OPENAPI });
  }

  @Get("/")
  getTodos() {
    return {};
  }

  @Get("/:id")
  @Returns(200, Todo).Description("Todo with ID")
  getTodo(@PathParams("id") id: string) {
    return {};
  }

  @Post("/")
  createTodo(@BodyParams() payload: AddTodoPayload) {
    return {};
  }

  @Patch("/:id")
  completeTodo(@PathParams("id") id: string) {
    return {};
  }
}
