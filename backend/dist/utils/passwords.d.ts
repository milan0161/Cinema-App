export declare const hashPassword: (password: string) => Promise<string>;
export declare const verifyPassword: (loginPw: string, userPw: string) => Promise<boolean>;
