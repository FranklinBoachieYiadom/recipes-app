import Link from 'next/link';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (result.error) {
      setError(result.error);
    } else {
      router.push('/home-page');
      // router.push(router.query.redirect || "/home-page");
    }
  };
  return (
    <div className="grid h-fit mt-16  place-items-center">
      <div className=" text-2xl p-4 w-full max-w-2xl min-h-full bg-white rounded-lg border border-gray-200 shadow-2xl sm:p-6 md:p-8 dark:bg-transparent dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-600 text-2xl">{error}</p>}
          <div className="p-6 pl-0 pt-2 text-7xl text-gray-900 dark:text-white font-semibold">
            <h2>
              {' '}
              <span className="text-orange-500">Frace</span>Recipes🍂
            </h2>
          </div>
          <h5 className=" p-6 pl-0 pb-10 text-4xl font-medium text-gray-900 dark:text-white">
            Sign In To Your Account
          </h5>
          <div>
            <label
              htmlFor="email"
              className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-4xl font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-2xl text-orange-700 hover:underline dark:text-orange-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
          >
            Login
          </button>
          <div className="text-3xl font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <Link
              href="./register"
              className="text-orange-700 hover:underline dark:text-orange-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
