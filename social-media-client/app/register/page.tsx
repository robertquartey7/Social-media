"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type RegisterProps = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  file: FormData;
};
function register() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterProps>();

  // handling submit
  function onSubmit({
    email,
    password,
    file,
    firstName,
    lastName,
  }: RegisterProps) {
    console.log(email, password, file, firstName, lastName);
  }

  return (
    <div
      className=" flex justify-center h-full items-center
     "
    >
      <form
        className=" m-5 p-10 flex flex-col gap-3 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center font-bold text-3xl">Register</h1>
        <hr
          className="
bg-black h-1 px-4 border-none"
        />
        <div className="flex gap-2">
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="firstname">
              First Name*
            </label>
            <input
              id="firstname"
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
              placeholder=""
              className="border p-1 rounded"
            />
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-red-600">
                First name is required
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="lastname">
              Last Name
            </label>
            <input
              id="firstname"
              {...register("lastName", { required: true })}
              aria-invalid={errors.lastName ? "true" : "false"}
              className="border p-1 rounded "
            />
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-red-600">
                Last name is required
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border p-2 w-full rounded-lg"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-600">
              Email is required
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full rounded-lg"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-600">
              Password is required
            </p>
          )}
        </div>
        <div className=" ">
          <label className="" htmlFor="file_input">
            Proifle Picture
          </label>
          <input
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-black file:text-white
            hover:file:bg-black"
            id="file_input"
            type="file"
            {...register("file", { required: true })}
            aria-invalid={errors.file ? "true" : "false"}
          />
          {errors.file?.type === "required" && (
            <p role="alert" className="text-red-600">
              profile picture is required
            </p>
          )}
        </div>
        <button
          className="block text-center p-2 border w-full mt-2 bg-black text-white rounded hover:opacity-90 duration-100 delay-100"
          type="submit"
        >
          SignUp
        </button>
        <span className="text-center w-full block mt-2">
          Already have an account{" "}
          <Link href={"/login"}>
            <span className="text-gray-500">sign in</span>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default register;
