import jwtDecode from 'jwt-decode';

type User = {
  username: string;
  role: 'ADMIN' | 'USER';
  exp: number;
};

export const decodedAToken = (token: string): User | null => {
  return jwtDecode(token);
};
