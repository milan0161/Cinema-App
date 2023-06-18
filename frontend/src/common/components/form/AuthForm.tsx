import { Link, useSearchParams } from 'react-router-dom';
import { useRegisterMutation } from '../../../features/auth-module/api/authApi';
import { FormEvent, useEffect, useRef } from 'react';
import { decodedAToken } from '../../../utils/decodeToken';
import { saveToken } from '../../../utils/saveToken';
import { useAppDispatch } from '../../../app/store';
import { setUser } from '../../../features/auth-module/authSlice';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const [register, { data, isSuccess, isError, error }] = useRegisterMutation();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const authHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameRef.current!.value.length > 1 && passwordRef.current!.value.length > 4) {
      register([
        { password: passwordRef.current!.value, username: usernameRef.current!.value },
        `${isLogin ? 'login' : 'register'}`,
      ]);

      usernameRef.current!.value = '';
      passwordRef!.current!.value = '';
    } else {
      return;
    }
  };
  if (isError) {
    console.log(error);
  }
  useEffect(() => {
    if (isSuccess && data) {
      const user = decodedAToken(data.aToken);
      if (user) {
        saveToken(data.aToken, user.exp);
        dispatch(setUser({ role: user.role, username: user.username }));
      }
      navigate('/');
    }
  }, [data, isSuccess]);

  return (
    <form
      onSubmit={authHandler}
      className=" text-slate-950 bg-white w-1/2 2xl:w-1/4 m-auto mt-20 flex flex-col gap-4 p-4 rounded"
    >
      <h2 className="text-center">{isLogin ? 'Log in' : 'Register'}</h2>
      <div className="flex flex-col">
        <label htmlFor="login_username">Username:</label>
        <input ref={usernameRef} className="log_reg_input" id="login_username" type="text" placeholder="username123" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="login_password">Password:</label>
        <input ref={passwordRef} className="log_reg_input" id="login_password" type="password" placeholder="********" />
      </div>
      <div className="flex items-center justify-center">
        <button className="disabled:bg-slate-500 bg-blue-600 text-white px-2 py-1 rounded hover:bg-white hover:text-blue-600 hover:outline transition duration-200">
          {isLogin ? 'Log in' : 'Register'}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-sm xl:text-md">
          {isLogin ? 'Not registred? Click here to ' : 'Already have an account? Click here to '}
          <Link className="underline text-sm xl:text-md" to={`?mode=${isLogin ? 'register' : 'login'}`}>
            {isLogin ? ' register' : ' log in'}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
