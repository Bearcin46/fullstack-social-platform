import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

interface formDatas {
  fullName: string;
  profileUrl: string;
  backgroundUrl: string;
  bio: string;
}

const Form = () => {
  const {
    formState: { errors },
    register,
  } = useForm<formDatas>();
  return (
    <div>
      <form action="">
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
          name={"profilrUrl"}
          placeholder={"Profile picture link"}
          error={errors.fullName}
          register={register("profileUrl")}
        />
      </form>
    </div>
  );
};

export default Form;
