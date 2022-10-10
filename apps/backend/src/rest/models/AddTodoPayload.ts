import { Property, Format, Default } from "@tsed/schema";

export class AddTodoPayload {
  @Property()
  name: string;

  @Format("date-time")
  @Default(Date.now)
  createdDate: Date;
}
