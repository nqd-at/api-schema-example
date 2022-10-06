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
import { UserCreationPayloadType } from "../../models/UserCreationPayload";
import { UserType } from "../../models/UserType";
import { UsersService } from "../../services/UserService";

@Route("rest/users")
@injectable()
export class UsersController extends Controller {
  constructor(private userService: UsersService) {
    super();
  }

  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Query() name?: any
  ): Promise<UserType> {
    return this.userService.get(userId, name);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationPayloadType
  ): Promise<UserType> {
    console.log(requestBody);
    this.setStatus(201); // set return status 201
    return this.userService.create(requestBody);
  }
}
