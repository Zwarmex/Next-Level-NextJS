import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="flex justify-center items-center flex-col min-h-screen">
			<div>
				<h2 className="text-3xl font-semibold p-4">
					404 - Page Not Found
				</h2>
			</div>
			<p>The page you are looking for does not exist.</p>
			<Link
				href="/"
				className="p-4 bg-blue-500 mt-4 rounded-lg text-lg text-white hover:bg-blue-600">
				Go back to Home
			</Link>
		</div>
	);
}
