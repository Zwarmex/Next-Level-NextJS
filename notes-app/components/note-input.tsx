"use client";

import { useNotes } from "@/context/notes-context";
import { useState } from "react";

export default function NoteInput() {
	const [noteText, setNoteText] = useState("");
	const { addNote } = useNotes();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (noteText.trim() === "") return;
		addNote(noteText);
		setNoteText("");
	}
	return (
		<div>
			<form className="space-y-4" onSubmit={handleSubmit}>
				<label htmlFor="note" className="block mb-2 font-medium">
					Add a new note :
				</label>
				<textarea
					id="note"
					className="w-full h-32 p-2 border border-gray-300 rounded  focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
					placeholder="Write your note here..."
					rows={3}
					onChange={(e) => setNoteText(e.target.value)}
					value={noteText}
				/>
				<button
					type="submit"
					className="hover:cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed">
					Add Note
				</button>
			</form>
		</div>
	);
}
