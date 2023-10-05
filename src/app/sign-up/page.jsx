import AuthFormCard from "../components/AuthFormCard";

const SignUp = () => {
	const title = "Sign Up";
	const fields = [
		{
			label: "Username",
			register: "username",
			errorMessage: "Username field is required!",
			type: "Text",
		},
		{
			label: "Password",
			register: "password",
			errorMessage: "Password field is required!",
			type: "Password",
		},
		{
			label: "Confirm Password",
			register: "confirm_password",
			errorMessage: "Confirm Password field is required!",
			type: "Password",
		},
	];

	return (
		<>
			<div className="h-screen bg-slate-200 flex justify-center items-center p-4">
				<AuthFormCard fields={fields} type={title} title={title} />
			</div>
		</>
	);
};

export default SignUp;
