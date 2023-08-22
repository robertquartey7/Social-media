"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type RegisterProps = {
  password: string;
  email: string;
};
function register() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterProps>();

  // handling submit
  function onSubmit({}: RegisterProps) {}

  return (
    <div
      className=" flex justify-center  bg-green flex-grow
     "
    >
      <form
        className=" m-5 p-10 flex flex-col gap-3 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center font-bold text-3xl">Login</h1>
        <hr
          className="
bg-black h-1 px-4 border-none"
        />{" "}
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
          <label htmlFor="password">Password</label>
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
        <div>
          <span className="underline ">
            <Link href={"/forget"}>Forgot Password</Link>
          </span>
        </div>
        <button
          className="block text-center p-2 border w-full mt-2 bg-black text-white rounded hover:opacity-90 duration-100 delay-100"
          type="submit"
        >
          Login
        </button>
        <span className="text-center w-full block mt-2 ">
          <span className="mr-1"> Don't have an account</span>
          <Link href={"/register"}>
            <span className="text-gray-500">sign up</span>
          </Link>
        </span>
        <span className="text-center"> Or </span>
        <div>
          
        </div>
      </form>
    </div>
  );
}

export default register;
