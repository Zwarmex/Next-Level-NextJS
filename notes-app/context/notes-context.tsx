"use client";

import { createContext, useContext, useState } from "react";

interface Note {
	id: number;
	text: string;
	createdAt: string;
}
interface NotesContextType {
	notes: Note[];
	addNote: (text: string) => void;
	removeNote: (id: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
	const [notes, setNotes] = useState<Note[]>([
		{
			id: 1750433937991,
			text: "Welcome to your notes app! This note is shared across all routes.",
			createdAt: new Date().toLocaleDateString(),
		},
		{
			id: 1750433937992,
			text: "This note demonstrates global state management with React Context.",
			createdAt: new Date().toLocaleDateString(),
		},
		{
			id: 1750433937993,
			text: "You can access these notes from any page in the app!",
			createdAt: new Date().toLocaleDateString(),
		},
	]);

	function addNote(text: string) {
		const newNote: Note = {
			id: Date.now(),
			text,
			createdAt: new Date().toLocaleDateString(),
		};
		setNotes((prevNotes) => [newNote, ...prevNotes]);
	}

	function removeNote(id: number) {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
	}

	return (
		<NotesContext.Provider value={{ notes, addNote, removeNote }}>
			{children}
		</NotesContext.Provider>
	);
}

export function useNotes() {
	const context = useContext(NotesContext);
	if (context === undefined) {
		throw new Error("useNotes must be used within a NotesProvider");
	}
	return context;
}
