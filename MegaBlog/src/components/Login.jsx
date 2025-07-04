import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { Input, Button, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Dont have an account? Signup
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            SignUp
          </Link>
        </p>
        {error &&
          <p className="mt-2 text-center text-base text-red-500">{error}</p>
        }
        <form onSubmit={handleSubmit(login)}>
            <div className="space-y-5">
                <Input 
                type="email"
                placeholder="enter your email"
                label ="Email"
                {...register("email",{
                    required: true,
                    validate: {
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                type="password"
                placeholder="enter your password"
                label="Password"
                {...register("pasword",{
                    required:true
                })}
                />
                <Button
                type="Submit"
                classname="w-full"
                >Sign In</Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
