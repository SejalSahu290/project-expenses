/* eslint-disable prettier/prettier */
import {  Body, Controller, Post} from '@nestjs/common';
import { AuthCredentialsDto } from 'src/expenses/dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  
  @Post('/signup')
  signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signup(authCredentialsDto);
  }

  @Post('signin')
  async signin(@Body() authCredentialsDto:AuthCredentialsDto): Promise<void>{
    return this.authService.signin(authCredentialsDto)
  }
}
