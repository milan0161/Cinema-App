import { Link, useSearchParams } from 'react-router-dom';
import { useRegisterMutation } from '../../../features/auth-module/api/authApi';
import { decodedAToken } from '../../../app/utils/decodeToken';
import { saveToken } from '../../../app/utils/saveToken';
import { useAppDispatch } from '../../../app/store/store';
import { setUser } from '../../../features/auth-module/authSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ReqRegister } from '../../../features/auth-module/types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingIndicator from '../ui/LoadingIndicator';

const AuthForm = () => {
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  const [registerUser, { isLoading }] = useRegisterMutation();

  const { register, handleSubmit, reset, formState } = useForm<ReqRegister>();
  const { errors } = formState;

  const authHandler = async (data: ReqRegister) => {
    try {
      const response = await registerUser([
        {
          password: data.password,
          email: data.email,
          username: data.username,
        },
        `${isLogin ? 'login' : 'register'}`,
      ]).unwrap();
      const user = decodedAToken(response.token);
      saveToken(response.token, user!.exp);
      dispatch(
        setUser({
          role: user!.role,
          username: user!.email,
          token: response.token,
        }),
      );
      reset();
      navigate('/');
    } catch (error: any) {
      setError(error);
    }
  };
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      onSubmit={handleSubmit(authHandler)}
      className=" text-slate-950 bg-white w-1/2 2xl:w-1/4 m-auto mt-20 flex flex-col gap-4 p-4 rounded"
      noValidate
    >
      <h2 className="text-center">{isLogin ? 'Log in' : 'Register'}</h2>
      {!isLogin && (
        <div className="flex flex-col">
          <label htmlFor="login_username">Username:</label>
          <input
            {...register('username', {
              minLength: {
                value: 5,
                message:
                  'Username must have atleast 5 characters and maximum 25 characters',
              },
              maxLength: 25,
              required: {
                value: true,
                message:
                  'Username must have atleast 5 characters and maximum 25 characters',
              },
            })}
            className={
              errors.username
                ? 'log_reg_input validation_invalid'
                : 'log_reg_input'
            }
            id="login_username"
            type="text"
            placeholder="username123"
          />
          {errors.username && (
            <p className="validation_error">{errors.username?.message}</p>
          )}
        </div>
      )}
      <div className="flex flex-col">
        <label htmlFor="login_email">Email:</label>
        <input
          {...register('email', {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Invalid email format',
            },
            required: {
              value: true,
              message: 'Email is required',
            },
          })}
          className={
            errors.email ? 'log_reg_input validation_invalid' : 'log_reg_input'
          }
          id="login_email"
          type="email"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="validation_error">{errors.email?.message}</p>
        )}
        {error && error.includes('email') && (
          <p className="text-center text-red-600">{error}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="login_password">Password:</label>
        <input
          {...register('password', {
            minLength: {
              value: 5,
              message:
                'Password must be at least 5 characters long and must contain at least one number',
            },
            maxLength: 50,
            required: {
              value: true,
              message:
                'Password must be at least 5 characters long and must contain at least one number',
            },
          })}
          className={
            errors.password
              ? 'log_reg_input validation_invalid'
              : 'log_reg_input'
          }
          id="login_password"
          type="password"
          placeholder="********"
        />
        {errors.password && (
          <p className="validation_error">{errors.password?.message}</p>
        )}
        {error && error.startsWith('Password') && (
          <p className="text-center text-red-600">{error}</p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button className="disabled:bg-slate-500 bg-blue-600 text-white px-2 py-1 rounded hover:bg-white hover:text-blue-600 hover:outline transition duration-200">
          {isLogin ? 'Log in' : 'Register'}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-sm xl:text-md">
          {isLogin
            ? 'Not registred? Click here to '
            : 'Already have an account? Click here to '}
          <Link
            className="underline text-sm xl:text-md"
            to={`?mode=${isLogin ? 'register' : 'login'}`}
          >
            {isLogin ? ' register' : ' log in'}
          </Link>
        </p>
      </div>
    </motion.form>
  );
};

export default AuthForm;
