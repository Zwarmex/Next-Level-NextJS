import AllNotes from "@/components/all-notes";
import Link from "next/link";

export default function NotesListPage() {
	return (
		<div className="min-h-screen p-8">
			<div className="max-w-2xl mx-auto">
				<div>
					<div>
						<Link
							href="/"
							className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
							Go Back Home
						</Link>
					</div>
					<h1 className="text-2xl font-semibold mb-4">All Notes</h1>

					<AllNotes />
				</div>
			</div>
		</div>
	);
}
