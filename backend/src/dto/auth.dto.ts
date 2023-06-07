import { Trim } from 'class-sanitizer';
import { IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @Trim()
  @MinLength(3, { message: 'Username should be minimum 3 characters long' })
  username!: string;

  @IsString()
  @Trim()
  @MinLength(5, { message: 'Password should be minimum 5 characters long' })
  password!: string;
}
