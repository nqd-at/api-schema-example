interface ITodo {
  id: string;
  name: string;
  completed: boolean;
  createdDate: Date;
  dueDate?: Date;
}
