import { injectable } from "tsyringe";
import { Arg, Query, Resolver, Int, Mutation } from "type-graphql";
import { SuccessStatus } from "../models/SuccessStatus";
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

  @Mutation(() => SuccessStatus)
  public async createUser(
    @Arg("payload") payload: UserCreationPayload
  ): Promise<SuccessStatus> {
    this.userService.create(payload);
    console.log(payload)
    return { status: "success" };
  }
}
