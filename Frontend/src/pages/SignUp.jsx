import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import signUp from "../assets/sign-up.png";

const SignUp = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="signup-page min-h-screen flex items-center py-36">
        <div className="form-wrapper flex gap-20 items-center max-w-4xl mx-auto bg-slate-300 p-10 rounded">
          <div className="w-1/2">
            <img src={signUp} alt="" className="" />
          </div>
          <form action="" className="w-1/2 border-l ps-14">
            <h1 className="text-3xl font-semibold text-violet-900 mb-4 py-4 border-b border-violet-800">Create new account!!</h1>
            <div>
              <label htmlFor="email">Email address: </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className="border px-2 py-1 outline-violet-700 w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                className="border px-2 py-1 outline-violet-700 w-full"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
                <input type="checkbox" name="terms" id="terms"  className="mt-2 me-1"/>
                <label htmlFor="terms">Agree terms & conditions</label>
            </div>
            <div className="button">
              <button
                type="submit"
                className="w-full py-1 border-2 border-violet-700 rounded bg-violet-700 text-white hover:bg-transparent hover:text-violet-600 duration-300 font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
