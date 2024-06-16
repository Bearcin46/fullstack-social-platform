import FormInput from "./FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";

interface FormData {
  fullName: string;
  profileUrl: string;
  backgroundUrl: string;
  bio: string;
  password: string;
}

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name should contain at least 3 characters" })
    .max(20, { message: "Name should not exceed 20 characters" }),
  profileUrl: z
    .string()
    .min(10, { message: "Please enter valid URL" })
    .max(200, { message: "Please enter valid URL" }),
  password: z
    .string()
    .min(8, { message: "Password should contain at least 8 characters" }),
});

const Form = () => {
  // const navigate = useNavigate();
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
      alert("Account created successfully");
      // navigate("/login");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = () => {
    // navigate("/login");
    alert("hi");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        {/* full name */}
        <FormInput
          type={"text"}
          label={"Full Name"}
          name={"fullName"}
          placeholder={"Enter your fullname"}
          error={errors.fullName}
          register={register("fullName")}
        />
        {/* Profile url */}
        <FormInput
          type={"text"}
          label={"Profile Url"}
          name={"profileUrl"}
          placeholder={"Profile picture link"}
          error={errors.profileUrl}
          register={register("profileUrl")}
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
            SIGN UP
          </button>
        </div>
      </form>
      <div className="text-center mt-5">
        <small className="text-sm">Already registered? </small>
        <small
          className="text-blue-600 text-sm underline ml-2 cursor-pointer"
          onClick={handleLogin}
        >
          Click Here
        </small>
      </div>
    </div>
  );
};

export default Form;
