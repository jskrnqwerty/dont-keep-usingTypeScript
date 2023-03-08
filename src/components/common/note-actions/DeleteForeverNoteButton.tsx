import { Tooltip, IconButton } from "@mui/material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { DeleteForeverOutlined as DeleteForeverIcon } from "@mui/icons-material";
import { NoteType } from "../types/types";

type DeleteForeverNoteButtonPropsType = {
  notesItem: NoteType,
}

const DeleteForeverNoteButton = ({ notesItem }: DeleteForeverNoteButtonPropsType) => {
  const { deletedNotes, setDeletedNotes } = useContext(NotesDataContext);

  const handleDeleteForeverButton = (notesItem: NoteType) => {
    removeFromDeletedNotes(notesItem);
  };
  const removeFromDeletedNotes = (notesItem: NoteType) => {
    const updatedDeletedNotes = deletedNotes.filter(
      (item: NoteType) => item !== notesItem
    );
    setDeletedNotes(updatedDeletedNotes);
  };

  return (
    <Tooltip title="Delete Forever">
      <IconButton onClick={() => handleDeleteForeverButton(notesItem)}>
        <DeleteForeverIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteForeverNoteButton;
