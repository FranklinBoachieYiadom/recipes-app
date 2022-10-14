import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Register() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { firstName, lastName, email, password, confirmPassword } = data;
    if (
      firstName === '' 
      && lastName === '' 
      && email === '' 
      && password === '' 
      && confirmPassword === ''
    ) {
      setError('Please provide all the information');
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Please enter a valid email ');
      return;
    }
    if (password !== confirmPassword) {
      setError('passwrds do not match');
      return;
    }
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="grid h-fit mt-16 mb-16 place-items-center">
      <div className=" text-2xl p-4 w-full max-w-5xl min-h-fit bg-white rounded-lg border border-gray-200 shadow-2xl sm:p-6 md:p-8 dark:bg-transparent dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-2xl text-red-600">{error}</p>}
          <div className="p-6 pl-0 pt-2 text-7xl text-gray-900 dark:text-white font-semibold">
            <h2>
              {' '}
              <span className="text-orange-500">Frace</span>Recipes🍂
            </h2>
          </div>
          <h5 className=" p-6 pl-0 pb-10 text-4xl font-medium text-gray-900 dark:text-white">
            Account Registration
          </h5>
          <div className="flex flex-col gap-x-2 lg:flex-row">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="String"
                name="firstName"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="firstname"
                required=""
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="lastName"
                className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="String"
                name="lastName"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="lastname"
                required=""
              />
            </div>
          </div>
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
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-4xl font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="Password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder=" confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
          >
            Register
          </button>
          <div className="text-3xl font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{' '}
            <Link
              href="./login"
              className="text-orange-700 hover:underline dark:text-orange-500"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
