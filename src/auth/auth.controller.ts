/* eslint-disable prettier/prettier */
import {  Body, Controller, Post} from '@nestjs/common';
import { AuthCredentialsDto } from '../auth/auth-credentials.dto';
import { AuthService } from './auth.service';
// import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  
  @Post('/signup')
  signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signup(authCredentialsDto);
  }

  @Post('signin')
  async signin(@Body() authCredentialsDto:AuthCredentialsDto): Promise<{ accessToken: string}>{
    
    return this.authService.signin(authCredentialsDto);
  }

 
}
