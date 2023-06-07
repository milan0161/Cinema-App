import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

export const verifyPassword = async (loginPw: string, userPw: string): Promise<boolean> => {
  return await bcrypt.compare(loginPw, userPw);
};
