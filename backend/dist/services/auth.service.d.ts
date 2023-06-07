import { AuthDto } from '../dto/auth.dto';
declare class AuthService {
    users: import(".prisma/client").Prisma.UserDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    registerUser: (dto: AuthDto) => Promise<string>;
    loginUser: (dto: AuthDto) => Promise<string>;
}
export default AuthService;
