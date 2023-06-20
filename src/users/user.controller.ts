import { Controller, Get, HttpCode, HttpStatus, Query} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dtos/user.dto";
import { ApiPaginatedResponse } from "src/common/decorators/api-paginated-response.decorator";
import { PageDto, PageOptionsDto } from "src/common/dtos";

  @Controller("users")
  export class UserController {
    constructor(private readonly _userService: UserService) {}
  
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiPaginatedResponse(UserDto)
    async getUsers(
      @Query() pageOptionsDto: PageOptionsDto
    ): Promise<PageDto<UserDto>> {
      return this._userService.getUsers(pageOptionsDto);
    }
  }