import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";

const Login = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const [login, { isLoading, error: responseError, data }] = useLoginMutation();

  useEffect(() => { 
     if (responseError?.data) {
      setError(responseError?.data?.message);
     }

     if (data?.token && data?.user) {
      navigate('/account');
     }

  }, [data, responseError])

  // login handler
  const loginhandler = (data) => {
    setError('');
    login(data);
  }

  return (
    <Wrapper title="Login | RAFCRAFT">
      <div class="container py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 class="text-2xl uppercase font-medium mb-1">LOGIN</h2>
          <p class="text-gray-600 mb-6 text-sm">
            Login if you are a returing customer
          </p>
            { error && <p className="text-primary py-2">{error}</p> }
          <form onSubmit={handleSubmit(loginhandler)}>
            <div class="space-y-4">
              <div>
                <label class="text-gray-600 mb-2 block">
                  Email Address <span class="text-primary">*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  class="input-box"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  Password <span class="text-primary">*</span>
                </label>
                <input
                  {...register('password')}
                  type="password"
                  class="input-box"
                  placeholder="type password"
                />
              </div>
            </div>
            <div class="flex items-center justify-between mt-6">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="agreement"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  required
                />
                <label
                  for="agreement"
                  class="text-gray-600 ml-3 cursor-pointer"
                >
                  Accept Terms & Conditions
                </label>
              </div>
              <Link href="/forgot-password" class="text-primary">
                Forgot Password?
              </Link>
            </div>
            <div class="mt-4">
              <button
                disabled={isLoading}
                type="submit"
                class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Login
              </button>
            </div>
          </form>

          {/* <!-- login with social --> */}
          <div class="mt-6 flex justify-center relative">
            <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            <div class="text-gray-600 uppercase px-3 bg-white relative z-10">
              OR LOGIN IN WITH
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a
              href="#"
              class="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm"
            >
              Facebook
            </a>
            <a
              href="#"
              class="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm"
            >
              Google
            </a>
          </div>
          {/* <!-- login with social end --> */}

          <p class="mt-4 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="/register" class="text-primary">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
