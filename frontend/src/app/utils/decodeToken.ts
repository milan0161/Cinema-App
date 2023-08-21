import jwtDecode from 'jwt-decode';

type User = {
  email: string;
  role: 'Admin' | 'Client';
  exp: number;
};

export const decodedAToken = (token: string): User | null => {
  return jwtDecode(token);
};
