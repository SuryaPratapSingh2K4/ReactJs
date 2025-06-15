import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Logo } from "./index";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const createAcc = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign up to create an account
      </h2>
      <p clpssName="mt-2 text-center text-base text-black/60">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Log in
        </Link>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(createAcc)}>
            <div className="space-y-5">
                <Input
                type="text"
                label= "Full Name : "
                placeholder="Enter your name"
                {...register("name",{
                    required: true
                })}
                />
                <Input
                type="email"
                placeholder="Enter your email"
                label ="Email"
                {...register("email",{
                    required: true,
                    validate:{
                        required: true,
                        validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                type="password"
                placeholder="enter your password"
                label="Password"
                {...register("password",{
                    required:true
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Create Account</Button>
            </div>
        </form>
      </p>
    </div>
  );
}

export default Signup;
