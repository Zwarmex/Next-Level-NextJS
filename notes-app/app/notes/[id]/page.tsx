import NoteDetail from "@/components/note-detail";
import Link from "next/link";

export default async function NoteDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	return (
		<div className="min-h-screen max-w-3xl mx-auto space-y-6 py-8">
			<Link
				href="/notes"
				className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
				Back to All Notes
			</Link>
			<NoteDetail id={Number(id)} />
		</div>
	);
}
