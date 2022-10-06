import { injectable } from "tsyringe";
import { Arg, Query, Resolver, Int, Mutation } from "type-graphql";
import { UsersService } from "../../services/UserService";
import { User } from "../models/User";
import { UserCreationPayload } from "../models/UserCreationPayload";

@injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  public async getUser(
    @Arg("userId", () => Int) userId: number,
    @Arg("name", { nullable: true }) name?: string
  ) {
    return this.userService.get(userId, name);
  }

  @Mutation(() => User)
  public async createUser(
    @Arg("payload") payload: UserCreationPayload
  ): Promise<User> {
    return this.userService.create(payload);
  }
}
