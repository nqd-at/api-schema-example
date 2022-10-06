import { singleton } from "tsyringe";
import { UserCreationPayloadType } from "../models/UserCreationPayload";
import { UserType } from "../models/UserType";

@singleton()
export class UsersService {
  public get(id: number, name?: string): UserType {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
    };
  }

  public create(userCreationPayload: UserCreationPayloadType): UserType {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationPayload,
    };
  }
}
