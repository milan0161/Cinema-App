import { User } from '@prisma/client';
declare class UsersService {
    users: import(".prisma/client").Prisma.UserDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    registerUser: (data: LoginUser) => Promise<User | undefined>;
    loginUser: (data: LoginUser) => Promise<string | undefined>;
}
export default UsersService;
