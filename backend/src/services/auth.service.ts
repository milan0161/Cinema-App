import { PrismaClient, User } from '@prisma/client';
import { hashPassword, verifyPassword } from '../utils/passwords';
import { signAtoken } from '../utils/jwt';
import { AuthDto } from '../dto/auth.dto';
import Errors from '../errors/index';

class AuthService {
  public users = new PrismaClient().user;

  public registerUser = async (dto: AuthDto) => {
    const hashedPw = await hashPassword(dto.password);
    const list = await this.users.findMany();
    let role: 'ADMIN' | 'USER' = 'USER';
    if (list.length === 0) {
      role = 'ADMIN';
    }
    const user = await this.users.create({
      data: {
        username: dto.username,
        password: hashedPw,
        role: role,
      },
    });
    const aToken = signAtoken(user.username, user.role);
    return aToken;
  };

  public loginUser = async (dto: AuthDto) => {
    const user = await this.users.findUnique({
      where: {
        username: dto.username,
      },
    });
    if (!user) {
      throw new Errors.NotFoundError('User with that username does not exist');
    }
    const comparePw = await verifyPassword(dto.password, user!.password);
    if (!comparePw) {
      throw new Errors.BadRequestError('Password is invalid');
    }
    const aToken = signAtoken(user!.username, user!.role);
    return aToken;
  };
}

export default AuthService;
