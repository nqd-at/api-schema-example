import { injectable } from "tsyringe";
import { Arg, Query, Resolver, Int, Mutation } from "type-graphql";
import { User } from "../models/User";
import { UserCreationPayload } from "../models/UserCreationPayload";
import { UsersService } from "../services/UserService";

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

  @Mutation(() => Boolean)
  public async createUser(@Arg("payload") payload: UserCreationPayload) {
    this.userService.create(payload);
    return true;
  }
}
