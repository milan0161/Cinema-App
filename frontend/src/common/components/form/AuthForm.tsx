import { Link, useSearchParams } from 'react-router-dom';

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <form className=" text-slate-950 bg-white w-1/2 2xl:w-1/4 m-auto mt-20 flex flex-col gap-4 p-4 rounded">
      <h2 className="text-center">{isLogin ? 'Log in' : 'Register'}</h2>
      <div className="flex flex-col">
        <label htmlFor="login_username">Username:</label>
        <input className="log_reg_input" id="login_username" type="text" placeholder="username123" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="login_password">Password:</label>
        <input className="log_reg_input" id="login_password" type="password" placeholder="********" />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-white hover:text-blue-600 hover:outline transition duration-200">
          {isLogin ? 'Log in' : 'Register'}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-sm xl:text-md">
          {isLogin ? 'do you not have an account? Click here to ' : 'already have an account? Click here to '}
        </p>
        <Link className="underline text-sm xl:text-md" to={`?mode=${isLogin ? 'register' : 'login'}`}>
          {isLogin ? ' register' : ' log in'}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
