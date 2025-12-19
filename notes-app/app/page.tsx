import NoteInput from "@/components/note-input";
import NotesList from "@/components/notes-list";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen p-8">
			<div className="max-w-2xl mx-auto space-y-8">
				<h1 className="text-3xl font-semibold m-8 text-center">
					My Notes App
				</h1>
				<div className="mb-6 text-center">
					<Link
						href="/notes"
						className="text-blue-500 hover:text-blue-600 underline">
						View All Notes
					</Link>
				</div>
				<NoteInput />
				<NotesList />
			</div>
		</div>
	);
}
