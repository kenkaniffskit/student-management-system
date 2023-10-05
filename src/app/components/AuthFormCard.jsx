"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const AuthFormCard = ({ fields, type, title }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Logic when submitting the form
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<div className="lg:w-2/6 md:w-1/2 w-full text-slate-900 bg-white shadow-lg p-8 rounded-md">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-y-2"
				>
					<div className="flex flex-col gap-2">
						<h1 className="text-center text-2xl font-semibold">{title}</h1>
						<FaUserCircle size={50} className="mx-auto" />
					</div>
					{/* Input Fields */}
					{fields.map((item) => {
						return (
							<div key={item.label} className="flex items-end">
								<div className="w-full">
									<Label
										className="font-semibold text-md"
										htmlFor={item.register}
									>
										{item.label}
									</Label>
									<Input
										type={item.type}
										placeholder={item.label}
										{...register(item.register, { required: true })}
									/>
									{errors[item.register] && (
										<span className="text-xs text-red-400">
											{item.errorMessage}
										</span>
									)}
								</div>
							</div>
						);
					})}
					{/* Submit Button */}
					<div className="flex flex-col gap-4 text-center">
						<Button type="submit">Submit</Button>
						<Link
							className="w-fit mx-auto text-sm underline text-blue-500 hover:text-blue-400 duration-200"
							href={
								(type === "Sign Up" && "/sign-in") ||
								(type === "Sign In" && "sign-up")
							}
						>
							{(type === "Sign Up" && "Already have an account?") ||
								(type === "Sign In" && "Don't have an account?")}
						</Link>
						<div className="text-sm font-light">
							<p className="">Coded by Ken Frianeza & Neil Abrazaldo</p>
							<p className="">Copyright &copy; {new Date().getFullYear()}</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default AuthFormCard;
