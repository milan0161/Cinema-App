import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
type Payload = string;

export const signAtoken = (username: Payload, role: 'ADMIN' | 'USER'): string => {
  return jwt.sign({ username: username, role: role }, process.env.A_TOKEN_SECRET!, { expiresIn: '1h' });
};
