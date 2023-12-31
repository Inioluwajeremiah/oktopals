import React from 'react';
import Header from '../../components/header'

export default function SignIn() {
  return (
    <>
    {/* <Header/> */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mx-auto mt-10">
          <h1 className="title-font font-medium text-3xl text-[#001233] mb-4">Welcome back to OvaSite!</h1>
          <p className="leading-relaxed text-[#001233] mb-20">
          Embrace the power of mobile devices and the web to swiftly gather, assess, 
          and securely exchange data. Whether you require intricate skip patterns,
          live GPS tracking, or image uploads, OvaSite stands as your reliable answer.
        </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-[#fff3e5] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-[#001233] text-lg font-medium title-font mb-5 text-center">Sign In</h2>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="email" className="leading-7 text-sm text-[#001233]">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="password" className="leading-7 text-sm text-[#001233]">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <button className="text-white bg-[#001233] border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">Sign In</button>

          <p className="text-gray-600 mt-3 text-center">Do not have an account? <a href="/signup" className="text-[#001233] underline">Create Account.</a></p>
        </div>
      </div>
    </section>
    </>
  );
}
