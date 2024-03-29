import React from "react";
import loginImg from "../assets/img/login.jpg";

const Login = () => {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 h-screen w-full"
    >
      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl leading-loose text-white font-bold text-center">
            ورود
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>نام کاربری</label>
            <input
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>رمز عبور</label>
            <input
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              ذخیره اطلاعات ورود
            </p>
            <p>فراموشی رمز عبور</p>
          </div>
          <button className="w-full text-white font-semibold rounded my-5 py-2 bg-teal-500 shadow-lg shadow-teal-400/20 hover:shadow-teal-500/10">
            ورود
          </button>
        </form>
      </div>
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
