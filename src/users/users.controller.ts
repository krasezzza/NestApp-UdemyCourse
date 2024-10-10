import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';

@Controller()
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('auth/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signup(body.email, body.password);
  }

  @Post('auth/signin')
  loginUser(@Body() body: CreateUserDto) {
    return this.authService.signin(body.email, body.password);
  }

  @Get('user/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Get('users')
  findUserBy(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Get('users')
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(parseInt(id));
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
