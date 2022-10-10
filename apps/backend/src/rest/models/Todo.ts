import { Property, Format, Default } from "@tsed/schema";
export class Todo implements ITodo {
  @Property()
  id: string;

  @Property()
  name: string;

  @Property()
  @Default(false)
  completed: boolean;

  @Format("date-time")
  @Default(Date.now)
  createdDate: Date;

  @Format("date-time")
  dueDate?: Date;
}
