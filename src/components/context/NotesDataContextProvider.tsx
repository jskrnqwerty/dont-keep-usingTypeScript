import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { NoteType } from "../common/types/types";

export const NotesDataContext = createContext({} as NotesDataContextType);

type NotesDataContextProviderPropsType = {
  children: React.ReactNode
}

type NotesDataContextType = {
  note: NoteType,
  noteTitle: string,
  setNoteTitle: React.Dispatch<React.SetStateAction<string>>,
  noteInfo: string,
  setNoteInfo: React.Dispatch<React.SetStateAction<string>>,
  notes: [] | NoteType[],
  setNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>,
  pinnedNotes: [] | NoteType[],
  setPinnedNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>,
  archivedNotes: [] | NoteType[],
  setArchivedNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>,
  deletedNotes: [] | NoteType[],
  setDeletedNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>,
}

const NotesDataContextProvider = ({ children }: NotesDataContextProviderPropsType ) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteInfo, setNoteInfo] = useState<string>("");
  const note: NoteType = {
    id: uuid(),
    title: noteTitle,
    info: noteInfo,
    location: "",
    isNotePinned: false,
  };
  
  const [notes, setNotes] = useState<[] | NoteType[]>([]);
  const [pinnedNotes, setPinnedNotes] = useState<[] | NoteType[]>([]);
  const [archivedNotes, setArchivedNotes] = useState<[] | NoteType[]>([]);
  const [deletedNotes, setDeletedNotes] = useState<[] | NoteType[]>([]);
  
  useEffect(() => {
    const localNotesData = localStorage.getItem("notesData");
    if (localNotesData) setNotes(JSON.parse(localNotesData));
    
    const localPinnedNotesData = localStorage.getItem("pinnedNotesData");
    if (localPinnedNotesData) setPinnedNotes(JSON.parse(localPinnedNotesData));
    
    const localArchivedNotesData = localStorage.getItem("archivedNotesData");
    if (localArchivedNotesData)
      setArchivedNotes(JSON.parse(localArchivedNotesData));

    const localDeletedNotesData = localStorage.getItem("deletedNotesData");
    if (localDeletedNotesData)
      setDeletedNotes(JSON.parse(localDeletedNotesData));
  }, []);

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
    localStorage.setItem("pinnedNotesData", JSON.stringify(pinnedNotes));
    localStorage.setItem("archivedNotesData", JSON.stringify(archivedNotes));
    localStorage.setItem("deletedNotesData", JSON.stringify(deletedNotes));
  });

  return (
    <NotesDataContext.Provider
      value={{
        note,
        noteTitle,
        setNoteTitle,
        noteInfo,
        setNoteInfo,
        notes,
        setNotes,
        pinnedNotes,
        setPinnedNotes,
        archivedNotes,
        setArchivedNotes,
        deletedNotes,
        setDeletedNotes,
      }}
    >
      {children}
    </NotesDataContext.Provider>
  );
};


export default NotesDataContextProvider;
