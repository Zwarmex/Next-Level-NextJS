"use client";

import { useNotes } from "@/context/notes-context";

export default function NotesList() {
	const { notes, removeNote } = useNotes();
	const recentNotes = notes.slice(0, 3);
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Your Recent Notes</h2>
			{notes.length === 0 ? (
				<p className="text-gray-500">No notes available.</p>
			) : (
				<ul className="space-y-4">
					{recentNotes.map((note) => (
						<li
							key={note.id}
							className="p-4 border border-gray-300 rounded flex justify-between items-center">
							<div>
								<p className="mb-2">{note.text}</p>
								<span className="text-sm text-gray-500">
									Created at: {note.createdAt}
								</span>
							</div>
							<button
								className="bg-red-600 p-2 text-white rounded hover:bg-red-700 hover:cursor-pointer"
								onClick={() => removeNote(note.id)}>
								Delete
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
