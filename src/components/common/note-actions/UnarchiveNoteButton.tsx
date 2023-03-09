import { Tooltip, IconButton } from "@mui/material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { UnarchiveOutlined as UnarchiveIcon } from "@mui/icons-material";
import { NoteType } from "../types/types";

type UnarchiveNoteButtonPropsType = {
  notesItem: NoteType,
}

const UnarchiveNoteButton = ({ notesItem }: UnarchiveNoteButtonPropsType) => {
  const {
    setNotes,
    archivedNotes,
    setArchivedNotes,
  } = useContext(NotesDataContext);

  const handleUnarchiveButton = (notesItem: NoteType) => {
    notesItem.location = "notes";
    console.log(notesItem);

    setNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const removeFromArchivedNotes = (notesItem: NoteType) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item: NoteType) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  return (
    <Tooltip title="Unarchive">
      <IconButton onClick={() => handleUnarchiveButton(notesItem)}>
        <UnarchiveIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default UnarchiveNoteButton;
