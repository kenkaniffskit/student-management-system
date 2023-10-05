import Link from "next/link";

export default function Home() {
	return (
		<main className="border border-red-500 h-screen">
			<Link href="/sign-up">Sign Up</Link>
		</main>
	);
}
