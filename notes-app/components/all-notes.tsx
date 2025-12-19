"use client";

import { useNotes } from "@/context/notes-context";
import Link from "next/link";

export default function AllNotes() {
	const { notes, removeNote } = useNotes();

	if (notes.length === 0) {
		return <p className="text-gray-500">No notes available.</p>;
	}

	return (
		<div>
			<ul className="space-y-4">
				{notes.map((note) => (
					<li
						key={note.id}
						className="p-4 border border-gray-300 rounded flex justify-between items-center">
						<div className="flex flex-col gap-2">
							<h3>Note #{note.id}</h3>
							<p className="mb-2 text-gray-500">{note.text}</p>
							<span className="text-xs text-gray-500">
								Created at: {note.createdAt}
							</span>
							<Link
								href={`/notes/${note.id}`}
								className="text-blue-600 hover:underline font-semibold text-sm">
								Show Details{" "}
							</Link>
						</div>
						<button
							className="bg-red-600 p-2 text-white rounded hover:bg-red-700 hover:cursor-pointer"
							onClick={() => removeNote(note.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
