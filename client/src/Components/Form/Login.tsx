import FormInput from "./FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import axios from "axios";

interface FormData {
  password: string;
  email: string;
}

const formSchema = z.object({
  email: z.string().email({ message: "Invaid Email Address" }),
  password: z
    .string()
    .min(8, { message: "Password should contain at least 8 characters" }),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  //============================handling the form submit=================================/
  const formSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);
      const response = await axios.post("http://localhost:3000/login", data);
      const { user } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      alert("login successfull");
      navigate("/feed");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignup = () => {
    navigate("/");
    alert("You are redirected to signup page");
  };

  return (
    <div className="px-6 py-8 max-w-2xl mx-auto mt-20 rounded-md bg-gray-100">
      <h1 className="text-blue-700 font-bold text-3xl text-center">LOGIN</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        {/* email */}
        <FormInput
          type={"text"}
          label={"Email Address"}
          name={"email"}
          placeholder={"Enter your email"}
          error={errors.email}
          register={register("email")}
        />

        {/* Password */}
        <FormInput
          type={"password"}
          label={"Password"}
          name={"password"}
          placeholder={"Enter your password"}
          error={errors.password}
          register={register("password")}
        />
        <div className="w-full mt-6">
          <button
            type="submit"
            className="px-5 py-2 text-white font-bold bg-blue-700 rounded-md w-full"
          >
            LOGIN
          </button>
        </div>
      </form>
      <div className="text-center mt-5">
        <small className="text-sm">Not yet registered? </small>
        <small
          className="text-blue-600 text-sm underline ml-2 cursor-pointer"
          onClick={handleSignup}
        >
          Click Here
        </small>
      </div>
    </div>
  );
};

export default Login;
