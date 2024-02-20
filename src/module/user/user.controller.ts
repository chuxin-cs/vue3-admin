import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/pageAll')
  getAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get('/page')
  getList() {
    return this.userService.getList();
  }
}
