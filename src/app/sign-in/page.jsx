import AuthFormCard from "../components/AuthFormCard";

const SignIn = () => {
	const title = "Sign In";
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
	];

	return (
		<>
			<div className="h-screen bg-slate-200 flex justify-center items-center p-4">
				<AuthFormCard fields={fields} type={title} title={title} />
			</div>
		</>
	);
};

export default SignIn;
