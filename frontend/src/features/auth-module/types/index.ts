export interface InitialAuthState {
  username: string;
  token: string;
  role: 'Admin' | 'Client';
  isAuth: boolean;
  isAdmin: boolean;
}

export interface ReqLogin {
  email: string;
  password: string;
}
export interface ResLogin {
  token: string;
}

export interface ReqRegister extends ReqLogin {
  username: string;
}
