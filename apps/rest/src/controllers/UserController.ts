import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { injectable } from "tsyringe";
import { User } from "../models/User";
import { UserCreationParams, UsersService } from "../services/UserService";

@Route("users")
@injectable()
export class UsersController extends Controller {
  constructor(private userService: UsersService) {
    super();
  }

  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Query() name?: any
  ): Promise<User> {
    console.log("name", name);
    return this.userService.get(userId, name);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    this.userService.create(requestBody);
    return;
  }
}
