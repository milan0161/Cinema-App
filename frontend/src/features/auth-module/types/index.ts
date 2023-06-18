export interface InitialAuthState {
  username: string;
  role: 'ADMIN' | 'USER';
  isAuth: boolean;
  isAdmin: boolean;
}

export interface ReqLogin {
  username: string;
  password: string;
}
export interface ResLogin {
  aToken: string;
}
