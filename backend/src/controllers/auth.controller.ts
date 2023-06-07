import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';
import { StatusCodes } from 'http-status-codes';
import AuthService from '../services/auth.service';
import { AuthDto } from '../dto/auth.dto';

class AuthController {
  private authService = new AuthService();

  public registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const authDto = new AuthDto();
      const { password, username } = req.body as LoginUser;
      authDto.password = password;
      authDto.username = username;
      const aToken = await this.authService.registerUser(authDto);
      res.status(StatusCodes.CREATED).json({ aToken: aToken });
    } catch (error) {
      next(error);
    }
  };

  public loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const authDto = new AuthDto();
      const { password, username } = req.body as AuthDto;
      authDto.password = password;
      authDto.username = username;

      const Atoken = await this.authService.loginUser(authDto);

      res.status(StatusCodes.OK).json({ aToken: Atoken });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
