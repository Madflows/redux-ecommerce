import React from "react";
import style from "../styles/Signin.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const { login } = authActions;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login())
  };
  return (
    <div className="w-full h-screen grid p-4 place-items-center bg-gradient-to-tr from-emerald-100 to-violet-100">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 w-full max-w-sm border rounded-md p-4 py-8 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold">Welcome Back</h2>
        <label className={style.label}>
          <p>Email Address</p>
          <input type="email" required placeholder="user@domain.com" />
        </label>
        <label className={style.label}>
          <p>Password</p>
          <input type="password" required placeholder="password" />
        </label>

        <button className={style.submitBtn}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
